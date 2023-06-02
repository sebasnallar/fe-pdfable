import { Text, Container, Textarea, VStack, useToast, Box } from '@chakra-ui/react';
import CustomButton from '@/components/CustomButton';
import { useState } from 'react';
import axios from 'axios';

const MAX_CHAR_LIMIT = 500;

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [generatedHtml, setGeneratedHtml] = useState('');
  const [charCount, setCharCount] = useState(0);
  const toast = useToast();

  const handleTextareaChange = (e: any) => {
    const input = e.target.value;
    if (input.length <= MAX_CHAR_LIMIT) {
      setPrompt(input);
      setCharCount(input.length);
    }
  }

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('/api/generate-text', { prompt });
      console.log(response.data);
      if (response.data.text) {
        setGeneratedHtml(response.data.text);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Error.",
        description: "An error occurred while generating text.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }

  return (
    <>
      <Container maxW="container.lg">
        <VStack spacing={6} align="center">
          <Text textStyle="gradient" fontSize="6xl" textAlign="center">
            gpt-pdfable
          </Text>
          <Textarea
            placeholder="Enter what your essay will be about..."
            size="lg"
            borderColor="gray.400"
            boxShadow="md"
            value={prompt}
            onChange={handleTextareaChange}
            maxLength={MAX_CHAR_LIMIT}
            required
          />
          <Text color={charCount > MAX_CHAR_LIMIT ? "red" : "black"}>
            {charCount}/{MAX_CHAR_LIMIT} characters
          </Text>
          <CustomButton variant='gradient' isLoading={isLoading} onClick={handleClick} isDisabled={!prompt.trim() || charCount > MAX_CHAR_LIMIT}>
            Submit
          </CustomButton>
          <div className="generated-html-wrapper" dangerouslySetInnerHTML={{ __html: generatedHtml }} />
        </VStack>
      </Container>
    </>
  )
}

import { Text, Container, Textarea, VStack } from '@chakra-ui/react'
import CustomButton from '@/components/CustomButton'
import { useState } from 'react'


export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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
          />
          <CustomButton isLoading={isLoading} onClick={handleClick}>
            Submit
          </CustomButton>
        </VStack>
      </Container>
    </>
  )
}

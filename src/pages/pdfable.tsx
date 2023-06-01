import { Container, VStack, Text } from "@chakra-ui/react"

const Pdfable = () => {
  return (
    <Container maxW="container.lg">
      <VStack spacing={6} align="center">
        <Text textStyle="gradient" fontSize="6xl" textAlign="center">
          let&apos;s pdf it together!
        </Text>
      </VStack>
    </Container>
  )
}

export default Pdfable;
import { Container, VStack, Text } from "@chakra-ui/react";

const About = () => {

  return (
    <Container maxW="container.lg">
      <VStack spacing={6} align="center">
        <Text textStyle="gradient" fontSize="6xl" textAlign="center">
          who am i
        </Text>
      </VStack>
    </Container>

  )
}

export default About;
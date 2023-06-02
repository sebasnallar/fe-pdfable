import { Container, VStack, Text, Box, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const About = () => {
  const fontSize = useBreakpointValue({ base: "md", md: "xl" });
  const spacing = useBreakpointValue({ base: 4, md: 6 });

  return (
    <Container maxW="container.lg">
      <VStack spacing={spacing} align="center">
        <Text textStyle="gradient" fontSize="6xl" textAlign="center">
          who am i?
        </Text>
        <MotionBox
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Text fontSize={fontSize}>
            technically, a software engineer
          </Text>
        </MotionBox>
        <MotionBox
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Text fontSize={fontSize}>
            only twenty years old, but my passion runs deep
          </Text>
        </MotionBox>
        <MotionBox
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Text fontSize={fontSize}>
            my craft extends beyond code, i also enjoy writing novels!
          </Text>
        </MotionBox>
        <MotionBox
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <Text fontSize={fontSize}>
            a firm believer in hard work, always pushing my boundaries, trying to relocate!
          </Text>
        </MotionBox>
        <MotionBox
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Text fontSize={fontSize}>
            currently, i'm expanding my knowledge at university, majoring in software engineering.
          </Text>
        </MotionBox>
      </VStack>
    </Container>
  )
}

export default About;

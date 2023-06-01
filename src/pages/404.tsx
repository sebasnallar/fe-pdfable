import { Flex, Text } from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Flex direction="column" justify="center" align="center" height="80vh">
      <Text textStyle="gradient" fontSize="6xl" textAlign="center">
        404
      </Text>
      <Text textStyle="gradient" fontSize="2xl" textAlign="center">
        Page not found
      </Text>
    </Flex>
  );
};

export default NotFound;

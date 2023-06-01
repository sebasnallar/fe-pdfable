import { Box, Flex } from '@chakra-ui/react';
import Navbar from './Navbar';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex direction="column" align="center" justify="flex-start" minHeight="100vh">
      <Navbar />
      <Box as="main" flex="1" width="100%">
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;

import { Flex, Box } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Text } from '@chakra-ui/react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/pdfable', label: 'Pdfable' },
];

const Navbar = () => {
  const { pathname } = useRouter();
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bgGradient="linear(to-b, transparent, transparent)"
      color="black"
      position="sticky"
      top="0"
      zIndex="10"
      width="100%"
    >
      <Box display="flex" alignItems="center" justifyContent="center" width="100%">
        {links.map(({ href, label }, index) => (
          <Box key={index} mx="4">
            <Link href={href}>
                <Text
                  textDecor={pathname === href ? 'underline' : ''}
                  textStyle={pathname === href ? 'glow' : ''}
                >
                  {label}
                </Text>
            </Link>
          </Box>
        ))}
      </Box>
    </Flex>
  );
};

export default Navbar;

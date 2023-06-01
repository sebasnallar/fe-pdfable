import { Flex, Box } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Text } from '@chakra-ui/react';
import { css } from '@emotion/react';

const links = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/pdfable', label: 'pdfable' },
];

const underlineAnimation = css`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px; // adjust this to increase or decrease the space between the text and underline
    left: 0;
    background-color: currentColor;
    transition: width 0.3s;
  }
  &:hover::after {
    width: 100%;
  }
`;

const activeLinkStyle = css`
  ${underlineAnimation}
  &::after {
    width: 100%;
  }
`;

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
                css={pathname === href ? activeLinkStyle : underlineAnimation}
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

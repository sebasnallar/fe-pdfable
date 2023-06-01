import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "'DM Sans', sans-serif",
        color: 'black',
        bg: 'white',
      },
    },
  },
  textStyles: {
    glow: {
      textShadow: '0 0 80px rgba(192, 219, 255, 0.35), 0 0 32px rgba(65, 120, 255, 0.24)',
    },
    gradient: {
      bgGradient: 'linear(to-r, pink.500, purple.500)',
      bgClip: 'text',
    },
  },
});

export default theme;

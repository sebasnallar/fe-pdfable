import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

interface CustomButtonProps extends ButtonProps {
  variant?: 'primary' | 'semiTransparent' | 'gradient' | 'gradientBorder';
}

const CustomButton: React.FC<CustomButtonProps> = ({ variant = 'primary', children, ...props }) => {
  let buttonStyles;

  switch (variant) {
    case 'semiTransparent':
      buttonStyles = {
        backgroundColor: 'rgba(111, 76, 255, 0.15)',
        borderColor: 'rgba(111, 76, 255, 0.25)',
        color: 'rgba(255, 255, 255, 0.8)',
        _hover: {
          backgroundColor: 'rgba(111, 76, 255, 0.35)',
          borderColor: 'rgba(111, 76, 255, 0.5)',
          color: 'rgba(255, 255, 255, 0.9)',
          boxShadow: '0px 0px 20px rgba(111, 76, 255, 0.5)',
        },
      };
      break;
    case 'gradient':
      buttonStyles = {
        bgGradient: 'linear(to-r, teal.500, purple.500)',
        borderColor: 'transparent',
        color: 'white',
        _hover: {
          boxShadow: '0px 0px 20px rgba(111, 76, 255, 0.5)',
        },
      };
      break;
    case 'gradientBorder':
      buttonStyles = {
        color: 'white',
        border: '2px double transparent',
        bgGradient: 'linear(rgb(13, 14, 33), rgb(13, 14, 33)), radial-gradient(circle at left top, teal.500, purple.500)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        _hover: {
          boxShadow: '0px 0px 20px rgba(111, 76, 255, 0.5)',
        },
      };
      break;
    default:
      buttonStyles = {
        backgroundColor: 'rgb(111, 76, 255)',
        borderColor: 'rgb(111, 76, 255)',
        color: 'white',
        _hover: {
          boxShadow: '0px 0px 20px rgba(111, 76, 255, 0.5)',
        },
      };
  }

  return (
    <ChakraButton
      fontFamily="'DM Sans', sans-serif"
      fontSize='18px'
      padding='12px 32px'
      borderRadius='50px'
      transition='all 0.3s ease'
      {...buttonStyles}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

export default CustomButton;

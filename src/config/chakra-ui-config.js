import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: '320px',
  '2sm': '550px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
};

const theme = extendTheme(
  {
    colors: {
      solid_purple: {
        100: '#A044FF',
      },
      pure_green: {
        100: '#00CD96',
        200: '#00BE8B',
      },
      main_red: {
        100: '#FF4F19',
      },
    },
    breakpoints,
  },
);

export { theme };

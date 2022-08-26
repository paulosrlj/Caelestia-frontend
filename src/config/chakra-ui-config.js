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
        darker_purple: '#6f30ad',
      },
      pure_green: {
        100: '#00CD96',
        200: '#00BE8B',
      },
      main_red: {
        100: '#EB5757',
        darker_red: '#F44F4F',
      },
      gray: {
        subtitle: '#BDBDBD',
        locked: '#979797',
        progressBar: '#C4C4C4',
      },
      black: {
        achievementModalTitle: '#2F2E41',
      },
      blue: {
        infoButton: '#46B1D2',
        infoButtonDarker: '#208FB2',
      },
    },
    breakpoints,
  },
);

export { theme };

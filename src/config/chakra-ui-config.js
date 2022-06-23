import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    solid_purple: {
      100: '#A044FF',
    },
    pure_green: {
      100: '#00CD96',
    },
    main_red: {
      100: '#FF4F19',
    },
  },
});

export { theme };

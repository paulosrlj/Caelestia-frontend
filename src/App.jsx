import './App.css';

import { ChakraProvider, Text } from '@chakra-ui/react';
import { theme } from './config/chakra-ui-config';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Text color="solid_purple.100">Teste</Text>
    </ChakraProvider>
  );
}

export default App;

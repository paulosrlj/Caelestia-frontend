import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './config/chakra-ui-config';
// import CreateModule from './pages/CreateModule';
// import MenuModal from './layout/MenuModal';
import Achievements from './pages/Achievements';

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Text color="solid_purple.100">Teste</Text> */}
      {/* <CreateModule /> */}
      {/* <MenuModal /> */}
      <Achievements />
    </ChakraProvider>
  );
}

export default App;

/* eslint-disable no-unused-vars */
import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './config/chakra-ui-config';
// import CreateModule from './pages/CreateModule';
// import MenuModal from './layout/MenuModal';
// import Achievements from './pages/Achievements';
import SelectModule from './pages/SelectModule';
import Home from './pages/Home';
import Ranking from './pages/Ranking';

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Text color="solid_purple.100">Teste</Text> */}
      {/* <CreateModule /> */}
      {/* <MenuModal /> */}
      {/* <Achievements /> */}
      {/* <SelectModule /> */}
      {/* <Home /> */}
      <Ranking />
    </ChakraProvider>
  );
}

export default App;

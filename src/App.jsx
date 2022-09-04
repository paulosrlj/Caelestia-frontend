/* eslint-disable no-unused-vars */
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { CreateModuleProvider } from './context/CreateModuleContext';

import { theme } from './config/chakra-ui-config';
import CreateModule from './pages/CreateModule';
import CreateTheoricLesson from './pages/CreateLesson/CreateTheoricLesson';
// import MenuModal from './layout/MenuModal';
// import Achievements from './pages/Achievements';
import SelectModule from './pages/SelectModule';
import Home from './pages/Home';
import Ranking from './pages/Ranking';
import ModalMenu from './layout/MenuModal';

import CreateLesson from './pages/CreateLesson';
// import AddAchievement from './pages/CreateModule/CreateLesson/AddAchievement';
import LessonChoice from './pages/CreateLesson/LessonChoicePage';
import CustomToastContainer from './components/Toast/CustomToastContainer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ModalMenu />
      {/* <Text color="solid_purple.100">Teste</Text> */}
      {/* <MenuModal /> */}
      {/* <Achievements /> */}
      {/* <SelectModule /> */}
      {/* <Home /> */}
      {/* <Ranking /> */}

      <CreateModuleProvider>
        <Routes>

          {/*
          <Route path="/admin/choice_question_description/:questionType" element=
          {<QuestionDescription />} />
           */}

          <Route path="/admin/createPraticalLesson" element={<CreateLesson />} />
          <Route path="/admin/createTheoricLesson" element={<CreateTheoricLesson />} />
          <Route path="/admin/createLesson" element={<LessonChoice />} />
          <Route path="/admin/createModule" element={<CreateModule />} />

          <Route path="*" element={(<h1>not found</h1>)} />
        </Routes>
      </CreateModuleProvider>

      <CustomToastContainer />
    </ChakraProvider>
  );
}

export default App;

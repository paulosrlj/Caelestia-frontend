/* eslint-disable no-unused-vars */
import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { theme } from './config/chakra-ui-config';
import CreateModule from './pages/CreateModule';
import CreateModuleName from './pages/CreateModule/CreateModuleName';
// import MenuModal from './layout/MenuModal';
// import Achievements from './pages/Achievements';
import SelectModule from './pages/SelectModule';
import Home from './pages/Home';
import Ranking from './pages/Ranking';
import ModalMenu from './layout/MenuModal';

import CreateLesson from './pages/CreateModule/CreateLesson';
import LessonChoice from './pages/CreateModule/LessonChoice';
import ChoiseQuestion from './pages/CreateModule/ChoiceQuestion/ChoiceQuestion';
import CreateQuestionType from './pages/CreateModule/CreateQuestionType';
import ImageQuestion from './pages/CreateModule/ImageQuestion/ImageQuestion';
import CreateTheoricLesson from './pages/CreateModule/CreateTheoricLesson';
import QuestionDescription from './pages/CreateModule/QuestionDescription';

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

      <Routes>

        <Route path="/admin/create_module" element={<CreateModule />} />
        <Route path="/admin/create_module_name" element={<CreateModuleName />} />
        <Route path="/admin/create_lesson" element={<CreateLesson />} />
        <Route path="/admin/lesson_choice" element={<LessonChoice />} />
        <Route path="/admin/question_type" element={<CreateQuestionType />} />
        <Route path="/admin/choice_question_description/:questionType" element={<QuestionDescription />} />
        <Route path="/admin/choice_question" element={<ChoiseQuestion />} />
        <Route path="/admin/image_question" element={<ImageQuestion />} />
        <Route path="/admin/create_theoric_lesson" element={<CreateTheoricLesson />} />
        <Route path="*" element={(<h1>not found</h1>)} />

      </Routes>
    </ChakraProvider>
  );
}

export default App;

import {
  Flex, Text, Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import AppWrapper from '../../../wrapper/AppWrapper';
import Question from './Question';

// React toast
import CustomToastContainer from '../../../components/Toast/CustomToastContainer';
import 'react-toastify/dist/ReactToastify.css';
import uploadImageCallBack from '../../../util/uploadImageCallback';

function ImageQuestion() {
  const [images, setImages] = useState({
    1: [],
    2: [],
    3: [],
    4: [],
  });

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [, setAnswers] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
  });

  const questions = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ];

  const toggleCorrectAnwser = (id) => {
    setSelectedAnswer(id);
  };

  const handleImagesUpload = async () => {
    Object.keys(images).forEach(async (key) => {
      await toast.promise(
        uploadImageCallBack(images[key][0].file, 'praticalLessonImage'),
        {
          pending: 'Fazendo upload...',
          success: 'Upload de foto concluído com sucesso',
          error: 'Ocorreu um problema.',
        },
      );
    });
  };

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      w="100vw"
      boxShadow="1px 1px 3px black"
      border="1px 1px 1px black"
    >
      <Text fontSize="26px" my="10px">Crie as alternativas para a lição prática:</Text>

      <Flex
        justifyContent="space-evenly"
        alignItems="center"
        flexWrap="wrap"
        w="60%"
        h="600px"
        mt="30px"
        p="10px"
        overflowY="auto"
        border="1px solid black"
        boxShadow="2px 1px 2px black"
      >
        {questions.map((q) => (
          <Question
            isCorrect={q.id === selectedAnswer}
            key={q.id}
            id={q.id}
            toggleCorrectAnwser={toggleCorrectAnwser}
            setAnswers={setAnswers}
            setImages={setImages}
          />
        ))}

      </Flex>

      <Flex w="50%" justifyContent="space-evenly">

        <Button
          color="white"
          backgroundColor="main_red.100"
          _hover={{ backgroundColor: 'main_red.darker_red' }}
          my="20px"
        >
          Voltar
        </Button>
        <Button
          color="white"
          backgroundColor="pure_green.100"
          _hover={{ backgroundColor: 'pure_green.200' }}
          my="20px"
          onClick={handleImagesUpload}
        >
          Salvar

        </Button>
      </Flex>
      <CustomToastContainer />
    </Flex>
  );
}

export default AppWrapper(ImageQuestion);

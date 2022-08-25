import {
  Flex, Text, Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppWrapper from '../../../wrapper/AppWrapper';
import Question from './Question';

function CreateLesson() {
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
      <Text fontSize="26px">Crie as alternativas para a lição prática:</Text>

      <Flex
        flexDir="column"
        w="60%"
        maxH="350px"
        mt="30px"
        overflowY="auto"
      >
        {questions.map((q) => (
          <Question
            isCorrect={q.id === selectedAnswer}
            key={q.id}
            id={q.id}
            toggleCorrectAnwser={toggleCorrectAnwser}
            setAnswers={setAnswers}
          />
        ))}

      </Flex>

      <Flex w="50%" justifyContent="space-evenly">
        <Link to="/admin/choice_question_description/choice">

          <Button
            color="white"
            backgroundColor="main_red.100"
            _hover={{ backgroundColor: 'main_red.darker_red' }}
            my="20px"
          >
            Voltar

          </Button>
        </Link>

        <Button
          color="white"
          backgroundColor="pure_green.100"
          _hover={{ backgroundColor: 'pure_green.200' }}
          my="20px"
        >
          Salvar

        </Button>
      </Flex>

    </Flex>
  );
}

export default AppWrapper(CreateLesson);

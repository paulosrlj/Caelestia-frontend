import axios from 'axios';
import { Flex, Text, Button } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Question from './Question';
import { Context } from '../../../context/CreateModuleContext';

function CreateLesson() {
  const history = useNavigate();

  const notifyError = (message) => toast.error(message);
  const { praticalLesson, setPraticalLesson, setAllModuleLessons } = useContext(Context);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
  });

  const questions = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  const validateQuestions = () => {
    let valid = true;
    Object.keys(answers).forEach((key) => {
      if (!answers[key]) valid = true;
    });

    return valid;
  };

  const toggleCorrectAnwser = (id) => {
    setSelectedAnswer(id);
  };

  const handleQuestionCreation = () => {
    if (!validateQuestions()) {
      notifyError('Não pode haver questões vazias!');
    } else {
      setPraticalLesson((oldState) => {
        const newState = {
          ...oldState,
          alternative1: answers[1],
          alternative2: answers[2],
          alternative3: answers[3],
          alternative4: answers[4],
          correctAlternative: selectedAnswer,
        };

        setPraticalLesson(newState);
      });

      console.log(answers);
      console.log(praticalLesson);
      axios.post(
        `${process.env.REACT_APP_REQ_URL}/praticalLessons`,
        praticalLesson,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ).then((response) => {
        console.log(response);
        setAllModuleLessons((oldState) => [...oldState, response.data]);
        history('/admin/create_lesson');
      }).catch((error) => {
        console.log(praticalLesson);
        notifyError(error.response.data.validationErrors[0]);
      });
    }
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

      <Flex flexDir="column" w="60%" maxH="350px" mt="30px" overflowY="auto">
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
          onClick={handleQuestionCreation}
        >
          Salvar
        </Button>
      </Flex>
    </Flex>
  );
}

export default CreateLesson;

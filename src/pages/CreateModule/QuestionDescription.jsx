import { Button, Flex, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Context } from '../../context/CreateModuleContext';
import CreateLessonForm from '../../layout/CreateLessonForm';

function QuestionDescription() {
  const {
    setPraticalLesson,
  } = useContext(Context);

  const { questionType } = useParams();

  const handleChoiceQuestion = (e) => {
    const { value, name } = e.target;

    setPraticalLesson((oldState) => {
      const newState = { ...oldState };
      newState[name] = value;
      return newState;
    });
  };

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      w="100vw"
    >
      <Text my="20px" fontSize="26px">Escreva as informações da questão:</Text>

      <CreateLessonForm handleFormChanges={handleChoiceQuestion} />

      <Flex w="50%" justifyContent="space-evenly">
        <Link to="/admin/question_type">
          <Button
            color="white"
            backgroundColor="main_red.100"
            _hover={{ backgroundColor: 'main_red.darker_red' }}
            my="20px"
          >
            Voltar
          </Button>
        </Link>
        <Link to={questionType === 'image' ? '/admin/image_question' : '/admin/choice_question'}>
          <Button
            color="white"
            backgroundColor="pure_green.100"
            _hover={{ backgroundColor: 'pure_green.200' }}
            my="20px"
          >
            Prosseguir
          </Button>
        </Link>

      </Flex>
    </Flex>
  );
}

export default QuestionDescription;

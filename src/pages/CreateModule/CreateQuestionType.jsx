import { Flex, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function CreateQuestionType() {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      w="100vw"
    >
      <Text my="20px" fontSize="26px">Escolha uma opção para adicionar a lição</Text>

      <Flex flexDir="column" w="30%" my="20px">
        <Link to="/admin/choice_question_description/choice">
          <Button
            color="white"
            backgroundColor="pure_green.100"
            _hover={{ backgroundColor: 'pure_green.200' }}
            my="10px"
            w="100%"
          >
            Alternativa com escrita
          </Button>
        </Link>
        <Link to="/admin/choice_question_description/image">
          <Button
            color="white"
            backgroundColor="blue.infoButton"
            _hover={{ backgroundColor: 'blue.infoButtonDarker' }}
            my="10px"
            w="100%"
          >

            Alternativa com imagens
          </Button>
        </Link>
        <Link to="/admin/lesson_choice">
          <Button
            color="white"
            backgroundColor="main_red.100"
            _hover={{ backgroundColor: 'main_red.darker_red' }}
            my="20px"
            w="100%"
          >
            Voltar
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

export default CreateQuestionType;

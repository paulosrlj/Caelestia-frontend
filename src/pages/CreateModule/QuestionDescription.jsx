import {
  Flex, Text, Button, Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function QuestionDescription() {
  const [, setQuestion] = useState('');
  const { questionType } = useParams();

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      w="100vw"
    >
      <Text my="20px" fontSize="26px">Escreva a pergunta da questão:</Text>

      <Flex flexDir="column" w="40%" my="20px">
        <Textarea
          isRequired
          w="100%"
          placeholder="Escreva aqui a pergunta da questão"
          onChange={setQuestion}
        />
      </Flex>

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

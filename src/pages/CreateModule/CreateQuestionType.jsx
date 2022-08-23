import { Flex, Text, Button } from '@chakra-ui/react';
import AppWrapper from '../../wrapper/AppWrapper';

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
        <Button
          color="white"
          backgroundColor="pure_green.100"
          _hover={{ backgroundColor: 'pure_green.200' }}
          my="10px"
        >
          Alternativa com escrita

        </Button>
        <Button
          color="white"
          backgroundColor="blue.infoButton"
          _hover={{ backgroundColor: 'blue.infoButtonDarker' }}
          my="10px"
        >
          Alternativa com imagens

        </Button>
      </Flex>
    </Flex>
  );
}

export default AppWrapper(CreateQuestionType);

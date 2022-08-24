import { Flex, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// import AppWrapper from '../../wrapper/AppWrapper';

function CreateModule() {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="space-around"
      h="100vh"
      w="100vw"
    >
      <Text fontSize="26px">Escolha uma opção para adicionar a lição</Text>

      <Flex flexDir="column" w="30%">
        <Button
          color="white"
          backgroundColor="pure_green.100"
          _hover={{ backgroundColor: 'pure_green.200' }}
          my="20px"
        >
          <Link to="/admin/create_module_name">Criar módulo</Link>

        </Button>
        <Button
          color="white"
          backgroundColor="blue.infoButton"
          _hover={{ backgroundColor: 'blue.infoButtonDarker' }}
          my="20px"
        >
          Editar módulo

        </Button>
      </Flex>
    </Flex>
  );
}

export default CreateModule;

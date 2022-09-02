import { Flex, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function CreateModule() {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      w="100vw"
    >
      <Text fontSize="26px" mb="20px">Escolha uma opção para adicionar a lição</Text>

      <Flex flexDir="column" w="30%">
        <Link to="/admin/create_module_name">
          <Button
            color="white"
            backgroundColor="pure_green.100"
            _hover={{ backgroundColor: 'pure_green.200' }}
            my="20px"
            w="100%"
          >
            Criar módulo

          </Button>
        </Link>
        <Link to="/admin/ask_module_id">
          <Button
            color="white"
            backgroundColor="solid_purple.100"
            _hover={{ backgroundColor: 'solid_purple.darker_purple' }}
            w="100%"
          >
            Adicionar lição a módulo já existente

          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

export default CreateModule;

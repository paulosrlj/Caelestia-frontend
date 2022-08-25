import {
  Flex, Text, Button, Input,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

function CreateModuleName() {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      w="100vw"
    >
      <Text fontSize="26px">Escolha um nome para o módulo</Text>

      <Flex flexDir="column" w="30%" mt="30px">
        <Input required placeholder="Escolha um nome para o módulo" />
        <Link to="/admin/create_lesson">
          <Button
            color="white"
            backgroundColor="pure_green.100"
            _hover={{ backgroundColor: 'pure_green.200' }}
            my="20px"
            w="100%"
          >
            Prosseguir

          </Button>
        </Link>
        <Link to="/admin/create_module">
          <Button
            color="white"
            backgroundColor="main_red.100"
            _hover={{ backgroundColor: 'main_red.darker_red' }}
            w="100%"
          >
            Voltar

          </Button>
        </Link>
      </Flex>

    </Flex>
  );
}

export default CreateModuleName;

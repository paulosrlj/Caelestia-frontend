import {
  Flex, Text, Button, Input,
} from '@chakra-ui/react';
import { BsFillTrashFill } from 'react-icons/bs';

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
        <Button
          color="white"
          backgroundColor="pure_green.100"
          _hover={{ backgroundColor: 'pure_green.200' }}
          my="20px"
        >
          <Link to="/admin/create_lesson">Prosseguir</Link>

        </Button>
      </Flex>

      <Flex cursor="pointer" mt="20px" borderRadius="50%" p="15px" backgroundColor="red.500">
        <BsFillTrashFill size={50} />
      </Flex>
    </Flex>
  );
}

export default CreateModuleName;

import { SearchIcon } from '@chakra-ui/icons';
import {
  Flex, Input, IconButton, Heading, Image, Text, Button,
} from '@chakra-ui/react';

import { HiOutlineUserGroup } from 'react-icons/hi';
import { FaChalkboardTeacher } from 'react-icons/fa';

function Classroom() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >

      <Flex
        w="70%"
        h="80%"
        justifyContent="space-evenly"
        alignItems="center"
        flexDir="column"
      >
        <Heading
          color="solid_purple.100"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          fontFamily="'Inter', sans-serif"
          fontWeight="light"
        >
          Salas de aula

        </Heading>
        <Flex w="100%" alignItems="center" justifyContent="center">
          <Input
            w="40%"
            placeholder="Procurar turma por código"
            type="text"
            my="5px"
            required
            p="10px"
            mr="10px"
            borderWidth="1px"
            borderStyle="solid"
            borderColor="solid_purple.100"
          />

          <IconButton
            // colorScheme="blue"
            aria-label="Search database"
            icon={<SearchIcon p="2px" h="7" w="7" />}
            fontSize="20px"
            backgroundColor="pure_green.100"
            transition="all 0.3s ease"
            _hover={{ bgColor: 'pure_green.200' }}
            _active={{ transform: 'scale(0.9)' }}
            color="white"
          />
        </Flex>

        <Flex
          w="70%"
          h="200px"
          borderWidth="1px"
          borderStyle="solid"
          borderColor="#C4C4C4"
          borderRadius="5px"
          backgroundColor="solid_purple.100"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Flex w="50%" justifyContent="space-around" alignItems="center">
            <Flex w="100px" flexDir="column" alignItems="center" justifyContent="center">
              <Image
                borderRadius="50px"
                // w="100%"
                h="100px"
                src="https://picsum.photos/536/354"
                alt="Teacher picture"
                mb="10px"
              />
              <Text fontWeight="light" fontSize="20px" color="white">Física I</Text>
            </Flex>

            <Flex flexDir="column" alignItems="center" justifyContent="space-evenly">
              <Flex w="100%" alignItems="center">
                <FaChalkboardTeacher fill="white" color="white" size={20} />
                <Text ml="10px" color="white" fontWeight="hairline">Fábio Bala</Text>
              </Flex>
              <Flex w="100%" alignItems="center">
                <HiOutlineUserGroup fill="white" color="white" size={20} />
                <Text color="white" ml="10px" fontWeight="hairline">17 alunos</Text>
              </Flex>

              <Text fontSize="22px" mt="10px" color="white" ml="10px" fontWeight="hairline">#asf8*sad</Text>
            </Flex>
          </Flex>

          <Flex w="30%">
            <Button
              color="white"
              backgroundColor="pure_green.100"
              transition="all 0.3s ease"
              _hover={{ bgColor: 'pure_green.200' }}
              _active={{ transform: 'scale(0.9)' }}
              w="100%"
            >
              Entrar
            </Button>
          </Flex>
        </Flex>
      </Flex>

    </Flex>
  );
}

export default Classroom;

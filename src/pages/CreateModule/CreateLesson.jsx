import {
  Flex, Text, Button,
} from '@chakra-ui/react';
import { BiTestTube } from 'react-icons/bi';
import { BsFillTrashFill } from 'react-icons/bs';
import { GiOpenBook } from 'react-icons/gi';

import { Link } from 'react-router-dom';

function CreateLesson() {
  const lessons = [
    { name: 'Astronomia antiga', lessonType: 'pratical' },
    { name: 'Astronomia antiga', lessonType: 'theoric' },
    { name: 'Astronomia antiga', lessonType: 'pratical' },
    { name: 'Astronomia antiga', lessonType: 'theoric' },
    { name: 'Astronomia antiga', lessonType: 'pratical' },
  ];

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      w="100vw"
    >
      <Text fontSize="26px">Crie lições e adicione uma medalha</Text>

      <Flex
        flexDir="column"
        w="60%"
        maxH="350px"
        mt="30px"
        overflowY="auto"
      >

        {lessons.map((l) => (
          <Flex
            w="100%"
            p="10px"
            backgroundColor="solid_purple.100"
            borderRadius="5px"
            my="10px"
            alignItems="center"
          >
            {l.lessonType === 'theoric' ? (
              <GiOpenBook size={20} color="white" />
            ) : (
              <BiTestTube size={20} color="white" />
            )}
            <Text color="white" ml="10px">{l.name}</Text>
          </Flex>
        ))}

      </Flex>

      <Flex w="50%" justifyContent="space-evenly">
        <Link to="/admin/lesson_choice">
          <Button
            color="white"
            backgroundColor="blue.infoButton"
            _hover={{ backgroundColor: 'blue.infoButtonDarker' }}
            my="20px"
          >
            Criar lição
          </Button>
        </Link>
        <Button
          color="white"
          backgroundColor="main_red.100"
          _hover={{ backgroundColor: 'main_red.darker_red' }}
          my="20px"
        >
          Adicionar medalha

        </Button>
        <Button
          color="white"
          backgroundColor="pure_green.100"
          _hover={{ backgroundColor: 'pure_green.200' }}
          my="20px"
        >
          Salvar

        </Button>
      </Flex>

      <Flex cursor="pointer" mt="20px" borderRadius="50%" p="15px" backgroundColor="red.500">
        <BsFillTrashFill color="white" size={40} />
      </Flex>
    </Flex>
  );
}

export default CreateLesson;

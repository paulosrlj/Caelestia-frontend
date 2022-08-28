import { Flex, Heading } from '@chakra-ui/react';
import IndividualLesson from './IndividualLesson.jsx';

function SelectLesson() {
  const modules = [
    {
      id: 1,
      name: 'Astronomia antiga',
      lessonType: 'theoric',
      completed: false,
    },
    {
      id: 2,
      name: 'Astronomia antiga',
      lessonType: 'pratical',
      completed: false,
    },
    {
      id: 3,
      name: 'Astronomia antiga',
      lessonType: 'theoric',
      completed: true,
    },
    {
      id: 4,
      name: 'Astronomia antiga',
      lessonType: 'theoric',
      completed: false,
    },
    {
      id: 5,
      name: 'Astronomia antiga',
      lessonType: 'pratical',
      completed: true,
    },

  ];

  return (

    <Flex w="100%" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        w="80%"
        h="100%"
        flexDir="column"
        justifyContent="center"

      >
        <Heading
          fontWeight="bold"
          color="pure_green.100"
          textAlign="center"
          mb="50px"
        >
          Seleção de lição

        </Heading>

        <Flex
          p="5px"
          border="1px solid black"
          boxShadow="1px 1px 3px black"
          borderRadius="5px"
          flexDir="column"
          overflowY="auto"
          h="400px"
        >
          {modules.map((m) => (
            <IndividualLesson key={m.id} data={m} />
          ))}
        </Flex>

      </Flex>

    </Flex>
  );
}

export default SelectLesson;

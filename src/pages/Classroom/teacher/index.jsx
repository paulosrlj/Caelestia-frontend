import { SearchIcon } from '@chakra-ui/icons';
import {
  Flex, IconButton,
  Input, Tab, TabList, TabPanel, TabPanels, Tabs,
} from '@chakra-ui/react';

import ClassroomBox from './ClassroomBox';
import CreateClassroomForm from './CreateClassroomForm';

function ClassroomTeacher() {
  const classroomData = [
    {
      name: 'Física I',
      id: '1',
      classroomCode: '#8182dha',
      playersAmount: 21,
      teacher: {
        name: 'Fábio bala',
        profileImageUrl: 'https://picsum.photos/536/354',
      },
    },
    {
      name: 'Física II',
      id: '2',
      classroomCode: '#124adh',
      playersAmount: 21,
      teacher: {
        name: 'Fábio bala',
        profileImageUrl: 'https://picsum.photos/536/354',
      },
    },
    {
      name: 'Física II',
      id: '3',
      classroomCode: '#124adh',
      playersAmount: 21,
      teacher: {
        name: 'Fábio bala',
        profileImageUrl: 'https://picsum.photos/536/354',
      },
    },
    {
      name: 'Física II',
      id: '4',
      classroomCode: '#124adh',
      playersAmount: 21,
      teacher: {
        name: 'Fábio bala',
        profileImageUrl: 'https://picsum.photos/536/354',
      },
    },
  ];

  const fetchedClass = {
    name: 'Física II',
    id: '4',
    classroomCode: '#124adh',
    playersAmount: 21,
    teacher: {
      name: 'Fábio bala',
      profileImageUrl: 'https://picsum.photos/536/354',
    },
  };

  return (
    <Flex justifyContent="center" w="100vw" h="100vh">
      <Tabs mt="50px" w="70%" isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab w="50%">Turmas</Tab>
          <Tab w="50%">Criar turma</Tab>
          <Tab w="50%">Procurar turma</Tab>
        </TabList>
        <TabPanels>
          <TabPanel overflowY="scroll" h="500px">
            {classroomData.map((classroom) => (
              <ClassroomBox key={classroom.id} classroomData={classroom} />
            ))}
          </TabPanel>
          <TabPanel>
            <CreateClassroomForm />
          </TabPanel>
          <TabPanel>
            <Flex mb="20px" w="100%" alignItems="center" justifyContent="center">
              <Input
                w="40%"
                placeholder="Procurar turma por nome"
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
            <ClassroomBox classroomData={fetchedClass} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default ClassroomTeacher;

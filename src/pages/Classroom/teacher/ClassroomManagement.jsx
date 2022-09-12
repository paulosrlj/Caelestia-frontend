import {
  Flex, Tab, TabList, TabPanel, TabPanels, Tabs, useDisclosure,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import PlayerTable from '../PlayerTable/PlayerTable';
import CreateActivity from './CreateActivity';
import DisplayAllActivities from './DisplayAllActivities';

function ClassroomManagement() {
  const { classroomCode } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAchievementModalOpen = () => {
    onOpen();
  };

  console.log(classroomCode);

  const students = [
    {
      name: 'Paulo Sérgio',
      nickname: 'TogakureRyu',
      totalPoints: 2139,
    },
    {
      name: 'Joanna',
      nickname: 'Joene',
      totalPoints: 123,
    },
    {
      name: 'maria',
      nickname: 'Shiroe',
      totalPoints: 2139,
    },
  ];
  return (
    <Flex justifyContent="center" w="100vw" h="100vh">
      <Tabs mt="50px" w="70%" isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Discentes</Tab>
          <Tab>Atividades</Tab>
          <Tab>Criar atividade</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <PlayerTable
              players={students}
              isTeacher
              onClickPlayer={handleAchievementModalOpen}
              isOpen={isOpen}
              onClose={onClose}
            />
          </TabPanel>
          <TabPanel>
            <DisplayAllActivities />
          </TabPanel>
          <TabPanel>
            <Flex mb="20px" w="100%" alignItems="center" justifyContent="center">
              <CreateActivity />
            </Flex>

          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default ClassroomManagement;

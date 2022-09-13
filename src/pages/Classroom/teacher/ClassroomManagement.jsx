import {
  Flex, Tab, TabList, TabPanel, TabPanels, Tabs, useDisclosure,
} from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import PageBox from '../../../layout/MenuModal/Box';
import { BackIcon } from '../assets';
// import DisplayPlayerOrActivityModal from '../DisplayPlayerOrActivityModal';

import PlayerTable from '../PlayerTable/PlayerTable';
import CreateActivity from './CreateActivity';
import DisplayAllActivities from './DisplayAllActivities';

function ClassroomManagement() {
  const { classroomCode } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAchievementModalOpen = () => {
    onOpen();
  };

  // const { isOpen: isOpenPageBox, onOpen: onOpenPageBox, onClose: onClosePageBox } =
  // useDisclosure();

  // const handlePageBoxModalOpen = () => {
  //   onOpenPageBox();
  // };

  console.log(classroomCode);

  const students = [
    {
      name: 'Paulo Sérgio',
      nickname: 'TogakureRyu',
      totalPoints: 2139,
      ranking: 'Buraco negro',
    },
    {
      name: 'Joanna',
      nickname: 'Joene',
      totalPoints: 123,
      ranking: 'Buraco negro',
    },
    {
      name: 'maria',
      nickname: 'Shiroe',
      totalPoints: 2139,
      ranking: 'Buraco negro',
    },
  ];
  return (
    <Flex justifyContent="center" w="100vw" h="100vh">
      <Tabs mt="50px" w="70%" isFitted variant="enclosed">
        <TabList mb="1em" color="pure_green.100">
          <Tab>Discentes</Tab>
          <Tab>Atividades</Tab>
          <Tab>Criar atividade</Tab>
          <Tab>Opções</Tab>
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
          <TabPanel>
            <Flex mb="20px" w="100%" alignItems="center" justifyContent="center">
              <Flex h="100%" w="100%" justifyContent="center" alignItems="center">
                <Link to="/classroom/teacher/">
                  <PageBox image={BackIcon} title="Voltar" />
                </Link>

                {/* <DisplayPlayerOrActivityModal
                  modalType="players"
                  isOpen={isOpenPageBox}
                  onClose={onClosePageBox}
                /> */}
              </Flex>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default ClassroomManagement;

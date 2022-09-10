import { Flex, Image, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { HiOutlineUserGroup } from 'react-icons/hi';

import GenericText from '../../../components/Typography/GenericText';
import PageBox from '../../../layout/MenuModal/Box';

import { ActivityIcon, StudentsIcon, OutIcon } from '../assets';
import DisplayPlayerOrActivityModal from '../DisplayPlayerOrActivityModal';

function ClassroomPlayer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalType, setModalType] = useState('');

  const handleAchievementModalOpen = () => {
    onOpen();
  };

  const setModalToActivities = () => {
    setModalType('activities');
  };

  const setModalToPlayers = () => {
    setModalType('players');
  };

  const data = {
    classroomName: 'Astronomia antiga',
    description: 'Uma sala de aula para a disciplina de ciências com foco de astronomia',
    playersAmount: 21,
    classroomCode: '#2819hfas',
    teacher: {
      name: 'Fábio Bala',
      profileUrl: 'https://picsum.photos/536/354',
    },
    activities: [
      {
        id: 'a28r329fhfsa',
        name: 'Atv 1',
        dueDate: new Date().toLocaleDateString(),
      },
      {
        id: '3532fafgg',
        name: 'Atv 2',
        dueDate: new Date().toLocaleDateString(),
      },
    ],
  };

  const quitClassroom = () => {

  };

  return (
    <Flex
      w="100vw"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >

      <Flex
        w="100%"
        // justifyContent="center"
        alignItems="center"
        flexDir="column"
      >

        <Flex flexDir="column" w="80%" h="100vh">

          <Flex
            justifyContent="space-evenly"
            w="100%"
            h="300px"
            backgroundColor="solid_purple.100"
            borderBottomRadius="5px"
            p="10px"
          >
            <Flex
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              p="10px"
            >
              <Image
                w="150px"
                h="150px"
                borderRadius="50%"
                src={data.teacher.profileUrl}
                alt="Foto do professor como a foto de capa da sala de aula"
              />
              <GenericText
                color="white"
                fontSize="medium"
                margin={{ top: '20px' }}
              >
                {data.classroomName}
              </GenericText>
              <GenericText
                color="white"
                fontSize="small"
              >
                Professor:
                {' '}
                {data.classroomName}
              </GenericText>
            </Flex>

            <Flex
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              // backgroundColor="cadetblue"
              w="60%"
            >
              <GenericText color="white" margin={{ bottom: '10px' }}>{data.description}</GenericText>
              <GenericText color="white" margin={{ bottom: '10px' }}>
                <Flex alignItems="center">
                  <HiOutlineUserGroup style={{ marginRight: '5px' }} fill="white" color="white" size={20} />
                  {data.playersAmount}
                  {' '}
                  alunos
                </Flex>
              </GenericText>
              <GenericText color="white" margin={{ bottom: '10px' }}>
                <Flex>
                  Código da sala:
                  <GenericText margin={{ left: '5px' }} color="green">
                    {' '}
                    {data.classroomCode}
                  </GenericText>
                </Flex>

              </GenericText>
            </Flex>
          </Flex>

          <Flex h="100%" w="100%" justifyContent="center" alignItems="center">
            <PageBox
              image={ActivityIcon}
              title="Atividades"
              onClick={() => [setModalToActivities(), handleAchievementModalOpen()]}
            />
            <PageBox
              image={StudentsIcon}
              title="Alunos"
              onClick={() => [setModalToPlayers(), handleAchievementModalOpen()]}
            />
            <PageBox image={OutIcon} title="Sair da sala" onClick={quitClassroom} />

            <DisplayPlayerOrActivityModal modalType={modalType} isOpen={isOpen} onClose={onClose} />
          </Flex>
        </Flex>

      </Flex>

    </Flex>
  );
}

export default ClassroomPlayer;

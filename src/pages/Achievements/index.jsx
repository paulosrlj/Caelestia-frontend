import {
  Button, Flex, Heading, useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import AppWrapper from '../../wrapper/AppWrapper';
import AchievementBox from './AchievementBox';
import AchievementModal from './AchievementModal';

function Achievements() {
  const [selectedAc, setSelectedAc] = useState({
    id: null,
    name: null,
    description: null,
    level: null,
    lessonType: null,
    requisito: null,
    unlocked: null,
    imageUrl: null,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const achievementsData = [
    {
      id: 1,
      name: 'Conquista 1',
      description: 'Anything',
      level: 1,
      lessonType: 'PRATICA',
      requirement: 'Astronomia antiga',
      unlocked: false,
      imageUrl: 'https://picsum.photos/536/354',
    },
    {
      id: 2,
      name: 'Observador Celeste',
      description: '5% de xp em lições do tipo',
      level: 1,
      lessonType: 'PRATICA',
      requirement: 'Astronomia antiga',
      imageUrl: 'https://picsum.photos/536/354',
      unlocked: true,
    },
    {
      id: 3,
      name: 'Conquista 3',
      description: 'Anything',
      level: 1,
      lessonType: 'PRATICA',
      unlocked: false,
      imageUrl: 'https://picsum.photos/536/354',
      requirement: 'Astronomia antiga',
    },
    {
      id: 4,
      name: 'Conquista 4',
      description: 'Anything',
      level: 1,
      lessonType: 'PRATICA',
      unlocked: false,
      requirement: 'Astronomia antiga',
      imageUrl: 'https://picsum.photos/536/354',
    },
    {
      id: 5,
      name: 'Conquista 5',
      description: 'Anything',
      level: 1,
      lessonType: 'PRATICA',
      unlocked: true,
      requirement: 'Astronomia antiga',
      imageUrl: 'https://picsum.photos/536/354',
    },
    {
      id: 6,
      name: 'Conquista 6',
      description: 'Anything',
      level: 1,
      unlocked: false,
      lessonType: 'PRATICA',
      requirement: 'Astronomia antiga',
      imageUrl: 'https://picsum.photos/536/354',
    },
    {
      id: 7,
      name: 'Conquista 7',
      description: 'Anything',
      level: 1,
      lessonType: 'PRATICA',
      unlocked: false,
      requirement: 'Astronomia antiga',
      imageUrl: 'https://picsum.photos/536/354',
    },
    {
      id: 8,
      name: 'Conquista 8',
      description: 'Anything',
      level: 1,
      lessonType: 'PRATICA',
      unlocked: false,
      requirement: 'Astronomia antiga',
      imageUrl: 'https://picsum.photos/536/354',
    },
    {
      id: 9,
      name: 'Conquista 9',
      description: 'Anything',
      level: 1,
      unlocked: false,
      lessonType: 'PRATICA',
      requirement: 'Astronomia antiga',
      imageUrl: 'https://picsum.photos/536/354',
    },
  ];

  const handleAchievementSelected = (ac) => {
    if (ac.unlocked) {
      setSelectedAc({ ...ac });
    }
  };

  const handleAchievementModalOpen = () => {
    onOpen();
  };

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center" mb="20px">
      <Heading
        color="solid_purple.100"
        fontSize={[
          '20px',
          '22px',
          '27px',
        ]}
        mt="50px"
      >
        Conquistas
      </Heading>
      <Flex
        maxH={[
          '',
          '',
          '65vh',
        ]}
        flexWrap="wrap"
        justifyContent="center"
        mt="50px"
        w={[
          '100vw',
          '100vw',
          '100vw',
          '100vw',
          '80vw',
        ]}
        overflowY="auto"
      >
        {achievementsData.map((ac) => (
          <AchievementBox
            onClick={() => handleAchievementSelected(ac)}
            key={ac.id}
            unlocked={ac.unlocked}
            selected={ac.unlocked && ac.id === selectedAc.id}
          />
        ))}

      </Flex>
      <Flex>
        <Button
          bgColor="pure_green.100"
          color="white"
          mt="30px"
          mr="30px"
          p="20px "
          transition="all 0.3s ease"
          _hover={{ bgColor: 'pure_green.200' }}
        >
          Equipar
        </Button>
        <Button
          bgColor="blue.infoButton"
          color="white"
          mt="30px"
          p="20px "
          transition="all 0.3s ease"
          _hover={{ bgColor: 'blue.infoButtonDarker' }}
          onClick={handleAchievementModalOpen}
        >
          Informações
        </Button>
      </Flex>

      <AchievementModal isOpen={isOpen} onClose={onClose} achievementData={selectedAc} />
    </Flex>
  );
}

export default AppWrapper(Achievements);

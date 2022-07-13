import { Button, Flex, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import AppWrapper from '../../wrapper/AppWrapper';
import AchievementBox from './AchievementBox';

function Achievements() {
  const [selectedAc, setSelectedAc] = useState(null);

  const achievementsData = [
    {
      id: 1,
      name: 'AchievementName',
      description: 'Anything',
      level: 1,
      lessonType: 'PRATICA',
      requisito: 'Astronomia antiga',
      unlocked: false,
    },
    {
      id: 2,
      name: 'AchievementName',
      description: 'Anything',
      level: 1,
      lessonType: 'PRATICA',
      requisito: 'Astronomia antiga',
      unlocked: true,
    },
    {
      id: 3,
      name: 'AchievementName',
      description: 'Anything',
      level: 1,
      lessonType: 'PRATICA',
      unlocked: false,
      requisito: 'Astronomia antiga',
    },
    {
      id: 4,
      name: 'AchievementName',
      description: 'Anything',
      level: 1,
      lessonType: 'PRATICA',
      unlocked: false,
      requisito: 'Astronomia antiga',
    },
    {
      id: 5,
      name: 'AchievementName',
      description: 'Anything',
      level: 1,
      lessonType: 'PRATICA',
      unlocked: true,
      requisito: 'Astronomia antiga',
    },
    {
      id: 6,
      name: 'AchievementName',
      description: 'Anything',
      level: 1,
      unlocked: false,
      lessonType: 'PRATICA',
      requisito: 'Astronomia antiga',
    },
    {
      id: 7,
      name: 'AchievementName',
      description: 'Anything',
      level: 1,
      lessonType: 'PRATICA',
      unlocked: false,
      requisito: 'Astronomia antiga',
    },
    {
      id: 8,
      name: 'AchievementName',
      description: 'Anything',
      level: 1,
      lessonType: 'PRATICA',
      unlocked: false,
      requisito: 'Astronomia antiga',
    },
    {
      id: 9,
      name: 'AchievementName',
      description: 'Anything',
      level: 1,
      unlocked: false,
      lessonType: 'PRATICA',
      requisito: 'Astronomia antiga',
    },
  ];

  const handleAchievementModalOpen = (id, unlocked) => {
    if (unlocked) setSelectedAc(id);
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
        mt="30px"
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
            onClick={() => handleAchievementModalOpen(ac.id, ac.unlocked)}
            key={ac.id}
            unlocked={ac.unlocked}
            selected={ac.unlocked && ac.id === selectedAc}
          />
        ))}

      </Flex>
      <Button
        bgColor="pure_green.100"
        color="white"
        mt="30px"
        p="20px "
        transition="all 0.3s ease"
        _hover={{ bgColor: 'pure_green.200' }}
      >
        Salvar
      </Button>

    </Flex>
  );
}

export default AppWrapper(Achievements);

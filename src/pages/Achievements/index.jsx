import { Button, Flex, Heading } from '@chakra-ui/react';
import AppWrapper from '../../wrapper/AppWrapper';
import AchievementBox from './AchievementBox';

function Achievements() {
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
        <AchievementBox />
        <AchievementBox />
        <AchievementBox />
        <AchievementBox />
        <AchievementBox />
        <AchievementBox />
        <AchievementBox />
        <AchievementBox />
        <AchievementBox />
        <AchievementBox />
        <AchievementBox />

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

import {
  Flex, Heading, Image, Stat, StatArrow, StatGroup, StatHelpText, Text,
} from '@chakra-ui/react';
import MainPurpleTitle from '../../../../components/MainPurpleTitle';

function AchievementOnDisplay() {
  return (
    <Flex h="100vh" flexDir="column" alignItems="center">
      <MainPurpleTitle>Conquista em exibição</MainPurpleTitle>
      <Image
        my="30px"
        w={[
          '150px',
          '150px',
          '150px',
          '150px',
          '200px',
        ]}
        h={[
          '150px',
          '150px',
          '150px',
          '150px',
          '200px',
        ]}
        src="https://picsum.photos/536/354"
        borderRadius="50%"
        cursor="pointer"
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
      />
      <Heading
        fontWeight="normal"
        fontFamily="'Inter', sans-serif"
        fontSize="30px"
        color="black.achievementModalTitle"
        textAlign="center"
        background="linear-gradient(90deg, #3E3B41 0%, #564E5E 36.98%, #5B5264 67.19%, #604F6F 100%)"
        backgroundClip="text"
        textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      >
        Observador Celeste
      </Heading>

      <Text color="gray.subtitle" textAlign="center" mt="20px">
        Obtido ao completar o módulo de
        {' '}
        <Text
          display="inline"
          color="solid_purple.100"
        >
          Astronomia Antiga
        </Text>
      </Text>
      <Text color="gray.subtitle" textAlign="center" mt="5px">
        Obtido em:
        {' '}
        <Text
          display="inline"
          color="solid_purple.100"
        >
          23/04/2022
        </Text>
      </Text>

      <StatGroup my="30px">
        <Stat>
          <StatHelpText display="flex">
            <StatArrow type="increase" mx="10px" />
            <Text color="black">
              5% de xp em lições do tipo
              {' '}
              <Text
                color="solid_purple.100"
                display="inline"
              >
                Teórica
              </Text>
            </Text>
          </StatHelpText>
        </Stat>
      </StatGroup>
    </Flex>
  );
}

export default AchievementOnDisplay;

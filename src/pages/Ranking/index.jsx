import { Flex, Text } from '@chakra-ui/react';
import PlayerList from './PlayerList';
import RankingCrest from './RankingCrest';

function Ranking() {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      border="3px solid #C4C4C4"
      filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
      borderRadius="10px"
      mx="30px"
      mt="100px"
      h="80vh"
    >
      <RankingCrest />
      <Flex w="90%" mt="30px" flexDir="column" overflowY="scroll">
        <Flex
          w="100%"
          justifyContent="center"
          color="solid_purple.100"
          fontSize="18px"
          borderBottom="1px solid #C4C4C4"
          mb="10px"
        >
          <Text w="5%">#</Text>
          <Text w="50%">Nome</Text>
          <Text w="25%">Pontuação</Text>
          <Text w="20%">Pontos totais</Text>
        </Flex>

        <PlayerList />
      </Flex>
    </Flex>
  );
}

export default Ranking;

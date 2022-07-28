import { Flex, Image, Text } from '@chakra-ui/react';
import { Quasar } from './assets';

function RankingCrest() {
  return (
    <Flex
      flexDir="column"
      mt="-70px"
      position="static"
    >
      <Image src={Quasar} alt="" w="130px" h="130px" />
      <Text
        textAlign="center"
        color="solid_purple.100"
        fontFamily="'Inter', sans-serif"
        fontWeight="normal"
        fontSize="28px"
      >
        Quasar
      </Text>
      <Text color="pure_green.100">Horizonte de eventos</Text>
    </Flex>
  );
}

export default RankingCrest;

import { Flex, Image, Text } from '@chakra-ui/react';
import IndividualItem from './IndividualItem';

import InventoryIcon from './assets/inventory.png';

function Inventory() {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Flex justifyContent="center" alignItems="center">
        <Image
          w="50px"
          h="50px"
          borderRadius="50%"
          src={InventoryIcon}
          alt="Imagem que representa a conquista"
          mr="5px"
        />
        <Text
          color="solid_purple.100"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          fontFamily="'Inter', sans-serif"
          fontWeight="light"
          my="50px"
          fontSize="26px"
        >
          Inventário
        </Text>
      </Flex>

      <Flex
        flexWrap="wrap"
        // justifyContent="space-evenly"
        h="70vh"
        w="90vw"
        border="3px solid #C4C4C4"
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        borderRadius="10px"
        p="10px"
      >
        <IndividualItem />

      </Flex>
    </Flex>
  );
}

export default Inventory;

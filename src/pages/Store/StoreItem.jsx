/* eslint-disable no-unused-vars */
import {
  Flex, Image, Text, useDisclosure,
} from '@chakra-ui/react';

import CoinIcon from './assets/coin.png';
import BuyConfirmationModal from './BuyConfirmationModal';

function StoreItem({
  name, price, description, itemUrl,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAchievementModalOpen = () => {
    onOpen();
  };

  return (
    <Flex
      w="100%"
      backgroundColor="pure_green.100"
      my="10px"
      borderRadius="5px"
      p="10px"
      alignItems="center"
      pos="relative"
      transition="all 0.2s ease"
      _hover={{ backgroundColor: 'pure_green.200' }}
      _active={{ transform: 'scale(0.9)' }}
      cursor="pointer"
      onClick={handleAchievementModalOpen}
    >
      <Image
        w="50px"
        h="50px"
        borderRadius="50%"
        src={itemUrl}
        alt="Imagem que representa a conquista"
        mr="10px"
      />

      <Text color="white" fontSize="20px">{name}</Text>
      <Flex alignItems="center" pos="absolute" right="2%" top="15%">
        <Image mr="10px" w="50px" h="50px" src={CoinIcon} alt="Virtual coin called amethyst" />
        <Text fontWeight="bold" color="white">{price}</Text>
      </Flex>

      <BuyConfirmationModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}

export default StoreItem;

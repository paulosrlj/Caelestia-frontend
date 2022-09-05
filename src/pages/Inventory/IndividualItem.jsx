import {
  Flex, Image, Text, useDisclosure,
} from '@chakra-ui/react';
import ItemDetailsModal from './ItemDetailsModal';

function IndividualItem() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAchievementModalOpen = () => {
    onOpen();
  };

  return (
    <Flex
      w="100px"
      h="100px"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="solid_purple.100"
      mx="10px"
      borderRadius="5px"
      onClick={handleAchievementModalOpen}
      cursor="pointer"
      justifyContent="space-evenly"
      alignItems="center"
      flexDir="column"
      backgroundColor="solid_purple.100"
      _hover={{ backgroundColor: 'solid_purple.darker_purple' }}
      transition="all 0.2s ease"
      border="3px solid solid_purple.100"
      filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
      _active={{ transform: 'scale(0.9)' }}
    >
      <Image
        w="50px"
        h="50px"
        borderRadius="50%"
        src="https://cdn-icons-png.flaticon.com/512/129/129094.png"
        alt="Imagem que representa a conquista"
      />

      <Text color="white" fontSize="10px">Poção exocósmica</Text>

      <ItemDetailsModal
        isOpen={isOpen}
        onClose={onClose}
        itemAmount={2}
        itemDescription="Uma poção encontrada nas profundezas do sistema solar, dizem que possui propriedades mágicas"
        itemImageUrl="https://cdn-icons-png.flaticon.com/512/129/129094.png"
        itemName="Poção exocósmica"
      />
    </Flex>
  );
}

export default IndividualItem;

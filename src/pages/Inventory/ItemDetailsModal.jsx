import {
  Button,
  Flex, Image, Modal,
  ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text,
} from '@chakra-ui/react';

function ItemDetailsModal({
  isOpen, onClose, itemImageUrl, itemName, itemAmount, itemDescription,
}) {
  return (
    <Modal
      onClose={onClose}
      size="2xl"
      isOpen={isOpen}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />

        <Flex flexDir="column" alignItems="center" my="40px">
          <Image
            w="150px"
            h="150px"
            borderRadius="50%"
            src={itemImageUrl}
            alt="Imagem que representa a conquista"
          />

          <Flex flexDir="column" alignItems="center">
            <ModalHeader
              fontWeight="normal"
              fontFamily="'Inter', sans-serif"
              fontSize="35px"
              color="black.achievementModalTitle"
              textAlign="center"
            >
              {itemName}

            </ModalHeader>
            <Text alignSelf="center" mt="-20px" mb="30px">
              Quantidade:
              {' '}
              <span style={{ fontWeight: 'bold', color: '#00CD96' }}>{itemAmount}</span>
            </Text>
            <Text w="70%" color="gray.subtitle" textAlign="center">
              <Text
                display="inline"
                color="solid_purple.100"
                p="5px"
              >
                {itemDescription}
              </Text>
            </Text>

            <Button
              color="white"
              backgroundColor="pure_green.100"
              _hover={{ backgroundColor: 'pure_green.200' }}
              mt="20px"
            >
              Usar
            </Button>
          </Flex>
        </Flex>

      </ModalContent>
    </Modal>
  );
}

export default ItemDetailsModal;

import {
  Button, Flex, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay,
} from '@chakra-ui/react';

function BuyConfirmationModal({ isOpen, onClose }) {
  return (
    <Modal
      onClose={onClose}
      size="md"
      isOpen={isOpen}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />

        <ModalHeader
          fontWeight="normal"
          fontFamily="'Inter', sans-serif"
          fontSize="24px"
          color="black.achievementModalTitle"
          textAlign="center"
          mt="30px"
        >
          Deseja comprar este item?
        </ModalHeader>

        <Flex justifyContent="space-evenly" my="40px">
          <Button
            color="white"
            backgroundColor="main_red.100"
            _hover={{ backgroundColor: 'main_red.darker_red' }}
          >
            Não
          </Button>
          <Button
            color="white"
            backgroundColor="pure_green.100"
            _hover={{ backgroundColor: 'pure_green.200' }}
          >
            Sim
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
}

export default BuyConfirmationModal;

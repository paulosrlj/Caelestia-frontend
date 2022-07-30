/* eslint-disable no-unused-vars */
import {
  Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalFooter, ModalHeader, ModalOverlay,
} from '@chakra-ui/react';

function ShowPlayerInfoModal({ playerData, isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="solid_purple.100" textAlign="center">Mudar foto de perfil</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" justifyContent="center">

          corpo

        </ModalBody>

        <ModalFooter flex justifyContent="space-evenly">

          asd

        </ModalFooter>

      </ModalContent>
    </Modal>
  );
}

export default ShowPlayerInfoModal;

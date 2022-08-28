/* eslint-disable no-unused-vars */
import {
  Modal, ModalOverlay, ModalContent,
  ModalCloseButton, Flex, Text, Image, ModalHeader, ModalBody, Button,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

function ModuleInfoModal({ isOpen, onClose, moduleData }) {
  return (
    <Modal
      onClose={onClose}
      size="xl"
      isOpen={isOpen}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />

        <Flex flexDir="column" alignItems="center" my="40px">

          <Flex flexDir="column">
            <ModalHeader
              fontWeight="normal"
              fontFamily="'Inter', sans-serif"
              fontSize="35px"
              color="black.achievementModalTitle"
              textAlign="center"
            >
              {moduleData.name}

            </ModalHeader>

          </Flex>
          <ModalBody mt="30px" w="100%">
            <Flex justifyContent="space-between">
              <Flex w="50%" flexDir="column" justifyContent="center" alignItems="center">
                <Image
                  w="200px"
                  h="200px"
                  borderRadius="50%"
                  src={moduleData.achievementBadgeUrl}
                  alt="Achievement Badge"
                />
                <Button
                  color="white"
                  backgroundColor="blue.infoButton"
                  _hover={{ backgroundColor: 'blue.infoButtonDarker' }}
                  my="20px"
                  w="100%"
                  disabled
                >
                  Reivindicar conquista

                </Button>
              </Flex>

              <Flex
                flexDir="column"
                alignItems="center"
                justifyContent="space-between"
                textAlign="center"
                w="50"
              >
                <Text>
                  {moduleData.description}
                </Text>

                <Link to="/">
                  <Button
                    color="white"
                    backgroundColor="pure_green.100"
                    _hover={{ backgroundColor: 'pure_green.200' }}
                    my="20px"
                  >
                    Escolher uma lição
                  </Button>
                </Link>

              </Flex>
            </Flex>
          </ModalBody>
        </Flex>

      </ModalContent>
    </Modal>
  );
}

export default ModuleInfoModal;

/* eslint-disable no-unused-vars */
import {
  Accordion,
  Flex, Image, Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalOverlay, Text,
} from '@chakra-ui/react';
import ActivityAccordionItem from '../Accordion/ActivityAccordionItem';

function ModalPlayerInfo({ playerInfo, isOpen, onClose }) {
  return (
    <Modal
      onClose={onClose}
      size="full"
      isOpen={isOpen}
    >
      <ModalOverlay />
      <ModalContent bgColor="rgba(255, 255, 255, 0.9)">
        <ModalCloseButton />

        <Flex flexDir="column" alignItems="center" justifyContent="center">
          <ModalBody w="80%" mt="30px">
            <Flex>
              <Flex borderLeftRadius="5px" w="30%" bgColor="solid_purple.100" h="550px">
                <Flex
                  mt="30px"
                  w="100%"
                  flexDir="column"
                  alignItems="center"
                >
                  <Image
                    borderRadius="full"
                    w="150px"
                    h="150px"
                    src="https://picsum.photos/536/354"
                    alt="Foto de perfil do jogador"
                  />
                  <Text color="#ffffff" mt="10px">Fábio bala</Text>
                  <Text color="#ffffff" mt="5px">TogakureRyu</Text>
                  <Text
                    fontSize="16px"
                    color="pure_green.100"
                    fontWeight="semibold"
                    textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  >
                    Devorar de estrelas
                  </Text>
                </Flex>
              </Flex>
              <Flex
                border="3px solid #C4C4C4"
                filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                borderRightRadius="5px"
                justifyContent="center"
                w="70%"
                h="550px"
              >
                <Accordion p="10px" overflowY="scroll" w="95%" allowMultiple>
                  {playerInfo.assignedActivities.map((ac) => (
                    <ActivityAccordionItem activityData={ac} />
                  ))}
                </Accordion>
              </Flex>
            </Flex>

          </ModalBody>
        </Flex>

      </ModalContent>
    </Modal>
  );
}

export default ModalPlayerInfo;

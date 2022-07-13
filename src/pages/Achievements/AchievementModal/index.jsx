import {
  Flex,
  Image,
  Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalHeader, ModalOverlay, Stat,
  StatArrow, StatGroup, StatHelpText, Text,
} from '@chakra-ui/react';

function AchievementModal({ achievementData, isOpen, onClose }) {
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
          <Image
            w="150px"
            h="150px"
            borderRadius="50%"
            src={achievementData.imageUrl}
            alt="Imagem que representa a conquista"
          />

          <Flex flexDir="column">
            <ModalHeader
              fontWeight="normal"
              fontFamily="'Inter', sans-serif"
              fontSize="35px"
              color="black.achievementModalTitle"
              textAlign="center"
            >
              {achievementData.name}

            </ModalHeader>
            <Text color="pure_green.100" alignSelf="flex-end" mt="-20px" mb="30px">
              lv
              {' '}
              {achievementData.level}
            </Text>
            <Text color="gray.subtitle" textAlign="center">
              Obtido ao completar o módulo de
              {' '}
              <Text
                display="inline"
                color="solid_purple.100"
              >
                {achievementData.requirement}

              </Text>
            </Text>
          </Flex>

          <ModalBody mt="30px">
            <StatGroup>
              <Stat>
                <StatHelpText>
                  <StatArrow type="increase" />
                  {achievementData.description}
                  {' '}
                  <Text
                    display="inline"
                    color="solid_purple.100"
                  >
                    {achievementData.lessonType}

                  </Text>
                </StatHelpText>
              </Stat>
            </StatGroup>
          </ModalBody>
        </Flex>

      </ModalContent>
    </Modal>
  );
}

export default AchievementModal;

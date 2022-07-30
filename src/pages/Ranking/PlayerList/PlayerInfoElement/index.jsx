import { Flex, Text, useDisclosure } from '@chakra-ui/react';
import ShowPlayerInfoModal from './ShowPlayerInfoModal';

function PlayerInfoElement({ playerData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleModalOpen = () => {
    onOpen();
  };

  return (
    <>
      <Flex
        cursor="pointer"
        border={playerData.highlighted ? '1px solid #A044FF' : '1px solid #C4C4C4'}
        borderRadius="10px"
        bgColor={playerData.highlighted ? '#A044FF' : ''}
        color={playerData.highlighted ? '#00CD96' : ''}
        fontWeight={playerData.highlighted ? '600' : ''}
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        p="5px"
        mb="5px"
        position="relative"
        _before={playerData.highlighted && {
          content: '"|"',
          position: 'absolute',
          left: '-10px',
          top: '-5px',
          fontSize: '25px',
          color: '#A044FF',
        }}
        onClick={handleModalOpen}
      >
        <Text w="5%">{playerData.rankPosition}</Text>
        <Text w="50%">{playerData.username}</Text>
        <Text w="25%">{playerData.rankPoints}</Text>
        <Text w="20%">{playerData.totalPoints}</Text>
      </Flex>

      <ShowPlayerInfoModal playerData={playerData} isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default PlayerInfoElement;

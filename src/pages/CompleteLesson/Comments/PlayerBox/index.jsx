import { Flex, Image, Text } from '@chakra-ui/react';

function PlayerBox({ nickname, playerComment, profileUrl }) {
  return (
    <Flex
      borderWidth="1px"
      borderStyle="solid"
      borderColor="solid_purple.100"
      mb="10px"
      ml="5px"
      mr="5px"
      borderRadius="5px"
      p="5px"
    >
      <Flex w="15%">
        <Image
          w="50px"
          maxW="50px"
          h="50px"
          borderRadius="50%"
          src={profileUrl}
          alt="Person profile image"
          mr="10px"
        />

      </Flex>

      <Flex flexDir="column" w="85%">
        <Text fontWeight="bold" fontSize="14px">{nickname}</Text>
        <Text>{playerComment}</Text>
      </Flex>
    </Flex>
  );
}

export default PlayerBox;

import { Flex, Text } from '@chakra-ui/react';
import { GiOpenBook } from 'react-icons/gi';

function IndividualModule({ children }) {
  return (
    <Flex
      w="100%"
      p="10px"
      backgroundColor="solid_purple.100"
      borderRadius="5px"
      my="10px"
      alignItems="center"
      _hover={{ backgroundColor: 'solid_purple.darker_purple' }}
      cursor="pointer"
    >
      <GiOpenBook size={20} color="white" />
      <Text color="white" ml="10px">{children}</Text>
    </Flex>
  );
}

export default IndividualModule;

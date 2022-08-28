import { Flex, Text } from '@chakra-ui/react';
import { GiOpenBook } from 'react-icons/gi';
import { BiTestTube } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';

function IndividualLesson({ data }) {
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
      pos="relative"
    >
      {data.lessonType === 'pratical' ? (
        <BiTestTube size={20} color="white" />
      ) : (
        <GiOpenBook size={20} color="white" />
      )}
      <Text color="white" ml="10px">{data.name}</Text>
      {data.completed && (
      <AiOutlineCheckCircle
        size={30}
        style={{
          backgroundColor: '#00CD96',
          borderRadius: '50%',
          position: 'absolute',
          right: '1%',
          top: '15%',
        }}
      />
      )}

    </Flex>
  );
}

export default IndividualLesson;

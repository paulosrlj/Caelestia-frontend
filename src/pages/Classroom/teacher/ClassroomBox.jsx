import {
  Button, Flex, Image, Text,
} from '@chakra-ui/react';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { HiOutlineUserGroup } from 'react-icons/hi';

function ClassroomBox({ classroomData }) {
  return (
    <Flex
      w="100%"
      h="200px"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="#C4C4C4"
      borderRadius="5px"
      backgroundColor="solid_purple.100"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Flex w="50%" justifyContent="space-around" alignItems="center">
        <Flex w="100px" flexDir="column" alignItems="center" justifyContent="center">
          <Image
            borderRadius="50px"
            h="100px"
            src={classroomData.teacher.profileImageUrl}
            alt="Teacher picture"
            mb="10px"
          />
          <Text fontWeight="light" fontSize="20px" color="white">{classroomData.name}</Text>
        </Flex>

        <Flex flexDir="column" alignItems="center" justifyContent="space-evenly">
          <Flex w="100%" alignItems="center">
            <FaChalkboardTeacher fill="white" color="white" size={20} />
            <Text ml="10px" color="white" fontWeight="hairline">{classroomData.teacher.name}</Text>
          </Flex>
          <Flex w="100%" alignItems="center">
            <HiOutlineUserGroup fill="white" color="white" size={20} />
            <Text color="white" ml="10px" fontWeight="hairline">
              {classroomData.playersAmount}
              {' '}
              alunos
            </Text>
          </Flex>

          <Text fontSize="22px" mt="10px" color="white" ml="10px" fontWeight="hairline">{classroomData.classroomCode}</Text>
        </Flex>
      </Flex>

      <Flex w="30%">
        <Button
          color="white"
          backgroundColor="pure_green.100"
          transition="all 0.3s ease"
          _hover={{ bgColor: 'pure_green.200' }}
          _active={{ transform: 'scale(0.9)' }}
          w="100%"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}

export default ClassroomBox;

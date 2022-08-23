import {
  Flex, Text, Image,
} from '@chakra-ui/react';

import AppWrapper from '../../wrapper/AppWrapper';

import { TheoricLesson, PraticalLesson } from './assets';

import styles from './lessonChoice.module.scss';

function LessonChoice() {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      w="100vw"
    >
      <Text fontSize="26px">Qual tipo de lição você vai criar?</Text>

      <Flex w="100%" justifyContent="space-evenly" mt="30px">

        <Flex
          borderRadius="10px"
          alignItems="center"
          justifyContent="space-evenly"
          flexDirection="column"
          w="350px"
          h="400px"
          backgroundColor="solid_purple.100"
          cursor="pointer"
          className={styles['lesson-card']}
        >
          <Image src={TheoricLesson} w="150px" h="150px" />
          <Text fontSize="20px" color="white">Lição teórica</Text>
        </Flex>
        <Flex
          borderRadius="10px"
          alignItems="center"
          justifyContent="space-evenly"
          flexDirection="column"
          h="400px"
          w="350px"
          backgroundColor="solid_purple.100"
          cursor="pointer"
          className={styles['lesson-card']}
        >
          <Image src={PraticalLesson} w="150px" h="150px" />
          <Text fontSize="20px" color="white">Lição prática</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AppWrapper(LessonChoice);

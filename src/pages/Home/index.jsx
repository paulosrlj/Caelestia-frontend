import {
  Flex, Heading, Image, Progress, Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import AppWrapper from '../../wrapper/AppWrapper';

import styles from './style.module.scss';

// Icons
import { Amethyst, Level } from './assets';

function Home() {
  return (
    <Flex fontFamily="'Inter', sans-serif" color="whiteAlpha.800">

      <motion.div
        className={styles['left-section-profile']}
        animate={{ opacity: [0, 1], x: [-1000, 0] }}
        transition={{ duration: 0.8 }}
      >

        <Flex flexDir="column" alignItems="center">
          <Image
            w="200px"
            h="200px"
            src="https://picsum.photos/536/354"
            borderRadius="50%"
            cursor="pointer"
          />
          <Heading
            mt="20px"
            fontSize="30px"
            textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          >
            TogakureRyuu

          </Heading>
          <Text
            fontSize="16px"
            color="pure_green.100"
            fontWeight="semibold"
            textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          >
            Devorador de estrelas
          </Text>
        </Flex>

        <Flex w="90%" alignItems="center" justifyContent="space-evenly">
          <Flex alignItems="center">
            <Image w="50px" src={Amethyst} alt="Ícone de ametista que representa a moeda virtual" />
            <Text ml="10px">234</Text>
          </Flex>
          <Flex alignItems="center">
            <Image w="50px" src={Level} alt="Ícone representa a quantidade de pontos de experiência" />
            <Text ml="10px">234</Text>
          </Flex>

        </Flex>

        <Flex flexDir="column" alignItems="center" w="90%">
          <Flex alignItems="center" justifyContent="center" w="100%">
            <Text mr="20px">Lv 23</Text>
            <Progress borderRadius="10px" value={40} bgColor="gray.progressBar" colorScheme="whatsapp" w="80%" />
            <Text ml="20px">Lv 24</Text>
          </Flex>
          <Text>22/100 xp</Text>
        </Flex>

      </motion.div>

    </Flex>
  );
}

export default AppWrapper(Home, true);

import {
  Flex, Heading, Image, Progress, Text, useDisclosure,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import AttributesOnDisplay from '../AttributesOnDisplay';

import { Amethyst, Level } from '../assets';

import styles from '../style.module.scss';
import ChangePictureModal from './ChangePictureModal';

function ProfileLeftSide({ playerInfo, isSelfProfile }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleImageClick = () => {
    onOpen();
  };

  return (
    <motion.div
      className={styles['left-section-profile']}
      animate={{ opacity: [0, 1], scale: [0, 1] }}
      transition={{ duration: 0.8 }}
    >

      <Flex flexDir="column" alignItems="center">
        <Image
          w="200px"
          h="200px"
          src={playerInfo.profileImage}
          borderRadius="50%"
          cursor={isSelfProfile ? 'pointer' : ''}
          onClick={isSelfProfile ? handleImageClick : ''}
        />

        {/* Se não for o próprio perfil não exibe o modal pra mudar a foto de perfil */}
        {isSelfProfile
        && (
        <ChangePictureModal
          imageSrc={playerInfo.profileImage}
          isOpen={isOpen}
          onClose={onClose}
        />
        )}

        <Heading
          mt="20px"
          fontSize="30px"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        >
          {playerInfo.username}
        </Heading>
        <Text
          fontSize="16px"
          color="pure_green.100"
          fontWeight="semibold"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        >
          {playerInfo.rankingSubtitle}
        </Text>
      </Flex>

      <Flex w="90%" alignItems="center" justifyContent="space-evenly">
        <AttributesOnDisplay
          attributeImage={Amethyst}
          attributeImageAltText="Ícone de ametista que representa a moeda virtual"
          attributeAmount={playerInfo.coinsAmount}
        />

        <AttributesOnDisplay
          attributeImage={Level}
          attributeImageAltText="Ícone representa a quantidade de pontos de experiência"
          attributeAmount={playerInfo.expPoints}
        />

      </Flex>

      <Flex flexDir="column" alignItems="center" w="90%">
        <Flex alignItems="center" justifyContent="center" w="100%">
          <Text mr="20px">{playerInfo.level}</Text>
          <Progress borderRadius="10px" value={40} bgColor="gray.progressBar" colorScheme="whatsapp" w="70%" />
          <Text ml="20px">{playerInfo.level + 1}</Text>
        </Flex>
        <Text>22/100 xp</Text>
      </Flex>

    </motion.div>
  );
}

export default ProfileLeftSide;

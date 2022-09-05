/* eslint-disable no-unused-vars */
import {
  Button,
  Flex, Image, Input, Modal, ModalBody,
  ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import PlayerBox from './PlayerBox';

function Comments({ lessonId, isOpen, onClose }) {
  const [commentsInfo, setCommentsInfo] = useState([
    {
      urlProfileImg: '',
      nickname: '',
    },
  ]);

  return (
    <Modal
      onClose={onClose}
      size="2xl"
      isOpen={isOpen}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />

        <Flex flexDir="column" justifyContent="space-evenly" alignItems="center" my="40px">
          <Flex w="70%" justifyContent="center">
            <Input w="100%" placeholder="Digite um comentário" />
            <Button
              bgColor="pure_green.100"
              color="white"
              ml="30px"
              mb="10px"
              p="20px"
              pl="25px"
              pr="25px"
              transition="all 0.3s ease"
              _hover={{ bgColor: 'pure_green.200' }}
            >
              Adicionar
            </Button>
          </Flex>

          <Flex w="80%" h="350px" flexDir="column" my="20px" overflowY="scroll">

            <PlayerBox profileUrl="https://picsum.photos/200/300" nickname="Kaiso" playerComment="comentájsfisafsaifhuisahfiusahfihsaifh" />
            <PlayerBox profileUrl="https://picsum.photos/200/300" nickname="Kaiso" playerComment="comentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifh" />
            <PlayerBox profileUrl="https://picsum.photos/200/300" nickname="Kaiso" playerComment="comentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifh" />
            <PlayerBox profileUrl="https://picsum.photos/200/300" nickname="Kaiso" playerComment="comentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifhcomentájsfisafsaifhuisahfiusahfihsaifh" />
          </Flex>

        </Flex>

      </ModalContent>
    </Modal>
  );
}

export default Comments;

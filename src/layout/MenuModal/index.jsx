import { useState } from 'react';
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import PageBox from './Box';

import {
  Astronaut, Astronomy, Friendship, Mission, Medal, Training, Ranking, Shop,
} from './assets';

function MenuModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState('full');

  const pages = [{ id: 1, image: Astronomy, pageTitle: 'Aprendizado' },
    { id: 2, image: Training, pageTitle: 'Sala de aula' },
    { id: 3, image: Ranking, pageTitle: 'Ranking' },
    { id: 4, image: Mission, pageTitle: 'Missões' },
    { id: 5, image: Medal, pageTitle: 'Conquistas' },
    { id: 6, image: Friendship, pageTitle: 'Amigos' },
    { id: 7, image: Shop, pageTitle: 'Loja' },
    { id: 8, image: Astronaut, pageTitle: 'Perfil' },
  ];

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  return (
    <>
      <Button onClick={() => handleSizeClick(size)} key={size} m={4}>
        {`Open ${size} Modal`}
      </Button>

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent bgColor="transparent">

          <ModalCloseButton outline="none" color="whiteAlpha.900" size={20} p="4" />
          <ModalBody
            mt={['50px', '50px']}
            h="100vh"
            display="flex"
            alignItems="center"
          >
            <Flex flexWrap="wrap" alignItems="center" justifyContent="center" w="100%">
              {pages.map((page) => (
                <PageBox image={page.image} title={page.pageTitle} key={page.id} />
              ))}
            </Flex>
          </ModalBody>

        </ModalContent>
      </Modal>
    </>
  );
}

export default MenuModal;

import { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import { FaCompass } from 'react-icons/fa';

import PageBox from './Box';
import {
  Astronaut, Astronomy, Friendship, Mission, Medal, Training, Ranking, Shop,
  Home, Settings,
} from './assets';

function MenuModal({ whiteIcon }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState('full');
  const [menuHover, setMenuHover] = useState(false);

  const pages = [
    { id: 1, image: Home, pageTitle: 'Home' },
    { id: 2, image: Astronomy, pageTitle: 'Aprendizado' },
    { id: 3, image: Training, pageTitle: 'Sala de aula' },
    { id: 4, image: Ranking, pageTitle: 'Ranking' },
    { id: 5, image: Mission, pageTitle: 'Missões' },
    { id: 6, image: Medal, pageTitle: 'Conquistas' },
    { id: 7, image: Friendship, pageTitle: 'Amigos' },
    { id: 8, image: Shop, pageTitle: 'Loja' },
    { id: 9, image: Astronaut, pageTitle: 'Perfil' },
    { id: 10, image: Settings, pageTitle: 'Configurações' },
  ];

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  return (
    ReactDOM.createPortal(
      <Box pos="absolute" top="0">
        <Box
          width="auto"
          m="15px"
        >
          <FaCompass
            onMouseOver={() => setMenuHover(true)}
            onMouseOut={() => setMenuHover(false)}
            style={{
              transition: 'transform 0.2s ease-in',
              transform: `${menuHover ? 'rotate(-45deg)' : 'rotate(0)'}`,
            }}
            cursor="pointer"
            size={35}
            color={whiteIcon ? '#f3f3f3' : 'black'}
            onClick={() => handleSizeClick(size)}
          />

        </Box>

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
      </Box>,
      document.getElementById('modalMenu'),
    )

  );
}

export default MenuModal;

import {
  Flex, Text, Heading, Image, Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Slider({ data }) {
  const [slide, setSlide] = useState(0);
  const len = data.length;

  function handleRightClick() {
    setSlide(slide === len - 1 ? 0 : slide + 1);
  }

  function handleLeftClick() {
    setSlide(slide === 0 ? len - 1 : slide - 1);
  }

  return (
    <Flex w="100vw" h="100vh" pos="relative">

      {data.map((el, index) => (
        <Flex
          w="100%"
          h="100%"
          alignItems="center"
          transition="transform 0.5s"
          pos="absolute"
          key={el.id}
          transform={slide === index ? 'translateX(0)' : 'translateX(-100vw)'}
        >

          <Flex
            pos="absolute"
            w="100%"
            h="100%"
            zIndex={-100}
            alignItems="center"
            justifyContent="center"
          >
            <Flex
              w="400px"
              h="auto"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              borderRadius="5px"
              backgroundColor="solid_purple.100"
              p="20px"
            >
              <Image src={el.imageUrl} w="200px" h="200px" borderRadius="50%" />
              <Heading fontWeight="normal" fontSize="24px" my="20px" color="white">{el.name}</Heading>
              <Text color="white" fontWeight="light" mb="20px">{el.description}</Text>
              <Text color="white" fontWeight="light" mb="20px">
                {el.completedLessons}
                /
                {el.amountLessons}
              </Text>
              <Button
                color="white"
                backgroundColor="blue.infoButton"
                _hover={{ backgroundColor: 'blue.infoButtonDarker' }}
                my="10px"
                w="100%"
                disabled={!el.unlockable}
              >
                Reivindicar conquista
              </Button>
              <Link to="/" style={{ width: '100%' }}>
                <Button
                  color="white"
                  backgroundColor="pure_green.100"
                  _hover={{ backgroundColor: 'pure_green.200' }}
                  my="10px"
                  w="100%"
                >
                  Escolher uma lição
                </Button>
              </Link>
            </Flex>

          </Flex>

        </Flex>
      ))}
      <FiChevronLeft
        onClick={() => handleLeftClick()}
        width="3.5rem"
        height="3.5rem"
        color="#A044FF"
        cursor="pointer"
        style={{
          position: 'absolute', bottom: '45%', left: '8%', width: '50px', height: '50px',
        }}
      />
      <FiChevronRight
        onClick={() => handleRightClick()}
        color="#A044FF"
        cursor="pointer"
        style={{
          position: 'absolute', bottom: '45%', right: '8%', width: '50px', height: '50px',
        }}
      />
    </Flex>
  );
}

export default Slider;

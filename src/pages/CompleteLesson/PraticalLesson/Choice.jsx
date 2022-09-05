import {
  Button, Flex, Image, Text,
} from '@chakra-ui/react';

import HeartIcon from './assets/heart.png';

function Choice() {
  return (
    <Flex
      h="100vh"
      justifyContent="space-evenly"
      alignItems="center"
      flexDir="column"
    >
      <Flex w="90%" h="10px" borderRadius="5px" backgroundColor="#C4C4C4">
        <Flex
          transition="all 0.5s ease"
          w="20%"
          h="10px"
          backgroundColor="solid_purple.100"
          borderRadius="5px"
        />
      </Flex>

      <Flex justifyContent="space-evenly">
        <Flex
          w="80%"
          h="80vh"
          p="10px"
          borderWidth="1px"
          borderStyle="solid"
          borderColor="#C4C4C4"
          borderRadius="5px"
          flexDir="column"
          alignItems="center"
          justifyContent="space-around"
        >
          <Text h="auto" overflowY="scroll" p="10px" mb="10px">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit quam
            laborum beatae impedit labore veniam autem deserunt eligendi officiis amet ex,
            quis repellat laudantium fuga et sapiente ullam. Est. Lorem ipsum dolor sit amet
            consectetur
            adipisicing elit. Quis dolorem ipsum ipsa aliquam tempore asperiores officiis
            ad commodi, beatae repudiandae, distinctio, at placeat molestias culpa cum? Moll
            itia maxime dolo
            rum corporis!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem nesciunt sapiente
            consectetur commodi voluptas beatae dolore non, saepe, tempora modi earum accusa
            ntium maiores fugit
            cupiditate quaerat, alias temporibus asperiores dolorum!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit quam
            laborum beatae impedit labore veniam autem deserunt eligendi officiis amet ex,
            quis repellat laudantium fuga et sapiente ullam. Est. Lorem ipsum dolor sit amet
            consectetur
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem nesciunt sapiente
            consectetur commodi voluptas beatae dolore non, saepe, tempora modi earum accusa
            ntium maiores fugit
            cupiditate quaerat, alias temporibus asperiores dolorum!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit quam
            laborum beatae impedit labore veniam autem deserunt eligendi officiis amet ex,
            quis repellat laudantium fuga et sapiente ullam. Est. Lorem ipsum dolor sit amet
            consectetur
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem nesciunt sapiente
            consectetur commodi voluptas beatae dolore non, saepe, tempora modi earum accusa
            ntium maiores fugit
            cupiditate quaerat, alias temporibus asperiores dolorum!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit quam
            laborum beatae impedit labore veniam autem deserunt eligendi officiis amet ex,
            quis repellat laudantium fuga et sapiente ullam. Est. Lorem ipsum dolor sit amet
            consectetur
          </Text>

          <Flex
          // backgroundColor="green"
            flexDir="column"
            alignItems="center"
            w="100%"
          >

            <Button
              color="white"
              backgroundColor="solid_purple.100"
              _hover={{ backgroundColor: 'solid_purple.darker_purple' }}
              _active={{ transform: 'scale(0.9)' }}
              my="10px"
              w="90%"
            >
              Prosseguir
            </Button>
            <Button
              color="white"
              backgroundColor="solid_purple.100"
              _hover={{ backgroundColor: 'solid_purple.darker_purple' }}
              my="10px"
              w="90%"
            >
              Prosseguir
            </Button>

            <Button
              color="white"
              backgroundColor="solid_purple.100"
              _hover={{ backgroundColor: 'solid_purple.darker_purple' }}
              my="10px"
              w="90%"
            >
              Prosseguir
            </Button>

            <Button
              color="white"
              backgroundColor="solid_purple.100"
              _hover={{ backgroundColor: 'solid_purple.darker_purple' }}
              my="10px"
              w="90%"
            >
              Prosseguir
            </Button>
          </Flex>
        </Flex>

        <Flex h="100%" alignItems="center">
          <Flex
            h="60%"
            flexDir="column"
            justifyContent="space-evenly"
          >
            <Flex alignItems="center" justifyContent="space-evenly">
              <Image
                transition="transform 0.5s ease"
                cursor="pointer"
                _hover={{ transform: 'scale(0.95)' }}
                src={HeartIcon}
                alt="Heart icon"
                w="50px"
                h="50px"
              />
              <Text fontSize="20px">5</Text>
            </Flex>

            <Flex flexDir="column">
              <Button
                color="white"
                backgroundColor="pure_green.100"
                _hover={{ backgroundColor: 'pure_green.200' }}
                my="10px"
              >
                Prosseguir
              </Button>
              <Button
                color="white"
                backgroundColor="blue.infoButton"
                _hover={{ backgroundColor: 'blue.infoButtonDarker' }}
                my="10px"
              >
                Discussão
              </Button>
              <Button
                color="white"
                backgroundColor="main_red.100"
                _hover={{ backgroundColor: 'main_red.darker_red' }}
                my="10px"
              >
                Sair
              </Button>
            </Flex>

          </Flex>
        </Flex>

      </Flex>
    </Flex>

  );
}

export default Choice;

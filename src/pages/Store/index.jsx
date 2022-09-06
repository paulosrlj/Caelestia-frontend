import { Flex, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';

import CoinIcon from './assets/coin.png';
import StoreItem from './StoreItem';

function Store() {
  const [items] = useState([
    {
      id: 1,
      name: 'Poção #1',
      description: 'Uma poção que veio de uma galáxia muito distante',
      price: 50,
      itemUrl: 'https://cdn-icons-png.flaticon.com/512/129/129094.png',
    },
    {
      id: 2,
      name: 'Poção #2',
      description: 'Uma poção que veio de uma galáxia muito próxima',
      itemUrl: 'https://cdn-icons-png.flaticon.com/512/129/129094.png',
      price: 120,
    },
    {
      id: 3,
      name: 'Poção #3',
      description: 'Uma poção que veio de uma galáxia muito próxima',
      itemUrl: 'https://cdn-icons-png.flaticon.com/512/129/129094.png',
      price: 120,
    },
    {
      id: 4,
      name: 'Poção #4s',
      itemUrl: 'https://cdn-icons-png.flaticon.com/512/129/129094.png',
      description: 'Uma poção que veio de uma galáxia muito próxima',
      price: 120,
    },
    {
      id: 5,
      name: 'Poção #4s',
      itemUrl: 'https://cdn-icons-png.flaticon.com/512/129/129094.png',
      description: 'Uma poção que veio de uma galáxia muito próxima',
      price: 120,
    },
    {
      id: 6,
      name: 'Poção #4s',
      itemUrl: 'https://cdn-icons-png.flaticon.com/512/129/129094.png',
      description: 'Uma poção que veio de uma galáxia muito próxima',
      price: 120,
    },
  ]);

  return (
    <Flex pos="relative" h="100vh" justifyContent="center" alignItems="center">
      <Flex alignItems="center" pos="absolute" right="5%" top="5%">
        <Image
          mr="10px"
          w="30px"
          h="30px"
          src={CoinIcon}
          alt="Virtual coin called amethyst"
        />
        <Text>424</Text>
      </Flex>

      <Flex
        h="500px"
        w="70%"
        flexDir="column"
        justifyContent="space-evenly"
        alignItems="center"
        border="3px solid #C4C4C4"
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        borderRadius="10px"
      >
        <Text
          color="solid_purple.100"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          fontFamily="'Inter', sans-serif"
          fontWeight="light"
          fontSize="30px"
          mt="30px"
        >
          Loja
        </Text>

        <Flex w="80%" flexDir="column" overflowY="scroll" my="20px">
          {items.map((item) => (
            <StoreItem
              key={item.id}
              name={item.name}
              itemUrl={item.itemUrl}
              price={item.price}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Store;

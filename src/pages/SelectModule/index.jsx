/* eslint-disable no-unused-vars */
import { Flex } from '@chakra-ui/react';
import { useState } from 'react';

import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import AppWrapper from '../../wrapper/AppWrapper';

function SelectModule() {
  const modules = [
    {
      id: 1,
      name: 'Astronomia antiga',
      amountLessons: 20,
    },
    {
      id: 2,
      name: 'Astronomia no dia a dia',
      amountLessons: 12,
    },
    {
      id: 3,
      name: 'O sistema solar',
      amountLessons: 14,
    },
    {
      id: 4,
      name: 'Cosmologia',
      amountLessons: 6,
    },
  ];

  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleNextClick = () => {

  };

  return (

    <Flex
      h="100vh"
      justifyContent="space-around"
      alignItems="center"
      bgColor="yellowgreen"
    >
      <Flex
        borderRadius="20px"
        h="400px"
        bgColor="blue"
        flex="0 0 calc(20%)"
        transform="scale(0.8)"
        transition="all 0.5s ease"
        translateX="200px"
      >
        adasdsad
      </Flex>

      <Flex h="400px" bgColor="red" flex="0 0 calc(20%)">
        asdasd
      </Flex>

      <Flex
        transform="scale(0.8)"
        h="400px"
        bgColor="yellow"
        flex="0 0 calc(20%)"
      >
        asd
      </Flex>

      <MdOutlineKeyboardArrowLeft
        cursor="pointer"
        size={40}
        style={{ position: 'absolute', top: '50%', left: '30%' }}
      />
      <MdOutlineKeyboardArrowRight
        cursor="pointer"
        size={40}
        style={{ position: 'absolute', top: '50%', right: '30%' }}
      />

    </Flex>

  );
}

export default AppWrapper(SelectModule);

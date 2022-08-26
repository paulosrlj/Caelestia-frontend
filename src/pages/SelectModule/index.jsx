/* eslint-disable no-unused-vars */
import { Flex, Heading, Text } from '@chakra-ui/react';

import IndividualModule from './components/IndividualModule';

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

  const handleNextClick = () => {

  };

  return (

    <Flex w="100%" alignItems="center" justifyContent="center" my="20px">
      <Flex
        w="80%"
        flexDir="column"
      >
        <Heading textAlign="center" my="20px">Seleção de módulo</Heading>

        {modules.map((m) => <IndividualModule>{m.name}</IndividualModule>)}

      </Flex>

    </Flex>

  );
}

export default SelectModule;

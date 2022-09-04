import {
  Flex, Input,
} from '@chakra-ui/react';
import { IoMdCheckmark } from 'react-icons/io';

function Question({
  id, isCorrect, toggleCorrectAnwser, setAnswers,
}) {
  const handleInputChange = (e) => {
    const { value } = e.target;

    setAnswers((oldState) => {
      const newState = { ...oldState };
      newState[id] = value;
      return newState;
    });
  };

  return (
    <Flex
      w="100%"
      p="10px"
      backgroundColor="solid_purple.100"
      borderRadius="5px"
      my="10px"
      alignItems="center"
    >

      <Input
        placeholder="Digite uma resposta"
        color="black"
        backgroundColor="white"
        mr="10px"
        onChange={handleInputChange}
      />
      <Flex
        backgroundColor={isCorrect ? 'pure_green.100' : 'gray.400'}
        borderRadius="50%"
        p="1px"
      >
        <IoMdCheckmark
          cursor="pointer"
          onClick={() => toggleCorrectAnwser(id)}
          size={30}
          color="white"
        />
      </Flex>
    </Flex>

  );
}

export default Question;

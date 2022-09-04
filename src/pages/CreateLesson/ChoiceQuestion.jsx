import {
  Flex, Input,
} from '@chakra-ui/react';

function ChoiceQuestion({
  id, setAnswer,
}) {
  const handleInputChange = (e) => {
    const { value } = e.target;
    setAnswer((oldState) => {
      const newState = { ...oldState };
      newState[`alternative${id}`] = value;
      return newState;
    });
  };

  return (
    <Flex
      w="100%"
      p="10px"
      borderRadius="5px"
      // my="10px"
      alignItems="center"
    >

      <Input
        placeholder="Digite uma resposta"
        color="black"
        backgroundColor="white"
        mr="10px"
        onChange={handleInputChange}
        border="1px solid #A044FF"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="solid_purple.100"
      />

    </Flex>

  );
}

export default ChoiceQuestion;

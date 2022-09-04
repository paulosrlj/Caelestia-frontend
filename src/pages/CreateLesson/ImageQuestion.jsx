import { Flex } from '@chakra-ui/react';
import IndividualImageQuestion from './IndividualImageQuestion';

function ImageQuestion({ setImages, setAnswers }) {
  const questions = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ];

  return (
    <Flex
      justifyContent="space-evenly"
      alignItems="center"
      flexWrap="wrap"
      w="60%"
      h="600px"
      mt="30px"
      p="10px"
      overflowY="auto"

    >
      {questions.map((q) => (
        <IndividualImageQuestion
          key={q.id}
          id={q.id}
          setAnswers={setAnswers}
          setImages={setImages}
        />
      ))}
    </Flex>

  );
}

export default ImageQuestion;

import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import ChoiceQuestion from './ChoiceQuestion';

function PraticalLessonForm({ setPraticalLesson }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const toggleCorrectAnwser = (id) => {
    setSelectedAnswer(id);
  };

  // four questions per question
  const questions = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  return (
    <Flex w="50%">
      <Flex flexDir="column" w="100%" maxH="350px" mt="30px" overflowY="auto">
        {questions.map((q) => (
          <ChoiceQuestion
            isCorrect={q.id === selectedAnswer}
            key={q.id}
            id={q.id}
            toggleCorrectAnwser={toggleCorrectAnwser}
            setAnswer={setPraticalLesson}
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default PraticalLessonForm;

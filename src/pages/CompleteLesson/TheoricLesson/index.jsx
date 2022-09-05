import {
  Button, Flex, Spinner, Text, useDisclosure,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import TextEditor from '../../../layout/TextEditor';
import Comments from '../Comments';

function TheoricLesson({ lessonId }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAchievementModalOpen = () => {
    onOpen();
  };

  const notifyError = (message) => toast.error(message);
  const [isLoading, setIsLoading] = useState(true);

  const [lesson, setLesson] = useState({
    lessonName: '',
    xpEarned: null,
    coinsEarned: null,
    description: '',
    content: '',
  });

  useEffect(() => {
    axios.get(
      `${process.env.REACT_APP_REQ_URL}/theoricLessons/${lessonId}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then((response) => {
        setLesson(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        notifyError(error.response.data.error);
        setIsLoading(false);
      });
  }, [lessonId]);

  return (
    <Flex
      h="100vh"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Text fontSize="26px" my="20px" color="solid_purple.100">{lesson.lessonName}</Text>
          <Flex justifyContent="space-evenly" w="100%">

            <TextEditor isReadOnly contentToDisplay={lesson.content} />
            <Flex h="100%" alignItems="center">
              <Flex
                h="60%"
                flexDir="column"
                justifyContent="space-evenly"
              >
                <Flex flexDir="column">
                  <Button
                    color="white"
                    backgroundColor="pure_green.100"
                    _hover={{ backgroundColor: 'pure_green.200' }}
                    my="10px"
                  >
                    Concluir
                  </Button>
                  <Button
                    color="white"
                    backgroundColor="blue.infoButton"
                    _hover={{ backgroundColor: 'blue.infoButtonDarker' }}
                    my="10px"
                    onClick={handleAchievementModalOpen}
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
          <Comments isOpen={isOpen} onClose={onClose} />
        </>
      )}

    </Flex>

  );
}

export default TheoricLesson;

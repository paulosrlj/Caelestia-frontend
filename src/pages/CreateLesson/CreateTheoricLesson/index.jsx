/* eslint-disable no-unused-vars */
import { Button, Flex, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import LessonInfo from '../LessonInfo';

import TextEditor from '../../../layout/TextEditor';

function CreateLesson() {
  const notifyError = (message) => toast.error(message);
  const notifySuccess = (message) => toast.success(message);

  const defaultTl = {
    lessonName: '',
    xpEarned: 0,
    coinsEarned: 0,
    description: '',
    content: '',
    moduleId: '',
  };

  const [theoricLesson, setTheoricLesson] = useState({ ...defaultTl });

  const clearAfterPost = () => {
    setTheoricLesson({ ...defaultTl });
  };

  const handleUpload = async () => {
    setTheoricLesson((oldState) => {
      const newState = { ...oldState };
      newState.xpEarned = Number(newState.xpEarned);
      newState.coinsEarned = Number(newState.coinsEarned);
      return newState;
    });

    const clearObj = { ...theoricLesson };

    axios.post(
      `${process.env.REACT_APP_REQ_URL}/theoricLessons`,
      clearObj,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then(() => {
        notifySuccess('Lição teórica criada com sucesso!');
        clearAfterPost();
      })
      .catch((error) => {
        notifyError(error.response.data.validationErrors[0]);
      });
  };

  const handleFormChanges = (e) => {
    const { value, name } = e.target;

    setTheoricLesson((oldState) => {
      const newState = { ...oldState };
      newState[name] = value;
      return newState;
    });
  };

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      w="100vw"
      mt="50px"
      mb="20px"
    >
      <Text fontSize="26px">Criação de questão teórica</Text>

      <LessonInfo
        handleFormChanges={handleFormChanges}
        handleNumberInputChange={setTheoricLesson}
        isTheoric
      />
      <TextEditor handleEditorChange={setTheoricLesson} />
      <Button
        color="white"
        backgroundColor="pure_green.100"
        _hover={{ backgroundColor: 'pure_green.200' }}
        my="20px"
        onClick={handleUpload}
      >
        Salvar

      </Button>
    </Flex>
  );
}

export default CreateLesson;

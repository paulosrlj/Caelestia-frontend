import { useState } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import axios from 'axios';
import { toast } from 'react-toastify';

import uploadImageCallBack from '../../util/uploadImageCallback';
import ImageQuestion from './ImageQuestion';
import LessonInfo from './LessonInfo';
import PraticalLessonForm from './PraticalLessonForm';

function CreateLesson() {
  const notifyError = (message) => toast.error(message);
  const notifySuccess = (message) => toast.success(message);

  const [creating, setCreating] = useState(false);

  const defaultPl = {
    lessonName: '',
    xpEarned: 0,
    coinsEarned: 0,
    description: '',
    alternative1: '',
    alternative2: '',
    alternative3: '',
    alternative4: '',
    correctAlternative: 0,
    urlAlternative1: '',
    urlAlternative2: '',
    urlAlternative3: '',
    urlAlternative4: '',
    moduleId: '',
  };

  const defaultImages = {
    1: [],
    2: [],
    3: [],
    4: [],
  };

  const [questionType, setQuestionType] = useState('choice');

  // const { questionType } = useParams();
  const [praticalLesson, setPraticalLesson] = useState({ ...defaultPl });

  const [images, setImages] = useState({ ...defaultImages });

  const handleImagesUpload = async () => {
    Object.keys(images).forEach(async (key, index) => {
      const res = await toast.promise(
        uploadImageCallBack(images[key][0].file, 'praticalLessonImage'),
        {
          pending: `Fazendo upload da imagem ${index + 1}...`,
          success: 'Upload de foto concluído com sucesso',
          error: `Ocorreu um problema na imagem ${index + 1}`,
        },
      );

      setPraticalLesson((oldState) => {
        const newState = { ...oldState };
        const newkey = `urlAlternative${index + 1}`;
        newState[newkey] = res.data.link;
        return newState;
      });
    });
  };

  const clearAfterPost = () => {
    setPraticalLesson({ ...defaultPl });
    setImages({ ...defaultImages });
  };

  const handleUpload = async () => {
    // upload images first and retrieve urls
    setPraticalLesson((oldState) => {
      const newState = { ...oldState };
      newState.correctAlternative = Number(newState.correctAlternative);
      newState.xpEarned = Number(newState.xpEarned);
      newState.coinsEarned = Number(newState.coinsEarned);
      return newState;
    });

    const clearObj = { ...praticalLesson };

    if (questionType === 'image') {
      await handleImagesUpload();
    } else {
      // clear urlAlternatives
      delete clearObj.urlAlternative1;
      delete clearObj.urlAlternative2;
      delete clearObj.urlAlternative3;
      delete clearObj.urlAlternative4;
    }

    setCreating(true);
    axios.post(
      `${process.env.REACT_APP_REQ_URL}/praticalLessons`,
      clearObj,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then(() => {
        notifySuccess('Lição criada com sucesso!');
        clearAfterPost();
      })
      .catch((error) => {
        notifyError(error.response.data.error);
      });

    setCreating(false);
  };

  const handleFormChanges = (e) => {
    const { value, name } = e.target;
    setPraticalLesson((oldState) => {
      const newState = { ...oldState };
      newState[name] = value;
      return newState;
    });
  };

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      my="50px"
    >
      <Text fontSize="26px">Criação de questão</Text>

      <LessonInfo
        handleFormChanges={handleFormChanges}
        handleNumberInputChange={setPraticalLesson}
        handleLessonTypeChange={setQuestionType}
      />

      {questionType === 'image' ? (
        <ImageQuestion setImages={setImages} setAnswers={setPraticalLesson} />
      ) : (
        <PraticalLessonForm setPraticalLesson={setPraticalLesson} />
      )}

      <Button
        color="white"
        backgroundColor="pure_green.100"
        _hover={{ backgroundColor: 'pure_green.200' }}
        my="20px"
        onClick={handleUpload}
        disabled={!!creating}
      >
        Salvar

      </Button>
    </Flex>
  );
}

export default CreateLesson;

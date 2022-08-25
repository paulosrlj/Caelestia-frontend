/* eslint-disable no-unused-vars */
import {
  Flex, Image, Input,
} from '@chakra-ui/react';
import { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { toast } from 'react-toastify';
import uploadImageCallBack from '../../../util/uploadImageCallback';

import 'react-toastify/dist/ReactToastify.css';

function Question({
  id, isCorrect, toggleCorrectAnwser, setAnswers, setImages,
}) {
  const [image, setImage] = useState([]);
  const [imageSrcUpload, setimageSrcUpload] = useState(null);

  const handleInputChange = (e) => {
    const { value } = e.target;

    setAnswers((oldState) => {
      const newState = { ...oldState };
      newState[id] = value;
      return newState;
    });
  };

  const onChange = async (imageList) => {
    if (imageList.length > 0) {
      setimageSrcUpload(imageList[0].data_url);
    }

    setImages((oldState) => {
      const newState = { ...oldState };
      newState[id] = imageList;
      return newState;
    });
  };

  const uploadImage = async () => {
    const { data: { link } } = await toast.promise(
      uploadImageCallBack(image[0].file, 'praticalLessonImage'),
      {
        pending: 'Fazendo upload...',
        success: 'Upload de fotos concluído',
        error: 'Ocorreu um problema.',
      },
    );

    if (link !== undefined) {
      setimageSrcUpload(link);
    }
  };

  return (
    <Flex
      w="150px"
      height="150px"
      p="10px"
      my="10px"
      alignItems="center"
      flexBasis="50%"
    >

      <Flex
        flexDir="column"
        w="100%"
        alignItems="center"
        justifyContent="space-evenly"
      >

        <ImageUploading
          value={image}
          onChange={onChange}
          maxNumber={1}
          dataURLKey="data_url"
        >
          {({
            onImageUpload,
            onImageRemove,
            dragProps,
          }) => (
            <Image
              mb="10px"
              p="5px"
              borderRadius="5px"
              backgroundColor="solid_purple.100"
              w="150px"
              h="150px"
              src={imageSrcUpload || 'https://picsum.photos/200/300'}
              cursor="pointer"
              onClick={onImageUpload}
              onChange={onChange}
              {...dragProps}
            />
          )}
        </ImageUploading>

        <Input
          placeholder="Digite uma resposta"
          color="black"
          backgroundColor="white"
          mr="10px"
          onChange={handleInputChange}
        />
      </Flex>
    </Flex>

  );
}

export default Question;

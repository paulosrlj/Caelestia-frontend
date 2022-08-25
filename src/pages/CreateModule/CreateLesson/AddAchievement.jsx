import { useState } from 'react';
import {
  Flex, Text, Button, Input, Textarea,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import ImageUploading from 'react-images-uploading';
import { toast } from 'react-toastify';
import uploadImageCallBack from '../../../util/uploadImageCallback';

import 'react-toastify/dist/ReactToastify.css';
import CustomToastContainer from '../../../components/Toast/CustomToastContainer';

function AddAchievement() {
  const [image, setImage] = useState([]);
  const [, setImageLink] = useState('');

  const onChangeImage = (imageList) => {
    setImage(imageList);
  };

  const uploadImage = async () => {
    const { data: { link } } = await toast.promise(
      uploadImageCallBack(image[0].file, 'achievements'),
      {
        pending: 'Fazendo upload...',
        success: 'Brasão da conquista enviado!',
        error: 'Ocorreu um problema.',
      },
    );

    setImageLink(link);
  };

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      w="100vw"
    >
      <Text fontSize="26px">Crie a conquista para este módulo</Text>

      <Flex
        flexDir="column"
        w="60%"
        maxH="350px"
        mt="30px"
        overflowY="auto"
        alignItems="center"
      >

        <Input w="70%" placeholder="Nome da conquista" my="5px" />
        <Textarea w="70%" placeholder="Descrição" my="5px" />
        <Input w="70%" placeholder="Porcentagem bônus" type="number" my="5px" />
        <Input w="70%" placeholder="Porcentagem bônus adicional por nível" type="number" my="5px" />
        <Input w="70%" placeholder="Preço para subir de nível" type="number" my="5px" />

      </Flex>

      <Flex w="30%" justifyContent="space-evenly" flexWrap="wrap">
        <ImageUploading
          value={image}
          onChange={onChangeImage}
          maxNumber={1}
          dataURLKey="data_url"
        >
          {({
            onImageUpload,
            dragProps,
          }) => (
            <Button
              color="white"
              backgroundColor="blue.infoButton"
              _hover={{ backgroundColor: 'blue.infoButtonDarker' }}
              my="20px"
              {...dragProps}
              onClick={onImageUpload}
            >
              Adicionar brasão da conquista

            </Button>
          )}
        </ImageUploading>

        <Button
          color="white"
          backgroundColor="blue.infoButton"
          _hover={{ backgroundColor: 'blue.infoButtonDarker' }}
          my="20px"
          onClick={uploadImage}
        >
          Fazer upload do brasão

        </Button>

        <Link to="/admin/create_lesson">
          <Button
            color="white"
            backgroundColor="main_red.100"
            _hover={{ backgroundColor: 'main_red.darker_red' }}
            w="100%"
            my="20px"
          >
            Voltar

          </Button>
        </Link>

        <Link to="/admin/create_lesson">
          <Button
            color="white"
            backgroundColor="pure_green.100"
            _hover={{ backgroundColor: 'pure_green.200' }}
            my="20px"
            w="100%"
          >
            Salvar

          </Button>
        </Link>

      </Flex>
      <CustomToastContainer />
    </Flex>
  );
}

export default AddAchievement;

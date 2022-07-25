import {
  Button, Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalFooter, ModalHeader, ModalOverlay,
  Image,
} from '@chakra-ui/react';
import { useState } from 'react';
import ImageUploading from 'react-images-uploading';

// React toast
import { toast } from 'react-toastify';
import CustomToastContainer from '../../../../components/Toast/CustomToastContainer';
import 'react-toastify/dist/ReactToastify.css';

import uploadImageCallback from '../../../../util/uploadImageCallback';

function ChangePictureModal({ isOpen, onClose, imageSrc }) {
  const [image, setImage] = useState([]);
  const [imageSrcUpload, setimageSrcUpload] = useState(null);

  const onChange = async (imageList) => {
    setImage(imageList);
    if (imageList.length > 0) {
      setimageSrcUpload(imageList[0].data_url);
    }
  };

  const removeImage = () => {
    setimageSrcUpload(null);
  };

  const uploadImage = async () => {
    const { data: { link } } = await toast.promise(
      uploadImageCallback(image[0].file, 'profileImage'),
      {
        pending: 'Fazendo upload...',
        success: 'Foto de perfil atualizada com sucesso!',
        error: 'Ocorreu um problema.',
      },
    );

    if (link !== undefined) {
      setimageSrcUpload(link);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="solid_purple.100" textAlign="center">Mudar foto de perfil</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" justifyContent="center">

          <Image
            minW={[
              '60%',
            ]}
            w={[
              '60%',
            ]}
            h={[
              '150px',
              '250px',
              '250px',
            ]}
            borderRadius="50%"
            src={imageSrcUpload || imageSrc}
          />

        </ModalBody>

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
            <ModalFooter flex justifyContent="space-evenly">

              <Button
                color="whiteAlpha.900"
                bgColor="blue.infoButton"
                onClick={onImageUpload}
                {...dragProps}
              >
                Upload
              </Button>
              <Button color="whiteAlpha.900" bgColor="pure_green.100" onClick={uploadImage}>
                Salvar
              </Button>
              <Button
                onClick={() => [onImageRemove(0), removeImage()]}
                color="whiteAlpha.900"
                bgColor="main_red.100"
              >
                Remover
              </Button>

              <CustomToastContainer />
            </ModalFooter>
          )}
        </ImageUploading>

      </ModalContent>
    </Modal>
  );
}

export default ChangePictureModal;

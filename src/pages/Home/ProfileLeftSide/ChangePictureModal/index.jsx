import {
  Button, Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalFooter, ModalHeader, ModalOverlay,
  Image,
} from '@chakra-ui/react';
import { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import uploadImageCallback from '../../../../util/uploadImageCallback';

function ChangePictureModal({ isOpen, onClose, imageSrc }) {
  const [image, setImage] = useState([]);
  const [imageSrcUpload, setimageSrcUpload] = useState(null);

  const onChange = async (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImage(imageList);
  };

  const uploadImage = async () => {
    const { data: { link } } = await uploadImageCallback(image[0].file, 'profileImage');
    setimageSrcUpload(link);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="solid_purple.100" textAlign="center">Mudar foto de perfil</ModalHeader>
        <ModalCloseButton />
        <ModalBody>

          <Image src={imageSrcUpload || imageSrc} size={75} />

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
            // write your building UI
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
              <Button onClick={() => onImageRemove(0)} color="whiteAlpha.900" bgColor="main_red.100">
                Remover
              </Button>
            </ModalFooter>
          )}
        </ImageUploading>

      </ModalContent>
    </Modal>
  );
}

export default ChangePictureModal;

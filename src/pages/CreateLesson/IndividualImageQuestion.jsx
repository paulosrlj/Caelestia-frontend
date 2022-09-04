import { Flex, Image, Input } from '@chakra-ui/react';
import { useState } from 'react';
import ImageUploading from 'react-images-uploading';

function IndividualImageQuestion({
  id, setAnswers, setImages,
}) {
  const [image] = useState([]);
  const [imageSrcUpload, setimageSrcUpload] = useState(null);

  const handleInputChange = (e) => {
    const { value } = e.target;

    setAnswers((oldState) => {
      const newState = { ...oldState };
      newState[`alternative${id}`] = value;
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
          borderWidth="1px"
          borderStyle="solid"
          borderColor="solid_purple.100"
        />
      </Flex>
    </Flex>

  );
}

export default IndividualImageQuestion;

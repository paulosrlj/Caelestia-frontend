/* eslint-disable no-unused-vars */
import {
  Flex, Text, Button, Input, Textarea, Select,
} from '@chakra-ui/react';

import ImageUploading from 'react-images-uploading';

import 'react-toastify/dist/ReactToastify.css';
import NumericInput from '../../components/NumericInput';
import CustomToastContainer from '../../components/Toast/CustomToastContainer';

function AddAchievement({
  badge, setBadge, setAchievementInfo, handleChange, badgeLink,
}) {
  const onChangeImage = (imageList) => {
    setBadge(imageList);
  };

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      w="100%"
      // mt="20px"
    >
      {/* <Text fontSize="26px">Crie a conquista para este módulo</Text> */}

      <Flex
        flexDir="column"
        w="60%"
        maxH="350px"
        mt="10px"
        overflowY="auto"
        alignItems="center"
      >

        <Input
          w="70%"
          placeholder="Nome da conquista"
          my="5px"
          borderWidth="1px"
          borderStyle="solid"
          borderColor="solid_purple.100"
          name="achievementName"
          onChange={handleChange}
        />
        <Textarea
          w="70%"
          placeholder="Descrição"
          my="5px"
          borderWidth="1px"
          borderStyle="solid"
          borderColor="solid_purple.100"
          name="description"
          onChange={handleChange}
        />
        <Select
          w="70%"
          placeholder="Tipo de lição do bônus"
          borderWidth="1px"
          borderStyle="solid"
          borderColor="solid_purple.100"
          onChange={handleChange}
          name="bonusType"
        >
          <option value="theoric">Teórica</option>
          <option value="pratical">Prática</option>
        </Select>

        <NumericInput
          handleNumberInputChange={setAchievementInfo}
          min={0.1}
          name="addBonusPercentagePerLevel"
          placeholder="Porcentagem bônus adicional por nível"
          width={70}
          precision={1}
          step={0.1}
        />

        <NumericInput
          handleNumberInputChange={setAchievementInfo}
          min={1}
          name="levelUpPrice"
          placeholder="Preço para subir de nível"
          width={70}
        />

        <NumericInput
          handleNumberInputChange={setAchievementInfo}
          min={1}
          name="bonusPercentage"
          placeholder="Porcentagem bônus"
          width={70}
        />

      </Flex>

      <Flex
        w="40%"
        justifyContent="space-evenly"
        alignItems="center"
        flexWrap="wrap"
        mt="10px"
      >
        <ImageUploading
          value={badge}
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
              my="5px"
              {...dragProps}
              onClick={onImageUpload}
            >
              Adicionar brasão da conquista

            </Button>
          )}
        </ImageUploading>

        {badgeLink && (
        <Text
          w="40%"
          overflow="hidden"
          borderWidth="1px"
          borderStyle="solid"
          borderColor="solid_purple.100"
          p="5px"
          borderRadius="5px"
          userSelect="none"
        >
          {badgeLink.substring(0, 60)}
        </Text>
        ) }
      </Flex>
      <CustomToastContainer />
    </Flex>
  );
}

export default AddAchievement;

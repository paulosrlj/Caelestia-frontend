import {
  Flex, Text, Button, Input,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import AddAchievement from './AddAchievement';

import uploadImageCallBack from '../../util/uploadImageCallback';

function CreateModule() {
  const notifyError = (message) => toast.error(message);
  const notifySuccess = (message) => toast.success(message);

  const [acCreated, setAcCreated] = useState(false);

  const [moduleInfo, setModuleInfo] = useState({
    moduleName: '',
    achievementId: '',
  });

  const [achievementInfo, setAchievementInfo] = useState({
    achievementName: '',
    description: '',
    bonusPercentage: null,
    bonusType: '',
    addBonusPercentagePerLevel: null,
    levelUpPrice: null,
    achievementBadge: '',
  });

  const [badgeLink, setBadgeLink] = useState('');
  const [badge, setBadge] = useState('');

  const validateObj = (obj) => {
    let valid = true;
    Object.keys(obj).forEach((key) => {
      if (!obj[key]) {
        notifyError(`${key} é inválida`);
        valid = false;
      }
    });
    return valid;
  };

  const handleModuleNameChange = (e) => {
    const { value } = e.target;
    setModuleInfo((oldState) => ({ ...oldState, moduleName: value }));
  };

  const handleAcInfoChange = (e) => {
    const { value, name } = e.target;

    setAchievementInfo((oldState) => {
      const newState = { ...oldState };
      newState[name] = value;
      return newState;
    });
  };

  const handleUploadBadge = async () => {
    if (!badge[0]) {
      notifyError('É preciso de um brasão antes de criar uma conquista!');
      return;
    }

    if (badgeLink) return;

    const { data: { link } } = await toast.promise(
      uploadImageCallBack(badge[0].file, 'achievements'),
      {
        pending: 'Fazendo upload...',
        success: 'Brasão da conquista enviado!',
        error: 'Ocorreu um problema.',
      },
    );

    setBadgeLink(link);
    setAchievementInfo((oldState) => ({ ...oldState, achievementBadge: link }));
  };

  const handleModuleCreation = async () => {
    if (!acCreated || !validateObj(moduleInfo)) return;

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_REQ_URL}/modules`,
        { name: moduleInfo.moduleName, achievementId: moduleInfo.achievementId },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      setModuleInfo((oldState) => {
        const newState = { ...oldState, moduleId: response.data.id };
        return newState;
      });

      notifySuccess('Módulo criado com sucesso!');
    } catch (error) {
      notifyError(error.response.data.error);
    }
  };

  const handleAcCreated = async () => {
    await handleUploadBadge();

    if (!validateObj(achievementInfo)) return;

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_REQ_URL}/achievements`,
        achievementInfo,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      setModuleInfo((oldState) => {
        const newState = { ...oldState };
        newState.achievementId = response.data.id;
        return newState;
      });

      setAcCreated(true);
      notifySuccess('Conquista criada com sucesso!');
    } catch (error) {
      notifyError(error.response.data.error);
    }
  };

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      // h="100vh"
      // w="100vw"
      mt="30px"
      mb="20px"
    >

      <Text fontSize="26px">Criação de módulo</Text>

      <Flex flexDir="column" w="100%" mt="30px" alignItems="center">
        <Input
          required
          placeholder="Escolha um nome para o módulo"
          onChange={handleModuleNameChange}
          w="50%"
          borderWidth="1px"
          borderStyle="solid"
          borderColor="solid_purple.100"
        />

        <AddAchievement
          badge={badge}
          setBadge={setBadge}
          badgeLink={badgeLink}
          setAchievementInfo={setAchievementInfo}
          handleChange={handleAcInfoChange}
        />

        <Flex w="40%" justifyContent="space-around">
          <Button
            color="white"
            backgroundColor="pure_green.100"
            _hover={{ backgroundColor: 'pure_green.200' }}
            my="20px"
            onClick={handleAcCreated}
            // disabled={!achievementInfo.achievementBadge}
          >
            Criar conquista
          </Button>
          <Button
            color="white"
            backgroundColor="pure_green.100"
            _hover={{ backgroundColor: 'pure_green.200' }}
            my="20px"
            onClick={handleModuleCreation}
            disabled={!acCreated}
          >
            Criar módulo
          </Button>
        </Flex>

      </Flex>
    </Flex>
  );
}

export default CreateModule;

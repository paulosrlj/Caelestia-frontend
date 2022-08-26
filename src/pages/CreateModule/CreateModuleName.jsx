import {
  Flex, Text, Button, Input,
} from '@chakra-ui/react';
import { useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Context } from '../../context/CreateModuleContext';

function CreateModuleName() {
  const history = useNavigate();

  const { moduleInfo, setModuleInfo } = useContext(Context);

  const notifyError = () => toast.error('Nome de módulo vazio!');

  const handleModuleNameChange = (e) => {
    const { value } = e.target;

    setModuleInfo((oldState) => ({ ...oldState, moduleName: value }));
  };

  const validateModuleName = () => {
    if (moduleInfo.moduleName.length === 0) {
      notifyError();
    } else {
      history('/admin/create_lesson');
    }
  };

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      w="100vw"
    >
      <Text fontSize="26px">Escolha um nome para o módulo</Text>

      <Flex flexDir="column" w="30%" mt="30px">
        <Input required placeholder="Escolha um nome para o módulo" onChange={handleModuleNameChange} />
        <Button
          color="white"
          backgroundColor="pure_green.100"
          _hover={{ backgroundColor: 'pure_green.200' }}
          my="20px"
          w="100%"
          onClick={validateModuleName}
        >
          Prosseguir

        </Button>
        <Link to="/admin/create_module">
          <Button
            color="white"
            backgroundColor="main_red.100"
            _hover={{ backgroundColor: 'main_red.darker_red' }}
            w="100%"
          >
            Voltar

          </Button>
        </Link>
      </Flex>

    </Flex>
  );
}

export default CreateModuleName;

import {
  Flex, Text, Button, Input,
} from '@chakra-ui/react';
import { useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Context } from '../../context/CreateModuleContext';

function AskModuleId() {
  const history = useNavigate();

  const { moduleInfo, setModuleInfo } = useContext(Context);

  const notifyError = () => toast.error('Id vazio!');

  const handleModuleIdChange = (e) => {
    const { value } = e.target;

    setModuleInfo((oldState) => ({ ...oldState, moduleId: value }));
  };

  const validateModuleName = () => {
    if (moduleInfo.moduleId.length === 0) {
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
      <Text fontSize="26px">Informe o id do módulo</Text>

      <Flex flexDir="column" w="30%" mt="30px">
        <Input required placeholder="Informe o id do módulo" onChange={handleModuleIdChange} />
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

export default AskModuleId;

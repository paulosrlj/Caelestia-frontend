import { Flex } from '@chakra-ui/react';

import TextEditor from '../../layout/TextEditor';
import AppWrapper from '../../wrapper/AppWrapper';

function CreateModule() {
  return (
    <Flex mt="80px">
      <TextEditor />
    </Flex>
  );
}

export default AppWrapper(CreateModule);

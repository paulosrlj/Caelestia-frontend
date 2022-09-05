import { Flex, Image } from '@chakra-ui/react';

import NotFoundImage from './assets/notfound.png';

function NotFound() {
  return (

    <Flex w="100vw" h="100vh" justifyContent="center">
      <Image src={NotFoundImage} alt="Not found image" />
    </Flex>

  );
}

export default NotFound;

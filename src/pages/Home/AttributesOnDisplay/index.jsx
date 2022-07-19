import { Flex, Image, Text } from '@chakra-ui/react';
import CountUp from 'react-countup';

function AttributesOnDisplay({
  attributeImage,
  attributeImageAltText,
  attributeAmount,
}) {
  return (
    <Flex
      alignItems="center"
      pos="relative"
    >
      <Image
        w="50px"
        src={attributeImage}
        alt={attributeImageAltText}
      />
      <Text ml="10px">
        <CountUp end={attributeAmount} duration={2} />
      </Text>

    </Flex>
  );
}

export default AttributesOnDisplay;

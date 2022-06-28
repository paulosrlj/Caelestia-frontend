import {
  Box, Flex, Image, Text,
} from '@chakra-ui/react';

function PageBox({ image, title }) {
  return (
    <Box
      borderRadius="lg"
      bgColor="solid_purple.100"
      boxSize={['150px', '150px', '', '200px', '250px']}
      my={['', '10px']}
      mx={['', '', '', '', '', '20px']}
      cursor="pointer"
      transform="scale(0.8)"
      transition="all 0.5s ease"
      flex={['1 0 calc(50%)',
        '1 0 calc(50%)',
        '1 0 calc(25% - 10px)',
        '0 0 calc(20%)',
        '0 0 calc(25%)',
        '0 0 calc(20%)',
      ]}
      boxShadow="1px 1px 5px rgba(0, 0, 0, 0.5)"
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly"
        w="100%"
        h="100%"
      >
        <Image
          pointerEvents="none"
          boxSize={['70px', '', '', '100px', '', '120px']}
          src={image}
          alt={`${title} image`}
        />
        <Text
          color="white"
          fontSize={['16px', '16px', '', '18px', '22px']}
        >
          {title}
        </Text>
      </Flex>
    </Box>

  );
}

export default PageBox;

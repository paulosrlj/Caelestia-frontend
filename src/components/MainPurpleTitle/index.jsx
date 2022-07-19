import { Heading } from '@chakra-ui/react';

function MainPurpleTitle({ children, mt }) {
  return (
    <Heading
      textAlign="center"
      color="solid_purple.100"
      textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      fontFamily="'Inter', sans-serif"
      fontWeight="light"
      mt={mt || '50px'}
      fontSize={[
        '30px',
        '25px',
        '25px',
        '30px',
      ]}
    >
      {children}
    </Heading>
  );
}

export default MainPurpleTitle;

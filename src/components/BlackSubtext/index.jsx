import { Text } from '@chakra-ui/react';

function BlackSubtext({ children }) {
  return (
    <Text
      ml="15px"
      fontFamily="'Inter', sans-serif"
      color="black.achievementModalTitle"
      background="linear-gradient(90deg, #3E3B41 0%, #564E5E 36.98%, #5B5264 67.19%, #604F6F 100%)"
      backgroundClip="text"
      textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
    >
      {children}
    </Text>
  );
}

export default BlackSubtext;

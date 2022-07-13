import { Flex, Image } from '@chakra-ui/react';

function AchievementBox({ selected, unlocked, onClick }) {
  return (
    <Flex
      onClick={onClick}
      bgColor={unlocked ? 'solid_purple.100' : 'gray.locked'}
      borderRadius="10px"
      p="10px"
      borderWidth={selected ? '6px' : 1}
      borderColor={selected ? 'pure_green.100' : 'transparent'}
      borderStyle={selected ? 'solid' : ''}
      justifyContent="center"
      mx="30px"
      my="20px"
      maxW={[
        '150px',
      ]}
      h={[
        '150px',
      ]}
      cursor="pointer"
    >
      <Image
        src="https://picsum.photos/536/354"
        alt=""
        borderRadius="50%"
        filter={unlocked ? '' : 'grayscale(1)'}
      />
    </Flex>
  );
}

export default AchievementBox;

import { Text } from '@chakra-ui/react';

const colors = {
  white: '#ffffff',
  purple: '#A044FF',
  black: '#3E3B41',
  green: '#00CD96',
};

const fontSizes = {
  small: '16px',
  medium: '20px',
  large: '28px',
};

function GenericText({
  color, children, fontSize, margin = {
    top: '', left: '', right: '', bottom: '',
  },
}) {
  return (
    <Text
      marginLeft={margin.left || ''}
      marginRight={margin.right || ''}
      marginTop={margin.top || ''}
      marginBottom={margin.bottom || ''}
      fontSize={fontSizes[fontSize]}
      color={colors[color]}
      textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      fontFamily="'Inter', sans-serif"
    >
      {children}
    </Text>
  );
}

export default GenericText;

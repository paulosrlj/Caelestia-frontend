import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';

function NumericInput({
  placeholder,
  min,
  max,
  handleNumberInputChange,
  name,
  width,
  precision,
  step,
}) {
  const handleChange = (value) => {
    handleNumberInputChange((oldState) => {
      const newState = { ...oldState };
      newState[name] = Number(value);
      return newState;
    });
  };

  return (
    <NumberInput
      min={min}
      max={max}
      my="5px"
      onChange={handleChange}
      w={width && `${width}%`}
      precision={precision}
      step={step}
    >
      <NumberInputField
        borderWidth="1px"
        borderStyle="solid"
        borderColor="solid_purple.100"
        placeholder={placeholder}
        required
      />
      <NumberInputStepper>
        <NumberIncrementStepper bg="green.200" _active={{ bg: 'green.300' }}>
          +
        </NumberIncrementStepper>
        <NumberDecrementStepper bg="pink.200" _active={{ bg: 'pink.300' }}>
          -
        </NumberDecrementStepper>
      </NumberInputStepper>
    </NumberInput>
  );
}

export default NumericInput;

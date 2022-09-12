import {
  FormControl, FormErrorMessage, FormLabel, Input,
} from '@chakra-ui/react';

function DateFormik({
  name, field, form, placeholder, formLabel,
}) {
  return (
    <FormControl isInvalid={form.errors[name]} isRequired mb="10px">
      <FormLabel>{formLabel}</FormLabel>
      <Input
        placeholder={placeholder}
        {...field}
        size="md"
        type="datetime-local"

      />
      <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
    </FormControl>
  );
}

export default DateFormik;

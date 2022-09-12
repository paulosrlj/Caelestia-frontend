import {
  FormControl, FormErrorMessage, FormLabel, Textarea,
} from '@chakra-ui/react';

function TextAreaFormik({
  name, field, form, placeholder, formLabel,
}) {
  return (
    <FormControl isInvalid={form.errors[name]} isRequired mb="10px">
      <FormLabel>{formLabel}</FormLabel>
      <Textarea placeholder={placeholder} {...field} type="text" />
      <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
    </FormControl>

  );
}

export default TextAreaFormik;

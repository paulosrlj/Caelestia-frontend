import {
  FormControl, FormErrorMessage, FormLabel, Input,
} from '@chakra-ui/react';

function TextFieldFormik({
  field, form, placeholder, formLabel,
}) {
  return (
    <FormControl isInvalid={form.errors.classroomName} isRequired mb="10px">
      <FormLabel>{formLabel}</FormLabel>
      <Input placeholder={placeholder} {...field} type="text" />
      <FormErrorMessage>{form.errors.classroomName}</FormErrorMessage>
    </FormControl>

  );
}

export default TextFieldFormik;

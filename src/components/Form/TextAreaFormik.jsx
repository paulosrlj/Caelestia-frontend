import {
  FormControl, FormErrorMessage, FormLabel, Textarea,
} from '@chakra-ui/react';

function TextAreaFormik({
  field, form, placeholder, formLabel,
}) {
  return (
    <FormControl isInvalid={form.errors.classroomName} isRequired mb="10px">
      <FormLabel>{formLabel}</FormLabel>
      <Textarea placeholder={placeholder} {...field} type="text" />
      <FormErrorMessage>{form.errors.classroomName}</FormErrorMessage>
    </FormControl>

  );
}

export default TextAreaFormik;

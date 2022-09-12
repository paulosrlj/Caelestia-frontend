import {
  FormControl, FormErrorMessage, FormLabel, Select,
} from '@chakra-ui/react';

function SelectFormik({
  name, field, form, placeholder, formLabel, selectOptions, onSelectChange,
}) {
  return (
    <FormControl isInvalid={form.errors[name]} isRequired mb="10px">
      <FormLabel>{formLabel}</FormLabel>
      <Select placeholder={placeholder} {...field} onChange={onSelectChange}>
        {selectOptions.map((opt) => (
          <option key={opt.id} value={opt.name}>{opt.name}</option>
        ))}
      </Select>
      <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
    </FormControl>
  );
}

export default SelectFormik;

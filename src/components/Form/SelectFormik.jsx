import {
  FormControl, FormErrorMessage, FormLabel, Select,
} from '@chakra-ui/react';

function SelectFormik({
  value, name, field, form,
  formLabel, selectOptions, onSelectChange,
}) {
  return (
    <FormControl isInvalid={form.errors[name]} isRequired mb="10px">
      <FormLabel>{formLabel}</FormLabel>
      <Select
        {...field}
        onChange={onSelectChange}
        value={value}
      >
        {selectOptions.map((opt) => (
          <option key={opt.id} value={opt.name}>{opt.name}</option>
        ))}
      </Select>
      <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
    </FormControl>
  );
}

export default SelectFormik;

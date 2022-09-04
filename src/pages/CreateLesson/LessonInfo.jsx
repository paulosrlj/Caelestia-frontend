import {
  Flex, Input, Select, Textarea,
} from '@chakra-ui/react';

import NumericInput from '../../components/NumericInput';

function LessonInfo({
  handleFormChanges, handleNumberInputChange, isTheoric, handleLessonTypeChange,
}) {
  const handleQuestionTypeChange = (e) => {
    const { value } = e.target;

    if (value === 'choice') {
      handleNumberInputChange((oldState) => ({
        ...oldState,
        urlAlternative1: '',
        urlAlternative2: '',
        urlAlternative3: '',
        urlAlternative4: '',
      }));
    }

    handleLessonTypeChange(value);
  };

  return (
    <Flex flexDir="column" w="48%" mt="20px">
      <Input
        name="moduleId"
        w="100%"
        placeholder="Escreva o id do módulo"
        type="text"
        my="5px"
        required
        onChange={handleFormChanges}
        p="10px"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="solid_purple.100"
      />
      <Input
        name="lessonName"
        w="100%"
        placeholder="Escreva o nome da lição"
        type="text"
        min={0}
        my="5px"
        required
        onChange={handleFormChanges}
        p="10px"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="solid_purple.100"
      />

      <Textarea
        name="description"
        isRequired
        w="100%"
        placeholder="Escreva aqui a pergunta da questão"
        onChange={handleFormChanges}
        required
        borderWidth="1px"
        borderStyle="solid"
        borderColor="solid_purple.100"
      />
      <NumericInput
        min={1}
        handleNumberInputChange={handleNumberInputChange}
        placeholder="Quantidade de xp de recompensa"
        name="xpEarned"
      />
      <NumericInput
        min={1}
        handleNumberInputChange={handleNumberInputChange}
        placeholder="Quantidade de moedas de recompensa"
        name="coinsEarned"
      />
      {!isTheoric ? (
        <NumericInput
          min={1}
          max={4}
          handleNumberInputChange={handleNumberInputChange}
          placeholder="Alternativa correta"
          name="correctAlternative"
        />
      ) : ''}

      {!isTheoric ? (
        <Select
          w="100%"
          placeholder="Tipo lição"
          borderWidth="1px"
          borderStyle="solid"
          borderColor="solid_purple.100"
          onChange={handleQuestionTypeChange}
          name="bonusType"
        >
          <option value="choice">Escrita</option>
          <option value="image">Com imagens</option>
        </Select>
      ) : ''}

    </Flex>
  );
}

export default LessonInfo;

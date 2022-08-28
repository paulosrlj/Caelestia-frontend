import {
  Flex, Input, Textarea,
} from '@chakra-ui/react';

function CreateLessonForm({ handleFormChanges }) {
  return (
    <Flex flexDir="column" w="40%" my="20px">
      <Input
        name="lessonName"
        w="100%"
        placeholder="Escreva o nome da lição"
        type="text"
        min={0}
        my="5px"
        required
        onChange={handleFormChanges}
      />
      <Textarea
        name="description"
        isRequired
        w="100%"
        placeholder="Escreva aqui a pergunta da questão"
        onChange={handleFormChanges}
        required
      />

      <Input
        name="xpEarned"
        w="100%"
        placeholder="Quantidade de xp de recompensa"
        type="number"
        min={0}
        my="5px"
        required
        onChange={handleFormChanges}
      />
      <Input
        name="coinsEarned"
        w="100%"
        placeholder="Quantidade de moedas de recompensa"
        type="number"
        min={0}
        my="5px"
        required
        onChange={handleFormChanges}
      />

    </Flex>

  );
}

export default CreateLessonForm;

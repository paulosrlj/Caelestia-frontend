import {
  Table, TableContainer, Tbody, Td, Th, Thead, Tooltip, Tr,
} from '@chakra-ui/react';

function DisplayAllActivities() {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="blackAlpha">
        <Thead bgColor="solid_purple.100">
          <Tr borderRadius="5px">
            <Th color="white">
              <Tooltip label="O nome do discente" aria-label="A tooltip">
                Nome
              </Tooltip>
            </Th>
            <Th color="white">
              <Tooltip label="Data de criação da lição" aria-label="A tooltip">
                Data de Criação
              </Tooltip>
            </Th>
            <Th color="white">
              <Tooltip label="Data de entrega da lição" aria-label="A tooltip">
                Data de entrega
              </Tooltip>
            </Th>
            <Th color="white" isNumeric />
          </Tr>
        </Thead>
        <Tbody>

          <Tr>
            <Td>asd</Td>
            <Td>asd</Td>
            <Td>asd</Td>

          </Tr>

        </Tbody>

      </Table>
    </TableContainer>
  );
}

export default DisplayAllActivities;

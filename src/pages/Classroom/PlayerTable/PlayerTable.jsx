import {
  Flex,
  Table, TableContainer, Tbody, Td, Th, Thead, Tr,
} from '@chakra-ui/react';

import { AiOutlineUserAdd } from 'react-icons/ai';

function AddPlayerIcon() {
  return (
    <Flex
      _active={{ transform: 'scale(0.95)' }}
      transition="all 0.3s ease"
    >
      <AiOutlineUserAdd cursor="pointer" size={26} />
    </Flex>
  );
}

function PlayerTable({ players }) {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="blackAlpha">
        <Thead bgColor="solid_purple.100">
          <Tr borderRadius="5px">
            <Th color="white">Nome</Th>
            <Th color="white">Nickname</Th>
            <Th color="white">Pontos totais</Th>
            <Th color="white" isNumeric />
          </Tr>
        </Thead>
        <Tbody>
          {players.map((player) => (
            <Tr>
              <Td>{player.name}</Td>
              <Td>{player.nickname}</Td>
              <Td>{player.totalPoints}</Td>
              <Td isNumeric><AddPlayerIcon /></Td>
            </Tr>
          ))}
        </Tbody>

      </Table>
    </TableContainer>
  );
}

export default PlayerTable;

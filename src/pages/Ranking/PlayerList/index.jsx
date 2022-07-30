import { Flex } from '@chakra-ui/react';
import PlayerInfoElement from './PlayerInfoElement';

function PlayerList() {
  const players = [
    {
      rankPosition: 1,
      username: 'TogakureRyu',
      rankPoints: 1221,
      totalPoints: 1581591,
      highlighted: true,
    },
    {
      rankPosition: 2,
      username: 'Elcavo',
      rankPoints: 141,
      totalPoints: 1591,
    },
    {
      rankPosition: 3,
      username: 'Elcavo',
      rankPoints: 141,
      totalPoints: 1591,
    },
    {
      rankPosition: 4,
      username: 'Elcavo',
      rankPoints: 141,
      totalPoints: 1591,
    },
    {
      rankPosition: 5,
      username: 'Elcavo',
      rankPoints: 141,
      totalPoints: 1591,
    },
    {
      rankPosition: 6,
      username: 'Elcavo',
      rankPoints: 141,
      totalPoints: 1591,
    },
    {
      rankPosition: 7,
      username: 'Elcavo',
      rankPoints: 141,
      totalPoints: 1591,
    },
    {
      rankPosition: 8,
      username: 'Elcavo',
      rankPoints: 141,
      totalPoints: 1591,
    },
  ];

  return (
    <Flex flexDir="column">
      {players.map((player) => (
        <PlayerInfoElement
          key={player.rankPosition}
          playerData={player}
        />
      ))}
    </Flex>
  );
}

export default PlayerList;

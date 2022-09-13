import {
  Flex,
  Table, TableContainer, Tbody, Td, Th, Thead, Tooltip, Tr, useDisclosure,
} from '@chakra-ui/react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { FaInfoCircle } from 'react-icons/fa';

import ModalPlayerInfo from '../teacher/ModalPlayerInfo';

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

function PlayerTable({ players, isTeacher }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function checkIfActivityIsCompleted(lessons) {
    return lessons.every((l) => l.completed);
  }

  const assignedLessons = [
    {
      lessonName: 'Lição prática 1',
      lessonType: 'pratical',
      completed: false,
    },
    {
      lessonName: 'Lição teórica 1',
      lessonType: 'theoric',
      completed: true,
    },
  ];

  const selectedPlayer = {
    playerInfo: {
      profileImage: 'https://picsum.photos/536/354',
      username: 'Togakureryuu',
      rankingSubtitle: 'Devorador de estrelas',
      coinsAmount: 521,
      expPoints: 12957102,
      level: 21,
    },
    rankingInfo: {
      rankPosition: 1,
      rankPoints: 1015,
      totalPoints: 125810,
    },
    playerStats: {
      theoricLessons: 124,
      praticalLessons: 44,
      highestRank: 'Buraco Negro',
      achievementsCount: 4,
      totalDaysLogged: 33,
    },
    activityLog: [
      {
        day: 15,
        xpEarned: 467,
        date: '15/07/2022',
      },
      {
        day: 16,
        xpEarned: 178,
        date: '16/07/2022',
      },
      {
        day: 17,
        xpEarned: 356,
        date: '17/07/2022',
      },
      {
        day: 18,
        xpEarned: 14,
        date: '18/07/2022',
      },
      {
        day: 19,
        xpEarned: 211,
        date: '19/07/2022',
      },
    ],
    assignedActivities: [
      {
        activityName: 'Atividade 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam explicabo eaque distinctio quod pariatur sunt iure autem quasi reprehenderit vero, tempore architecto, ipsa molestias libero quam, excepturi cumque! Eos.',
        dueDate: new Date().toLocaleDateString(),
        completedDate: new Date().toLocaleDateString(),
        assignedLessons: [
          {
            lessonName: 'Lição prática 1',
            lessonType: 'pratical',
            completed: false,
          },
          {
            lessonName: 'Lição teórica 1',
            lessonType: 'theoric',
            completed: true,
          },
        ],
        completed: checkIfActivityIsCompleted(assignedLessons),
      },
      {
        activityName: 'Atividade 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam explicabo eaque distinctio quod pariatur sunt iure autem quasi reprehenderit vero, tempore architecto, ipsa molestias libero quam, excepturi cumque! Eos.',
        completedDate: new Date().toLocaleDateString(),
        dueDate: new Date().toLocaleDateString(),
        assignedLessons: [
        ],
      },
      {
        activityName: 'Atividade 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam explicabo eaque distinctio quod pariatur sunt iure autem quasi reprehenderit vero, tempore architecto, ipsa molestias libero quam, excepturi cumque! Eos.',
        completedDate: new Date().toLocaleDateString(),
        dueDate: new Date().toLocaleDateString(),
        assignedLessons: [
        ],
      },
      {
        activityName: 'Atividade 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam explicabo eaque distinctio quod pariatur sunt iure autem quasi reprehenderit vero, tempore architecto, ipsa molestias libero quam, excepturi cumque! Eos.',
        completedDate: new Date().toLocaleDateString(),
        dueDate: new Date().toLocaleDateString(),
        assignedLessons: [
        ],
      },
      {
        activityName: 'Atividade 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam explicabo eaque distinctio quod pariatur sunt iure autem quasi reprehenderit vero, tempore architecto, ipsa molestias libero quam, excepturi cumque! Eos.',
        completedDate: new Date().toLocaleDateString(),
        dueDate: new Date().toLocaleDateString(),
        assignedLessons: [
        ],
      },
      {
        activityName: 'Atividade 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam explicabo eaque distinctio quod pariatur sunt iure autem quasi reprehenderit vero, tempore architecto, ipsa molestias libero quam, excepturi cumque! Eos.',
        completedDate: new Date().toLocaleDateString(),
        dueDate: new Date().toLocaleDateString(),
        assignedLessons: [
        ],
      },
      {
        activityName: 'Atividade 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam explicabo eaque distinctio quod pariatur sunt iure autem quasi reprehenderit vero, tempore architecto, ipsa molestias libero quam, excepturi cumque! Eos.',
        completedDate: new Date().toLocaleDateString(),
        dueDate: new Date().toLocaleDateString(),
        assignedLessons: [
        ],
      },
      {
        activityName: 'Atividade 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam explicabo eaque distinctio quod pariatur sunt iure autem quasi reprehenderit vero, tempore architecto, ipsa molestias libero quam, excepturi cumque! Eos.',
        completedDate: new Date().toLocaleDateString(),
        dueDate: new Date().toLocaleDateString(),
        assignedLessons: [
        ],
      },
      {
        activityName: 'Atividade 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam explicabo eaque distinctio quod pariatur sunt iure autem quasi reprehenderit vero, tempore architecto, ipsa molestias libero quam, excepturi cumque! Eos.',
        completedDate: new Date().toLocaleDateString(),
        dueDate: new Date().toLocaleDateString(),
        assignedLessons: [
        ],
      },
      {
        activityName: 'Atividade 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam explicabo eaque distinctio quod pariatur sunt iure autem quasi reprehenderit vero, tempore architecto, ipsa molestias libero quam, excepturi cumque! Eos.',
        completedDate: new Date().toLocaleDateString(),
        dueDate: new Date().toLocaleDateString(),
        assignedLessons: [
        ],
      },
      {
        activityName: 'Atividade 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam explicabo eaque distinctio quod pariatur sunt iure autem quasi reprehenderit vero, tempore architecto, ipsa molestias libero quam, excepturi cumque! Eos.',
        completedDate: new Date().toLocaleDateString(),
        dueDate: new Date().toLocaleDateString(),
        assignedLessons: [
        ],
      },
      {
        activityName: 'Atividade 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam explicabo eaque distinctio quod pariatur sunt iure autem quasi reprehenderit vero, tempore architecto, ipsa molestias libero quam, excepturi cumque! Eos.',
        completedDate: new Date().toLocaleDateString(),
        dueDate: new Date().toLocaleDateString(),
        assignedLessons: [
        ],
      },
      {
        activityName: 'Atividade 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam explicabo eaque distinctio quod pariatur sunt iure autem quasi reprehenderit vero, tempore architecto, ipsa molestias libero quam, excepturi cumque! Eos.',
        completedDate: new Date().toLocaleDateString(),
        dueDate: new Date().toLocaleDateString(),
        assignedLessons: [
        ],
      },
      {
        activityName: 'Atividade 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam explicabo eaque distinctio quod pariatur sunt iure autem quasi reprehenderit vero, tempore architecto, ipsa molestias libero quam, excepturi cumque! Eos.',
        completedDate: new Date().toLocaleDateString(),
        dueDate: new Date().toLocaleDateString(),
        assignedLessons: [
        ],
      },

    ],
  };

  const handleAchievementModalOpen = () => {
    onOpen();
  };

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
              <Tooltip label="O apelido de jogador" aria-label="A tooltip">
                Nickname
              </Tooltip>
            </Th>
            <Th color="white">
              <Tooltip label="Pontos totais" aria-label="A tooltip">
                Pontos totais
              </Tooltip>
            </Th>
            <Th color="white">
              <Tooltip label="Ranking" aria-label="A tooltip">
                Ranking
              </Tooltip>
            </Th>
            <Th color="white" isNumeric />
          </Tr>
        </Thead>
        <Tbody>
          {players.map((player) => (
            <Tr>
              <Td>{player.name}</Td>
              <Td>{player.nickname}</Td>
              <Td>{player.totalPoints}</Td>
              <Td>{player.ranking}</Td>
              {isTeacher ? (
                <Td isNumeric onClick={handleAchievementModalOpen}>
                  <FaInfoCircle cursor="pointer" size={20} />
                </Td>
              ) : (
                <Td isNumeric><AddPlayerIcon /></Td>
              )}

            </Tr>
          ))}
          <ModalPlayerInfo playerInfo={selectedPlayer} isOpen={isOpen} onClose={onClose} />
        </Tbody>

      </Table>
    </TableContainer>
  );
}

export default PlayerTable;

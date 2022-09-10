import {
  Accordion, Flex,
  Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay,
} from '@chakra-ui/react';
import ActivityAccordionItem from './Accordion/ActivityAccordionItem';
import PlayerTable from './PlayerTable/PlayerTable';

function DisplayPlayerOrActivityModal({ modalType, isOpen, onClose }) {
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

  const classroomActivities = [
    {
      activityName: 'Atividade 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam explicabo eaque distinctio quod pariatur sunt iure autem quasi reprehenderit vero, tempore architecto, ipsa molestias libero quam, excepturi cumque! Eos.',
      dueDate: new Date().toLocaleDateString(),
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
      dueDate: new Date().toLocaleDateString(),
      assignedLessons: [
      ],
    },
  ];

  const students = [
    {
      name: 'Paulo Sérgio',
      nickname: 'TogakureRyu',
      totalPoints: 2139,
    },
    {
      name: 'Joanna',
      nickname: 'Joene',
      totalPoints: 123,
    },
    {
      name: 'maria',
      nickname: 'Shiroe',
      totalPoints: 2139,
    },
  ];

  return (
    <Modal
      onClose={onClose}
      size="full"
      isOpen={isOpen}
    >
      <ModalOverlay />
      <ModalContent bgColor="rgba(255, 255, 255, 0.9)">
        <ModalCloseButton />

        <Flex flexDir="column" alignItems="center" justifyContent="center">
          <ModalHeader>
            <Heading
              color="solid_purple.100"
              textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              fontFamily="'Inter', sans-serif"
              fontWeight="light"
              mt="40px"
            >
              Atividades

            </Heading>
          </ModalHeader>

          <ModalBody w="70%" mt="30px">

            {modalType === 'activities' ? (
              <Accordion allowMultiple>
                {classroomActivities.map((ac) => (
                  <ActivityAccordionItem activityData={ac} />
                ))}
              </Accordion>
            ) : (
              <PlayerTable players={students} />
            )}

          </ModalBody>
        </Flex>

      </ModalContent>
    </Modal>
  );
}

export default DisplayPlayerOrActivityModal;

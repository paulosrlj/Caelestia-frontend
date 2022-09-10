import {
  AccordionButton, AccordionIcon, AccordionItem, AccordionPanel,
  Box, Flex, ListItem, Text, UnorderedList,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function ActivityAccordionItem({ activityData }) {
  return (
    <AccordionItem my="10px">
      <AccordionButton borderBottomRadius="5px" color="white" backgroundColor="solid_purple.100">
        <Box flex="1" textAlign="left">
          {activityData.activityName}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <Flex flexDir="column">
          <Text mb="10px">
            {activityData.description}
          </Text>

          <Text mb="10px">
            Data de entrega:
            {' '}
            {activityData.dueDate}
          </Text>

          {activityData.assignedLessons.length > 0 && (
            <Text mb="10px">
              Lições atríbuidas:
              {' '}
              <UnorderedList my="10px">
                {activityData.assignedLessons.map((lesson) => (
                  <Link
                    to={lesson.lessonType === 'theoric' ? `/theoricLesson/${lesson.id}` : '/'}
                  >
                    <ListItem p="3px">{lesson.lessonName}</ListItem>
                  </Link>
                ))}
              </UnorderedList>
            </Text>
          )}

          <Text>
            Status:
            {' '}
            {activityData.completed ? 'Concluído' : 'Não concluído'}
          </Text>
          <Flex />
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default ActivityAccordionItem;

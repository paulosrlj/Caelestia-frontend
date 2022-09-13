import {
  AccordionButton, AccordionIcon, AccordionItem, AccordionPanel,
  Box, Flex, ListItem, Text, UnorderedList,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { FiExternalLink } from 'react-icons/fi';

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
            Data de entrega da atividade:
            {' '}
            {activityData.dueDate}
          </Text>

          <Text mb="10px">
            Data em que foi entregue
            {' '}
            {activityData.completedDate}
          </Text>

          {activityData.assignedLessons.length > 0 && (
            <Text mb="10px">
              Lições atríbuidas:
              {' '}
              <UnorderedList my="10px">
                {activityData.assignedLessons.map((lesson) => (

                  <Flex alignItems="center">
                    <ListItem p="3px">{lesson.lessonName}</ListItem>
                    <Link
                      to={lesson.lessonType === 'theoric' ? `/theoricLesson/${lesson.id}` : '/'}
                    >
                      <FiExternalLink />
                    </Link>
                  </Flex>
                ))}
              </UnorderedList>
            </Text>
          )}

          <Text>Status:</Text>
          {activityData.completed ? (
            <Text color="pure_green.100">
              {' '}
              Concluído
            </Text>
          ) : (
            <Text color="main_red.100">
              {' '}
              Não concluído
            </Text>
          )}

          <Flex />
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default ActivityAccordionItem;

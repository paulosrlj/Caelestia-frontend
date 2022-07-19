import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import { BiBookOpen, BiTestTube } from 'react-icons/bi';
import { IoPlanetOutline } from 'react-icons/io5';
import { GiAchievement } from 'react-icons/gi';
import { AiOutlineCalendar } from 'react-icons/ai';

import MainPurpleTitle from '../../../../components/MainPurpleTitle';
import BlackSubtext from '../../../../components/BlackSubtext';

import styles from '../../style.module.scss';

function PlayerStats() {
  return (
    <motion.div
      className={styles['scroll-section']}
      whileInView={{ opacity: [0, 1], y: [100, 0] }}
      transition={{ duration: 0.8 }}
    >
      <MainPurpleTitle>Estatísticas</MainPurpleTitle>

      <Flex w="60%" my="50px" flexDir="column" alignItems="flex-start">
        <Flex my="5px" alignItems="center">
          <BiBookOpen size={30} color="#A044FF" />
          <BlackSubtext>
            Lições teóricas completas:
            {' '}
            <CountUp end={213} duration={1}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </BlackSubtext>
        </Flex>
        <Flex my="5px" alignItems="center">
          <BiTestTube size={30} color="#A044FF" />
          <BlackSubtext>
            Lições práticas completas:
            {' '}
            <CountUp end={62} duration={1}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </BlackSubtext>
        </Flex>
        <Flex my="5px" alignItems="center">
          <IoPlanetOutline size={30} color="#A044FF" />
          <BlackSubtext>Ranking mais alto alcançado: Buraco Negro</BlackSubtext>
        </Flex>
        <Flex my="5px" alignItems="center">
          <GiAchievement size={30} color="#A044FF" />
          <BlackSubtext>
            Conquistas desbloqueadas:
            {' '}
            <CountUp end={12} duration={1}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </BlackSubtext>
        </Flex>
        <Flex my="5px" alignItems="center">
          <AiOutlineCalendar size={30} color="#A044FF" />
          <BlackSubtext>
            Total de dias logados:
            {' '}
            <CountUp end={21} duration={1}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </BlackSubtext>
        </Flex>
      </Flex>
    </motion.div>
  );
}

export default PlayerStats;

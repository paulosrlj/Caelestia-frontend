import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  CartesianGrid, Legend, Line, LineChart,
  ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import MainPurpleTitle from '../../../../components/MainPurpleTitle';

import styles from '../../style.module.scss';

function PlayerCharts() {
  const dates = [
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
  ];

  return (
    <motion.div
      className={styles['scroll-section']}
      whileInView={{ opacity: [0, 1], y: [100, 0] }}
      transition={{ duration: 0.8 }}
    >
      <Flex flexDir="column" h="100vh" w="100%" justifyContent="space-around">
        <MainPurpleTitle>Progresso semanal de XP</MainPurpleTitle>
        <Flex h="70vh" alignItems="center">
          <ResponsiveContainer>
            <LineChart
              width={500}
              height={300}
              data={dates}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" />
              <Line type="monotone" dataKey="xpEarned" name="Xp ganho" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </Flex>

      </Flex>

    </motion.div>
  );
}

export default PlayerCharts;

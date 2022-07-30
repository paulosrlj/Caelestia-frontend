import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  CartesianGrid, Legend, Line, LineChart,
  ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import MainPurpleTitle from '../../../../components/MainPurpleTitle';

import styles from '../../style.module.scss';

function PlayerCharts({ chartsData }) {
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
              data={chartsData}
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

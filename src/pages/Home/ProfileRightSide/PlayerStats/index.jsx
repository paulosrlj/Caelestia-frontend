/* eslint-disable no-unused-vars */
import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { BiBookOpen, BiTestTube } from 'react-icons/bi';
import { IoPlanetOutline } from 'react-icons/io5';
import { GiAchievement } from 'react-icons/gi';

import {
  CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis,
} from 'recharts';
import { useCallback, useMemo } from 'react';
import MainPurpleTitle from '../../../../components/MainPurpleTitle';
import BlackSubtext from '../../../../components/BlackSubtext';

import styles from '../../style.module.scss';

function PlayerStats() {
  const days = useMemo(() => [], []);

  const getPastDays = useCallback(() => {
    for (let i = 5; i > 0; i -= 1) {
      days.push(new Date().getDate() + 1 - i);
    }
  }, [days]);

  getPastDays();

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

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
          <BlackSubtext>Lições teóricas completas: 213</BlackSubtext>
        </Flex>
        <Flex my="5px" alignItems="center">
          <BiTestTube size={30} color="#A044FF" />
          <BlackSubtext>Lições práticas completas: 62</BlackSubtext>
        </Flex>
        <Flex my="5px" alignItems="center">
          <IoPlanetOutline size={30} color="#A044FF" />
          <BlackSubtext>Ranking mais alto alcançado: Buraco Negro</BlackSubtext>
        </Flex>
        <Flex my="5px" alignItems="center">
          <GiAchievement size={30} color="#A044FF" />
          <BlackSubtext>Conquistas desbloqueadas: 21</BlackSubtext>
        </Flex>
      </Flex>

      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </motion.div>
  );
}

export default PlayerStats;

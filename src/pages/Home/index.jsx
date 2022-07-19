import {
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import AppWrapper from '../../wrapper/AppWrapper';

import styles from './style.module.scss';

import ProfileLeftSide from './ProfileLeftSide';
import AchievementOnDisplay from './ProfileRightSide/AchievementOnDisplay';
import PlayerStats from './ProfileRightSide/PlayerStats';
import PlayerCharts from './ProfileRightSide/PlayerCharts';

function Home() {
  return (
    <Flex
      fontFamily="'Inter', sans-serif"
      color="whiteAlpha.800"
      flexDir={[
        'column',
      ]}
    >

      <ProfileLeftSide />

      <motion.div
        animate={{ opacity: [0, 1], scale: [0, 1] }}
        transition={{ duration: 0.8 }}
        className={styles['right-section-profile']}
      >

        <AchievementOnDisplay />

        <PlayerStats />

        <PlayerCharts />
      </motion.div>

    </Flex>
  );
}

export default AppWrapper(Home, true);

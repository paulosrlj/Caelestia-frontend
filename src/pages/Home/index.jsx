import {
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import styles from './style.module.scss';

import ProfileLeftSide from './ProfileLeftSide';
import AchievementOnDisplay from './ProfileRightSide/AchievementOnDisplay';
import PlayerStats from './ProfileRightSide/PlayerStats';
import PlayerCharts from './ProfileRightSide/PlayerCharts';
import AppWrapper from '../../wrapper/AppWrapper';

function Home() {
  const playerData = {
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
    achievementsInfo: {

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
  };

  return (
    <Flex
      fontFamily="'Inter', sans-serif"
      color="whiteAlpha.800"
      flexDir={[
        'column',
      ]}
    >

      <ProfileLeftSide playerInfo={playerData.playerInfo} isSelfProfile />

      <motion.div
        animate={{ opacity: [0, 1], scale: [0, 1] }}
        transition={{ duration: 0.8 }}
        className={styles['right-section-profile']}
      >

        <AchievementOnDisplay />

        <PlayerStats playerStats={playerData.playerStats} />

        <PlayerCharts chartsData={playerData.activityLog} />
      </motion.div>

    </Flex>
  );
}

export default AppWrapper(Home, true);

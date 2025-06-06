import * as motion from 'motion/react-client';

import { Box } from '@mui/material';

import camperMobileImage from '@features/landing/assets/camping-van-mobile.png';

import Advantages from './Advantages';
import AppFeatures from './AppFeatures';
import Footer from './Footer';
import Header from './Header';
import MobileHero from './Hero/MobileHero';
import MobileNextTrip from './MobileNextTrip';

export default function MobileLandingPage() {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.3 }}
      >
        <Box
          component="img"
          src={camperMobileImage}
          alt="Camping Van"
          height="384px"
          width="100%"
          sx={{ px: '15px' }}
        />
      </motion.div>
      <Box sx={{ px: '16px' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5 }}
        >
          <MobileHero />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.15 }}
        >
          <AppFeatures />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.3 }}
        >
          <Advantages />
        </motion.div>
      </Box>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.7 }}
      >
        <MobileNextTrip />
      </motion.div>
      <Footer />
    </>
  );
}

import * as motion from 'motion/react-client';

import { Box } from '@mui/material';

import Advantages from './Advantages';
import AppFeatures from './AppFeatures';
import DesktopNextTrip from './DesktopNextTrip';
import Footer from './Footer';
import Header from './Header';
import DesktopHero from './Hero/DesktopHero';

export default function DesktopLandingPage() {
  return (
    <>
      <Header />
      <Box sx={{ height: '32px' }} />
      <Box sx={{ px: '100px' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5 }}
        >
          <DesktopHero />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
        >
          <AppFeatures />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.9 }}
        >
          <Advantages />
        </motion.div>
      </Box>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.8 }}
      >
        <DesktopNextTrip />
      </motion.div>
      <Footer />
    </>
  );
}

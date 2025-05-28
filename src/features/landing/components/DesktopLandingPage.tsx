import { Box } from '@mui/material';

import Advantages from './Advantages';
import AppFeatures from './AppFeatures';
import Footer from './Footer';
import Header from './Header';
import DesktopHero from './Hero/DesktopHero';
import NextTrip from './NextTrip';

export default function DesktopLandingPage() {
  return (
    <>
      <Header />
      <Box sx={{ height: '32px' }} />
      <Box sx={{ px: '100px' }}>
        <DesktopHero />
        <AppFeatures />
        <Advantages />
      </Box>
      <NextTrip />
      <Footer />
    </>
  );
}

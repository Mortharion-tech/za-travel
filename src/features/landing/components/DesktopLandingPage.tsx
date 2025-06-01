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
        <DesktopHero />
        <AppFeatures />
        <Advantages />
      </Box>
      <DesktopNextTrip />
      <Footer />
    </>
  );
}

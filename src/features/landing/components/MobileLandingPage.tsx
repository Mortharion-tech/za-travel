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
      <Box
        component="img"
        src={camperMobileImage}
        alt="Camping Van"
        height="384px"
        width="100%"
        sx={{ px: '15px' }}
      />
      <Box sx={{ px: '16px' }}>
        <MobileHero />
        <AppFeatures />
        <Advantages />
      </Box>
      <MobileNextTrip />
      <Footer />
    </>
  );
}

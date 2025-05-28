import { Box } from '@mui/material';

import camperMobileImage from '@features/landing/assets/camping-van-mobile.png';

import Advantages from './Advantages';
import AppFeatures from './AppFeatures';
import Footer from './Footer';
import Header from './Header';
import MobileHero from './Hero/MobileHero';
import NextTrip from './NextTrip';

export default function MobileLandingPage() {
  return (
    <>
      <Header />
      <Box
        component="img"
        src={camperMobileImage}
        alt="Camping Van"
        height="384px"
      />
      <Box sx={{ px: '100px' }}>
        <MobileHero />
        <AppFeatures />
        <Advantages />
      </Box>
      <NextTrip />
      <Footer />
    </>
  );
}

import { Box } from '@mui/material';

import Advantages from './Advantages';
import AppFeatures from './AppFeatures';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero/Hero';
import NextTrip from './NextTrip';

export default function LandingPage() {
  return (
    <>
      <Header />
      <Box sx={{ px: '100px' }}>
        <Hero />
        <AppFeatures />
        <Advantages />
      </Box>
      <NextTrip />
      <Footer />
    </>
  );
}

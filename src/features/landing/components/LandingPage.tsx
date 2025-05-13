import { Container } from '@mui/material';

import Advantages from './Advantages';
import AppFeatures from './AppFeatures';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero/Hero';
import NextTrip from './NextTrip';

export default function LandingPage() {
  return (
    <>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Header />
        <Hero />
        <AppFeatures />
        <Advantages />
      </Container>
      <NextTrip />
      <Footer />
    </>
  );
}

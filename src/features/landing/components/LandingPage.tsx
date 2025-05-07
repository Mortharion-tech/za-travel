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
      <Hero />
      <AppFeatures />
      <Advantages />
      <NextTrip />
      <Footer />
    </>
  );
}

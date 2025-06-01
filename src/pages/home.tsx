import { motion, useScroll } from 'motion/react';

import DesktopLandingPage from '@features/landing/components/DesktopLandingPage';
import MobileLandingPage from '@features/landing/components/MobileLandingPage';
import { useBreakpoints } from '@hooks/useBreakpoints';

export default function HomePage() {
  const { lg } = useBreakpoints();
  const { scrollYProgress } = useScroll();

  if (lg) {
    return (
      <>
        <motion.div style={{ scaleX: scrollYProgress }} />
        <DesktopLandingPage />
      </>
    );
  }
  return (
    <motion.div style={{ scaleX: scrollYProgress }}>
      <MobileLandingPage />
    </motion.div>
  );
}

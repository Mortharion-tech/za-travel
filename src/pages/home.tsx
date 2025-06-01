
import DesktopLandingPage from '@features/landing/components/DesktopLandingPage';
import MobileLandingPage from '@features/landing/components/MobileLandingPage';
import { useBreakpoints } from '@hooks/useBreakpoints';

export default function HomePage() {
  const { lg } = useBreakpoints();

  if (lg) {
    return <DesktopLandingPage />;
  }
  return <MobileLandingPage />;
}

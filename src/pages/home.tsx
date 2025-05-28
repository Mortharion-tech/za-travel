import DesktopLandingPage from '@features/landing/components/DesktopLandingPage';
import MobileLandingPage from '@features/landing/components/MobileLandingPage';
import { useBreakpoints } from '@hooks/useBreakpoints';

export default function HomePage() {
  const { md } = useBreakpoints();
  if (md) {
    return <DesktopLandingPage />;
  }
  return <MobileLandingPage />;
}

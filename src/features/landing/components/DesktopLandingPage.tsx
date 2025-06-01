import { useEffect, useState } from 'react';

import Advantages from './Advantages';
import AppFeatures from './AppFeatures';
import DesktopNextTrip from './DesktopNextTrip';
import Footer from './Footer';
import Header from './Header';
import DesktopHero from './Hero/DesktopHero';

const AnimatedSection = ({ children, delay = 0, direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1, rootMargin: '50px' },
    );

    if (ref) {
      observer.observe(ref);
    }

    return () => observer.disconnect();
  }, [ref, delay]);

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0)';

    switch (direction) {
      case 'left':
        return 'translate(-50px, 0)';
      case 'right':
        return 'translate(50px, 0)';
      case 'up':
        return 'translate(0, 30px)';
      case 'down':
        return 'translate(0, -30px)';
      default:
        return 'translate(0, 30px)';
    }
  };

  return (
    <div
      ref={setRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
      }}
    >
      {children}
    </div>
  );
};

const StaggeredSection = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1, rootMargin: '50px' },
    );

    if (ref) {
      observer.observe(ref);
    }

    return () => observer.disconnect();
  }, [ref, delay]);

  return (
    <div ref={setRef}>
      {React.Children.map(children, (child, index) => (
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default function DesktopLandingPage() {
  return (
    <>
      <Header />
      <div style={{ height: '32px' }} />
      <div style={{ padding: '0 100px' }}>
        <AnimatedSection>
          <DesktopHero />
        </AnimatedSection>

        <AnimatedSection direction="left" delay={200}>
          <AppFeatures />
        </AnimatedSection>

        <AnimatedSection direction="right" delay={300}>
          <Advantages />
        </AnimatedSection>
      </div>

      <AnimatedSection direction="up" delay={400}>
        <DesktopNextTrip />
      </AnimatedSection>

      <Footer />
    </>
  );
}

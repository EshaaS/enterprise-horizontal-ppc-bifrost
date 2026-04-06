import { Suspense, lazy, useEffect, useState } from 'react';
import { Navigation } from '@/app/components/Navigation';
import { HeroSection } from '@/app/components/HeroSection';
import { HorizontalScrollSection } from '@/app/components/HorizontalScrollSection';
import { StickyCtaBanner } from '@/app/components/StickyCtaBanner';

const StackedCardsSection = lazy(() =>
  import('@/app/components/StackedCardsSection').then((module) => ({ default: module.StackedCardsSection }))
);
const FeaturesSection = lazy(() =>
  import('@/app/components/ContentSections').then((module) => ({ default: module.FeaturesSection }))
);
const UseCasesSection = lazy(() =>
  import('@/app/components/ContentSections').then((module) => ({ default: module.UseCasesSection }))
);
const EnterpriseConsultationSection = lazy(() =>
  import('@/app/components/ContentSections').then((module) => ({ default: module.EnterpriseConsultationSection }))
);
const IntegrationsSection = lazy(() =>
  import('@/app/components/ContentSections').then((module) => ({ default: module.IntegrationsSection }))
);
const TestimonialsSection = lazy(() =>
  import('@/app/components/ContentSections').then((module) => ({ default: module.TestimonialsSection }))
);
const TeamSection = lazy(() =>
  import('@/app/components/ContentSections').then((module) => ({ default: module.TeamSection }))
);

export default function App() {
  const [showDesktopStickyCta, setShowDesktopStickyCta] = useState(false);
  const [showMobileStickyCta, setShowMobileStickyCta] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById('hero-section');

    if (!heroSection) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowDesktopStickyCta(!entry.isIntersecting);
      },
      {
        threshold: 0.15
      }
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (window.innerWidth < 640) {
        setShowMobileStickyCta(true);
      }
    }, 3000);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7f7f7_16%,#ffffff_32%,#f2f2f2_50%,#ffffff_68%,#f3f3f3_84%,#ffffff_100%)]">
      <Navigation />
      
      <main className="bg-transparent">
        <HeroSection />
        <HorizontalScrollSection />
        <Suspense fallback={null}>
          <StackedCardsSection />
          <FeaturesSection />
          <EnterpriseConsultationSection />
          <TestimonialsSection />
          <UseCasesSection />
          <IntegrationsSection />
          <TeamSection />
        </Suspense>
      </main>

      <StickyCtaBanner desktopVisible={showDesktopStickyCta} mobileVisible={showMobileStickyCta} />
    </div>
  );
}

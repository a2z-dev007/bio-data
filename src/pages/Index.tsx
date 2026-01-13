import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PersonalInfo from '@/components/PersonalInfo';
import Education from '@/components/Education';
import Professional from '@/components/Professional';
import Family from '@/components/Family';
import Contact from '@/components/Contact';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20 lg:pb-0">
        <HeroSection />
        <PersonalInfo />
        <Education />
        <Professional />
        <Family />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BottomNav />
    </div>
  );
};

export default Index;

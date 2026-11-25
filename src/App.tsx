import { useState } from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Training } from './components/Training';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#080B12] text-[#F5F7FF] selection:bg-[#6485FF]/30 selection:text-[#36C5E8]">
      {/* Background Ambience, Grid & Minimal Particle Motes */}
      <BackgroundEffects />

      {/* Sticky Navigation with 7 Core Sections + Resume CTA */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Portfolio Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <About onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <Skills />
        <Projects />
        <Education />
        <Training />
        <Resume />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* High-Fidelity Resume Document Preview Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;

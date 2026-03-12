import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import AnimatedBackground from './components/AnimatedBackground';
import Splash from './components/Splash';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Skills from './components/Skills';
import resumeData from './data/resume.json';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen font-sans text-slate-300 selection:bg-emerald-500/30">
      <AnimatedBackground />

      <AnimatePresence>
        {showSplash && <Splash onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <main className="relative z-10">
          <Hero data={resumeData} />
          <Experience data={resumeData} />
          <Projects data={resumeData} />
          <Activities data={resumeData} />
          <Skills data={resumeData} />
          
          <footer className="py-12 text-center border-t border-slate-800/50 text-slate-500">
            <p>© {new Date().getFullYear()} {resumeData.personal.name}. All rights reserved.</p>
          </footer>
        </main>
      )}
    </div>
  );
}

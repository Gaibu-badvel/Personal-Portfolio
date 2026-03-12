import { motion } from 'motion/react';
import { Download, ChevronDown } from 'lucide-react';

export default function Hero({ data }: { data: any }) {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownload = () => {
    // In a real app, this would link to a PDF or generate one
    alert('Download Resume functionality would go here.');
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-20 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="z-10 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-emerald-400 uppercase rounded-full bg-emerald-400/10 border border-emerald-400/20 backdrop-blur-md"
        >
          {data.education[0].degree} in {data.education[0].major}
        </motion.div>

        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500">
          {data.personal.name}
        </h1>

        <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-slate-400 sm:text-xl">
          A passionate software engineer specializing in Python, React, and Machine Learning. 
          Building scalable solutions with a focus on performance and clean architecture.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={scrollToExperience}
            className="flex items-center justify-center w-full px-8 py-4 text-sm font-semibold text-slate-900 transition-all rounded-full sm:w-auto bg-gradient-to-r from-emerald-400 to-cyan-400 hover:scale-105 hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]"
          >
            View Experience
          </button>
          
          <button
            onClick={handleDownload}
            className="flex items-center justify-center w-full gap-2 px-8 py-4 text-sm font-semibold text-white transition-all border rounded-full sm:w-auto border-slate-700 bg-slate-800/50 backdrop-blur-md hover:bg-slate-800 hover:border-slate-600 hover:scale-105"
          >
            <Download size={18} />
            Download Resume
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}

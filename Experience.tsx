import { motion } from 'motion/react';
import { Briefcase, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function Experience({ data }: { data: any }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="px-6 py-24 mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-12 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Experience
        </h2>

        <div className="space-y-6">
          {data.experience.map((exp: any, index: number) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden transition-all border rounded-2xl bg-slate-900/40 border-slate-800/60 backdrop-blur-md hover:border-slate-700/80"
              >
                <div
                  className="flex flex-col justify-between p-6 cursor-pointer sm:flex-row sm:items-center"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 shrink-0">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                      <p className="text-lg text-emerald-400">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-4 sm:mt-0 text-slate-400">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Calendar size={16} />
                      {exp.startDate} - {exp.endDate}
                    </div>
                    <button className="p-2 transition-colors rounded-full hover:bg-slate-800">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>
                </div>

                <motion.div
                  initial={false}
                  animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 border-t border-slate-800/50">
                    <ul className="mt-4 space-y-3">
                      {exp.bullets.map((bullet: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

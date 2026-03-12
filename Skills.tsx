import { motion } from 'motion/react';
import { Code2, Database, Wrench, Globe, BookOpen } from 'lucide-react';

export default function Skills({ data }: { data: any }) {
  const categories = [
    { title: 'Languages', icon: <Code2 size={20} />, items: data.skills.languages },
    { title: 'Frameworks', icon: <Globe size={20} />, items: data.skills.frameworks },
    { title: 'Databases', icon: <Database size={20} />, items: data.skills.databases },
    { title: 'Tools', icon: <Wrench size={20} />, items: data.skills.tools },
    { title: 'Core Concepts', icon: <BookOpen size={20} />, items: data.skills.coreConcepts },
  ];

  return (
    <section id="skills" className="px-6 py-24 mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-12 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 transition-all border rounded-2xl bg-slate-900/40 border-slate-800/60 backdrop-blur-md hover:border-slate-700/80"
            >
              <div className="flex items-center gap-3 mb-6 text-emerald-400">
                {category.icon}
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg text-slate-300 bg-slate-800/50 border border-slate-700/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

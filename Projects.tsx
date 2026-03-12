import { motion } from 'motion/react';
import { FolderGit2, ExternalLink } from 'lucide-react';

export default function Projects({ data }: { data: any }) {
  return (
    <section id="projects" className="px-6 py-24 mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-12 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {data.projects.map((project: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col justify-between p-8 overflow-hidden transition-all border group rounded-3xl bg-slate-900/40 border-slate-800/60 backdrop-blur-md hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/30"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 transition-opacity group-hover:opacity-100 text-emerald-400">
                <ExternalLink size={24} />
              </div>

              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <FolderGit2 size={24} />
                </div>
                
                <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {project.name}
                </h3>
                
                <p className="mb-6 text-sm font-medium text-slate-400">
                  {project.startDate} - {project.endDate}
                </p>

                <ul className="mb-8 space-y-3">
                  {project.bullets.map((bullet: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500/50 shrink-0" />
                      <span className="text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.split(',').map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full text-emerald-300 bg-emerald-500/10 border border-emerald-500/20"
                  >
                    {tech.trim()}
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

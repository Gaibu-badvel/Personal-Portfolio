import { motion } from 'motion/react';
import { Users, Award } from 'lucide-react';

export default function Activities({ data }: { data: any }) {
  return (
    <section id="activities" className="px-6 py-24 mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-12 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Leadership & Activities
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {data.activities.map((activity: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 overflow-hidden transition-all border group rounded-3xl bg-slate-900/40 border-slate-800/60 backdrop-blur-md hover:border-slate-700/80"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                  {index === 0 ? <Users size={24} /> : <Award size={24} />}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{activity.organization}</h3>
                  <p className="text-sm font-medium text-blue-400">{activity.role}</p>
                </div>
              </div>

              <p className="mb-6 text-sm font-medium text-slate-400">
                {activity.startDate} - {activity.endDate}
              </p>

              <ul className="space-y-3">
                {activity.bullets.map((bullet: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500/50 shrink-0" />
                    <span className="text-sm leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

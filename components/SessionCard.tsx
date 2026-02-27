
import React from 'react';
import { motion } from 'framer-motion';

interface SessionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'cyan' | 'purple';
  index: number;
}

const SessionCard: React.FC<SessionCardProps> = ({ title, description, icon, color, index }) => {
  const borderColorClass = color === 'cyan' ? 'hover:neon-border-cyan' : 'hover:neon-border-purple';
  const shadowColorClass = color === 'cyan' ? 'group-hover:shadow-[0_0_30px_rgba(0,242,255,0.2)]' : 'group-hover:shadow-[0_0_30px_rgba(188,19,254,0.2)]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group glass p-8 rounded-3xl transition-all duration-300 ${borderColorClass} ${shadowColorClass} h-full flex flex-col`}
    >
      <div className={`mb-6 p-4 rounded-2xl inline-block bg-white/5 group-hover:bg-white/10 transition-colors`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 font-heading group-hover:text-glow-cyan transition-all">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      <button className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest ${color === 'cyan' ? 'text-[#00f2ff]' : 'text-[#bc13fe]'} hover:underline`}>
        Explore Track 
        <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          →
        </motion.span>
      </button>
    </motion.div>
  );
};

export default SessionCard;

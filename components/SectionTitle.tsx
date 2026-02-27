
import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, center = false }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`flex items-center gap-3 mb-4 ${center ? 'justify-center' : ''}`}
      >
        <span className="w-6 h-[2px] bg-[#00f2ff]"></span>
        <span className="text-[#00f2ff] font-bold tracking-[0.4em] uppercase text-[10px] font-logo">
          {subtitle}
        </span>
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-5xl font-black font-logo uppercase tracking-tighter"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionTitle;

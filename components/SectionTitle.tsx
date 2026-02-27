import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, center = false }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-4 justify-start"
        style={{ justifyContent: center ? 'center' : 'flex-start' }}
      >
        <div className="h-[1px] w-6 bg-[#00f2ff]"></div>
        <span className="text-[#00f2ff] font-logo text-[10px] tracking-[0.4em] uppercase font-bold">
          {subtitle}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl font-black font-logo tracking-tighter uppercase text-white"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionTitle;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [isExpired, setIsExpired] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        setIsExpired(true);
        return null;
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    };

    // Initial check
    const initialTime = calculateTimeLeft();
    if (initialTime) setTimeLeft(initialTime);

    const timer = setInterval(() => {
      const time = calculateTimeLeft();
      if (!time) {
        clearInterval(timer);
      } else {
        setTimeLeft(time);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (isExpired) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4"
      >
        <motion.div 
          animate={{ 
            scale: [1, 1.02, 1],
            boxShadow: [
              "0 0 30px rgba(0,242,255,0.2)",
              "0 0 50px rgba(0,242,255,0.4)",
              "0 0 30px rgba(0,242,255,0.2)"
            ]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 3, 
            ease: "easeInOut" 
          }}
          className="px-10 py-6 glass border-2 border-[#00f2ff] relative overflow-hidden group"
        >
          <motion.div 
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 bg-[#00f2ff]"
          ></motion.div>
          <span className="relative z-10 text-[#00f2ff] font-logo text-xl md:text-3xl font-black tracking-widest uppercase text-glow-cyan">
            Workshop In Progress
          </span>
        </motion.div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f2ff] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00f2ff]"></span>
          </span>
          <span className="text-white/60 font-tech text-xs tracking-[0.4em] uppercase">
            Systems Online • Live Lab Sessions
          </span>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds },
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-24 md:h-24 glass rounded-2xl flex items-center justify-center mb-2 border-b-2 border-[#00f2ff]">
            <span className="text-2xl md:text-4xl font-bold font-heading text-glow-cyan">
              {String(item.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;

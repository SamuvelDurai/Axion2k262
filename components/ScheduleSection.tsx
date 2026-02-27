
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const scheduleData = [
  { time: "09:00 AM", event: "Keynote: The AI-oT Landscape", location: "Main Auditorium" },
  { time: "11:00 AM", event: "Track Sessions: Morning Block", location: "Halls A, B & C" },
  { time: "01:30 PM", event: "Lunch & Networking Mixer", location: "Tech Lounge" },
  { time: "02:30 PM", event: "Hands-on Workshop: Edge AI", location: "Innovation Lab" },
  { time: "05:00 PM", event: "Closing Ceremony & Awards", location: "Main Auditorium" },
];

const ScheduleSection: React.FC = () => {
  return (
    <section id="schedule" className="py-24 bg-[#0b0e14]">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Timeline" title="Event Schedule" center />
        
        <div className="max-w-4xl mx-auto mt-16 relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f2ff] via-[#bc13fe] to-transparent"></div>
          
          <div className="space-y-12">
            {scheduleData.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0b0e14] border-2 border-[#00f2ff] z-10 shadow-[0_0_10px_rgba(0,242,255,0.8)]"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="glass p-6 rounded-2xl border border-white/5 hover:border-[#00f2ff]/30 transition-colors">
                    <span className="text-[#00f2ff] font-bold font-heading mb-2 block">{item.time}</span>
                    <h4 className="text-xl font-bold mb-1">{item.event}</h4>
                    <p className="text-gray-500 text-sm uppercase tracking-widest">{item.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;

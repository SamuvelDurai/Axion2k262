import React from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Mail } from 'lucide-react';
import SectionTitle from './SectionTitle';

const coordinators = [
  {
    role: "Faculty Coordinator",
    name: "Mr. M. Dhanaseelan",
    phone: "8940312281"
  },
  {
    role: "Faculty Coordinator",
    name: "Mrs. M. Anitha",
    phone: "9750258030"
  },
  {
    role: "Student Coordinator",
    name: "Mr. M.R. Shri ram",
    phone: "9080707934"
  },
  {
    role: "Student Coordinator",
    name: "Mr. C. Samuvel Durai",
    phone: "9500468597"
  },
  {
    role: "Student Coordinator",
    name: "Mr. S. Sivakasi",
    phone: "7305739785"
  },
  {
    role: "Student Coordinator",
    name: "Mr. R. Sanjay",
    phone: "8825680976"
  },
  {
    role: "Student Coordinator",
    name: "Ms. V.S. Sowmya"
  },
  {
    role: "Student Coordinator",
    name: "Ms. T. Kavinaya"
  },
  {
    role: "Student Coordinator",
    name: "Ms. A. Anandha Selvi"
  },
  {
    role: "Student Coordinator",
    name: "Ms. S. Sanjuka"
  }
];

const CoordinatorsSection: React.FC = () => {
  return (
    <section id="coordinators" className="py-24 bg-[#0b0e14]">
      <div className="container mx-auto px-6">
        <SectionTitle 
          subtitle="The Human Nexus" 
          title="Coordinators" 
          center 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {coordinators.map((coord, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative group h-full"
            >
              {/* Technical Box Frame */}
              <div className="relative h-full bg-[#0d1118] border border-white/10 p-8 transition-all duration-500 group-hover:border-[#00f2ff]/50 group-hover:shadow-[0_0_30px_rgba(0,242,255,0.1)]">
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00f2ff] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00f2ff] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00f2ff] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00f2ff] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[9px] text-[#bc13fe] font-logo uppercase tracking-[0.4em] font-bold">
                        {coord.role}
                      </span>
                      <span className="text-[9px] text-white/10 font-tech">0x{idx + 10}</span>
                    </div>
                    
                    <h3 className="text-2xl font-black text-white font-logo uppercase tracking-tighter leading-tight mb-2 group-hover:text-[#00f2ff] transition-colors">
                      {coord.name.split(' ').map((part, i) => 
                        part.match(/^(Mr|Mrs|Ms)\.?$/i) ? (
                          <span key={i} className="font-sans normal-case text-[10px] tracking-normal opacity-50 mr-1 inline-block align-middle">
                            {part}
                          </span>
                        ) : (
                          <span key={i}>{part}{i < coord.name.split(' ').length - 1 ? ' ' : ''}</span>
                        )
                      )}
                    </h3>
                    
                    <div className="w-8 h-[2px] bg-[#00f2ff]/30 mb-8 group-hover:w-full transition-all duration-700"></div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-[10px] font-tech text-gray-500 uppercase tracking-widest">
                      <span>Status</span>
                      <span className="text-[#00f2ff] animate-pulse">Online</span>
                    </div>
                    
                    {coord.phone ? (
                      <a 
                        href={`tel:${coord.phone}`} 
                        className="flex items-center justify-center gap-3 w-full py-4 bg-white/5 border border-white/5 hover:bg-white hover:text-[#0b0e14] transition-all duration-300 font-tech text-xs font-black tracking-[0.2em] uppercase"
                      >
                        <Phone size={14} />
                        <span>{coord.phone}</span>
                      </a>
                    ) : (
                      <div className="flex items-center justify-center gap-3 w-full py-4 bg-white/[0.02] border border-white/5 text-gray-600 font-tech text-[10px] tracking-[0.2em] uppercase">
                        <span>-----------</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoordinatorsSection;

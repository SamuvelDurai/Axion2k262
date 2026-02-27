
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, User, ShieldCheck, GraduationCap } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface CoordinatorProps {
  name: string;
  phone: string;
  role?: string;
  type: 'faculty' | 'student';
}

const CoordinatorCard: React.FC<CoordinatorProps> = ({ name, phone, role, type }) => {
  const isFaculty = type === 'faculty';
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`glass p-6 border-l-4 ${isFaculty ? 'border-[#00f2ff] hover:neon-border-cyan' : 'border-[#bc13fe] hover:neon-border-purple'} transition-all duration-300 flex flex-col justify-between`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-xl font-bold font-heading tracking-tight text-white">
            {name}
          </h4>
          {role && <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">{role}</p>}
        </div>
        <div className={`p-2 rounded-lg ${isFaculty ? 'bg-[#00f2ff]/10 text-[#00f2ff]' : 'bg-[#bc13fe]/10 text-[#bc13fe]'}`}>
          {isFaculty ? <ShieldCheck size={20} /> : <TargetAudienceIcon type={type} />}
        </div>
      </div>
      
      <a 
        href={`tel:${phone.replace(/\s+/g, '').replace(/-/g, '')}`} 
        className="flex items-center gap-3 text-sm font-tech font-bold tracking-widest text-gray-400 hover:text-white transition-colors mt-4"
      >
        <Phone size={14} className={isFaculty ? 'text-[#00f2ff]' : 'text-[#bc13fe]'} />
        {phone}
      </a>
    </motion.div>
  );
};

const TargetAudienceIcon = ({ type }: { type: string }) => {
  return type === 'faculty' ? <ShieldCheck size={20} /> : <GraduationCap size={20} />;
};

const CoordinatorsSection: React.FC = () => {
  const faculty = [
    { name: "Mr. M. Dhanaseelan", phone: "8940312281", role: "Faculty Coordinator" },
    { name: "Mrs. M. Anitha", phone: "9750258030", role: "Faculty Coordinator" },
  ];

  const students = [
    { name: "Mr. M.R. Shriram", phone: "9080707934", role: "Student Coordinator" },
    { name: "Mr. C. Samuvel Durai", phone: "9500468597", role: "Student Coordinator" },
    { name: "Mr. S. Sivakasi", phone: "7305739785", role: "Student Coordinator" },
    { name: "Mr. R. Sanjay", phone: "8825680679", role: "Student Coordinator" },
  ];

  return (
    <section id="coordinators" className="py-24 bg-[#0b0e14]">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="The Core Team" title="Event Nexus" center />
        
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-10 justify-center">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#00f2ff]"></div>
            <h3 className="font-logo text-sm tracking-[0.3em] uppercase text-[#00f2ff]">Faculty Coordinators</h3>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#00f2ff]"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faculty.map((f, i) => (
              <CoordinatorCard key={i} {...f} type="faculty" />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-10 justify-center">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#bc13fe]"></div>
            <h3 className="font-logo text-sm tracking-[0.3em] uppercase text-[#bc13fe]">Student Coordinators</h3>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#bc13fe]"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {students.map((s, i) => (
              <CoordinatorCard key={i} {...s} type="student" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoordinatorsSection;

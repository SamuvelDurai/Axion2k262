import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, MapPin, MessageCircle, Navigation } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface SupportHubProps {
  whatsappLink: string;
}

const SupportHub: React.FC<SupportHubProps> = ({ whatsappLink }) => {
  return (
    <section id="support" className="py-24 bg-[#0b0e14] border-t border-white/5">
      <div className="container mx-auto px-6">
        <SectionTitle 
          subtitle="Help & Support" 
          title="Central Hub" 
          center 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {/* Help & Support Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="h-full bg-[#0d1118] border border-white/10 p-8 transition-all duration-500 group-hover:border-[#bc13fe]/50">
              <div className="flex items-center gap-3 mb-8">
                <HelpCircle size={20} className="text-[#bc13fe]" />
                <span className="text-[10px] text-[#bc13fe] font-logo uppercase tracking-[0.4em] font-bold">Help & Support</span>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-white font-logo text-sm uppercase tracking-wider mb-2">Registration Fee?</h4>
                  <p className="text-gray-500 font-tech text-sm leading-relaxed">
                    The standard fee is ₹250. This covers events, participation kits, and certifications.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-white font-logo text-sm uppercase tracking-wider mb-2">Spot Registration?</h4>
                  <p className="text-gray-500 font-tech text-sm leading-relaxed">
                    On-spot access is available, though pre-registration is recommended for prioritized slotting.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Direct Contact Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative group"
          >
            <div className="h-full bg-[#0d1118] border border-white/10 p-8 transition-all duration-500 group-hover:border-[#00f2ff]/50">
              <div className="flex items-center gap-3 mb-8">
                <MapPin size={20} className="text-[#00f2ff]" />
                <span className="text-[10px] text-[#00f2ff] font-logo uppercase tracking-[0.4em] font-bold">Direct Contact</span>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-white font-logo text-sm uppercase tracking-wider mb-2">Campus Location</h4>
                  <p className="text-gray-500 font-tech text-sm leading-relaxed">
                    Tiruchengode, Tamil Nadu.<br />VVCET Campus.
                  </p>
                </div>
                
                <div className="pt-8 border-t border-white/5">
                  <div className="flex items-center gap-2 text-[#00f2ff] font-tech text-[10px] uppercase tracking-[0.2em]">
                    <span className="w-2 h-2 rounded-full bg-[#00f2ff] animate-pulse"></span>
                    System Online
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Open Navigation Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="h-full bg-[#0d1118] border border-white/10 p-8 transition-all duration-500 group-hover:border-[#25D366]/50">
              <div className="flex items-center gap-3 mb-8">
                <Navigation size={20} className="text-[#25D366]" />
                <span className="text-[10px] text-[#25D366] font-logo uppercase tracking-[0.4em] font-bold">Open Navigation</span>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-white font-logo text-sm uppercase tracking-wider mb-2">WhatsApp Helpline</h4>
                  <p className="text-gray-500 font-tech text-sm leading-relaxed mb-8">
                    Live support for registration queries.
                  </p>
                  
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-5 bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-[#0b0e14] transition-all duration-300 font-tech text-xs font-black tracking-[0.2em] uppercase"
                  >
                    <MessageCircle size={16} />
                    <span>Initiate Chat</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SupportHub;


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Wifi, 
  ShieldCheck, 
  Users, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Twitter, 
  Linkedin, 
  Github, 
  ChevronRight,
  Menu,
  X,
  Zap,
  MessageSquare,
  Bot,
  Layers,
  ArrowRight
} from 'lucide-react';
import NeuralBackground from './components/NeuralBackground';
import Countdown from './components/Countdown';
import SectionTitle from './components/SectionTitle';
import ScheduleSection from './components/ScheduleSection';
import CoordinatorsSection from './components/CoordinatorsSection';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const FORM_LINK = "https://forms.gle/3LYU8FG75LNRmmJg7";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRegister = () => {
    window.open(FORM_LINK, '_blank', 'noopener,noreferrer');
    setIsMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Workshops', href: '#workshops' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Nexus', href: '#coordinators' },
    { name: 'Contact', href: '#contact' },
  ];

  const workshops = [
    {
      day: "DAY 01",
      topic: "Soft Skills & Communication",
      audience: "1st Year Students (Internal Only)",
      description: "Elevating professional presence and articulation. Master the art of high-impact communication for the modern tech workplace. Focus on interview readiness, presentation skills, and corporate etiquette.",
      icon: <MessageSquare className="w-12 h-12 text-[#00f2ff]" />,
      accent: "#00f2ff",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
      showRegister: false
    },
    {
      day: "DAY 02",
      topic: "AI Driven IoT Systems",
      audience: "2nd Year & External Students",
      description: "Harnessing the power of silicon and neurons. Learn to build hyper-connected systems that think and react in real-time. Hands-on session involving edge computing protocols and AI model deployment on hardware.",
      icon: <Layers className="w-12 h-12 text-[#bc13fe]" />,
      accent: "#bc13fe",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      showRegister: true
    },
    {
      day: "DAY 03",
      topic: "Agentic AI in Digital Marketing",
      audience: "3rd Year & External Students",
      description: "The next frontier of marketing automation. Implementing autonomous agents to revolutionize digital presence and strategy. Discover how LLM-powered agents can manage campaigns and analyze consumer behavior.",
      icon: <Bot className="w-12 h-12 text-[#00f2ff]" />,
      accent: "#00f2ff",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      showRegister: true
    }
  ];

  const sponsors = [
    "VIDYAA VIKAS", "Nexus Systems", "CyberCore", "Innova Labs", "DataStream", "Quantum Dev", "Aether Robotics", "LogicGate"
  ];

  return (
    <div className="min-h-screen relative selection:bg-[#00f2ff] selection:text-[#0b0e14]">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="axion-container cursor-pointer group" onClick={() => scrollToSection('#hero')}>
            <span className="axion-brand text-2xl group-hover:tracking-widest transition-all text-glow-cyan">AXION 2K26</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button 
                key={item.name} 
                onClick={() => scrollToSection(item.href)}
                className="text-gray-400 hover:text-[#00f2ff] transition-colors duration-200 font-medium text-sm tracking-widest uppercase font-tech"
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={handleRegister}
              className="px-6 py-2 bg-gradient-to-r from-[#00f2ff] to-[#bc13fe] rounded-sm text-[#0b0e14] font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,242,255,0.3)] uppercase text-xs tracking-tighter"
            >
              Secure Spot
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="fixed inset-0 z-40 md:hidden glass flex flex-col items-center justify-center gap-8"
            >
              {navItems.map((item) => (
                <button 
                  key={item.name} 
                  onClick={() => scrollToSection(item.href)}
                  className="text-2xl font-tech font-bold uppercase tracking-widest hover:text-[#00f2ff] transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={handleRegister}
                className="mt-4 px-8 py-3 bg-gradient-to-r from-[#00f2ff] to-[#bc13fe] rounded-full text-[#0b0e14] font-bold uppercase tracking-widest"
              >
                Register Now
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <NeuralBackground />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-[#00f2ff]"></div>
              <span className="font-logo text-[#00f2ff] text-xs tracking-[0.4em] uppercase">The Intelligence of Things</span>
              <div className="h-px w-8 bg-[#bc13fe]"></div>
            </div>

            <h1 className="text-6xl md:text-9xl font-black mb-4 fusion-title">
              <span className="block text-white/60 text-base md:text-xl font-logo tracking-[0.3em] mb-4 uppercase">VIDYAA VIKAS COLLEGE OF ENGINEERING AND TECHNOLOGY, TIRUCHENGODE</span>
              <span className="block text-white opacity-20 text-4xl md:text-5xl font-logo tracking-[0.5em] mb-2 uppercase">PRESENTS</span>
              <span className="block fusion-gradient tracking-tighter">AXION <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#bc13fe]">2K26</span></span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-tech font-medium tracking-wide uppercase">
              A Three-Day Immersive Hardware & Intelligence Workshop.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Countdown targetDate="2026-03-25T09:00:00" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16"
          >
            <button 
              onClick={handleRegister}
              className="group relative px-12 py-5 bg-[#00f2ff] text-[#0b0e14] rounded-sm font-black text-sm tracking-widest uppercase transition-all duration-300 hover:bg-white hover:shadow-[0_0_40px_rgba(0,242,255,0.6)] active:scale-95"
            >
              <span className="flex items-center gap-2">
                Register for AXION <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button 
              onClick={() => scrollToSection('#about')}
              className="px-12 py-5 glass border border-white/20 text-white rounded-sm font-black text-sm tracking-widest uppercase hover:bg-white hover:text-[#0b0e14] transition-all active:scale-95"
            >
              Vision Matrix
            </button>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 cursor-pointer"
          onClick={() => scrollToSection('#about')}
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#00f2ff] to-transparent"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#0b0e14]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle 
                subtitle="The Event Matrix" 
                title="Intelligence at Scale" 
              />
              <p className="text-lg text-gray-400 mb-6 leading-relaxed font-tech font-medium">
                AXION 2K26 is the convergence of edge hardware and artificial intelligence hosted at <strong>Vidyaa Vikas College of Engineering and Technology</strong>. We aren't just connecting things; we are giving them the ability to see, hear, and think independently.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed font-tech">
                Our workshop is structured as a progressive 3-day deep dive into the technologies shaping our future, starting from fundamental communication to advanced agentic intelligence.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass p-6 rounded-none border-l-4 border-[#00f2ff]">
                  <h4 className="text-[#00f2ff] text-3xl font-black mb-1 font-logo">3 DAYS</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Intensive Labs</p>
                </div>
                <div className="glass p-6 rounded-none border-l-4 border-[#bc13fe]">
                  <h4 className="text-[#bc13fe] text-3xl font-black mb-1 font-logo">4+</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Core Sessions</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                  alt="AXION Visual" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0b0e14]/80 to-transparent"></div>
              </div>
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#00f2ff]"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#bc13fe]"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Distinguished Workshop Section */}
      <section id="workshops" className="py-24 bg-[#0d1118]">
        <div className="container mx-auto px-6">
          <SectionTitle 
            subtitle="The Workshop Journey" 
            title="3 Days. 3 Frontiers." 
            center 
          />
          
          <div className="mt-24 space-y-32">
            {workshops.map((ws, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Visual Content */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="absolute -inset-4 border border-white/5 pointer-events-none"></div>
                  <div className="relative overflow-hidden group">
                    <img 
                      src={ws.image} 
                      alt={ws.topic} 
                      className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-6 left-6 flex items-center gap-4">
                      <div className="p-4 glass border-white/10" style={{ backgroundColor: `${ws.accent}20` }}>
                        {ws.icon}
                      </div>
                    </div>
                  </div>
                  {/* Decorative element */}
                  <div 
                    className="absolute -bottom-10 -right-10 w-32 h-32 opacity-10 blur-2xl rounded-full"
                    style={{ backgroundColor: ws.accent }}
                  ></div>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-logo text-xl font-black tracking-[0.5em]" style={{ color: ws.accent }}>{ws.day}</span>
                    <div className="h-px w-12" style={{ backgroundColor: ws.accent }}></div>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-black font-logo tracking-tight mb-4 uppercase text-white leading-tight">
                    {ws.topic}
                  </h3>
                  
                  <div className="flex items-center gap-3 mb-8 bg-white/5 px-4 py-2 border border-white/10 rounded-sm">
                    <Users size={16} className="text-gray-400" />
                    <span className="text-xs text-gray-400 uppercase font-bold tracking-[0.2em]">{ws.audience}</span>
                  </div>
                  
                  <p className="text-lg text-gray-400 font-tech leading-relaxed mb-10 max-w-xl">
                    {ws.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    {ws.showRegister && (
                      <button 
                        onClick={handleRegister}
                        className="px-8 py-4 bg-white text-[#0b0e14] font-black text-xs tracking-widest uppercase hover:bg-[#00f2ff] transition-all flex items-center gap-2 group"
                      >
                        Registration Open <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}
                    <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-logo">
                      Expert Resource Person TBD
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ScheduleSection />

      {/* Coordinators Section */}
      <CoordinatorsSection />

      {/* Sponsors Section */}
      <section id="sponsors" className="py-24 bg-[#0d1118] overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 mb-12 text-center">
          <SectionTitle subtitle="Strategic Network" title="Partners" center />
        </div>
        <div className="relative">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-10">
            {[...sponsors, ...sponsors].map((sponsor, idx) => (
              <div 
                key={idx} 
                className="text-2xl md:text-4xl font-black text-white/5 hover:text-[#00f2ff] transition-all duration-300 font-logo select-none cursor-default px-8 tracking-tighter"
              >
                {sponsor.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="pt-24 pb-12 bg-[#0b0e14] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="axion-container mb-8">
                <span className="axion-brand text-3xl text-glow-cyan">AXION 2K26</span>
              </div>
              <p className="text-gray-500 max-w-sm mb-8 font-tech font-medium uppercase text-sm tracking-wider">
                Vidyaa Vikas College of Engineering and Technology - Intelligence of Things Workshop.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 glass flex items-center justify-center hover:text-[#00f2ff] transition-all">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 glass flex items-center justify-center hover:text-[#00f2ff] transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 glass flex items-center justify-center hover:text-[#00f2ff] transition-all">
                  <Github size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-logo font-bold mb-6 text-xs tracking-widest uppercase text-white/40">Navigation</h4>
              <ul className="space-y-4 font-tech uppercase font-bold text-sm tracking-widest">
                {navItems.map(item => (
                  <li key={item.name}>
                    <button 
                      onClick={() => scrollToSection(item.href)}
                      className="text-gray-500 hover:text-white transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-logo font-bold mb-6 text-xs tracking-widest uppercase text-white/40">Nexus</h4>
              <ul className="space-y-4 text-gray-500 font-tech text-sm tracking-widest font-bold uppercase">
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="text-[#bc13fe]" />
                  <span>VVCET, Tiruchengode</span>
                </li>
                <li className="flex items-center gap-3">
                  <ExternalLink size={16} className="text-[#bc13fe]" />
                  <span>axion@vvcet.ac.in</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center pt-12 border-t border-white/5 text-gray-700 text-[10px] font-logo tracking-[0.4em] uppercase">
            © 2026 VIDYAA VIKAS COLLEGE OF ENGINEERING AND TECHNOLOGY // AXION 2K26
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

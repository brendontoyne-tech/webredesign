import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Logo } from "./Logo";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { name: "Gutter Cleaning", href: "/services/gutter-cleaning" },
    { name: "Gutter Repair", href: "/services/gutter-repair" },
    { name: "Gutter Guards", href: "/services/gutter-guards" },
    { name: "Downspouts", href: "/services/downspouts" },
    { name: "Soffits", href: "/services/soffits" },
    { name: "Permanent Lighting", href: "/services/permanent-lighting" },
    { name: "Holiday Lighting", href: "/services/holiday-lighting" },
  ];

  return (
    <div className="fixed top-8 left-0 right-0 z-50 px-6">
      <nav className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/20 px-2 py-1 flex items-center justify-between">
        <div className="flex items-center gap-2 pl-4">
          <a href="/"><Logo className="h-15 w-auto" /></a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <a 
              href="/services" 
              className={`text-[14px] font-bold uppercase tracking-wider transition-colors flex items-center gap-1 py-4 ${isActive('/services') ? 'text-[#F8ABAC]' : 'text-[#033852] hover:text-[#F8ABAC]'}`}
            >
              Services <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </a>
            
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-2xl border border-zinc-100 p-4 mt-1"
                >
                  <div className="grid gap-2">
                    {services.map((service) => (
                      <a 
                        key={service.href}
                        href={service.href}
                        className="px-4 py-2 text-sm font-bold text-[#033852] hover:bg-zinc-50 hover:text-[#F8ABAC] rounded-lg transition-all"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <a href="/about" className={`text-[14px] font-bold uppercase tracking-wider transition-colors ${isActive('/about') ? 'text-[#F8ABAC]' : 'text-[#033852] hover:text-[#F8ABAC]'}`}>About</a>
          <a href="/our-work" className={`text-[14px] font-bold uppercase tracking-wider transition-colors ${isActive('/our-work') ? 'text-[#F8ABAC]' : 'text-[#033852] hover:text-[#F8ABAC]'}`}>Our Work</a>
          <a href="/faq" className={`text-[14px] font-bold uppercase tracking-wider transition-colors ${isActive('/faq') ? 'text-[#F8ABAC]' : 'text-[#033852] hover:text-[#F8ABAC]'}`}>FAQ</a>
        </div>

        <div className="hidden md:flex items-center gap-2 pr-1">
          <a 
            href="tel:2502701010" 
            className="px-5 py-2.5 text-[#033852] border border-[#033852]/10 rounded-full text-[14px] font-bold hover:bg-white/50 transition-all"
          >
            250-270-1010
          </a>
          <a 
            href="/contact" 
            className="px-6 py-3 bg-[#F8ABAC] text-white rounded-full text-[14px] font-bold hover:bg-[#f59496] transition-all shadow-lg shadow-[#F8ABAC]/20"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-3 text-[#033852] bg-zinc-50 rounded-full mr-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden mt-4 bg-white rounded-3xl shadow-2xl border border-zinc-100 p-8 flex flex-col gap-6"
        >
          <a href="/services" onClick={() => setIsOpen(false)} className={`text-lg font-bold ${isActive('/services') ? 'text-[#F8ABAC]' : 'text-[#033852]'}`}>Services</a>
          <div className="pl-4 flex flex-col gap-4 border-l-2 border-zinc-100">
            {services.map((service) => (
              <a 
                key={service.href}
                href={service.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold text-zinc-500 hover:text-[#F8ABAC]"
              >
                {service.name}
              </a>
            ))}
          </div>
          <a href="/about" onClick={() => setIsOpen(false)} className={`text-lg font-bold ${isActive('/about') ? 'text-[#F8ABAC]' : 'text-[#033852]'}`}>About Us</a>
          <a href="/our-work" onClick={() => setIsOpen(false)} className={`text-lg font-bold ${isActive('/our-work') ? 'text-[#F8ABAC]' : 'text-[#033852]'}`}>Our Work</a>
          <a href="/faq" onClick={() => setIsOpen(false)} className={`text-lg font-bold ${isActive('/faq') ? 'text-[#F8ABAC]' : 'text-[#033852]'}`}>FAQ</a>
          <a href="/careers" onClick={() => setIsOpen(false)} className={`text-lg font-bold ${isActive('/careers') ? 'text-[#F8ABAC]' : 'text-[#033852]'}`}>Careers</a>
          <div className="pt-6 border-t border-zinc-100 flex flex-col gap-4">
            <a href="tel:2502701010" className="w-full py-4 bg-zinc-50 text-[#033852] rounded-xl text-center font-bold border border-zinc-200">Call (250) 270-1010</a>
            <a href="/contact" onClick={() => setIsOpen(false)} className="w-full py-4 bg-[#F8ABAC] text-white rounded-xl text-center font-bold shadow-lg shadow-[#F8ABAC]/20 hover:bg-[#f59496] transition-all">Book Online Now</a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

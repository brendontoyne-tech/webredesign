import { Logo } from "./Logo";
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  Phone, 
  Mail, 
  ArrowRight 
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#033852] pt-24 pb-8 px-6 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Column 1: Logo & Description */}
          <div className="space-y-8 order-1">
            <Logo className="h-32 w-auto" variant="white" />
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Locally owned exterior company serving Parksville, Qualicum Beach and the Oceanside area. Gutters, gutter guards, permanent lighting and holiday lights.
            </p>
            <div className="flex gap-6 max-w-xs">
              <a 
                href="https://instagram.com/coastalville_exteriors" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group transition-transform hover:scale-110"
              >
                <Instagram className="w-6 h-6 text-[#F8ABAC]" />
              </a>
              <a 
                href="https://facebook.com/CoastalVilleExteriors" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group transition-transform hover:scale-110"
              >
                <Facebook className="w-6 h-6 text-[#F8ABAC]" />
              </a>
              <a 
                href="https://linkedin.com/company/coastalville-exteriors" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group transition-transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-[#F8ABAC]" />
              </a>
            </div>
          </div>

          {/* Column 2: Company (Order 4 on Mobile) */}
          <div className="space-y-8 order-4 lg:order-2">
            <h4 className="text-[#F8ABAC] text-[10px] font-bold tracking-[0.3em] uppercase">Company</h4>
            <ul className="space-y-4">
              <li><a href="/" className="text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest">Home</a></li>
              <li><a href="/about" className="text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest">About Us</a></li>
              <li><a href="/our-work" className="text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest">Our Work</a></li>
              <li><a href="/blog" className="text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest">Blog</a></li>
              <li><a href="/faq" className="text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest">FAQ</a></li>
              <li><a href="/careers" className="text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest">Careers</a></li>
            </ul>
          </div>

          {/* Column 3: Services (Order 3 on Mobile) */}
          <div className="space-y-8 order-3 lg:order-3">
            <h4 className="text-[#F8ABAC] text-[10px] font-bold tracking-[0.3em] uppercase">Services</h4>
            <ul className="space-y-4">
              <li><a href="/services/gutter-cleaning" className="text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest">Gutter Cleaning</a></li>
              <li><a href="/services/gutter-repair" className="text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest">Gutter Repair</a></li>
              <li><a href="/services/gutter-guards" className="text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest">Gutter Guards</a></li>
              <li><a href="/services/downspouts" className="text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest">Downspouts</a></li>
              <li><a href="/services/soffits" className="text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest">Soffits</a></li>
              <li><a href="/services/permanent-lighting" className="text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest">Permanent Lighting</a></li>
              <li><a href="/services/holiday-lighting" className="text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest">Holiday Lighting</a></li>
            </ul>
          </div>

          {/* Column 4: Get In Touch (Order 2 on Mobile) */}
          <div className="space-y-8 order-2 lg:order-4">
            <div className="space-y-4">
              <a href="tel:2502701010" className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-[#F8ABAC]" />
                <span className="text-white font-bold group-hover:text-[#F8ABAC] transition-colors text-sm tracking-wide">(250) 270-1010</span>
              </a>
              <a href="mailto:hello@coastalville.ca" className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 text-[#F8ABAC]" />
                <span className="text-white/70 group-hover:text-white transition-colors text-sm">hello@coastalville.ca</span>
              </a>
              <p className="text-white/40 text-xs pl-7 italic">Mon – Sat: 8am – 6pm</p>
            </div>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 w-full py-5 bg-[#F8ABAC] text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#f59496] transition-all group shadow-2xl shadow-[#F8ABAC]/20"
            >
              Request Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/70 text-xs">
            © 2026 CoastalVille Exteriors. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/70">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

        {/* SEO Sentence */}
        <div className="mt-8 text-center">
          <p className="text-white/30 text-[10px] leading-relaxed max-w-3xl mx-auto">
            CoastalVille Exteriors proudly serves Parksville, Qualicum Beach, Lantzville, Nanoose Bay, Coombs, Errington and the surrounding Oceanside communities on Vancouver Island, British Columbia.
          </p>
        </div>
      </div>
    </footer>
  );
};

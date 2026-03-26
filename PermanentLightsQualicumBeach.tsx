import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  ShieldCheck, 
  MapPin, 
  Smartphone, 
  Zap, 
  Sparkles, 
  Star, 
  ArrowRight, 
  CheckCircle2, 
  Quote,
  ChevronDown,
  CloudRain,
  Wrench,
  Calendar,
  Check
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-200 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left font-bold text-xl text-[#033852] hover:text-[#F8ABAC] transition-colors"
      >
        <span>{question}</span>
        <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="mt-4 text-zinc-600 text-lg leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function PermanentLightsQualicumBeach() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "CoastalVille Exteriors",
        "image": "https://i.ibb.co/HT7fM31q/0-L5-A7341-2.jpg",
        "@id": "https://coastalville.ca/permanent-lights-qualicum-beach",
        "url": "https://coastalville.ca/permanent-lights-qualicum-beach",
        "telephone": "2502701010",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Qualicum Beach",
          "addressRegion": "BC",
          "addressCountry": "CA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 49.348,
          "longitude": -124.442
        },
        "areaServed": {
          "@type": "City",
          "name": "Qualicum Beach"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Permanent LED Lighting Installation",
        "provider": {
          "@type": "LocalBusiness",
          "name": "CoastalVille Exteriors"
        },
        "areaServed": {
          "@type": "City",
          "name": "Qualicum Beach"
        },
        "description": "Professional permanent LED lighting installation in Qualicum Beach BC. App-controlled, weatherproof, installed once and enjoyed forever."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does a permanent lighting installation take in Qualicum Beach?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most residential installations are completed in one day. We arrive, install everything cleanly and precisely, and leave your property tidy. You come home to finished lights."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if a light fails?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The lights come with a 10-year manufacturer warranty. Individual LEDs can be replaced without affecting the rest of the system. Our 3-year workmanship warranty covers the installation itself."
            }
          },
          {
            "@type": "Question",
            "name": "Can I control the lights from my phone?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — the system is fully app-controlled. Change colours, set schedules, create custom displays for any occasion. Christmas, Halloween, Canada Day, or elegant white year-round. All from your phone."
            }
          },
          {
            "@type": "Question",
            "name": "Do you serve Qualicum Beach for permanent lighting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We're based in Parksville — right next door — and we're active throughout Qualicum Beach for permanent lighting installations on properties like those on Hollywood Road and Robin Place."
            }
          },
          {
            "@type": "Question",
            "name": "How does permanent lighting compare to holiday lighting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Permanent lighting is installed once and stays. Holiday lighting is installed and removed each season. If you put lights up every year, permanent lighting pays for itself quickly and eliminates the annual hassle entirely. We offer both — we'll give you an honest recommendation for your situation."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#033852]">
      <SEO 
        title="Permanent Lighting Installation Qualicum Beach BC | CoastalVille Exteriors"
        description="Professional permanent LED lighting installation in Qualicum Beach BC. App-controlled, weatherproof, installed once and enjoyed forever. Free quote. Call (250) 270-1010."
        schema={schema}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            src="https://i.ibb.co/HT7fM31q/0-L5-A7341-2.jpg" 
            alt="Permanent LED lighting installation in Qualicum Beach" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#033852]/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Service List with Lines */}
            <div className="mb-12 flex items-center gap-6">
              <div className="hidden md:block h-[1px] w-24 bg-white/30" />
              <span className="text-white/90 text-[10px] md:text-[11px] font-bold tracking-[0.4em] uppercase whitespace-nowrap">
                INSTALLED ONCE · ENJOYED FOREVER · APP CONTROLLED
              </span>
              <div className="hidden md:block h-[1px] w-24 bg-white/30" />
            </div>

            {/* Main Headline */}
            <h1 className="flex flex-col items-center mb-10">
              <span className="font-sans font-bold text-6xl md:text-[110px] text-white leading-none uppercase tracking-tight mb-2">
                Qualicum's
              </span>
              <span className="font-sans font-black text-5xl md:text-[90px] text-[#F8ABAC] leading-none uppercase tracking-tight">
                Lighting Company
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-xl text-white/80 text-sm md:text-base font-medium leading-relaxed mb-12">
              Installed once. Enjoyed forever. App-controlled permanent LED lighting for Qualicum Beach homes.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="/contact" 
                className="w-full sm:w-auto px-10 py-4 bg-[#F8ABAC] text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20 text-center"
              >
                Get a Free Quote
              </a>
              <a 
                href="tel:2502701010" 
                className="w-full sm:w-auto px-10 py-4 bg-transparent text-white border border-white/40 rounded-md text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all text-center"
              >
                Call (250) 270-1010
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#033852] py-6 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-6 gap-x-8 text-white">
            {[
              { text: "Licensed & Insured", icon: CheckCircle2 },
              { text: "Parksville Based", icon: CheckCircle2 },
              { text: "24hr Response", icon: CheckCircle2 },
              { text: "Free Estimates", icon: CheckCircle2 },
              { text: "5-Star Rated", icon: Star }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-[#F8ABAC]" />
                <span className="text-sm font-semibold tracking-wide uppercase">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Local Intro */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-[#033852]">Permanent Lighting in Qualicum Beach</h2>
          <div className="space-y-6 text-xl text-zinc-600 leading-relaxed">
            <p>
              CoastalVille Exteriors is a Parksville-based exterior company installing permanent LED lighting on homes across the Oceanside area, including right here in Qualicum Beach. We're right next door, and we're active throughout Qualicum Beach on properties like those on Hollywood Road, Robin Place, and throughout the surrounding neighbourhoods.
            </p>
            <p>
              Permanent lighting installed by CoastalVille means one professional installation, then lights for every occasion, every season, controlled from your phone. No ladders. No seasonal installs. No tangled strings.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: What is Permanent Lighting */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-[#033852]">Installed Once. Enjoyed Forever.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "App-Controlled",
                desc: "Change colours, set schedules, and create custom displays from your phone. Any holiday, any mood, any time. Christmas, Halloween, Canada Day, or just elegant white year-round."
              },
              {
                icon: <CloudRain className="w-8 h-8" />,
                title: "Weatherproof",
                desc: "High-grade LEDs engineered to handle coastal BC weather. Rain, wind, salt air, your lights stay on and looking sharp through everything the Oceanside throws at them."
              },
              {
                icon: <Wrench className="w-8 h-8" />,
                title: "Professionally Installed",
                desc: "Installed on your soffits and fascia by our team. Clean, precise, no shortcuts. One install and you're done."
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Warrantied",
                desc: "3-year workmanship warranty on every installation plus 10-year manufacturer warranty on the lights themselves."
              }
            ].map((card, i) => (
              <div key={i} className="bg-[#033852] p-8 rounded-2xl shadow-xl flex flex-col h-full">
                <div className="text-[#F8ABAC] mb-6">{card.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-[#F8ABAC]">{card.title}</h3>
                <p className="text-white/80 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Why Permanent Over Holiday Lights */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#033852]">Why Permanent Lighting Makes Sense for Qualicum Beach Homes</h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-6 text-xl text-zinc-600 leading-relaxed">
              <p>
                Holiday lighting is a great service, we offer it too. But if you find yourself putting up lights every October and taking them down every January, permanent lighting pays for itself quickly and eliminates the annual hassle entirely.
              </p>
              <p>
                One installation. No storage. No ladders every season. Every holiday covered from an app. For Qualicum Beach homeowners who love a lit home year-round, permanent lighting is the smarter long-term investment.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
                <h3 className="text-xl font-bold mb-6 text-[#033852]">Holiday Lighting</h3>
                <ul className="space-y-4 text-zinc-600">
                  <li className="flex gap-3"><span>·</span> Installed and removed each season</li>
                  <li className="flex gap-3"><span>·</span> Stored between seasons</li>
                  <li className="flex gap-3"><span>·</span> Annual cost</li>
                  <li className="flex gap-3"><span>·</span> Great for occasional displays</li>
                </ul>
              </div>
              <div className="bg-[#033852] p-8 rounded-2xl text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-[#F8ABAC] p-1 rounded-full">
                  <Check className="w-4 h-4 text-[#033852]" />
                </div>
                <h3 className="text-xl font-bold mb-6 text-[#F8ABAC]">Permanent Lighting</h3>
                <ul className="space-y-4 text-white/80">
                  <li className="flex gap-3"><span>·</span> Installed once, stays forever</li>
                  <li className="flex gap-3"><span>·</span> No storage needed</li>
                  <li className="flex gap-3"><span>·</span> One-time investment</li>
                  <li className="flex gap-3"><span>·</span> Every occasion covered year-round</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Pricing */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#033852]">What Does Permanent Lighting Cost in Qualicum Beach?</h2>
          <div className="space-y-6 text-xl text-zinc-600 leading-relaxed mb-12">
            <p>
              Permanent lighting installation in Qualicum Beach starts from $2,500 for most residential homes. The final price depends on the linear footage of your roofline and the complexity of the installation.
            </p>
            <p>
              Every installation includes a 3-year workmanship warranty and 10-year manufacturer warranty on the lights. We give you a clear written quote before any work starts.
            </p>
            <p className="italic">
              Get a free quote. We'll assess your roofline and give you an accurate number for your specific Qualicum Beach home.
            </p>
          </div>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 px-10 py-5 bg-[#F8ABAC] text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20"
          >
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Section 5: Reviews */}
      <section className="py-24 md:py-32 px-6 bg-[#033852]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16">
            <span className="text-[#F8ABAC] font-bold text-[10px] md:text-[11px] uppercase tracking-[0.4em] mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              { 
                name: "Katharine Carling", 
                meta: "Google Review", 
                text: "CoastalVille Exteriors installed our permanent outdoor lights and we are so impressed! The team was professional, on time, and walked us through every step of the process. Highly recommend!" 
              },
              { 
                name: "Adrianne & Jeff", 
                meta: "Facebook Review", 
                text: "We had an incredible experience with CoastalVille from start to finish. The installation of the permanent lights was seamless, and the lights look amazing!" 
              },
              { 
                name: "Christine Williams", 
                meta: "Google Review", 
                text: "Absolutely best ever! Not only are Brendon and Jordan amazing...the work they did surpasses anything I could have dreamed! I got the ultimate BEST LIGHTS." 
              }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-xl border border-zinc-100 flex flex-col group hover:translate-y-[-4px] transition-all duration-300">
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed mb-10 italic flex-grow">"{review.text}"</p>
                <div className="mt-auto pt-4 border-t border-zinc-50">
                  <div className="font-bold text-zinc-900 text-sm tracking-tight">{review.name}</div>
                  <div className="text-xs font-medium text-zinc-400 bg-zinc-50 px-2 py-1 rounded mt-1 inline-block">{review.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section className="py-24 md:py-32 px-6 bg-[#F5F5F5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#033852]">Common Questions from Qualicum Beach Homeowners</h2>
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-zinc-100">
            <FAQItem 
              question="How long does a permanent lighting installation take in Qualicum Beach?" 
              answer="Most residential installations are completed in one day. We arrive, install everything cleanly and precisely, and leave your property tidy. You come home to finished lights."
            />
            <FAQItem 
              question="What happens if a light fails?" 
              answer="The lights come with a 10-year manufacturer warranty. Individual LEDs can be replaced without affecting the rest of the system. Our 3-year workmanship warranty covers the installation itself."
            />
            <FAQItem 
              question="Can I control the lights from my phone?" 
              answer="Yes. The system is fully app-controlled. Change colours, set schedules, create custom displays for any occasion. Christmas, Halloween, Canada Day, or elegant white year-round. All from your phone."
            />
            <FAQItem 
              question="Do you serve Qualicum Beach for permanent lighting?" 
              answer="Yes. We're based in Parksville, right next door, and we're active throughout Qualicum Beach for permanent lighting installations on properties like those on Hollywood Road and Robin Place."
            />
            <FAQItem 
              question="How does permanent lighting compare to holiday lighting?" 
              answer="Permanent lighting is installed once and stays. Holiday lighting is installed and removed each season. If you put lights up every year, permanent lighting pays for itself quickly and eliminates the annual hassle entirely. We offer both, we'll give you an honest recommendation for your situation."
            />
          </div>
        </div>
      </section>

      {/* Section 7: Service Area */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#033852] mb-8">Serving Qualicum Beach & the Oceanside Area</h2>
              <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                We're based in Parksville, right next door to Qualicum Beach. We install permanent lighting across Qualicum Beach, Parksville, Lantzville, Nanoose Bay, Coombs, Errington and the surrounding Oceanside area. No travel surcharges anywhere in our service area.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-12">
                {[
                  { name: "Parksville", href: "/permanent-lights-parksville" },
                  { name: "Qualicum Beach", href: "/permanent-lights-qualicum-beach" },
                  { name: "Lantzville", href: "/services/permanent-lighting" },
                  { name: "Nanoose Bay", href: "/services/permanent-lighting" },
                  { name: "Coombs", href: "/services/permanent-lighting" },
                  { name: "Errington", href: "/services/permanent-lighting" }
                ].map((city) => (
                  <a 
                    key={city.name} 
                    href={city.href}
                    className="px-4 py-2 bg-zinc-50 border border-zinc-100 rounded-lg text-sm font-bold text-[#033852] hover:text-[#F8ABAC] hover:border-[#F8ABAC]/30 transition-colors"
                  >
                    {city.name}
                  </a>
                ))}
              </div>

              <a 
                href="https://share.google/LBOBGmIoU0Qrwufca" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#033852] text-white rounded-xl font-bold hover:bg-[#044a6b] transition-all shadow-lg"
              >
                View on Google Maps →
              </a>
            </div>

            <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-[#033852]/10 border border-zinc-100 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82877.4436563605!2d-124.4716444!3d49.3486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54889376663f7667%3A0x50135152a7b1730!2sQualicum%20Beach%2C%20BC!5e0!3m2!1sen!2sca!4v1710864000000!5m2!1sen!2sca"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-700"
              />
              <div className="absolute inset-0 pointer-events-none border-[12px] border-white/10 rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="bg-white py-32 px-6 text-center overflow-hidden relative border-t border-zinc-100">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
            <span className="text-[#F8ABAC] font-bold text-xs uppercase tracking-[0.4em]">Get In Touch</span>
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#033852] mb-8 leading-tight">
            Ready to light up your <br /> <span className="text-[#F8ABAC]">Qualicum Beach home?</span>
          </h2>
          <p className="text-zinc-500 text-xl mb-12">Free quote. One install. Lights forever.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="px-10 py-4 bg-[#F8ABAC] text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20 flex items-center justify-center gap-2"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="tel:2502701010" 
              className="px-10 py-4 border border-[#033852]/20 text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-zinc-50 transition-all flex items-center justify-center gap-2"
            >
              Call (250) 270-1010
            </a>
          </div>
          <p className="text-zinc-400 text-sm mt-6">We respond within 24 hours, usually much faster.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

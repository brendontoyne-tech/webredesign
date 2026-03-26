import { motion } from "motion/react";
import { 
  ShieldCheck, 
  MapPin, 
  Quote, 
  Clock, 
  Star, 
  ChevronRight, 
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Smartphone,
  Zap
} from "lucide-react";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-bold text-[#033852] group-hover:text-[#F8ABAC] transition-colors">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#F8ABAC] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-zinc-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default function PermanentLightsParksville() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "CoastalVille Exteriors",
        "image": "https://picsum.photos/seed/parksville-lights/800/600",
        "@id": "https://coastalville.ca/permanent-lights-parksville",
        "url": "https://coastalville.ca/permanent-lights-parksville",
        "telephone": "2502701010",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Parksville",
          "addressRegion": "BC",
          "addressCountry": "CA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 49.315,
          "longitude": -124.312
        },
        "areaServed": {
          "@type": "City",
          "name": "Parksville"
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
          "name": "Parksville"
        },
        "description": "Permanent LED lighting installation in Parksville BC. App controlled, any colour, year-round. Local installer, we've already completed installs in your neighbourhood."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you serve areas outside of Parksville?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. we also serve Qualicum Beach, Lantzville, Nanoose Bay, Coombs, Errington and surrounding communities. No travel surcharge anywhere in our service area."
            }
          },
          {
            "@type": "Question",
            "name": "How long does an install take in Parksville?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most Parksville residential installs are completed in one day. We'll give you a more accurate timeline after assessing your roofline."
            }
          },
          {
            "@type": "Question",
            "name": "What does the track look like on my home during the day?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Discreet. Colour-matched to your soffit and fascia, flush against the surface. Most people don't notice it during the day."
            }
          },
          {
            "@type": "Question",
            "name": "Can I control the lights from my phone?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Completely. Change colours, set schedules, and create custom displays from anywhere."
            }
          },
          {
            "@type": "Question",
            "name": "Are the lights weatherproof enough for Parksville winters?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. High-grade weatherproof LEDs designed for coastal BC wet winters, salt air, and summer UV."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#033852]">
      <SEO 
        title="Permanent LED Lighting Parksville BC | CoastalVille Exteriors"
        description="Permanent LED lighting installation in Parksville BC. App controlled, any colour, year-round. Local installer, we've already completed installs in your neighbourhood. Free quote. Call (250) 270-1010."
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
            alt="Permanent LED lighting installation in Parksville" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#033852]/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="sr-only">Permanent LED Lighting Parksville BC</h1>
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
                APP CONTROLLED · ANY COLOUR · YEAR-ROUND
              </span>
              <div className="hidden md:block h-[1px] w-24 bg-white/30" />
            </div>

            {/* Main Headline */}
            <h1 className="flex flex-col items-center mb-10">
              <span className="font-sans font-bold text-6xl md:text-[110px] text-white leading-none uppercase tracking-tight mb-2">
                Parksville's
              </span>
              <span className="font-sans font-black text-5xl md:text-[90px] text-[#F8ABAC] leading-none uppercase tracking-tight">
                Lighting Installer
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-xl text-white/80 text-sm md:text-base font-medium leading-relaxed mb-12">
              App controlled. Any colour. Year-round. Already working in your neighbourhood.
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
          <h2 className="text-4xl font-bold mb-8 text-[#033852]">Permanent Lighting in Parksville</h2>
          <div className="space-y-6 text-xl text-zinc-600 leading-relaxed">
            <p>
              CoastalVille Exteriors is a Parksville-based exterior company installing permanent LED lighting on homes right here in your community. We're not driving up from Nanaimo. We live and work in Parksville, and our reputation is built one home at a time on these streets.
            </p>
            <p>
              We've already completed permanent lighting installs on Stanford Avenue West and Samuel Place here in Parksville. The response from neighbours has been exactly what our customers hoped for. People slow down. People stop. People ask.
            </p>
            <p>
              If you've been thinking about permanent lighting for your Parksville home, you don't have to look far. We're already here.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: What is Permanent Lighting */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-[#033852]">What Is Permanent Lighting?</h2>
          <div className="space-y-6 text-xl text-zinc-600 leading-relaxed mb-12">
            <p>
              Permanent LED lighting is a system installed on your soffits and fascia that stays up year-round. The track and lights are professionally mounted once, you control everything from an app on your phone.
            </p>
            <p>
              Change colours, set schedules, and save custom displays for any occasion. Christmas, Halloween, Canada Day, or just a warm white glow every evening. No ladders, no tangled strings, no frozen fingers in November.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {["📱 App Controlled", "🎨 Any Colour", "☁️ Weatherproof"].map((pill) => (
              <span key={pill} className="px-6 py-3 bg-white rounded-full shadow-sm border border-zinc-100 font-bold text-[#033852]">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Why CoastalVille for Parksville */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-[#033852]">Why Parksville Homeowners Choose CoastalVille</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Already Working in Parksville",
                desc: "We're active throughout Parksville on streets like Stanford Avenue West, Samuel Place, and neighbourhoods across the city. We know these streets, these homes, and these rooflines. You're not our first Parksville install."
              },
              {
                title: "Free Site Visit & Quote",
                desc: "We come to your Parksville property, walk the roofline with you, map out the install, and give you a clear quote. You know exactly what's involved before we start. Free, no obligation."
              },
              {
                title: "Built for Coastal BC",
                desc: "High-grade, weatherproof LEDs designed for exactly these conditions, Parksville's wet winters, salt air, and UV exposure in summer."
              },
              {
                title: "We Stand Behind It",
                desc: "3 year workmanship warranty on every install. If something isn't right we come back and fix it. The manufacturer covers the product for 10 years."
              }
            ].map((card, i) => (
              <div key={i} className="bg-[#033852] p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-[#F8ABAC]">{card.title}</h3>
                <p className="text-white text-lg leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: The Process */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-[#033852]">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Free Site Visit",
                desc: "We come to your Parksville property, walk the roofline with you, map out the full install, and give you a clear written quote. No obligation."
              },
              {
                step: "2",
                title: "Professional Installation",
                desc: "We install the track and lighting on your soffits and fascia. Clean lines, hidden wiring, colour-matched hardware. Most Parksville residential installs are completed in one day."
              },
              {
                step: "3",
                title: "You're In Control",
                desc: "We set up the app on your phone, walk you through the controls, and you're good to go. Change colours and patterns from anywhere, any time."
              }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-8xl font-black text-[#033852]/5 absolute -top-10 left-1/2 -translate-x-1/2 z-0 group-hover:text-[#F8ABAC]/10 transition-colors">0{step.step}</div>
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-[#033852]">Step {step.step} — {step.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Pricing */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-[#033852]">What Does Permanent Lighting Cost in Parksville?</h2>
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-zinc-600">
              <p>Most residential permanent lighting installs in Parksville start from $1,500. The final price depends on the linear footage of your soffits and fascia and the complexity of your roofline.</p>
              <p>We provide a clear written quote after the site visit. No surprises, no hidden fees.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-50 p-8 rounded-2xl shadow-xl border border-zinc-100 text-center">
              <h3 className="text-2xl font-bold mb-2 text-[#033852]">Starter Home</h3>
              <p className="text-zinc-500 mb-6">Smaller roofline, straightforward install</p>
              <div className="text-4xl font-bold text-[#033852]">From $1,500</div>
            </div>
            <div className="bg-zinc-50 p-8 rounded-2xl shadow-xl border border-zinc-100 text-center">
              <h3 className="text-2xl font-bold mb-2 text-[#033852]">Larger Home</h3>
              <p className="text-zinc-500 mb-6">More linear footage, multiple zones</p>
              <div className="text-4xl font-bold text-[#033852]">From $2,500 – $4,000+</div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-zinc-500 italic mb-8">Pricing varies by home. Get a free quote for an accurate number specific to your property.</p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-10 py-5 bg-[#F8ABAC] text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20"
            >
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Section 6: Reviews */}
      <section className="py-24 md:py-32 px-6 bg-[#033852]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16">
            <span className="text-[#F8ABAC] font-bold text-[10px] md:text-[11px] uppercase tracking-[0.4em] mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white">What Parksville Homeowners Are Saying</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              { name: "Katharine Carling", meta: "Google Review", text: "The lights look incredible and totally transformed our home — clean lines, perfect colour options, and so easy to use. We've already had neighbours stop and ask who did the work! Highly recommend CoastalVille for anyone considering permanent lighting." },
              { name: "Adrianne & Jeff", meta: "Facebook Review", text: "The installation was seamless and the lights look amazing. Even when they are off, they blend perfectly and look great on the house. It's rare to find such accountability these days. Highly recommend!" },
              { name: "Christine Williams", meta: "Google Review", text: "Absolutely best ever! The work surpasses anything I could have dreamed. I got the ultimate best lights by the most amazing company. I tell everyone about them — thank you for doing the best job ever!" }
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

      {/* Section 7: FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#033852]">Common Questions from Parksville Homeowners</h2>
          <div className="bg-zinc-50 rounded-3xl p-8 shadow-xl border border-zinc-100">
            <FAQItem 
              question="Do you serve areas outside of Parksville?" 
              answer="Yes. We also serve Qualicum Beach, Lantzville, Nanoose Bay, Coombs, Errington and surrounding communities. No travel surcharge anywhere in our service area."
            />
            <FAQItem 
              question="How long does an install take in Parksville?" 
              answer="Most Parksville residential installs are completed in one day. We'll give you a more accurate timeline after assessing your roofline."
            />
            <FAQItem 
              question="What does the track look like on my home during the day?" 
              answer="Discreet. Colour-matched to your soffit and fascia, flush against the surface. Most people don't notice it during the day."
            />
            <FAQItem 
              question="Can I control the lights from my phone?" 
              answer="Yes. Completely. Change colours, set schedules, and create custom displays from anywhere."
            />
            <FAQItem 
              question="Are the lights weatherproof enough for Parksville winters?" 
              answer="Yes. High-grade weatherproof LEDs designed for coastal BC wet winters, salt air, and summer UV."
            />
          </div>
        </div>
      </section>

      {/* Section 8: Service Area */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#033852] mb-8">Serving Parksville & the Oceanside Area</h2>
              <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                We're based in Parksville and install permanent LED lighting across the Oceanside area, Parksville, Qualicum Beach, Lantzville, Nanoose Bay, Coombs, Errington and surrounding communities. No travel surcharges anywhere in our service area.
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
                    className="px-4 py-2 bg-white border border-zinc-100 rounded-lg text-sm font-bold text-[#033852] hover:text-[#F8ABAC] hover:border-[#F8ABAC]/30 transition-colors"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82904.6436563605!2d-124.312!3d49.315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54889416663f7667%3A0x50135152a7b1730!2sParksville%2C%20BC!5e0!3m2!1sen!2sca!4v1710864000000!5m2!1sen!2sca"
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

      {/* Section 9: Final CTA */}
      <section className="bg-white py-32 px-6 text-center overflow-hidden relative border-t border-zinc-100">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
            <span className="text-[#F8ABAC] font-bold text-xs uppercase tracking-[0.4em]">Get In Touch</span>
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#033852] mb-8 leading-tight">
            Ready to light up your <br /> <span className="text-[#F8ABAC]">Parksville home?</span>
          </h2>
          <p className="text-zinc-500 text-xl mb-12">Free site visit. Free quote. Already working in your neighbourhood.</p>
          
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

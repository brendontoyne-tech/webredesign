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
  Smartphone,
  Palette,
  CloudSun,
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

export default function PermanentLighting() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Permanent LED Lighting Installation",
        "serviceType": "Permanent LED Lighting Installation",
        "provider": {
          "@type": "LocalBusiness",
          "name": "CoastalVille Exteriors",
          "telephone": "2502701010",
          "url": "https://coastalville.ca"
        },
        "areaServed": [
          { "@type": "City", "name": "Parksville" },
          { "@type": "City", "name": "Qualicum Beach" },
          { "@type": "City", "name": "Nanoose Bay" },
          { "@type": "City", "name": "Lantzville" }
        ],
        "description": "Permanent LED lighting installed on your soffits and fascia. App controlled, any colour, year-round. 3 year workmanship warranty."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What exactly is permanent lighting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Permanent LED lighting is a system installed on your soffits and fascia that stays up year-round. Instead of hanging lights every November and taking them down in January, the track and lights are permanently mounted to your home. You control everything from an app on your phone."
            }
          },
          {
            "@type": "Question",
            "name": "What does the installation look like during the day?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Discreet. The track is colour-matched to your soffit and fascia and sits flush against the surface. Most people walk past homes with permanent lighting during the day and don't notice it at all."
            }
          },
          {
            "@type": "Question",
            "name": "Can I control the lights from my phone?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — completely. The app lets you change colours, set schedules, create patterns, and save custom displays for different occasions. Control it from anywhere."
            }
          },
          {
            "@type": "Question",
            "name": "Are the lights weatherproof?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. High-grade, weatherproof LEDs designed for outdoor use in coastal conditions. BC's wet winters and UV exposure in summer are exactly what these systems are built for."
            }
          },
          {
            "@type": "Question",
            "name": "Will permanent lights work on my home?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Almost certainly yes. If your home has soffits and fascia — which most homes in the Parksville and Qualicum Beach area do — we can install permanent lighting. We'll give you an honest answer at the quote stage."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#033852]">
      <SEO 
        title="Permanent LED Lighting Installation | CoastalVille Exteriors"
        description="Permanent LED lighting installed on your soffits and fascia. App controlled, any colour, year-round. 3 year workmanship warranty. Serving Parksville, Qualicum Beach and Oceanside. Call (250) 270-1010."
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
            src="https://i.ibb.co/rR1mcT42/0-L5-A7341-2-1.jpg" 
            alt="Permanent LED lighting on a home at night" 
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
                APP CONTROLLED · ANY COLOUR · YEAR-ROUND
              </span>
              <div className="hidden md:block h-[1px] w-24 bg-white/30" />
            </div>

            {/* Main Headline */}
            <h1 className="flex flex-col items-center mb-10">
              <span className="font-sans font-bold text-6xl md:text-[110px] text-white leading-none uppercase tracking-tight mb-2">
                Never Hang
              </span>
              <span className="font-sans font-black text-5xl md:text-[90px] text-[#F8ABAC] leading-none uppercase tracking-tight">
                Lights Again.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-xl text-white/80 text-sm md:text-base font-medium leading-relaxed mb-12">
              One professional install. App controlled. Any colour, any occasion, year-round.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="/contact" 
                className="w-full sm:w-auto px-10 py-4 bg-[#F8ABAC] text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20"
              >
                Get a Free Quote
              </a>
              <a 
                href="tel:2502701010" 
                className="w-full sm:w-auto px-10 py-4 bg-transparent text-white border border-white/40 rounded-md text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                Call (250) 270-1010
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — TRUST BAR */}
      <section className="bg-[#033852] py-6 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-6 gap-x-8 text-white">
            {[
              { icon: <ShieldCheck className="w-5 h-5 text-[#F8ABAC]" />, text: "Licensed & Insured" },
              { icon: <MapPin className="w-5 h-5 text-[#F8ABAC]" />, text: "Parksville Based" },
              { icon: <CheckCircle2 className="w-5 h-5 text-[#F8ABAC]" />, text: "24hr Response" },
              { icon: <Clock className="w-5 h-5 text-[#F8ABAC]" />, text: "Free Quotes" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 group">
                {item.icon}
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">{item.text}</span>
                {i < 3 && <div className="hidden lg:block h-4 w-px bg-white/20 ml-8" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: What Is Permanent Lighting? */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-[#033852]">What Is Permanent Lighting?</h2>
          <div className="space-y-6 text-xl text-zinc-600 leading-relaxed mb-12">
            <p>
              Permanent LED lighting is a system installed directly on your soffits and fascia, the trim around your roofline. The track and lights are professionally mounted once and stay up year-round.
            </p>
            <p>
              You control everything from an app on your phone. Change colours, set schedules, create patterns, and save custom displays for any occasion. Christmas red and green. Halloween orange and purple. Canada Day red and white. Or just a warm white glow every evening for year-round curb appeal.
            </p>
            <p>
              No more ladders every November. No more tangled lights. No more frozen fingers on a Saturday morning. One install. Endless possibilities.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-6 py-3 bg-zinc-50 rounded-full font-bold text-[#033852] border border-zinc-100">
              <Smartphone className="w-5 h-5 text-[#F8ABAC]" /> App Controlled
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-zinc-50 rounded-full font-bold text-[#033852] border border-zinc-100">
              <Palette className="w-5 h-5 text-[#F8ABAC]" /> Any Colour
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-zinc-50 rounded-full font-bold text-[#033852] border border-zinc-100">
              <CloudSun className="w-5 h-5 text-[#F8ABAC]" /> Weatherproof
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: During the Day / At Night */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-[#033852]">During the Day. At Night.</h2>
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#033852]">During the Day</h3>
              <p className="text-lg text-zinc-600 leading-relaxed">
                The track is colour-matched to your soffit and fascia and sits flush against the surface. Most people walk past homes with permanent lighting during the day and don't notice it at all. Clean, discreet, and professionally installed.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#033852]">At Night</h3>
              <p className="text-lg text-zinc-600 leading-relaxed">
                When the lights come on it's a completely different story. Vivid, programmable, scroll-stopping. Katharine from Qualicum Beach told us her neighbours stopped their cars to ask who did the work.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://i.ibb.co/PZygfMDs/0-L5-A7253-2-1.jpg" 
                alt="Permanent lighting track during the day" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://i.ibb.co/rR1mcT42/0-L5-A7341-2-1.jpg" 
                alt="Permanent lighting at night" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose CoastalVille */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-[#033852]">Why Choose CoastalVille for Permanent Lighting?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Local Installer",
                desc: "We're based in Parksville, not driving from Nanaimo or the Lower Mainland. We know these neighbourhoods, we work in them every week, and our reputation lives here."
              },
              {
                title: "Free Site Visit & Quote",
                desc: "We come to your property, walk the roofline with you, map out the install, and give you a clear quote. You know exactly what's involved and what it costs before we start. No obligation."
              },
              {
                title: "Built for BC",
                desc: "High-grade, weatherproof LEDs engineered for coastal conditions. Our wet winters and UV exposure in summer are exactly what these systems are designed to handle."
              },
              {
                title: "We Stand Behind It",
                desc: "3 year workmanship warranty on every install. If something isn't right we come back and fix it. The manufacturer backs the product for 10 years."
              }
            ].map((card, i) => (
              <div key={i} className="bg-[#033852] p-10 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-[#F8ABAC]">{card.title}</h3>
                <p className="text-white/70 text-lg leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-[#033852]">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Free Site Visit & Quote",
                desc: "Call, text, or fill out the form. We come to your property, walk the roofline with you, map out the full install, and give you a clear quote. You'll know exactly what's involved before we start. Free, no obligation."
              },
              {
                step: "2",
                title: "Professional Installation",
                desc: "We install the track and lighting on your soffits and fascia. Clean lines, hidden wiring, colour-matched hardware. Most residential installs are completed in one day."
              },
              {
                step: "3",
                title: "You're In Control",
                desc: "We set up the app on your phone, walk you through the controls, and you're good to go. Change colours and patterns whenever you want from anywhere."
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
            <h2 className="text-4xl font-bold mb-8 text-[#033852]">What Does It Cost?</h2>
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-zinc-600">
              <p>Most residential permanent lighting installs in the Oceanside area start from $1,500. The final price depends on the linear footage of your soffits and fascia and the complexity of your roofline.</p>
              <p>Every quote is free and there's no obligation. We come to your property, assess the job, and give you a clear number before anything starts.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-50 p-10 rounded-3xl shadow-xl border border-zinc-100 text-center">
              <h3 className="text-2xl font-bold mb-2 text-[#033852]">Starter Home</h3>
              <p className="text-zinc-500 mb-6">Smaller roofline, straightforward install</p>
              <div className="text-4xl font-bold text-[#033852]">From $1,500</div>
            </div>
            <div className="bg-zinc-50 p-10 rounded-3xl shadow-xl border border-zinc-100 text-center">
              <h3 className="text-2xl font-bold mb-2 text-[#033852]">Larger Home</h3>
              <p className="text-zinc-500 mb-6">More linear footage, multiple zones</p>
              <div className="text-4xl font-bold text-[#033852]">From $2,500 – $4,000+</div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-zinc-500 italic mb-8 text-sm">Pricing varies by home. Get a free quote and we'll give you an accurate number for your specific property.</p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-10 py-5 bg-[#F8ABAC] text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Section 6: Reviews */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-[#033852]">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Katharine Carling", meta: "Google", text: "The lights look incredible and totally transformed our home — clean lines, perfect colour options, and so easy to use. We've already had neighbours stop and ask who did the work! Highly recommend CoastalVille for anyone considering permanent lighting." },
              { name: "Adrianne & Jeff", meta: "Facebook", text: "The installation of the permanent lights was seamless, and the lights look amazing! Even when they are off, they blend perfectly and look great on the house. It's rare to find such accountability these days. Highly recommend!" },
              { name: "Christine Williams", meta: "Google", text: "Absolutely best ever! The work they did surpasses anything I could have dreamed! I got the ultimate BEST LIGHTS by the most amazing company. I tell everyone about them — thank you for doing the best job ever!" }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-xl border border-zinc-100 text-left flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-zinc-600 mb-6 flex-grow leading-relaxed italic">"{review.text}"</p>
                <div>
                  <div className="font-bold text-[#033852]">{review.name}</div>
                  <div className="text-zinc-400 text-sm">{review.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#033852]">Common Questions</h2>
          <div className="bg-zinc-50 rounded-3xl p-8 shadow-xl border border-zinc-100">
            <FAQItem 
              question="What exactly is permanent lighting?" 
              answer="Permanent LED lighting is a system installed on your soffits and fascia that stays up year-round. Instead of hanging lights every November and taking them down in January, the track and lights are permanently mounted to your home. You control everything, colour, brightness, patterns, schedules, from an app on your phone."
            />
            <FAQItem 
              question="What does the installation look like during the day?" 
              answer="Discreet. The track is colour-matched to your soffit and fascia and sits flush against the surface. Most people walk past homes with permanent lighting during the day and don't notice it at all. It's only when the lights come on that it becomes a feature."
            />
            <FAQItem 
              question="Can I control the lights from my phone?" 
              answer="Yes, completely. The app lets you change colours, set schedules, create patterns, and save custom displays for different occasions. Christmas, Halloween, Canada Day, or just a warm white glow every evening. Control it from anywhere."
            />
            <FAQItem 
              question="Are the lights weatherproof?" 
              answer="Yes. The systems we install are high-grade, weatherproof LEDs designed for outdoor use in coastal conditions. BC's wet winters and UV exposure in summer are exactly what these systems are built for."
            />
            <FAQItem 
              question="Will permanent lights work on my home?" 
              answer="Almost certainly yes. If your home has soffits and fascia, which most homes in the Parksville and Qualicum Beach area do, we can install permanent lighting. We'll assess your roofline at the quote stage and give you an honest answer. If something makes it impractical, we'll tell you upfront."
            />
          </div>
        </div>
      </section>

      {/* SECTION 8 — SERVICE AREAS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-[#F8ABAC]/30" />
                <span className="text-[#F8ABAC] font-bold text-sm uppercase tracking-widest block">Service Area</span>
              </div>
              <h2 className="text-4xl font-bold text-[#033852] mb-6">Serving the Oceanside Area</h2>
              <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
                We are a local team based in Parksville, providing professional permanent lighting services to homeowners across the region.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-10">
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
                    className="px-4 py-2 bg-zinc-50 border border-zinc-100 rounded-full text-zinc-600 text-sm font-medium hover:text-[#F8ABAC] hover:border-[#F8ABAC]/30 transition-colors"
                  >
                    {city.name}
                  </a>
                ))}
              </div>

              <a 
                href="https://share.google/LBOBGmIoU0Qrwufca" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#033852] text-white rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#044a6b] transition-all shadow-lg"
              >
                View on Google Maps →
              </a>
            </div>

            <div className="aspect-square bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200 shadow-xl relative">
              <iframe 
                src="https://maps.google.com/maps?q=CoastalVille%20Exteriors%20Parksville%20BC&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
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
          <h2 className="text-4xl md:text-6xl font-bold text-[#033852] mb-8 leading-tight tracking-tight uppercase">
            Ready to Transform <br /> <span className="text-[#F8ABAC]">Your Home?</span>
          </h2>
          <p className="text-zinc-500 text-xl mb-12">Free site visit. Free quote. Locally installed.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="px-10 py-5 bg-[#F8ABAC] text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20 flex items-center justify-center gap-2"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="tel:2502701010" 
              className="px-10 py-5 border border-[#033852]/20 text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-zinc-50 transition-all flex items-center justify-center gap-2"
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

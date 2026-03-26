import { motion } from "motion/react";
import { 
  CheckCircle2, 
  ArrowRight,
  ChevronDown,
  Star,
  Calendar,
  Package,
  Truck,
  Warehouse,
  RefreshCw,
  Sparkles
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
import { useState } from "react";

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-100 last:border-0">
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

const ReviewCard = ({ stars, name, platform, content, isLocalGuide = false }: { stars: number; name: string; platform: string; content: string; isLocalGuide?: boolean }) => (
  <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm flex flex-col h-full">
    <div className="flex gap-1 mb-4">
      {[...Array(stars)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    <p className="text-zinc-600 text-sm leading-relaxed mb-6 italic flex-grow">"{content}"</p>
    <div className="flex items-center justify-between pt-4 border-t border-zinc-50">
      <div className="flex flex-col">
        <span className="font-bold text-zinc-900 text-sm">{name}</span>
        {isLocalGuide && <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Local Guide</span>}
      </div>
      <span className="text-xs font-medium text-zinc-400 bg-zinc-50 px-2 py-1 rounded">[{platform}]</span>
    </div>
  </div>
);

export default function HolidayLightingParksville() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "CoastalVille Exteriors",
        "image": "https://picsum.photos/seed/parksville-lights/800/600",
        "@id": "https://coastalville.ca/holiday-lighting-parksville",
        "url": "https://coastalville.ca/holiday-lighting-parksville",
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
        "serviceType": "Holiday Light Installation",
        "provider": {
          "@type": "LocalBusiness",
          "name": "CoastalVille Exteriors"
        },
        "areaServed": {
          "@type": "City",
          "name": "Parksville"
        },
        "description": "Professional holiday light installation, takedown and storage in Parksville BC. Halloween + Christmas package available."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "When should Parksville homeowners book holiday lighting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "As early as possible — ideally by September. Our fall schedule fills up fast and most years we're fully booked by mid-October. If you're thinking about it, reach out now and get on the list."
            }
          },
          {
            "@type": "Question",
            "name": "What does the Halloween + Christmas package include?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We install your lights in October with Halloween colours — orange, purple, and white. On November 1st we come back and switch to your Christmas display. One installation fee, two seasonal looks."
            }
          },
          {
            "@type": "Question",
            "name": "Do you store the lights after the season?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — at our facility. We take everything down, pack it properly, and store it until next year. No boxes in your garage. We bring everything back and reinstall it the following season."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to supply my own lights?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. We supply commercial-grade lights as part of your installation package. Everything is included."
            }
          },
          {
            "@type": "Question",
            "name": "Do you serve areas outside Parksville?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We also serve Qualicum Beach, Lantzville, Nanoose Bay, Coombs, Errington, Nanaimo and surrounding communities."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer any savings for booking multiple seasons?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. If you'd like to lock in your holiday lighting for multiple years we offer a 10% saving on a 2-year commitment and 20% on a 3-year commitment. Same great service every year, lights stored at our facility between seasons. Ask us about it when you book."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#033852]">
      <SEO 
        title="Holiday Light Installation Parksville BC | CoastalVille Exteriors"
        description="Professional holiday light installation, takedown and storage in Parksville BC. Free lighting consult and mockup at your home. Halloween + Christmas package available. From $500. Call (250) 270-1010."
        schema={schema}
      />
      <Navbar />

      {/* SECTION Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            src="https://i.ibb.co/6JpJysNf/Adobe-Stock-984415837.jpg" 
            alt="Festive holiday lighting installation in Parksville" 
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
                DESIGN · INSTALL · TAKEDOWN · STORAGE
              </span>
              <div className="hidden md:block h-[1px] w-24 bg-white/30" />
            </div>

            {/* Main Headline */}
            <h1 className="flex flex-col items-center mb-10">
              <span className="font-sans font-bold text-6xl md:text-[110px] text-white leading-none uppercase tracking-tight mb-2">
                Parksville's
              </span>
              <span className="font-sans font-black text-5xl md:text-[90px] text-[#F8ABAC] leading-none uppercase tracking-tight">
                Holiday Lighting
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-xl text-white/80 text-sm md:text-base font-medium leading-relaxed mb-12">
              Design, installation, takedown and storage, all included. Free lighting consult and mockup at your Parksville home. From $500.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="/contact" 
                className="w-full sm:w-auto px-10 py-4 bg-[#F8ABAC] text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20 text-center"
              >
                Book a Lighting Consult
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

      {/* SECTION Trust Bar */}
      <section className="bg-[#033852] py-6 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-6 gap-x-8 text-white">
            {[
              { text: "Licensed & Insured" },
              { text: "Parksville Based" },
              { text: "Free Lighting Consult" },
              { text: "Book Early" },
              { text: "Full Service" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#F8ABAC]" />
                <span className="text-sm font-semibold tracking-wide uppercase">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1 — LOCAL INTRO */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#033852] mb-8 leading-tight">Holiday Lighting in Parksville, By a Local Company</h2>
          <div className="space-y-6 text-zinc-600 text-lg leading-relaxed">
            <p>
              CoastalVille Exteriors is a Parksville-based exterior company installing holiday lights on homes right here in your community. We're not driving up from Nanaimo. We live and work in Parksville and we're active across the community year-round on properties like those on Samuel Place, Lowry's Road, Rockland Place, and throughout the surrounding neighbourhoods.
            </p>
            <p>
              We handle everything, free lighting consult and mockup at your home, professional installation, seasonal colour changes, takedown, and storage at our facility. You don't lift a finger.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT'S INCLUDED */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-[#033852] mb-16 text-center">Everything Included. Nothing to Do.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: "Free Consult & Mockup", desc: "We come to your Parksville property, design your display together, and show you exactly what it will look like." },
              { icon: Package, title: "Professional Installation", desc: "Commercial-grade lights, installed safely and perfectly on your scheduled date." },
              { icon: RefreshCw, title: "Seasonal Colour Changes", desc: "Halloween colours in October, Christmas colours November 1st. One install, two seasonal looks." },
              { icon: Truck, title: "Takedown After Season", desc: "We remove everything cleanly when the season ends, you don't lift a finger." },
              { icon: Warehouse, title: "Storage at Our Facility", desc: "No boxes in your garage. We store everything safely in our climate-controlled facility." },
              { icon: Calendar, title: "Reinstall Next Season", desc: "We bring everything back and put it up again the following year." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
                <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-[#033852]" />
                </div>
                <h3 className="text-xl font-bold text-[#033852] mb-4">{item.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-2xl font-bold text-[#033852] leading-tight">
              No ladders. No frozen fingers. No tangled strings.
            </p>
            <p className="text-zinc-500 mt-4">
              Just lights that look great and come down when the season is over, without you lifting a finger.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — HALLOWEEN + CHRISTMAS PACKAGE */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#033852] mb-8">Two Seasons. One Install.</h2>
          <div className="space-y-6 text-zinc-600 text-lg leading-relaxed mb-16">
            <p>You can get two seasonal displays with one installation.</p>
            <p>
              We install your lights in October with Halloween colours, orange, purple, and white. On November 1st we come back and switch to your Christmas display. Same lights, same installation, completely different look.
            </p>
            <p>It's our most popular add-on for Parksville customers who love the fall holidays. Ask us about it when you book.</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="flex flex-col items-center">
              <div className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-orange-500/20 flex items-center gap-2">
                <span>🎃</span> Halloween (October)
              </div>
              <div className="mt-4 text-zinc-400 text-sm font-bold uppercase tracking-widest">Orange & Purple</div>
            </div>
            
            <div className="hidden md:block text-zinc-200">
              <ArrowRight className="w-8 h-8" />
            </div>
            <div className="md:hidden text-zinc-200">
              <ChevronDown className="w-8 h-8" />
            </div>

            <div className="bg-zinc-100 px-6 py-2 rounded-full text-zinc-500 font-bold text-sm uppercase tracking-widest">
              November 1st
            </div>

            <div className="hidden md:block text-zinc-200">
              <ArrowRight className="w-8 h-8" />
            </div>
            <div className="md:hidden text-zinc-200">
              <ChevronDown className="w-8 h-8" />
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-red-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-red-600/20 flex items-center gap-2">
                <span>🎄</span> Christmas (Nov–Jan)
              </div>
              <div className="mt-4 text-zinc-400 text-sm font-bold uppercase tracking-widest">Red, Green & White</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PRICING */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#033852] mb-8">What Does Holiday Lighting Cost in Parksville?</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-zinc-600 text-lg leading-relaxed">
              <p>
                Holiday lighting installation in Parksville starts from $500. The final price depends on the size of your home and the scope of your display.
              </p>
              <p>
                Storage and reinstall are included in your seasonal package, no hidden fees, no surprise charges when we come to take them down.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white p-10 rounded-2xl border border-zinc-100 shadow-sm text-center">
              <h3 className="text-2xl font-bold text-[#033852] mb-4">Standard Display</h3>
              <p className="text-zinc-500 mb-6">Design, install, takedown & storage</p>
              <div className="text-[#F8ABAC] text-3xl font-bold">Starting from $500</div>
            </div>
            <div className="bg-white p-10 rounded-2xl border border-zinc-100 shadow-sm text-center">
              <h3 className="text-2xl font-bold text-[#033852] mb-4">Halloween + Christmas Package</h3>
              <p className="text-zinc-500 mb-6">Install in October, switch Nov 1st</p>
              <div className="text-[#F8ABAC] text-3xl font-bold">Ask for pricing</div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-zinc-500 italic mb-10">
              Book early, our Parksville fall schedule fills up fast. Most years fully booked by mid-October.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-10 py-5 bg-[#F8ABAC] text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20"
            >
              Book a Lighting Consult <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5 — REVIEWS */}
      <section className="py-24 md:py-32 px-6 bg-[#033852]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16">
            <span className="text-[#F8ABAC] font-bold text-[10px] md:text-[11px] uppercase tracking-[0.4em] mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white">What Parksville Homeowners Are Saying</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ReviewCard 
              stars={5} 
              name="Inimitable" 
              platform="Google Review" 
              isLocalGuide={true}
              content="This local company was responsive from the very first contact. They were impressive in their ability to provide information and to show you what your house will look like with their lights. They were very quick in coming to measure, designing what we wanted and installing the lighting system. We got exactly what we wanted, the final product looks absolutely brilliant, even bringing comment and approvals from the neighbors. Based on what was delivered, we're also going to go ahead and use their lighting system for Halloween next year to dress up the house for the trick or treaters. Local, responsive, efficient and communicative are the traits of this company."
            />
            <ReviewCard 
              stars={5} 
              name="Meaghan Dougherty" 
              platform="Google Review" 
              content="Excellent experience with Coastalville for our holiday lights from start to finish! They were super responsive, clear, offered a detailed quote and photo mock-ups of options, and were quick and thorough with the installation. The lights look amazing and they were a pleasure to work with!!!!"
            />
            <ReviewCard 
              stars={5} 
              name="Erin Pickup" 
              platform="Google Review" 
              content="We had such a great experience with Coastalville Exteriors for our Christmas light installation. The consult was super helpful, and they made choosing the colours easy and fun. They provide all the lights, install everything, take them down after the season, and even store them — which is a huge bonus! Friendly team, smooth process, and our home looks amazing for Christmas. Highly recommend!"
            />
          </div>
        </div>
      </section>

      {/* SECTION 6 — FAQ */}
      <section className="py-24 md:py-32 px-6 bg-[#F5F5F5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#033852]">Common Questions from Parksville Homeowners</h2>
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-zinc-100">
            <div className="space-y-2">
              <AccordionItem 
                question="When should Parksville homeowners book holiday lighting?"
                answer="As early as possible, ideally by September. Our fall schedule fills up fast and most years we're fully booked by mid-October. If you're thinking about it, reach out now and get on the list."
              />
              <AccordionItem 
                question="What does the Halloween + Christmas package include?"
                answer="We install your lights in October with Halloween colours, orange, purple, and white. On November 1st we come back and switch to your Christmas display. One installation fee, two seasonal looks."
              />
              <AccordionItem 
                question="Do you store the lights after the season?"
                answer="Yes. At our facility. We take everything down, pack it properly, and store it until next year. No boxes in your garage. We bring everything back and reinstall it the following season."
              />
              <AccordionItem 
                question="Do I need to supply my own lights?"
                answer="No. We supply commercial-grade lights as part of your installation package. Everything is included."
              />
              <AccordionItem 
                question="Do you serve areas outside Parksville?"
                answer="Yes. We also serve Qualicum Beach, Lantzville, Nanoose Bay, Coombs, Errington, Nanaimo and surrounding communities."
              />
              <AccordionItem 
                question="Do you offer any savings for booking multiple seasons?"
                answer="Yes. If you'd like to lock in your holiday lighting for multiple years we offer a 10% saving on a 2-year commitment and 20% on a 3-year commitment. Same great service every year, lights stored at our facility between seasons. Ask us about it when you book."
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — SERVICE AREA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#033852] mb-8">Serving Parksville & the Oceanside Area</h2>
              <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                We're based in Parksville and install holiday lights across Parksville, Qualicum Beach, Lantzville, Nanoose Bay, Coombs, Errington, Nanaimo and the surrounding area. Book early, our fall schedule fills fast.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-12">
                {[
                  { name: "Parksville", href: "/holiday-lighting-parksville" },
                  { name: "Qualicum Beach", href: "/holiday-lighting-qualicum-beach" },
                  { name: "Nanaimo", href: "/holiday-lighting-nanaimo" },
                  { name: "Lantzville", href: "/services/holiday-lighting" },
                  { name: "Nanoose Bay", href: "/services/holiday-lighting" },
                  { name: "Coombs", href: "/services/holiday-lighting" },
                  { name: "Errington", href: "/services/holiday-lighting" }
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82877.4436563605!2d-124.4716444!3d49.3486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54889376663f7667%3A0x50135152a7b1730!2sParksville%2C%20BC!5e0!3m2!1sen!2sca!4v1710864000000!5m2!1sen!2sca"
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

      {/* SECTION 8 — FINAL CTA */}
      <section className="bg-white py-32 px-6 text-center overflow-hidden relative border-t border-zinc-100">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
            <span className="text-[#F8ABAC] font-bold text-xs uppercase tracking-[0.4em]">Get In Touch</span>
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#033852] mb-8 leading-tight">
            Ready to book your Parksville <br /> <span className="text-[#F8ABAC]">holiday lights?</span>
          </h2>
          <p className="text-zinc-500 text-xl mb-12">Spots fill fast. Book early to secure your date.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="px-10 py-4 bg-[#F8ABAC] text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20 flex items-center justify-center gap-2"
            >
              Book a Lighting Consult <ArrowRight className="w-4 h-4" />
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

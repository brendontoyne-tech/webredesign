import { motion } from "motion/react";
import { 
  CheckCircle2, 
  ArrowRight,
  ChevronDown,
  Star,
  Calendar,
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
        <p className="text-zinc-600 leading-relaxed whitespace-pre-line">{answer}</p>
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

export default function HolidayLighting() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#033852]">
      <SEO 
        title="Holiday Light Installation | CoastalVille Exteriors Parksville"
        description="Professional holiday light installation, takedown, and storage in Parksville, Qualicum Beach, and the Oceanside area. Free lighting consult and mockup included. From $500. Call (250) 270-1010."
      />
      
      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "When should I book holiday lighting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "As early as possible, ideally by September. Our October and November schedule fills up fast, and most years we're fully booked by mid-October. If you're thinking about it, reach out now and get on the list."
              }
            },
            {
              "@type": "Question",
              "name": "What does the Halloween + Christmas package include?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We install your lights in October with Halloween colours: orange, purple, and white. On November 1st, we come back and switch to your Christmas display. One installation fee, two seasonal looks. Ask us about pricing when you book."
              }
            },
            {
              "@type": "Question",
              "name": "Do you store the lights after the season?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, at our facility. We take everything down after the season, pack it properly, and store it until next year. No boxes in your garage, no hunting for lights next October. We bring everything back and reinstall it the following season."
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
              "name": "Do you serve Qualicum Beach and surrounding areas?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we serve Parksville, Qualicum Beach, Lantzville, Nanoose Bay, Coombs, Errington, Nanaimo, and surrounding communities. No travel surcharges anywhere in our service area."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer any savings for booking multiple seasons?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. If you'd like to lock in your holiday lighting for multiple years, we offer a 10% saving on a 2-year commitment and 20% on a 3-year commitment. Same great service every year, with lights stored at our facility between seasons. Ask us about it when you book."
              }
            }
          ]
        })}
      </script>

      {/* Service Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Holiday Light Installation",
          "provider": {
            "@type": "LocalBusiness",
            "name": "CoastalVille Exteriors",
            "telephone": "(250) 270-1010",
            "areaServed": ["Parksville", "Qualicum Beach", "Vancouver Island"]
          },
          "description": "Professional holiday light installation, takedown, and storage in Parksville, Qualicum Beach, and the Oceanside area."
        })}
      </script>

      <Navbar />

      {/* SECTION Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            src="https://i.ibb.co/6JpJysNf/Adobe-Stock-984415837.jpg" 
            alt="Beautifully lit home at night with holiday lights" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#033852]/80" />
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
                Holiday
              </span>
              <span className="font-sans font-black text-5xl md:text-[90px] text-[#F8ABAC] leading-none uppercase tracking-tight">
                Lighting
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-xl text-white/80 text-sm md:text-base font-medium leading-relaxed mb-12">
              We handle everything: design, installation, takedown, and storage are all included. Free lighting consult and mockup at your home.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="/contact" 
                className="w-full sm:w-auto px-10 py-4 bg-[#F8ABAC] text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20"
              >
                Book a Lighting Consult
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
              { icon: <CheckCircle2 className="w-5 h-5 text-[#F8ABAC]" />, text: "Licensed & Insured" },
              { icon: <Sparkles className="w-5 h-5 text-[#F8ABAC]" />, text: "Free Lighting Consult" },
              { icon: <Calendar className="w-5 h-5 text-[#F8ABAC]" />, text: "Book Early" },
              { icon: <Star className="w-5 h-5 text-[#F8ABAC]" />, text: "5-Star Service" }
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

      {/* SECTION 1 — WHAT'S INCLUDED */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#033852] mb-12 text-center">Everything Included. Nothing to Do.</h2>
          <div className="grid gap-6 mb-12">
            {[
              { title: "Free lighting consult & mockup", desc: "We come to your property, design your display together, and show you exactly what it will look like before we start." },
              { title: "Professional installation", desc: "Commercial-grade lights, installed safely and perfectly on your scheduled date." },
              { title: "Seasonal colour changes", desc: "Halloween colours in October, Christmas colours November 1st. One install, two seasonal looks." },
              { title: "Takedown after the season", desc: "We remove everything cleanly when the season ends; you don't lift a finger." },
              { title: "Storage at our facility", desc: "No boxes in your garage, no hunting for lights next year; we store everything safely." },
              { title: "Reinstall next season", desc: "We bring everything back and put it up again the following year." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#F8ABAC] shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#033852] text-lg">{item.title}</h3>
                  <p className="text-zinc-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center pt-8 border-t border-zinc-100">
            <p className="text-xl font-bold text-[#033852] leading-relaxed">
              No ladders. No frozen fingers. No tangled strings. <br />
              <span className="text-zinc-500 font-medium text-lg">Just lights that look great and come down when the season is over, without you lifting a finger.</span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — HALLOWEEN + CHRISTMAS PACKAGE */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#033852] mb-8">Two Seasons. One Install.</h2>
          <div className="space-y-6 text-zinc-600 text-lg leading-relaxed mb-12">
            <p>
              Here's something most people don't know. You can get two seasonal displays with one installation.
            </p>
            <p>
              We install your lights in October with Halloween colours: orange, purple, and white. On November 1st, we come back and switch to your Christmas display. Same lights, same installation, completely different look.
            </p>
            <p>
              It's our most popular add-on for customers who love the fall holidays and want to get maximum value from their install. Ask us about it when you book.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold shadow-lg flex items-center gap-2">
              <span>🎃</span> Halloween (October)
            </div>
            <div className="text-[#033852] font-bold">
              <ArrowRight className="w-6 h-6 hidden md:block" />
              <ChevronDown className="w-6 h-6 md:hidden mx-auto" />
              <span className="text-xs uppercase tracking-widest block mt-1">November 1st</span>
            </div>
            <div className="bg-red-600 text-white px-8 py-4 rounded-full font-bold shadow-lg flex items-center gap-2">
              <span>🎄</span> Christmas (Nov–Jan)
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE PROCESS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#033852] mb-16 text-center">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                step: "Step 1",
                title: "Book Early",
                desc: "Our October and November schedule fills up fast; most years we're fully booked by mid-October. The earlier you book, the better your chances of getting your preferred installation date."
              },
              {
                step: "Step 2",
                title: "Free Lighting Consult & Mockup",
                desc: "We come to your property for a lighting consult. We walk through the design together, show you a mockup of your home with the lights applied, and plan your full display. You'll know exactly what it will look like before we start."
              },
              {
                step: "Step 3",
                title: "Professional Installation",
                desc: "We arrive on your scheduled date, install everything safely and beautifully, and leave your property clean. You come home to finished lights, nothing to do."
              },
              {
                step: "Step 4",
                title: "Takedown & Storage",
                desc: "When the season ends we come back, take everything down carefully, pack it properly, and store it at our facility. Next October we bring it back and do it all again."
              }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-[#F8ABAC] font-bold text-sm uppercase tracking-widest mb-4">{step.step}</div>
                <h3 className="text-2xl font-bold text-[#033852] mb-4">{step.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — PRICING */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#033852] mb-8">What Does Holiday Lighting Cost?</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-zinc-600 text-lg leading-relaxed">
              <p>
                Holiday lighting installation starts from $500. The final price depends on the size of your home and the scope of the display you choose.
              </p>
              <p>
                Storage and reinstall are included in your seasonal package, no hidden fees, no surprise charges when we come to take them down.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm">
              <h3 className="text-2xl font-bold text-[#033852] mb-2">Standard Display</h3>
              <p className="text-zinc-500 mb-6">Design, install, takedown & storage</p>
              <div className="text-[#F8ABAC] text-3xl font-bold">From $500</div>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm">
              <h3 className="text-2xl font-bold text-[#033852] mb-2">Halloween + Christmas Package</h3>
              <p className="text-zinc-500 mb-6">Install in October with Halloween colours, switch to Christmas November 1st</p>
              <div className="text-[#F8ABAC] text-3xl font-bold">Ask for pricing</div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-zinc-500 italic mb-10 flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5 text-[#F8ABAC]" />
              Book early, our fall schedule fills up fast. Most years fully booked by mid-October.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-10 py-5 bg-[#F8ABAC] text-white rounded-xl font-bold text-lg hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20"
            >
              Book a Lighting Consult <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5 — REVIEWS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#033852] mb-16 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ReviewCard 
              stars={5} 
              name="Inimitable" 
              platform="Google" 
              isLocalGuide={true}
              content="This local company was responsive from the very first contact. They were impressive in their ability to provide information and to show you what your house will look like with their lights. They were very quick in coming to measure, designing what we wanted and installing the lighting system. We got exactly what we wanted, the final product looks absolutely brilliant, even bringing comment and approvals from the neighbors. Based on what was delivered, we're also going to go ahead and use their lighting system for Halloween next year to dress up the house for the trick or treaters. Local, responsive, efficient and communicative are the traits of this company."
            />
            <ReviewCard 
              stars={5} 
              name="Meaghan Dougherty" 
              platform="Google" 
              content="Excellent experience with Coastalville for our holiday lights from start to finish! They were super responsive, clear, offered a detailed quote and photo mock-ups of options, and were quick and thorough with the installation. The lights look amazing and they were a pleasure to work with!!!!"
            />
            <ReviewCard 
              stars={5} 
              name="Erin Pickup" 
              platform="Google" 
              content="We had such a great experience with Coastalville Exteriors for our Christmas light installation. The consult was super helpful, and they made choosing the colours easy and fun. They provide all the lights, install everything, take them down after the season, and even store them — which is a huge bonus! Friendly team, smooth process, and our home looks amazing for Christmas. Highly recommend!"
            />
          </div>
        </div>
      </section>

      {/* SECTION 6 — FAQ */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-[#033852] mb-12 text-center">Common Questions</h2>
          <div className="space-y-2">
            <AccordionItem 
              question="When should I book holiday lighting?"
              answer="As early as possible, ideally by September. Our October and November schedule fills up fast and most years we're fully booked by mid-October. If you're thinking about it, reach out now and get on the list."
            />
            <AccordionItem 
              question="What does the Halloween + Christmas package include?"
              answer="We install your lights in October with Halloween colours, orange, purple, and white. On November 1st we come back and switch to your Christmas display. One installation fee, two seasonal looks. Ask us about pricing when you book."
            />
            <AccordionItem 
              question="Do you store the lights after the season?"
              answer="Yes. At our facility. We take everything down after the season, pack it properly, and store it until next year. No boxes in your garage, no hunting for lights next October. We bring everything back and reinstall it the following season."
            />
            <AccordionItem 
              question="Do I need to supply my own lights?"
              answer="No. We supply commercial-grade lights as part of your installation package. Everything is included."
            />
            <AccordionItem 
              question="Do you serve Qualicum Beach and surrounding areas?"
              answer="Yes. We serve Parksville, Qualicum Beach, Lantzville, Nanoose Bay, Coombs, Errington, Nanaimo and surrounding communities. No travel surcharges anywhere in our service area."
            />
            <AccordionItem 
              question="Do you offer any savings for booking multiple seasons?"
              answer="Yes. If you'd like to lock in your holiday lighting for multiple years we offer a 10% saving on a 2-year commitment and 20% on a 3-year commitment. Same great service every year, lights stored at our facility between seasons. Ask us about it when you book."
            />
          </div>
        </div>
      </section>

      {/* SECTION 7 — SERVICE AREAS */}
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
                We are a local team based in Parksville, providing professional holiday lighting services to homeowners across the region.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-10">
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
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#033852] text-white rounded-xl font-bold hover:bg-[#044a6b] transition-all shadow-lg"
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

      {/* SECTION 8 — FINAL CTA */}
      <section className="bg-white py-32 px-6 text-center overflow-hidden relative border-t border-zinc-100">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
            <span className="text-[#F8ABAC] font-bold text-xs uppercase tracking-[0.4em]">Get In Touch</span>
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#033852] mb-8 leading-tight tracking-tight uppercase">
            Ready to Book Your <br /> <span className="text-[#F8ABAC]">Holiday Lights?</span>
          </h2>
          <p className="text-zinc-500 text-xl mb-12">Spots fill fast. Book early to secure your date.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="px-10 py-5 bg-[#F8ABAC] text-white rounded-xl font-bold text-lg hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20">Book a Lighting Consult <ArrowRight className="w-5 h-5 inline ml-2" /></a>
            <a href="tel:2502701010" className="px-10 py-5 border border-[#033852]/20 text-[#033852] rounded-xl font-bold text-lg hover:bg-zinc-50 transition-all">Call (250) 270-1010</a>
          </div>
          <p className="text-zinc-400 text-sm mt-6">We respond within 24 hours, usually much faster.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

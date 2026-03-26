import { motion } from "motion/react";
import { 
  CheckCircle2, 
  ArrowRight,
  ChevronDown,
  Star,
  Shield,
  Zap,
  Trees
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

const ReviewCard = ({ stars, name, platform, content }: { stars: number; name: string; platform: string; content: string }) => (
  <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm flex flex-col h-full">
    <div className="flex gap-1 mb-4">
      {[...Array(stars)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    <p className="text-zinc-600 text-sm leading-relaxed mb-6 italic flex-grow">"{content}"</p>
    <div className="flex items-center justify-between pt-4 border-t border-zinc-50">
      <span className="font-bold text-zinc-900 text-sm">{name}</span>
      <span className="text-xs font-medium text-zinc-400 bg-zinc-50 px-2 py-1 rounded">[{platform}]</span>
    </div>
  </div>
);

export default function GutterGuardsQualicumBeach() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#033852]">
      <SEO 
        title="Gutter Guard Installation Qualicum Beach BC | CoastalVille Exteriors"
        description="Professional gutter guard installation in Qualicum Beach BC. We install Alu-Rex DoublePro — lifetime clog-free warranty covering pine areas. Right next door in Parksville. Call (250) 270-1010."
      />

      {/* LocalBusiness and Service Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Gutter Guard Installation",
          "provider": {
            "@type": "LocalBusiness",
            "name": "CoastalVille Exteriors",
            "telephone": "(250) 270-1010",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Qualicum Beach",
              "addressRegion": "BC",
              "addressCountry": "CA"
            }
          },
          "areaServed": {
            "@type": "City",
            "name": "Qualicum Beach"
          },
          "description": "Professional gutter guard installation in Qualicum Beach BC featuring Alu-Rex DoublePro systems."
        })}
      </script>

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Are gutter guards worth it for Qualicum Beach homes?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "For most Qualicum Beach homes — yes. With arbutus, Douglas fir, and Garry oak trees throughout the area, gutters fill up fast. DoublePro pays for itself within a few years in avoided cleaning costs — and comes with a lifetime warranty covering pine needle areas specifically."
              }
            },
            {
              "@type": "Question",
              "name": "Do gutter guards actually work with pine needles?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "DoublePro does. The Eclipse technology blocks even fine pine needles while letting water flow freely. It's the only system with a lifetime clog-free warranty covering pine areas — which is why we chose it for Vancouver Island."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need a gutter clean before installation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We recommend it. We want to install onto gutters that are clean and in good shape. We can do the clean and the installation on the same visit — just let us know when you book."
              }
            },
            {
              "@type": "Question",
              "name": "How quickly can you get to a Qualicum Beach guard installation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Typically within one to two weeks. We're based in Parksville — right next door. No travel delay. Call or text (250) 270-1010 to check availability."
              }
            },
            {
              "@type": "Question",
              "name": "What's the difference between DoublePro and T-Rex?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "DoublePro is the premium dual-layer system with microfiltration that blocks pine needles and fine debris — ideal for most Qualicum Beach homes. T-Rex is a solid entry-level single-layer system. We'll recommend the right one at the quote stage."
              }
            }
          ]
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
            src="https://i.ibb.co/9k9vQd3v/Alurex-Gutter-Clean-Installation.png" 
            alt="Alu-Rex DoublePro gutter guard installation close-up" 
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
                ALU-REX · DOUBLEPRO · LIFETIME WARRANTY
              </span>
              <div className="hidden md:block h-[1px] w-24 bg-white/30" />
            </div>

            {/* Main Headline */}
            <h1 className="flex flex-col items-center mb-10">
              <span className="font-sans font-bold text-6xl md:text-[110px] text-white leading-none uppercase tracking-tight mb-2">
                Qualicum Beach
              </span>
              <span className="font-sans font-black text-5xl md:text-[90px] text-[#F8ABAC] leading-none uppercase tracking-tight">
                Gutter Guards
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-xl text-white/80 text-sm md:text-base font-medium leading-relaxed mb-12">
              Lifetime clog-free warranty. Including pine needle areas. Right next door in Parksville.
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
              { icon: <CheckCircle2 className="w-5 h-5 text-[#F8ABAC]" />, text: "Licensed & Insured" },
              { icon: <Shield className="w-5 h-5 text-[#F8ABAC]" />, text: "Lifetime Warranty" },
              { icon: <Star className="w-5 h-5 text-[#F8ABAC]" />, text: "5-Star Service" },
              { icon: <Zap className="w-5 h-5 text-[#F8ABAC]" />, text: "Free Quotes" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 group">
                {item.icon}
                <span className="text-sm font-semibold tracking-wide uppercase">{item.text}</span>
                {i < 3 && <div className="hidden lg:block h-4 w-px bg-white/20 ml-8" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1 — LOCAL INTRO */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#033852] mb-8">Gutter Guard Installation in Qualicum Beach</h2>
          <div className="space-y-6 text-zinc-600 text-lg leading-relaxed">
            <p>
              CoastalVille Exteriors is a Parksville-based exterior company installing Alu-Rex gutter guard systems on homes across the Oceanside area, including right here in Qualicum Beach. We're right next door, and we're active throughout Qualicum Beach on properties like those on Crescent Road, Maple Street, and throughout the surrounding neighbourhoods.
            </p>
            <p>
              If your gutters are constantly filling with pine needles and debris, we're already in your area, and we have the system to fix it permanently.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHY DOUBLEPRO FOR QUALICUM BEACH */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#033852] mb-8 text-center">Why DoublePro Is the Right Choice for Qualicum Beach Homes</h2>
          <div className="space-y-6 text-zinc-600 text-lg leading-relaxed mb-12 text-center">
            <p>
              Qualicum Beach's mature arbutus, Douglas fir, and Garry oak trees are part of what makes the area beautiful, and they're brutal on gutters. Fine pine needles and leaf debris are the number one cause of blocked gutters in this area, and most cheap gutter guard systems let them straight through.
            </p>
            <p>
              Alu-Rex DoublePro is different. The Eclipse technology uses precision offset holes that block even fine pine needles while letting water flow freely. It's the only gutter guard system with a lifetime clog-free warranty that specifically covers pine needle areas. For Qualicum Beach homes, that's exactly what you need.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-zinc-100 flex items-center gap-2 font-bold text-[#033852]">
              <Trees className="w-5 h-5 text-[#F8ABAC]" /> Pine Needle Proof
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-zinc-100 flex items-center gap-2 font-bold text-[#033852]">
              <Star className="w-5 h-5 text-[#F8ABAC]" /> Lifetime Warranty
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-zinc-100 flex items-center gap-2 font-bold text-[#033852]">
              <Zap className="w-5 h-5 text-[#F8ABAC]" /> 425 lb Per Linear Foot Strength
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHICH SYSTEM IS RIGHT FOR YOUR HOME? */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#033852] mb-8 text-center">DoublePro or T-Rex. Which One Fits?</h2>
          <p className="text-zinc-600 text-lg text-center mb-16">We install two Alu-Rex systems. Here's how to think about which one fits:</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-[#033852] p-10 rounded-2xl text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                <Shield className="w-24 h-24" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Alu-Rex DoublePro, Our Primary Recommendation</h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                The premium option. Dual-layer microfiltration that blocks even fine pine needles and seeds. Continuous hanger that reinforces the full gutter length. Lifetime warranty including pine areas. Best for most Qualicum Beach homes where pine needle debris is a real issue.
              </p>
              <div className="text-[#F8ABAC] text-3xl font-bold">Starting from $500</div>
            </div>

            <div className="bg-[#033852] p-10 rounded-2xl text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                <Zap className="w-24 h-24" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Alu-Rex T-Rex, Entry Level Option</h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                A solid single-layer continuous hanger system that keeps larger debris out and strengthens your gutters. A good fit for Qualicum Beach homes with minimal fine debris or tighter budgets.
              </p>
              <div className="text-[#F8ABAC] text-3xl font-bold">Ask us about pricing</div>
            </div>
          </div>

          <p className="text-center text-zinc-500 italic">
            For most Qualicum Beach homes we recommend DoublePro, the pine needle coverage and lifetime warranty make it the right call. We'll give you an honest recommendation at the quote stage.
          </p>
        </div>
      </section>

      {/* SECTION 4 — THE PROCESS */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#033852] mb-16 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "Step 1",
                title: "Cleaning First",
                desc: "We start with a full gutter clean before guard installation. We want to make sure the system goes onto gutters in good shape. We can do both on the same Qualicum Beach visit."
              },
              {
                step: "Step 2",
                title: "Assessment & Quote",
                desc: "We assess your roofline, tree coverage, and existing gutters. We'll recommend the right system and give you a clear written quote. Free, no obligation."
              },
              {
                step: "Step 3",
                title: "Professional Installation",
                desc: "We install the guards across your full gutter system. Clean, precise, no shortcuts. Most Qualicum Beach residential installs are completed in one visit."
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

      {/* SECTION 5 — PRICING */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#033852] mb-8">What Do Gutter Guards Cost in Qualicum Beach?</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-zinc-600 text-lg leading-relaxed">
              <p>
                Alu-Rex DoublePro installation starts from $500 for most Qualicum Beach residential homes. The final price depends on the linear footage of your gutters and the complexity of your roofline.
              </p>
              <p>
                Before we install the guards we clean your gutters first, on us. It's part of every installation. Guards should go onto a clean system and we want to make sure yours is in perfect shape before we start..
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white p-10 rounded-2xl border border-zinc-100 shadow-sm text-center">
              <h3 className="text-2xl font-bold text-[#033852] mb-4">DoublePro Installation</h3>
              <p className="text-zinc-500 mb-6">Includes supply and installation</p>
              <div className="text-[#F8ABAC] text-3xl font-bold">Starting from $500</div>
            </div>
            <div className="bg-white p-10 rounded-2xl border border-zinc-100 shadow-sm text-center">
              <h3 className="text-2xl font-bold text-[#033852] mb-4">DoublePro + Gutter Clean</h3>
              <p className="text-zinc-500 mb-6">Clean first, then guards, done right</p>
              <div className="text-[#F8ABAC] text-3xl font-bold">Ask for combined quote</div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-zinc-500 italic mb-10">
              Free quote, we assess your gutters and give you an accurate number for your specific Qualicum Beach property.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-10 py-5 bg-[#F8ABAC] text-white rounded-xl font-bold text-lg hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20"
            >
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 6 — REVIEWS */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#033852] mb-16 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ReviewCard 
              stars={5} 
              name="Keanna Mullen" 
              platform="Google" 
              content="So happy we decided to get Gutter Guards installed on our Parksville home. CoastalVille Exteriors made everything simple and the work was done professionally and on time. We've already recommended them to friends and neighbours."
            />
            <ReviewCard 
              stars={5} 
              name="Keith" 
              platform="Google · Local Guide" 
              content="Really happy with CoastalVille Exteriors. They came by to clean our gutters, did a thorough job, and even tested the downspouts to make sure everything was flowing properly. Super friendly and easy to deal with too. I'd definitely use them again."
            />
            <ReviewCard 
              stars={5} 
              name="Maria P." 
              platform="Google" 
              content="Very happy with the new downspouts they put in. Left my home cleaner than when they arrived. I will be recommending them to my friends & family. Love supporting new local businesses."
            />
          </div>
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-[#033852] mb-12 text-center">Common Questions from Qualicum Beach Homeowners</h2>
          <div className="space-y-2">
            <AccordionItem 
              question="Are gutter guards worth it for Qualicum Beach homes?"
              answer="For most Qualicum Beach homes, yes. With arbutus, Douglas fir, and Garry oak trees throughout the area, gutters fill up fast. DoublePro pays for itself within a few years in avoided cleaning costs, and comes with a lifetime warranty covering pine needle areas specifically."
            />
            <AccordionItem 
              question="Do gutter guards actually work with pine needles?"
              answer="DoublePro does. The Eclipse technology blocks even fine pine needles while letting water flow freely. It's the only system with a lifetime clog-free warranty covering pine areas, which is why we chose it for Vancouver Island."
            />
            <AccordionItem 
              question="Do I need a gutter clean before installation?"
              answer="We recommend it. We want to install onto gutters that are clean and in good shape. We can do the clean and the installation on the same visit, just let us know when you book."
            />
            <AccordionItem 
              question="How quickly can you get to a Qualicum Beach guard installation?"
              answer="Typically within one to two weeks. We're based in Parksville — right next door. No travel delay. Call or text (250) 270-1010 to check availability."
            />
            <AccordionItem 
              question="What's the difference between DoublePro and T-Rex?"
              answer="DoublePro is the premium dual-layer system with microfiltration that blocks pine needles and fine debris, ideal for most Qualicum Beach homes. T-Rex is a solid entry-level single-layer system. We'll recommend the right one at the quote stage."
            />
          </div>
        </div>
      </section>

      {/* SECTION 8 — SERVICE AREA */}
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
                We're based in Parksville — right next door to Qualicum Beach. We install Alu-Rex gutter guard systems across Qualicum Beach, Parksville, Lantzville, Nanoose Bay, Coombs, Errington and the surrounding Oceanside area. No travel surcharges anywhere in our service area.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { name: "Parksville", link: "/gutter-guards-parksville" },
                  { name: "Qualicum Beach", link: "/gutter-guards-qualicum-beach" },
                  { name: "Lantzville", link: "/services/gutter-guards" },
                  { name: "Nanoose Bay", link: "/services/gutter-guards" },
                  { name: "Coombs", link: "/services/gutter-guards" },
                  { name: "Errington", link: "/services/gutter-guards" }
                ].map((city) => (
                  <a 
                    key={city.name} 
                    href={city.link}
                    className="px-4 py-2 bg-zinc-50 border border-zinc-100 rounded-full text-zinc-600 text-sm font-medium hover:bg-[#F8ABAC]/10 hover:border-[#F8ABAC]/20 hover:text-[#033852] transition-all"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82877.4436563605!2d-124.4716444!3d49.3486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54889376663f7667%3A0x50135152a7b1730!2sQualicum%20Beach%2C%20BC!5e0!3m2!1sen!2sca!4v1710864000000!5m2!1sen!2sca"
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

      {/* SECTION 9 — FINAL CTA */}
      <section className="bg-white py-32 px-6 text-center overflow-hidden relative border-t border-zinc-100">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
            <span className="text-[#F8ABAC] font-bold text-xs uppercase tracking-[0.4em]">Get In Touch</span>
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#033852] mb-8 leading-tight">
            Ready to <span className="text-[#F8ABAC]">Stop Cleaning</span> Your <br /> Qualicum Beach Gutters?
          </h2>
          <p className="text-zinc-500 text-xl mb-12">Free quote. Lifetime warranty. Right next door in Parksville.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="px-10 py-5 bg-[#F8ABAC] text-white rounded-xl font-bold text-lg hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20">Get a Free Quote <ArrowRight className="w-5 h-5 inline ml-2" /></a>
            <a href="tel:2502701010" className="px-10 py-5 border border-[#033852]/20 text-[#033852] rounded-xl font-bold text-lg hover:bg-zinc-50 transition-all">Call (250) 270-1010</a>
          </div>
          <p className="text-zinc-400 text-sm mt-6">We respond within 24 hours, usually much faster.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

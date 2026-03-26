import { motion } from "motion/react";
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  ChevronDown,
  Star,
  Quote,
  Clock
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

export default function GutterGuards() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#033852] selection:bg-[#F8ABAC]/30">
      <SEO 
        title="Gutter Guard Installation | Alu-Rex DoublePro | CoastalVille Exteriors"
        description="Professional gutter guard installation on Vancouver Island. We install Alu-Rex DoublePro, the only guard with a lifetime clog-free warranty covering pine areas. Free quote. Call (250) 270-1010."
      />
      
      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Are gutter guards worth it?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "For most homes in the Oceanside area, yes. If you're cleaning your gutters once or twice a year and you have trees nearby, gutter guards pay for themselves within a few years in avoided cleaning costs. The key is choosing the right system. Cheap mesh guards fail with pine needles; DoublePro doesn't."
              }
            },
            {
              "@type": "Question",
              "name": "Do gutter guards work with pine needles?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "DoublePro specifically, yes. The Eclipse technology uses precision offset holes that block even fine pine needles while letting water flow freely. It's the only system with a clog-free warranty covering pine areas, which is exactly why we chose it for Vancouver Island."
              }
            },
            {
              "@type": "Question",
              "name": "Will gutter guards cause my roof to leak?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. DoublePro installs directly onto the gutter; no shingles are lifted, and nothing goes into the roof. Be cautious of any guard product that requires lifting shingles, as that can void your roofing warranty."
              }
            },
            {
              "@type": "Question",
              "name": "Do I still need to clean my gutters after installation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Rarely. DoublePro dramatically reduces how often you need cleaning; most homes go from once or twice a year to every few years. We still recommend an occasional inspection, but the days of pulling handfuls of debris out every fall are over."
              }
            },
            {
              "@type": "Question",
              "name": "What's the difference between DoublePro and T-Rex?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "DoublePro is the premium dual-layer system with microfiltration that blocks pine needles and fine debris, ideal for most Vancouver Island homes. T-Rex is a solid entry-level single-layer system. We'll recommend the right one for your home at the quote stage."
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
          "serviceType": "Gutter Guard Installation",
          "provider": {
            "@type": "LocalBusiness",
            "name": "CoastalVille Exteriors",
            "telephone": "(250) 270-1010",
            "areaServed": ["Parksville", "Qualicum Beach", "Vancouver Island"]
          },
          "description": "Professional installation of Alu-Rex DoublePro gutter guards with a lifetime clog-free warranty including pine needle coverage."
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
            alt="Alu-Rex DoublePro gutter guard installation" 
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
                Gutter
              </span>
              <span className="font-sans font-black text-5xl md:text-[90px] text-[#F8ABAC] leading-none uppercase tracking-tight">
                Guards
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-xl text-white/80 text-sm md:text-base font-medium leading-relaxed mb-12">
              We install Alu-Rex DoublePro, the most advanced gutter guard system available. Lifetime clog-free warranty, including pine needle areas.
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

      {/* SECTION Trust Bar */}
      <section className="bg-[#033852] py-6 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-6 gap-x-8 text-white">
            {[
              { icon: <ShieldCheck className="w-5 h-5 text-[#F8ABAC]" />, text: "Licensed & Insured" },
              { icon: <CheckCircle2 className="w-5 h-5 text-[#F8ABAC]" />, text: "Alu-Rex Installer" },
              { icon: <ShieldCheck className="w-5 h-5 text-[#F8ABAC]" />, text: "Lifetime Warranty" },
              { icon: <Quote className="w-5 h-5 text-[#F8ABAC]" />, text: "Free Quotes" },
              { icon: <Clock className="w-5 h-5 text-[#F8ABAC]" />, text: "24hr Response" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 group">
                {item.icon}
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">{item.text}</span>
                {i < 4 && <div className="hidden lg:block h-4 w-px bg-white/20 ml-8" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1 — WHAT ARE GUTTER GUARDS? */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
                <img 
                  src="https://i.ibb.co/QFz18vvG/Alurex-Double-Pro-D11500.png" 
                  alt="Close up of Alu-Rex Gutter Guard" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#033852] p-8 rounded-2xl text-white hidden md:block shadow-xl">
                <div className="text-3xl font-bold text-[#F8ABAC] mb-1">Clog-Free</div>
                <div className="text-sm font-medium opacity-80 uppercase tracking-widest">Guaranteed Performance</div>
              </div>
            </motion.div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-[#F8ABAC]/30" />
                <span className="text-[#F8ABAC] font-bold text-sm uppercase tracking-widest block">The Solution</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#033852] mb-8 leading-tight">What Are Gutter Guards?</h2>
              <div className="space-y-6 text-zinc-600 leading-relaxed text-lg">
                <p>
                  Gutter guards are systems installed on top of your existing gutters that keep debris out while letting water flow freely. No more climbing ladders every fall or pulling handfuls of pine needles and leaves out of blocked downspouts.
                </p>
                <p>
                  Not all gutter guards are equal. Cheap plastic mesh systems let pine needles straight through and collapse under snow. The systems we install are engineered specifically for the kind of debris and weather conditions we deal with here on Vancouver Island.
                </p>
              </div>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-[#033852] text-white rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#044a6b] transition-all group shadow-lg"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHY DOUBLEPRO */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#033852]">Why We Install Alu-Rex DoublePro</h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto mt-4">
              We install Alu-Rex DoublePro because it's the best system available for Vancouver Island homes, and we stand behind what we install.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Eclipse Tech",
                desc: "Precision offset holes block fine pine needles while letting water flow freely. Only system with a clog-free warranty covering pine areas."
              },
              {
                number: "02",
                title: "Lifetime Warranty",
                desc: "DoublePro comes with a lifetime warranty on sturdiness and clog-free performance. Specifically covers pine needle areas."
              },
              {
                number: "03",
                title: "Hanger Strength",
                desc: "Reinforces your gutters. The continuous hanger system supports up to 425 lb per linear foot, making gutters significantly stronger."
              },
              {
                number: "04",
                title: "BC Weather Built",
                desc: "Vortex technology handles up to 3x more water flow. Rollback design pushes excess flow back in during heavy coastal storms."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-[#033852] p-8 rounded-2xl text-white flex flex-col h-full group hover:translate-y-[-4px] transition-all duration-300 shadow-xl shadow-[#033852]/10">
                <div className="text-[#F8ABAC] font-mono text-sm mb-4 opacity-60">{feature.number}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6 flex-grow">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — DOUBLEPRO VS T-REX */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#033852] mb-4">Which System Is Right for Your Home?</h2>
            <p className="text-zinc-600 text-lg">We install two Alu-Rex systems. Here's how to think about which one fits:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#033852] p-10 rounded-3xl text-white flex flex-col">
              <h3 className="text-[#F8ABAC] text-2xl font-bold mb-6 uppercase tracking-tight">Alu-Rex DoublePro, Our Primary Recommendation</h3>
              <p className="text-white/70 leading-relaxed mb-8 flex-grow">
                The premium option. Dual-layer microfiltration that blocks even fine pine needles and seeds. Continuous hanger that reinforces the full gutter length. Lifetime warranty including pine areas. Best for most homes on Vancouver Island where pine needle debris is a real issue.
              </p>
              <div className="text-[#F8ABAC] text-2xl font-bold">Starting from $500</div>
            </div>
            <div className="bg-[#033852] p-10 rounded-3xl text-white flex flex-col">
              <h3 className="text-[#F8ABAC] text-2xl font-bold mb-6 uppercase tracking-tight">Alu-Rex T-Rex, Entry Level Option</h3>
              <p className="text-white/70 leading-relaxed mb-8 flex-grow">
                A solid single-layer continuous hanger system that keeps larger debris out and strengthens your gutters. A good fit for homes with minimal fine debris or tighter budgets.
              </p>
              <div className="text-[#F8ABAC] text-2xl font-bold">Ask us about pricing</div>
            </div>
          </div>
          
          <p className="text-center text-zinc-500 italic max-w-3xl mx-auto">
            For most homes in the Oceanside area we recommend DoublePro, the pine needle coverage and lifetime warranty make it the right call for Vancouver Island conditions. We'll give you an honest recommendation at the quote stage.
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
                desc: "We start with a full gutter clean before guard installation. We want to make sure the system is going onto gutters in good shape, clean, properly pitched, and without any existing damage. We can do both on the same visit."
              },
              {
                step: "Step 2",
                title: "Assessment & Quote",
                desc: "We assess your roofline, tree coverage, and existing gutters. We'll recommend the right system for your home and give you a clear written quote. Free, no obligation."
              },
              {
                step: "Step 3",
                title: "Professional Installation",
                desc: "We install the guards across your full gutter system. Clean, precise, no shortcuts. Most residential installs are completed in one visit."
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
            <h2 className="text-4xl font-bold text-[#033852] mb-8">What Do Gutter Guards Cost?</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-zinc-600 text-lg leading-relaxed">
              <p>
                Alu-Rex DoublePro installation starts from $500 for most residential homes. The final price depends on the linear footage of your gutters and the complexity of your roofline.
              </p>
              <p>
               Before we install the guards we clean your gutters first, on us. It's part of every installation. Guards should go onto a clean system and we want to make sure yours is in perfect shape before we start.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-zinc-50 p-10 rounded-3xl border border-zinc-100">
              <h3 className="text-2xl font-bold text-[#033852] mb-2">DoublePro Installation</h3>
              <p className="text-zinc-500 mb-6">Includes supply and installation</p>
              <div className="text-[#F8ABAC] text-3xl font-bold">Starting from $500</div>
            </div>
            <div className="bg-zinc-50 p-10 rounded-3xl border border-zinc-100">
              <h3 className="text-2xl font-bold text-[#033852] mb-2">DoublePro + Gutter Clean</h3>
              <p className="text-zinc-500 mb-6">Clean first, then guards. done right</p>
              <div className="text-[#F8ABAC] text-3xl font-bold">Ask for a quote</div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-zinc-500 italic mb-10">
              Free quote. We assess your gutters and give you an accurate number for your specific home.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-10 py-5 bg-[#F8ABAC] text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
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
              content="Really happy with CoastalVille Exteriors. They came by to clean our gutters, did a thorough job, and even tested the downspouts to make sure everything was flowing properly. Super friendly and easy to deal with too."
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
          <h2 className="text-4xl font-bold text-[#033852] mb-12 text-center">Common Questions</h2>
          <div className="space-y-2">
            <AccordionItem 
              question="Are gutter guards worth it?"
              answer="For most homes in the Oceanside area, yes. If you're cleaning your gutters once or twice a year and you have trees nearby, gutter guards pay for themselves within a few years in avoided cleaning costs. The key is choosing the right system. Cheap mesh guards fail with pine needles. DoublePro doesn't."
            />
            <AccordionItem 
              question="Do gutter guards work with pine needles?"
              answer="DoublePro specifically, yes. The Eclipse technology uses precision offset holes that block even fine pine needles while letting water flow freely. It's the only system with a clog-free warranty covering pine areas, which is exactly why we chose it for Vancouver Island."
            />
            <AccordionItem 
              question="Will gutter guards cause my roof to leak?"
              answer="No. DoublePro installs directly onto the gutter. No shingles are lifted, nothing goes into the roof. Be cautious of any guard product that requires lifting shingles, that can void your roofing warranty."
            />
            <AccordionItem 
              question="Do I still need to clean my gutters after installation?"
              answer="Rarely. DoublePro dramatically reduces how often you need cleaning, most homes go from once or twice a year to every few years. We still recommend an occasional inspection but the days of pulling handfuls of debris out every fall are over."
            />
            <AccordionItem 
              question="What's the difference between DoublePro and T-Rex?"
              answer="DoublePro is the premium dual-layer system with microfiltration that blocks pine needles and fine debris, ideal for most Vancouver Island homes. T-Rex is a solid entry-level single-layer system. We'll recommend the right one for your home at the quote stage."
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
                We are a local team based in Parksville, providing professional gutter guard installation to homeowners across the region.
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

      {/* SECTION 9 — FINAL CTA */}
      <section className="bg-white py-32 px-6 text-center overflow-hidden relative border-t border-zinc-100">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
            <span className="text-[#F8ABAC] font-bold text-xs uppercase tracking-[0.4em]">Get In Touch</span>
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#033852] mb-8 leading-tight tracking-tight uppercase">
            Ready to Stop Cleaning <br /> <span className="text-[#F8ABAC]">Your Gutters?</span>
          </h2>
          <p className="text-zinc-500 text-xl mb-12">Free quote. Lifetime warranty. Locally installed.</p>
          
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

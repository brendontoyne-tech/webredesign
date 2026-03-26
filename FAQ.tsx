import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: "Gutter Cleaning",
    items: [
      {
        question: "How often should I get my gutters cleaned in Parksville and Qualicum Beach?",
        answer: "On Vancouver Island we recommend at least once a year, ideally in late fall after the leaves have dropped. If you have pine or fir trees close to your home, twice a year is worth it. The coastal climate means debris builds up faster than most people expect, and blocked gutters in a wet winter cause real damage."
      },
      {
        question: "What does a gutter cleaning include?",
        answer: "We remove all debris by hand, flush the downspouts to make sure water is flowing freely, and do a full visual inspection of the gutter system. If we spot any issues, loose hangers, cracked seals, damaged sections, we'll let you know before we leave. No surprises."
      },
      {
        question: "How much does gutter cleaning cost?",
        answer: "Most residential homes in Parksville and Qualicum Beach start from $150. The final price depends on the size of your home, how accessible the gutters are, and how much debris has built up. We give you a clear quote upfront, no hidden fees."
      },
      {
        question: "Do I need to be home during the cleaning?",
        answer: "No. We can complete the job whether you're home or not. We'll send you a message when we arrive and again when we're done, including any notes from our inspection. If we find something that needs attention we'll reach out before doing any additional work."
      },
      {
        question: "Why do gutters leak?",
        answer: "Most gutter leaks happen at the seams. Over time, metal expands and contracts with temperature changes and the caulking seals crack. It's a normal wear issue, not a sign of poor installation. A quick resealing job fixes it in most cases, we can assess and repair on the same visit as a cleaning."
      },
      {
        question: "How do I know if I need new gutters?",
        answer: "A few signs it's time to replace rather than repair, your gutters are over 15 years old and not functioning properly, they're pulling away from the fascia, you're getting water damage on your siding or foundation despite regular cleaning, or you've repaired the same sections more than two or three times. We'll give you an honest assessment at the quote stage."
      },
      {
        question: "What happens if I don't clean my gutters?",
        answer: "Blocked gutters cause water to overflow and back up against your fascia, soffits, and foundation. On Vancouver Island where we get heavy rain for months at a time, this leads to rot, mold, water intrusion, and foundation damage... all of which cost significantly more to fix than a regular cleaning."
      }
    ]
  },
  {
    title: "Gutter Guards",
    items: [
      {
        question: "Are gutter guards worth it?",
        answer: "For most homes in the Oceanside area, yes. If you're cleaning your gutters once or twice a year and you have trees nearby, gutter guards pay for themselves within a few years in avoided cleaning costs. The key is choosing the right system. We install Alu-Rex DoublePro, the most advanced gutter guard system available, because it actually works in the coastal BC environment where pine needles, heavy rain, and snow are all part of the deal."
      },
      {
        question: "What type of gutter guards do you install?",
        answer: "We install Alu-Rex DoublePro and T-Rex systems, with DoublePro being our primary recommendation for most homes in the Parksville and Qualicum Beach area. DoublePro is Alu-Rex's flagship product, a dual-layer continuous hanger system that simultaneously protects your gutters from debris and reinforces the entire gutter structure from end to end. For Vancouver Island homes surrounded by Douglas fir and pine, it's the right choice."
      },
      {
        question: "Do gutter guards work with pine needles?",
        answer: "DoublePro specifically, yes. Most cheaper gutter guard systems fail with pine needles because the mesh openings are too large. DoublePro's Eclipse technology uses precision offset holes that block even fine pine needles and seeds while letting water flow freely. It's the only gutter guard system with a clog-free warranty that specifically covers pine areas — which is exactly why we chose it for Vancouver Island homes."
      },
      {
        question: "What is the DoublePro warranty?",
        answer: "DoublePro comes with a lifetime warranty on sturdiness and clog-free performance. Critically, it's the only gutter guard product whose clog-free warranty specifically covers pine needle areas. That's not a marketing claim, it's what sets it apart from every other system on the market."
      },
      {
        question: "Will Alu-Rex guards cause my roof to leak?",
        answer: "No. DoublePro installs directly onto the gutter, no shingles are lifted, no nails or screws go into the roof. Be cautious of any gutter guard product that requires lifting or modifying your shingles. Doing so can void your roofing warranty and cause leaks over time."
      },
      {
        question: "How does DoublePro handle heavy rain?",
        answer: "DoublePro is built for exactly that. Its Vortex technology creates a dual-membrane suction effect that moves water through the system up to three times faster than standard gutters. The Rollback design pushes excess flow back into the gutter rather than over the edge. For the kind of coastal storms we get on Vancouver Island, this matters."
      },
      {
        question: "Do gutter guards mean I never have to clean my gutters again?",
        answer: "Almost. DoublePro dramatically reduces how often you need cleaning, most homes go from once or twice a year to every few years. We still recommend an occasional inspection, but the days of pulling handfuls of debris out every fall are over."
      },
      {
        question: "How much do gutter guards cost?",
        answer: "Starting from $500 for most residential homes. The final price depends on the linear footage of your gutters and the complexity of your roofline. We always do a cleaning first so we can inspect the gutters before installation, we want to make sure the system is going onto gutters in good shape."
      }
    ]
  },
  {
    title: "Permanent LED Lighting",
    items: [
      {
        question: "What exactly is permanent lighting?",
        answer: "Permanent LED lighting is a system installed on your soffits and fascia that stays up year-round. Instead of hanging lights every November and taking them down in January, the track and lights are permanently mounted to your home. You control everything, colour, brightness, patterns, schedules, all from an app on your phone."
      },
      {
        question: "How much does permanent lighting cost in Parksville?",
        answer: "Most residential installs in the Parksville and Qualicum Beach area start from $1,500. The final price depends on the linear footage of your soffits and fascia and the complexity of your roofline. We include a free design mockup with every quote so you can see exactly what your home will look like before you commit."
      },
      {
        question: "What does the installation look like during the day?",
        answer: "Discreet. The track is colour-matched to your soffit and fascia and sits flush against the surface. Most people walk past homes with permanent lighting during the day and don't notice it at all. It's only when the lights come on that it becomes a feature."
      },
      {
        question: "Can I control the lights from my phone?",
        answer: "Yes, completely. The app lets you change colours, set schedules, create patterns, and save custom displays for different occasions. Christmas, Halloween, Canada Day, or just a warm white glow every evening. Control it from anywhere."
      },
      {
        question: "Are the lights weatherproof?",
        answer: "Yes. The systems we install are high-grade, weatherproof LEDs designed for outdoor use in coastal conditions. BC's wet winters and UV exposure in summer are exactly what these systems are built for."
      },
      {
        question: "Will permanent lights work on my home?",
        answer: "Almost certainly yes. If your home has soffits and fascia, which most homes in the Parksville and Qualicum Beach area do, we can install permanent lighting. We'll assess your roofline at the quote stage and give you an honest answer. If something makes it impractical, we'll tell you upfront."
      },
      {
        question: "Do I need to do anything to maintain the lights?",
        answer: "Very little. The systems are low maintenance by design. We're always available for any post-install questions or service needs."
      }
    ]
  },
  {
    title: "Holiday Lighting",
    items: [
      {
        question: "What does your holiday lighting service include?",
        answer: "Everything. We design the display, install the lights, take them down after the season, and store them until next year. You don't touch a ladder, you don't untangle a single cord. We show you a digital mockup of your home before we start so you know exactly what you're getting."
      },
      {
        question: "How much does holiday lighting cost?",
        answer: "Starting from $500. The final price depends on the size of your home and the display you choose. We work with you on the design to make sure it fits your budget and looks great."
      },
      {
        question: "When should I book holiday lighting?",
        answer: "As early as possible. Our November and December schedule fills up fast, most years we're fully booked by mid-October. If you're thinking about it, reach out now and get on the list."
      },
      {
        question: "Do you store the lights after the season?",
        answer: "Yes. We take everything down, pack it properly, and store it for you. When the following season comes around we bring it back and reinstall it. No hunting through the garage for tangled lights every November."
      }
    ]
  },
  {
    title: "About CoastalVille",
    items: [
      {
        question: "Do you serve Qualicum Beach, Lantzville and Nanoose Bay?",
        answer: "Yes. We serve Parksville, Qualicum Beach, Lantzville, Nanoose Bay, Coombs, Errington and the surrounding Oceanside communities. We're locally based so there's no travel surcharge anywhere in our service area."
      },
      {
        question: "Are you locally owned?",
        answer: "Yes, completely. CoastalVille Exteriors is locally owned and operated. When you call us you deal directly with the people doing the work, every time."
      },
      {
        question: "Are you licensed and insured?",
        answer: "Yes. Fully licensed and insured for all services we offer."
      },
      {
        question: "How quickly can you get to a job?",
        answer: "Typically within one to two weeks for most services. For urgent situations, a blocked downspout causing active water damage for example, call us directly at (250) 270-1010 and we'll do our best to get there faster."
      },
      {
        question: "How do I get a quote?",
        answer: "Call or text (250) 270-1010, fill out the quote form on our website, or email hello@coastalville.ca. We respond within 24 hours, usually much faster. All quotes are free and there's no obligation."
      }
    ]
  }
];

interface AccordionItemProps {
  key?: any;
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({ item, isOpen, onClick }: AccordionItemProps) => {
  return (
    <div className={`border-b border-zinc-100 last:border-0 transition-colors ${isOpen ? 'bg-[#033852]/[0.02]' : ''}`}>
      <button
        onClick={onClick}
        className="w-full py-6 px-4 flex items-start justify-between text-left group transition-all hover:bg-zinc-50/50"
      >
        <div className="flex gap-4">
          <div className={`w-1 h-full bg-[#033852] self-stretch rounded-full transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
          <span className={`text-lg font-bold pl-2 transition-colors ${isOpen ? 'text-[#033852]' : 'text-[#033852]/80'}`}>
            {item.question}
          </span>
        </div>
        <ChevronDown className={`w-5 h-5 text-[#033852] transition-transform duration-300 mt-1 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 px-12 text-zinc-600 leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openItems, setOpenItems] = useState<{ [key: string]: number | null }>({});

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    setOpenItems(prev => ({
      ...prev,
      [categoryIndex]: prev[categoryIndex] === itemIndex ? null : itemIndex
    }));
  };

  // Generate FAQPage Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.flatMap(category => 
      category.items.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    )
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#F8ABAC]/30 text-[#033852]">
      <SEO 
        title="Frequently Asked Questions | CoastalVille Exteriors Parksville"
        description="Answers to the most common questions about gutter cleaning, gutter guards, permanent LED lighting and holiday lights in Parksville, Qualicum Beach and the Oceanside area."
      />
      
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <Navbar />

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            src="https://i.ibb.co/FqfXmgpk/0-L5-A7260-1.jpg" 
            alt="CoastalVille FAQ" 
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
                GOT QUESTIONS · WE HAVE ANSWERS
              </span>
              <div className="hidden md:block h-[1px] w-24 bg-white/30" />
            </div>

            {/* Main Headline */}
            <h1 className="flex flex-col items-center mb-10">
              <span className="font-sans font-bold text-6xl md:text-[110px] text-white leading-none uppercase tracking-tight mb-2">
                Got
              </span>
              <span className="font-sans font-black text-5xl md:text-[90px] text-[#F8ABAC] leading-none uppercase tracking-tight">
                Questions?
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-xl text-white/80 text-sm md:text-base font-medium leading-relaxed mb-12">
              Everything you need to know about our services, straight answers, no runaround.
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

      {/* FAQ Categories */}
      <div className="pb-24">
        {faqData.map((category, categoryIndex) => (
          <section 
            key={categoryIndex} 
            className={`py-24 ${categoryIndex % 2 === 1 ? 'bg-[#033852]/[0.02]' : 'bg-white'}`}
          >
            <div className="max-w-4xl mx-auto px-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-[#F8ABAC]/30" />
                <span className="text-[#F8ABAC] font-bold text-sm uppercase tracking-[0.3em]">
                  {category.title}
                </span>
              </div>
              
              <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
                {category.items.map((item, itemIndex) => (
                  <AccordionItem 
                    key={itemIndex}
                    item={item}
                    isOpen={openItems[categoryIndex] === itemIndex}
                    onClick={() => toggleItem(categoryIndex, itemIndex)}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Final CTA */}
      <section className="bg-white py-32 px-6 text-center overflow-hidden relative border-t border-zinc-100">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
            <span className="text-[#F8ABAC] font-bold text-xs uppercase tracking-[0.4em]">Get In Touch</span>
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#033852] mb-8 leading-tight tracking-tight uppercase">
            Still Have <br /> <span className="text-[#F8ABAC]">Questions?</span>
          </h2>
          <p className="text-zinc-500 text-xl mb-12">We're happy to help. Reach out anytime for a straight answer.</p>
          
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

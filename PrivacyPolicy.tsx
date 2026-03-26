import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#033852]">
      <SEO 
        title="Privacy Policy | CoastalVille Exteriors"
        description="Privacy Policy for CoastalVille Exteriors. Learn how we collect, use and protect your personal information in accordance with PIPEDA and BC privacy legislation."
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#033852]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h1 className="flex flex-col items-center">
              <span className="font-sans font-bold text-5xl md:text-8xl text-white leading-none uppercase tracking-tight mb-2">
                Privacy
              </span>
              <span className="font-sans font-black text-4xl md:text-7xl text-[#F8ABAC] leading-none uppercase tracking-tight">
                Policy
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-6 py-24">
        <p className="text-zinc-500 mb-12 text-center">Last Updated: March 2026</p>
        
        <div className="max-w-none space-y-12">
          <section>
            <p className="text-lg leading-relaxed">
              CoastalVille Exteriors ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or contact us regarding our services. We comply with the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable British Columbia privacy legislation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Address or service location</li>
              <li>Payment information collected for invoicing purposes</li>
              <li>Any information you submit through our contact or quote forms, email, or phone communications</li>
            </ul>
            <p className="text-zinc-600 leading-relaxed mt-6 mb-4">
              We may also automatically collect certain technical information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600">
              <li>IP address</li>
              <li>Browser type and device information</li>
              <li>Pages visited and time spent on our website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600">
              <li>Respond to inquiries and provide quotes</li>
              <li>Schedule and deliver services</li>
              <li>Process payments for services rendered</li>
              <li>Communicate with you regarding our services</li>
              <li>Improve our website and customer experience</li>
              <li>Maintain internal records</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Cookies & Analytics</h2>
            <p className="text-zinc-600 leading-relaxed">
              Our website uses cookies and third-party analytics tools including Google Analytics to help us understand how visitors use our site. These tools may collect non-identifiable usage data such as pages visited, time on site, and general location.
              You can choose to disable cookies through your browser settings at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
            <p className="text-zinc-600 leading-relaxed">
              Payment information collected in connection with our services is handled securely. We do not store full payment card details on our servers. Payments may be processed through trusted third-party payment processors who maintain their own privacy and security standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              We do not sell, rent, or trade your personal information to third parties.
              We may share your information only:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600">
              <li>With trusted service providers who assist in operating our business</li>
              <li>With third-party payment processors for transaction processing</li>
              <li>When required by law or legal process</li>
              <li>To protect our rights, property, or safety</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-zinc-600 leading-relaxed">
              We take reasonable measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet is 100% secure and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Under PIPEDA you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600">
              <li>Access the personal information we hold about you</li>
              <li>Request corrections to inaccurate information</li>
              <li>Request deletion of your information where legally permitted</li>
              <li>Withdraw consent to the collection or use of your information</li>
            </ul>
            <p className="text-zinc-600 leading-relaxed mt-4">
              To make a request, contact us using the details below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
            <p className="text-zinc-600 leading-relaxed">
              We may update this Privacy Policy from time to time. The most current version will always be available at coastalville.ca/privacy-policy with the date of last update noted at the top.
            </p>
          </section>

          <section className="pt-12 border-t border-zinc-100">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or how your information is handled, please contact:
            </p>
            <div className="text-zinc-600 space-y-1">
              <p className="font-bold">CoastalVille Exteriors</p>
              <p>Email: hello@coastalville.ca</p>
              <p>Phone: (250) 270-1010</p>
              <p>Service Area: Parksville, Qualicum Beach & surrounding Vancouver Island communities, British Columbia, Canada</p>
            </div>
          </section>
        </div>
      </main>

      {/* Final CTA */}
      <section className="bg-white py-32 px-6 text-center overflow-hidden relative border-t border-zinc-100">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
            <span className="text-[#F8ABAC] font-bold text-xs uppercase tracking-[0.4em]">Get In Touch</span>
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#033852] mb-8 leading-tight tracking-tight uppercase">
            Ready to <span className="text-[#F8ABAC]">Book?</span>
          </h2>
          <p className="text-zinc-500 text-xl mb-12">Whatever your exterior needs — we're right next door.</p>
          
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

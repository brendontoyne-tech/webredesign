import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#033852]">
      <SEO 
        title="Terms of Service | CoastalVille Exteriors"
        description="Terms of Service for CoastalVille Exteriors. Review our service terms, warranty information, payment policies and cancellation terms for exterior services in Parksville, BC."
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
                Terms of
              </span>
              <span className="font-sans font-black text-4xl md:text-7xl text-[#F8ABAC] leading-none uppercase tracking-tight">
                Service
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
              By accessing or using this website or engaging CoastalVille Exteriors for services, you agree to the following Terms of Service. If you do not agree, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. Services</h2>
            <p className="text-zinc-600 leading-relaxed">
              CoastalVille Exteriors provides exterior home services including gutter cleaning, gutter repair, gutter guard installation, downspout repair, soffit and fascia repair, permanent LED lighting installation, and seasonal holiday lighting. All service descriptions on this website are for informational purposes only and do not constitute a binding agreement until a written or verbal quote has been accepted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Age & Authority</h2>
            <p className="text-zinc-600 leading-relaxed">
              By booking our services or using this website, you confirm that you are of legal age and have the legal authority to enter into this agreement and to grant access to the property at which services are to be performed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Quotes & Estimates</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600">
              <li>Quotes provided through this website, email, phone, or in person are estimates only.</li>
              <li>Final pricing may vary based on site conditions, scope changes, or unforeseen circumstances discovered during the work.</li>
              <li>We will communicate any changes before proceeding with additional work.</li>
              <li>All services are subject to availability.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Scope of Additional Work</h2>
            <p className="text-zinc-600 leading-relaxed">
              Our quotes cover the work as described at the time of booking. If additional work is identified during the service — such as repairs discovered during a cleaning or installation — we will notify you before proceeding. Additional work beyond the original scope requires your verbal or written approval and will be quoted separately. We will not perform or charge for work beyond the original scope without your consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600">
              <li>Payment is due upon completion of services unless otherwise agreed in writing.</li>
              <li>We accept e-transfer, cash, and major credit cards.</li>
              <li>Outstanding balances not paid within 30 days of invoice may be subject to a late payment fee.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Cancellations & Rescheduling</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600">
              <li>We ask for at least 24 hours notice if you need to cancel or reschedule a booked appointment.</li>
              <li>CoastalVille Exteriors reserves the right to reschedule appointments due to weather conditions, unsafe working conditions, or circumstances beyond our control. We will notify you as soon as possible if rescheduling is required.</li>
              <li>Exterior work is weather dependent. We will always aim to complete scheduled work as booked but safety and quality of work may require rescheduling.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Failed Access & Trip Fee</h2>
            <p className="text-zinc-600 leading-relaxed">
              If our team arrives at a scheduled job and is unable to access the property — due to a locked gate, no response, unsecured pets, or other access issues not communicated in advance — we reserve the right to charge a trip fee to cover travel time and costs. We will contact you to reschedule. To avoid this, please ensure access is arranged prior to your scheduled appointment and notify us of any access requirements in advance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Property Access & Customer Responsibilities</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              By booking a service, you confirm that you have the authority to grant access to the property. You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600">
              <li>Ensure safe and reasonable access to the areas requiring service</li>
              <li>Remove or secure pets, vehicles, or personal property that may obstruct the work area</li>
              <li>Inform us of any known hazards on the property prior to our arrival</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Property Damage</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              CoastalVille Exteriors takes care to protect your property during all service visits. In the event that our team directly causes damage to your property during the course of work, we will assess and remedy the damage at no additional charge.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-4">
              We are not liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600">
              <li>Pre-existing damage or conditions not disclosed prior to service</li>
              <li>Damage discovered during the course of work that was pre-existing</li>
              <li>Damage resulting from circumstances beyond our reasonable control</li>
            </ul>
            <p className="text-zinc-600 leading-relaxed mt-4">
              We encourage customers to document and disclose any existing property conditions prior to service commencement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. General Service Warranty</h2>
            <p className="text-zinc-600 leading-relaxed">
              We stand behind our work. If you are not satisfied with the quality of a completed service, contact us within 7 days and we will return to assess and remedy the issue at no additional charge, provided the issue is within the scope of the original work performed.
              This warranty does not cover damage caused by weather events, acts of nature, or circumstances beyond our control after service completion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Gutter Guard Installation — Warranty</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Alu-Rex DoublePro and T-Rex gutter guard installations are covered by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600">
              <li>Workmanship warranty: 2 years from the date of installation. We will return to assess and remedy any installation-related issues at no charge within this period.</li>
              <li>Product warranty: Lifetime warranty through Alu-Rex on sturdiness and clog-free performance, including coverage for pine needle areas. We will assist customers in navigating Alu-Rex warranty claims throughout the product warranty period.</li>
            </ul>
            <p className="text-zinc-600 leading-relaxed mt-4">
              This warranty does not cover damage caused by severe weather events, acts of nature, physical damage, or modifications made to the system by anyone other than CoastalVille Exteriors after installation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Permanent LED Lighting — Warranty</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Permanent LED lighting installations are covered by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600">
              <li>Workmanship warranty: 3 years from the date of installation. We will return to assess and remedy any installation-related issues at no charge within this period.</li>
              <li>Product warranty: 10 years through the manufacturer. We will assist customers in navigating manufacturer warranty claims throughout the product warranty period.</li>
            </ul>
            <p className="text-zinc-600 leading-relaxed mt-4">
              This warranty does not cover damage caused by severe weather events, acts of nature, physical damage, or modifications made to the system by anyone other than CoastalVille Exteriors after installation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">13. Photography & Marketing</h2>
            <p className="text-zinc-600 leading-relaxed">
              CoastalVille Exteriors may photograph completed work for portfolio, marketing, and social media purposes. By engaging our services you consent to the use of images of the exterior of your property. We will not photograph or publish images that identify personal information or interior spaces without express permission.
              Customers who prefer their property not be photographed may notify us prior to the service date and we will respect that request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">14. Website Use</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600">
              <li>Use this website for unlawful purposes</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Copy or misuse website content without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">15. Intellectual Property</h2>
            <p className="text-zinc-600 leading-relaxed">
              All content on this website — including text, images, logos, and branding — is the property of CoastalVille Exteriors unless otherwise stated and may not be used without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">16. Limitation of Liability</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              While we strive to keep information accurate and up to date, we make no warranties regarding completeness or accuracy of website content.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-4">
              CoastalVille Exteriors is not liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600">
              <li>Any damages resulting from website use</li>
              <li>Temporary website downtime</li>
              <li>Errors or omissions in content</li>
              <li>Damage to property resulting from pre-existing conditions not disclosed prior to service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">17. Third-Party Links</h2>
            <p className="text-zinc-600 leading-relaxed">
              This website may contain links to third-party websites. We are not responsible for the content, privacy practices, or policies of those sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">18. Dispute Resolution</h2>
            <p className="text-zinc-600 leading-relaxed">
              We are committed to resolving any concerns fairly and directly. If you have a concern about our services or these Terms, we encourage you to contact us first so we can work toward a resolution before pursuing formal dispute resolution or legal action.
              Contact us at hello@coastalville.ca or (250) 270-1010.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">19. Changes to These Terms</h2>
            <p className="text-zinc-600 leading-relaxed">
              We reserve the right to update or modify these Terms of Service at any time. Changes will be posted on this page with an updated revision date. Continued use of our website or services following any changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">20. Governing Law</h2>
            <p className="text-zinc-600 leading-relaxed">
              These Terms are governed by the laws of the Province of British Columbia and the laws of Canada applicable therein. Any disputes shall be resolved in the courts of British Columbia.
            </p>
          </section>

          <section className="pt-12 border-t border-zinc-100">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              For questions regarding these Terms of Service, please contact:
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

      <Footer />
    </div>
  );
}

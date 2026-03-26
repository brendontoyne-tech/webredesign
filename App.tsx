import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import GutterCleaning from "./pages/GutterCleaning";
import About from "./pages/About";
import Services from "./pages/Services";
import Parksville from "./pages/Parksville";
import QualicumBeach from "./pages/QualicumBeach";
import PermanentLighting from "./pages/PermanentLighting";
import PermanentLightsParksville from "./pages/PermanentLightsParksville";
import PermanentLightsQualicumBeach from "./pages/PermanentLightsQualicumBeach";
import GutterRepair from "./pages/GutterRepair";
import Contact from "./pages/Contact";
import OurWork from "./pages/OurWork";
import FAQ from "./pages/FAQ";
import Careers from "./pages/Careers";
import TermsOfService from "./pages/TermsOfService";
import ThankYou from "./pages/ThankYou";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Downspouts from "./pages/Downspouts";
import Soffits from "./pages/Soffits";
import GutterGuards from "./pages/GutterGuards";
import HolidayLightingQualicumBeach from "./pages/HolidayLightingQualicumBeach";
import HolidayLightingParksville from "./pages/HolidayLightingParksville";
import HolidayLightingNanaimo from "./pages/HolidayLightingNanaimo";
import GutterGuardsParksville from "./pages/GutterGuardsParksville";
import GutterGuardsQualicumBeach from "./pages/GutterGuardsQualicumBeach";
import HolidayLighting from "./pages/HolidayLighting";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/gutter-cleaning" element={<GutterCleaning />} />
        <Route path="/services/gutter-repair" element={<GutterRepair />} />
        <Route path="/services/gutter-guards" element={<GutterGuards />} />
        <Route path="/services/downspouts" element={<Downspouts />} />
        <Route path="/services/soffits" element={<Soffits />} />
        <Route path="/services/permanent-lighting" element={<PermanentLighting />} />
        <Route path="/services/holiday-lighting" element={<HolidayLighting />} />
        <Route path="/holiday-lighting-qualicum-beach" element={<HolidayLightingQualicumBeach />} />
        <Route path="/holiday-lighting-parksville" element={<HolidayLightingParksville />} />
        <Route path="/holiday-lighting-nanaimo" element={<HolidayLightingNanaimo />} />
        <Route path="/gutter-guards-parksville" element={<GutterGuardsParksville />} />
        <Route path="/gutter-guards-qualicum-beach" element={<GutterGuardsQualicumBeach />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/permanent-lights-parksville" element={<PermanentLightsParksville />} />
        <Route path="/permanent-lights-qualicum-beach" element={<PermanentLightsQualicumBeach />} />
        <Route path="/parksville" element={<Parksville />} />
        <Route path="/qualicum-beach" element={<QualicumBeach />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-1" element={<Navigate to="/contact" replace />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/ourwork" element={<Navigate to="/our-work" replace />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

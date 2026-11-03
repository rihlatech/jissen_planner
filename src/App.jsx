import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageLayout from "./layouts/PageLayout";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Releases from "./pages/Releases";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import FAQ from "./pages/FAQ";
import Affiliates from "./pages/Affiliates";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/releases" element={<Releases />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/affiliates" element={<Affiliates />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}
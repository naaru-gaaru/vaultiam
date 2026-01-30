import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Capabilities from "./Pages/Capabilities";
import CaseStudies from "./Pages/CaseStudies";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/capabilities" element={<Capabilities />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

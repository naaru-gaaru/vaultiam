import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Capabilities from "./pages/Capabilities";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      {/* Layout wraps all pages */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="capabilities" element={<Capabilities />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

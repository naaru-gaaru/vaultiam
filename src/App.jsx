import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Capabilities from "./pages/Capabilities";
import CustomerStories from "./pages/CustomerStories";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="capabilities" element={<Capabilities />} />
        <Route path="customer-stories" element={<CustomerStories />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

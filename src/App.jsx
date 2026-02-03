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
        <Route path="customer-stories" element={<CustomerStories />} />
        <Route path="customer-stories/ai-workload-identities-healthcare" element={<AIWorkloadIdentitiesCase />} />
        <Route path="customer-stories/synthetic-identity-fraud-fintech" element={<SyntheticIdentityFraudCase />} />
        <Route path="customer-stories/jit-privileged-access-fintech" element={<JITPrivilegedAccessCase />} />
        <Route path="customer-stories/shadow-ai-api-keys-healthtech" element={<ShadowAICase />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

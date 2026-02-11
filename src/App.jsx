import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Capabilities from "./pages/Capabilities";
import CustomerStories from "./pages/CustomerStories";
import VaultIAMWay from "./pages/VaultIAMWay";
import Contact from "./pages/Contact";

// Import the 4 case study pages
import AIWorkloadIdentitiesCase from "./pages/AIWorkloadIdentitiesCase";
import SyntheticIdentityFraudCase from "./pages/SyntheticIdentityFraudCase";
import JITPrivilegedAccessCase from "./pages/JITPrivilegedAccessCase";
import ShadowAICase from "./pages/ShadowAICase";
import IAMService from "./pages/IAMService";
import CIAMService from "./pages/CIAMService";
import PAMService from "./pages/PAMService";
import ITDRService from "./pages/ITDRService";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="capabilities" element={<Capabilities />} />
        <Route path="customer-stories" element={<CustomerStories />} />
        <Route path="customer-stories/ai-workload-identities-healthcare" element={<AIWorkloadIdentitiesCase />} />
        <Route path="customer-stories/synthetic-identity-fraud-fintech" element={<SyntheticIdentityFraudCase />} />
        <Route path="customer-stories/jit-privileged-access-fintech" element={<JITPrivilegedAccessCase />} />
        <Route path="customer-stories/shadow-ai-api-keys-healthtech" element={<ShadowAICase />} />
        <Route path="/the-vaultiam-way" element={<VaultIAMWay />} />
        <Route path="contact" element={<Contact />} />
	<Route path="/capabilities/iam" element={<IAMService />} />
	<Route path="/capabilities/ciam" element={<CIAMService />} />
	<Route path="/capabilities/pam" element={<PAMService />} />
	<Route path="/capabilities/itdr" element={<ITDRService />} />
	<Route path="/about" element={<About />} />
	<Route path="/privacy" element={<PrivacyPolicy />} />
	<Route path="/terms" element={<TermsOfService />} />
      </Route>
    </Routes>
  );
}


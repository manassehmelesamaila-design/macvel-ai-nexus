import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import TechHub from "./pages/TechHub";
import EntrepreneurshipPolitics from "./pages/EntrepreneurshipPolitics";
import Trading from "./pages/Trading";
import Academy from "./pages/Academy";
import Newsroom from "./pages/Newsroom";
import { Toaster } from "sonner";
import AIAssistant from "./components/ai/AIAssistant";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<TechHub />} />
          <Route path="/entrepreneurship" element={<EntrepreneurshipPolitics />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/updates" element={<Newsroom />} />
        </Routes>
      </Layout>
      <AIAssistant />
      <Toaster position="top-right" richColors />
    </Router>
  );
}

export default App;
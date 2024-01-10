import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./pages/landing/LandingPage";
import { Layout } from "./components/styledComponents/layout";
import ContactoPage from "./pages/contactanos/Contacto";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

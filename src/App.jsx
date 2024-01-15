import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./pages/landing/LandingPage";
import { Layout } from "./components/styledComponents/layout";
import ContactoPage from "./pages/contactanos/Contacto";
import Terrenos from "./pages/terrenos/Terrenos";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/propiedades" element={<Terrenos />} />
      </Routes>
    </Layout>
  );
}

export default App;

// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./pages/landing/LandingPage";
import { Layout } from "./components/styledComponents/layout";
import ContactoPage from "./pages/contactanos/Contacto";
import Terrenos from "./pages/terrenos/Terrenos";
import Propiedades from "./pages/propiedades/Propiedades";
import Nosotros from "./pages/nosotros/Nosotros";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/catalogo" element={<Terrenos />} />
        <Route path="/propiedades/:id" element={<Propiedades />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </Layout>
  );
}

export default App;

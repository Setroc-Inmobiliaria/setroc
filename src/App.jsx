// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./pages/landing/LandingPage";
import { Layout } from "./components/styledComponents/layout";
import ContactoPage from "./pages/contactanos/Contacto";
import Terrenos from "./pages/terrenos/Terrenos";
import Propiedades from "./pages/propiedades/Propiedades";
import Nosotros from "./pages/nosotros/Nosotros";
import { useEffect, useState } from "react";
import LoginComponent from "./pages/LogIn/Login";
import Dashboard from "./pages/dashboard/Dashboard";





function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('auth'))
  
  useEffect(() => {
   
  }, [])
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalogo" element={<Terrenos />} />
        <Route path="/propiedades/:id" element={<Propiedades />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<ContactoPage/>} />
        <Route path="/admin/login" element={isLoggedIn ? <Navigate to="/admin/dashboard"/> : <LoginComponent isLog={isLoggedIn} setLoggedIn={setIsLoggedIn}/>} />



        {/* Ruta Protegida */}
        <Route path="/admin/dashboard" element={isLoggedIn ? <Dashboard setIsLoggedIn={setIsLoggedIn}/> : <Navigate to='/' />} />
      </Routes>
    </Layout>

  );
}

export default App;

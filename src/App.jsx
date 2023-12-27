import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./components/LandingPage";
import { Layout } from "./components/styledComponents/layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

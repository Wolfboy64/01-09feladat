import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Receptek from "./pages/Receptek";
import Kereses from "./pages/Kereses";

import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";


function App() {
  const receptek = [
    { id: '1', nev: 'Bolognai spagetti', kateg: 'Olasz', leiras: 'Főzd ki a tésztát...' },
    { id: '2', nev: 'Gulyásleves', kateg: 'Magyar', leiras: 'Pirítsd meg a hagymát...' },
    { id: '3', nev: 'Sushi tál', kateg: 'Japán', leiras: 'Használj friss halat...' }
  ];


  return (
    <BrowserRouter>
      <div className="container py-3">
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/receptek" />} />
          <Route path="/receptek" element={<Receptek />} />
          <Route path="/kereses" element={<Kereses receptek={receptek} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

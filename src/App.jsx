import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Ayuda from "./pages/Ayuda";
import { Acerca } from "./pages/Acerca";
import Cotizaciones from "./pages/Cotizaciones";
import Inicio from "./pages/Inicio";
import { Servicios } from "./pages/Servicios";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cotizacion" element={<Cotizaciones />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/ayuda" element={<Ayuda />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

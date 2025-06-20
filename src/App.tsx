import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Contact from './pages/Contact';
import TalleresPresenciales from './pages/TalleresPresenciales';
import TalleresMindfulnessPage from './pages/TalleresMindfulnessPage';
import CursoIniciacionPage from './pages/CursoIniciacionPage';
import CursoProfundizarPage from './pages/CursoProfundizarPage';
import ProgramaLaboralPage from './pages/ProgramaLaboralPage';

function App() {
  return (
    <Router>
      <div className="font-sans text-Corazón en Calma-text min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow bg-sky">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotras" element={<About />} />
            <Route path="/programas" element={<Programs />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/talleres-presenciales" element={<TalleresPresenciales />} />
            <Route path="/talleres-presenciales/talleres-mindfulness" element={<TalleresMindfulnessPage />} />
            <Route path="/talleres-presenciales/iniciacion" element={<CursoIniciacionPage />} />
            <Route path="/talleres-presenciales/profundizar" element={<CursoProfundizarPage />} />
            <Route path="/talleres-presenciales/ambito-laboral" element={<ProgramaLaboralPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
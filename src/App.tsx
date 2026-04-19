import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Discipline from './pages/Discipline';
import NordicWalking from './pages/disciplines/NordicWalking';
import CamminataSportiva from './pages/disciplines/CamminataSportiva';
import TrekkingSportivo from './pages/disciplines/TrekkingSportivo';
import WalkingAdattato from './pages/disciplines/WalkingAdattato';
import Allenamento from './pages/Allenamento';
import Benessere from './pages/Benessere';
import TrovaIstruttore from './pages/TrovaIstruttore';
import Formazione from './pages/Formazione';
import Blog from './pages/Blog';
import ChiSiamo from './pages/ChiSiamo';
import Contatti from './pages/Contatti';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discipline" element={<Discipline />} />
            <Route path="/discipline/nordic-walking" element={<NordicWalking />} />
            <Route path="/discipline/camminata-sportiva" element={<CamminataSportiva />} />
            <Route path="/discipline/trekking-sportivo" element={<TrekkingSportivo />} />
            <Route path="/discipline/walking-adattato" element={<WalkingAdattato />} />
            <Route path="/allenamento" element={<Allenamento />} />
            <Route path="/benessere" element={<Benessere />} />
            <Route path="/trova-istruttore" element={<TrovaIstruttore />} />
            <Route path="/formazione" element={<Formazione />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/contatti" element={<Contatti />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

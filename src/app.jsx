import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppFloat from './components/common/WhatsAppFloat'
import ScrollToTop from './components/common/ScrollToTop'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Procedures from './pages/Procedures'
import Lipo4K from './pages/Lipo4K'
import MedicalTourism from './pages/MedicalTourism'
import Gallery from './pages/Gallery'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import { Blog } from './pages/Blog'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre-mi" element={<About />} />
              <Route path="/procedimientos" element={<Procedures />} />
              <Route path="/lipoescultura-4k" element={<Lipo4K />} />
              <Route path="/turismo-medico" element={<MedicalTourism />} />
              <Route path="/galeria" element={<Gallery />} />
              <Route path="/testimonios" element={<Testimonials />} />
              <Route path="/contacto" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App
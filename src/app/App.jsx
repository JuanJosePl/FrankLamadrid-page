import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from '../contexts/LanguageContext'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

// Pages
import Home from '../pages/Home/Home'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-clinical-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Aquí irán tus otras rutas cuando las agregues */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App
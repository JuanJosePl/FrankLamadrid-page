import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Globe, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showProcedures, setShowProcedures] = useState(false)
  const location = useLocation()
  const { language, toggleLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { 
      path: '/', 
      label: { es: 'Inicio', en: 'Home' } 
    },
    { 
      path: '/sobre-mi', 
      label: { es: 'Sobre Mí', en: 'About Me' } 
    },
    { 
      path: '/procedimientos', 
      label: { es: 'Procedimientos', en: 'Procedures' },
      submenu: [
        { path: '/lipoescultura-4k', label: { es: 'Lipoescultura 4K', en: '4K Liposculpture' } },
        { path: '/procedimientos#abdomen', label: { es: 'Marcación Abdominal', en: 'Abdominal Definition' } },
        { path: '/procedimientos#gluteos', label: { es: 'Aumento de Glúteos', en: 'Buttock Augmentation' } },
        { path: '/procedimientos#mamas', label: { es: 'Cirugía de Mamas', en: 'Breast Surgery' } },
      ]
    },
    { 
      path: '/turismo-medico', 
      label: { es: 'Turismo Médico', en: 'Medical Tourism' } 
    },
    { 
      path: '/galeria', 
      label: { es: 'Galería', en: 'Gallery' } 
    },
    { 
      path: '/testimonios', 
      label: { es: 'Testimonios', en: 'Testimonials' } 
    },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'nav-blur shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-12 h-12 bg-gradient-to-br from-luxury-gold to-luxury-darkGold rounded-full flex items-center justify-center shadow-luxury"
            >
              <img src="https://res.cloudinary.com/disqdfjy9/image/upload/v1762930755/newIconNav_gtdbsd.png" className='bla' alt="" />
            </motion.div>
            <div className="hidden md:block">
              <h1 className="text-lg font-bold gradient-text">Dr. Frank Lamadrid</h1>
              <p className="text-xs text-gray-600">Líder Mundial en Lipo 4K</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                {link.submenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setShowProcedures(true)}
                    onMouseLeave={() => setShowProcedures(false)}
                  >
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-luxury-gold transition-colors font-medium">
                      <span>{t(link.label)}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {showProcedures && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2"
                        >
                          {link.submenu.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block px-4 py-2 text-gray-700 hover:bg-luxury-lightGold hover:text-luxury-darkGold transition-colors"
                            >
                              {t(item.label)}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-gray-700 hover:text-luxury-gold transition-colors font-medium ${
                      location.pathname === link.path ? 'text-luxury-gold' : ''
                    }`}
                  >
                    {t(link.label)}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-full border border-gray-300 hover:border-luxury-gold transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </motion.button>

            <Link to="/contacto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-luxury flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>{t({ es: 'Agendar Consulta', en: 'Book Consultation' })}</span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <div key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-gray-700 hover:bg-luxury-lightGold hover:text-luxury-darkGold transition-colors font-medium"
                    >
                      {t(link.label)}
                    </Link>
                    {link.submenu && (
                      <div className="pl-8 space-y-1">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-luxury-gold"
                          >
                            {t(item.label)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4 border-t">
                  <button
                    onClick={toggleLanguage}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border border-gray-300 hover:border-luxury-gold transition-colors mb-3"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="text-sm font-medium">{language.toUpperCase()}</span>
                  </button>
                  <Link to="/contacto" onClick={() => setIsOpen(false)}>
                    <button className="w-full btn-luxury flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>{t({ es: 'Agendar Consulta', en: 'Book Consultation' })}</span>
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
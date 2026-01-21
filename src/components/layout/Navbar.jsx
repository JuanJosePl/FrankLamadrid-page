// Navbar.jsx - DISEÑO BLANCO PREMIUM (MATCHING FOOTER)
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
    { path: '/', label: { es: 'Inicio', en: 'Home' } },
    { path: '/sobre-mi', label: { es: 'Sobre Mí', en: 'About Me' } },
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
    { path: '/turismo-medico', label: { es: 'Turismo Médico', en: 'Medical Tourism' } },
    { path: '/galeria', label: { es: 'Galería', en: 'Gallery' } },
    { path: '/testimonios', label: { es: 'Testimonios', en: 'Testimonials' } },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-clinical-silver/30 py-2' 
          : 'bg-white/80 backdrop-blur-md py-4'
      }`}
    >
      <div className="container-clinical">
        <div className="flex items-center justify-between">
          
          {/* LOGO - PREMIUM WHITE VERSION */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="relative"
            >
              {/* Halo brillante */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/40 via-medical-cyan/30 to-medical-teal/40 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-300" />
              
              {/* Contenedor del logo */}
              <div className="relative w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-white via-sky-100 to-emerald-100 rounded-full flex items-center justify-center shadow-medical border border-primary-500/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-medical-teal opacity-20 blur-sm" />
                <img
                  src="https://res.cloudinary.com/disqdfjy9/image/upload/v1762930755/newIconNav_gtdbsd.png"
                  alt="Dr. Frank Lamadrid"
                  className="relative z-10 w-9 h-9 lg:w-11 lg:h-11 object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_2px_8px_rgba(0,137,179,0.3)]"
                />
              </div>
            </motion.div>

            <div className="hidden sm:block">
              <h3 className="text-lg lg:text-xl font-black bg-gradient-to-r from-primary-600 via-medical-cyan to-medical-teal bg-clip-text text-transparent">
                Dr. Frank Lamadrid
              </h3>
              <p className="text-xs lg:text-sm text-clinical-charcoal font-semibold">
                {t({ es: 'Cirugía Plástica 4K', en: '4K Plastic Surgery' })}
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                {link.submenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setShowProcedures(true)}
                    onMouseLeave={() => setShowProcedures(false)}
                  >
                    <button className="flex items-center space-x-1 text-clinical-charcoal hover:text-primary-600 transition-colors font-medium text-sm">
                      <span>{t(link.label)}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    <AnimatePresence>
                      {showProcedures && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl py-2 border border-clinical-silver/30"
                        >
                          {link.submenu.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block px-4 py-3 text-clinical-charcoal hover:bg-primary-50 hover:text-primary-600 transition-all text-sm font-medium"
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
                    className={`text-sm font-medium transition-colors ${
                      location.pathname === link.path 
                        ? 'text-primary-600' 
                        : 'text-clinical-charcoal hover:text-primary-600'
                    }`}
                  >
                    {t(link.label)}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-clinical-snow hover:bg-clinical-alabaster text-clinical-charcoal border border-clinical-silver/50 transition-all"
            >
              <Globe className="w-4 h-4" strokeWidth={2.5} />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </motion.button>

            {/* CTA Button */}
            <Link to="/contacto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-medical-cyan rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-medical-cyan text-white px-6 py-2.5 rounded-xl font-bold shadow-medical text-sm">
                  <Phone className="w-4 h-4" strokeWidth={2.5} />
                  <span>{t({ es: 'Contactar', en: 'Contact' })}</span>
                </div>
              </motion.button>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-clinical-snow hover:bg-clinical-alabaster text-clinical-dark border border-clinical-silver/50 transition-all"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" strokeWidth={2.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" strokeWidth={2.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-clinical-silver/30"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-clinical-charcoal hover:bg-primary-50 hover:text-primary-600 transition-all font-medium"
                    >
                      {t(link.label)}
                    </Link>
                    {link.submenu && (
                      <div className="pl-8 space-y-1 bg-clinical-snow/50">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-sm text-clinical-slate hover:text-primary-600 transition-colors"
                          >
                            {t(item.label)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="px-4 pt-4 border-t border-clinical-silver/30 space-y-3">
                  <button
                    onClick={toggleLanguage}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-clinical-snow hover:bg-clinical-alabaster text-clinical-charcoal border border-clinical-silver/50 transition-all"
                  >
                    <Globe className="w-4 h-4" strokeWidth={2.5} />
                    <span className="text-sm font-medium">{language.toUpperCase()}</span>
                  </button>
                  
                  <Link to="/contacto" onClick={() => setIsOpen(false)}>
                    <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-600 to-medical-cyan text-white px-4 py-3 rounded-xl font-bold shadow-medical">
                      <Phone className="w-4 h-4" strokeWidth={2.5} />
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
// src/components/home/ParallaxHeroSection.jsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ChevronDown, Play, Star, Award, Sparkles, Heart, Shield, CheckCircle } from 'lucide-react'

const ParallaxHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const slides = [
    {
      id: 1,
      year: '2024',
      title: {
        line1: 'Lipoescultura',
        line2: '4K',
        highlight: 'La Revolución'
      },
      description: 'Transformación corporal de ultra alta definición creada por el Dr. Lamadrid. Resultados naturales, recuperación rápida, sin cicatrices visibles.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
      bgColor: 'from-pink-100 via-purple-100 to-blue-100',
      textColor: 'text-white',
      stats: { value: '18,000+', label: 'Cirugías Exitosas' },
      badge: '🌟 Técnica Exclusiva'
    },
    {
      id: 2,
      year: 'Pionero',
      title: {
        line1: 'Marcación',
        line2: 'Abdominal',
        highlight: 'Definición Total'
      },
      description: 'Esculpido abdominal de alta definición sin prótesis. Revela la musculatura natural con resultados atléticos y armoniosos.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80',
      bgColor: 'from-blue-100 via-cyan-100 to-teal-100',
      textColor: 'text-white',
      stats: { value: '98%', label: 'Satisfacción' },
      badge: '💪 Alta Definición'
    },
    {
      id: 3,
      year: 'Internacional',
      title: {
        line1: 'Turismo',
        line2: 'Médico',
        highlight: 'Colombia Premium'
      },
      description: 'Paquetes completos: cirugía, hospedaje 5 estrellas, recuperación asistida. Miles de pacientes de más de 40 países confían en nosotros.',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&q=80',
      bgColor: 'from-orange-100 via-pink-100 to-rose-100',
      textColor: 'text-white',
      stats: { value: '40+', label: 'Países' },
      badge: '✈️ Todo Incluido'
    },
    {
      id: 4,
      year: 'Excelencia',
      title: {
        line1: 'Dr. Frank',
        line2: 'Lamadrid',
        highlight: 'Líder Mundial'
      },
      description: 'Más de 15 años transformando vidas. Formación internacional, certificaciones de élite, y miles de historias de éxito comprobadas.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1200&q=80',
      bgColor: 'from-indigo-100 via-purple-100 to-pink-100',
      textColor: 'text-white',
      stats: { value: '673K', label: 'Seguidores' },
      badge: '🏆 Reconocimiento Mundial'
    }
  ]

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, slides.length])

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative h-screen overflow-hidden bg-gray-900">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Background Image with Parallax */}
          <motion.div
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
            className="absolute inset-0 w-[105%] h-[105%] -left-[2.5%] -top-[2.5%]"
          >
            <img
              src={currentSlideData.image}
              alt={currentSlideData.title.line1}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Gradient Overlays */}
          <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.bgColor} mix-blend-multiply opacity-40`}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
        </motion.div>
      </AnimatePresence>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-luxury-gold/20 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear'
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="space-y-8 text-white"
              >
                {/* Year/Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4"
                >
                  <div className="text-luxury-gold font-bold text-xl tracking-wider">
                    {currentSlideData.year}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-luxury-gold to-transparent"></div>
                </motion.div>

                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="inline-block"
                >
                  <div className="bg-luxury-gold/20 backdrop-blur-md border border-luxury-gold/30 px-6 py-3 rounded-full text-sm font-semibold">
                    {currentSlideData.badge}
                  </div>
                </motion.div>

                {/* Main Title */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-2"
                >
                  <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight">
                    <motion.span
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="block"
                    >
                      {currentSlideData.title.line1}
                    </motion.span>
                    <motion.span
                      className="block gradient-text text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold via-luxury-lightGold to-luxury-gold"
                      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      style={{ backgroundSize: '200% auto' }}
                    >
                      {currentSlideData.title.line2}
                    </motion.span>
                  </h2>
                  <p className="text-2xl md:text-3xl font-light text-luxury-lightGold mt-4">
                    {currentSlideData.title.highlight}
                  </p>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl"
                >
                  {currentSlideData.description}
                </motion.p>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center gap-8"
                >
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                    <p className="text-4xl font-bold text-luxury-gold mb-1">
                      {currentSlideData.stats.value}
                    </p>
                    <p className="text-sm text-gray-300">
                      {currentSlideData.stats.label}
                    </p>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 bg-luxury-gold/20 backdrop-blur-md border border-luxury-gold/30 rounded-full flex items-center justify-center"
                    >
                      <Star className="w-6 h-6 text-luxury-gold fill-current" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className="w-12 h-12 bg-medical-blue/20 backdrop-blur-md border border-medical-blue/30 rounded-full flex items-center justify-center"
                    >
                      <Shield className="w-6 h-6 text-medical-blue" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 bg-green-500/20 backdrop-blur-md border border-green-500/30 rounded-full flex items-center justify-center"
                    >
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://api.whatsapp.com/send?phone=573175112107"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-luxury-gold to-luxury-darkGold text-white px-8 py-4 rounded-full font-bold shadow-2xl flex items-center gap-2 hover:shadow-luxury transition-all"
                  >
                    <span>Agendar Consulta Gratis</span>
                    <Play className="w-5 h-5" />
                  </motion.a>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all"
                  >
                    Ver Galería de Resultados
                  </motion.button>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Right Content - Floating Elements */}
            <div className="relative hidden lg:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  {/* Floating Card 1 */}
                  <motion.div
                    animate={{
                      y: [-20, 20, -20],
                      rotate: [-5, 5, -5]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-0 right-0 w-64 h-64 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl"
                  >
                    <Award className="w-12 h-12 text-luxury-gold mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">
                      Certificación Internacional
                    </h4>
                    <p className="text-sm text-gray-300">
                      Reconocido mundialmente por sociedades médicas de élite
                    </p>
                  </motion.div>

                  {/* Floating Card 2 */}
                  <motion.div
                    animate={{
                      y: [20, -20, 20],
                      rotate: [5, -5, 5]
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="absolute bottom-0 left-0 w-72 h-56 bg-gradient-to-br from-luxury-gold/20 to-medical-blue/20 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl"
                  >
                    <Sparkles className="w-12 h-12 text-medical-blue mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">
                      Técnica Exclusiva 4K
                    </h4>
                    <p className="text-sm text-gray-300">
                      Ultra alta definición con recuperación 40% más rápida
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-luxury-gold h-2 rounded-full" style={{ width: '98%' }}></div>
                      </div>
                      <span className="text-xs text-white font-bold">98%</span>
                    </div>
                  </motion.div>

                  {/* Floating Card 3 */}
                  <motion.div
                    animate={{
                      y: [-10, 10, -10],
                      x: [-10, 10, -10],
                      rotate: [0, 360]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 backdrop-blur-xl border border-luxury-gold/30 rounded-full flex items-center justify-center shadow-2xl"
                  >
                    <div className="text-center">
                      <Heart className="w-16 h-16 text-luxury-gold mx-auto mb-2 fill-current" />
                      <p className="text-4xl font-bold text-white">18K+</p>
                      <p className="text-xs text-gray-300">Vidas Transformadas</p>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-8">
        {/* Prev Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </motion.button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index)
                setIsAutoPlaying(false)
              }}
              className="relative group"
            >
              <div className={`h-1 rounded-full transition-all duration-500 ${
                index === currentSlide 
                  ? 'w-12 bg-luxury-gold' 
                  : 'w-8 bg-white/30 hover:bg-white/50'
              }`}>
                {index === currentSlide && (
                  <motion.div
                    className="h-full bg-luxury-gold rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 6, ease: 'linear' }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Next Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 right-12 z-20 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-white/60 uppercase tracking-wider writing-mode-vertical">
            Desliza
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <ChevronDown className="w-4 h-4 text-white/60" />
          </motion.div>
        </div>
      </motion.div>

      {/* Top Info Bar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute top-8 left-0 right-0 z-20"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
              <p className="text-white text-sm font-semibold">
                🇨🇴 Bogotá & Barranquilla, Colombia
              </p>
            </div>
            <div className="hidden md:block bg-luxury-gold/20 backdrop-blur-md border border-luxury-gold/30 rounded-full px-6 py-3">
              <p className="text-white text-sm font-semibold">
                ⭐ 673K Seguidores • Confianza Mundial
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default ParallaxHeroSection
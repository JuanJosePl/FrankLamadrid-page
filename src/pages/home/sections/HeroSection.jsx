import { Award, Phone, Play, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { useLanguage } from '../../../contexts/LanguageContext'
import 'swiper/css'

const HeroSection = () => {
  const { t } = useLanguage()

  const trustBadges = [
    { name: 'Instituto Dr. Frank Lamadrid', icon: Shield },
    { name: 'Country Medical Center Bogotá', icon: Shield },
    { name: 'Unidad Quirúrgica San Miguel', icon: Shield },
    { name: 'ACCC Certificado', icon: CheckCircle2 },
    { name: 'Forbes Colombia Featured', icon: Award },
  ]

  const stats = [
    { value: '18K+', label: { es: 'Cirugías Exitosas', en: 'Successful Surgeries' } },
    { value: '50+', label: { es: 'Países Atendidos', en: 'Countries Served' } },
    { value: '99.8%', label: { es: 'Satisfacción Total', en: 'Total Satisfaction' } },
  ]

  return (
    <>
      {/* HERO SECTION UNIFICADO */}
      <section 
        id="inicio" 
        className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-28 pb-20"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        {/* Orbs decorativos */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2], 
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-[5%] w-[500px] h-[500px] bg-cyan-400/15 rounded-full blur-[140px]"
        />

        <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col justify-center">
          {/* CONTENIDO PRINCIPAL DEL HERO */}
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mb-20">
            
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 text-center lg:text-left"
            >
              {/* Badge Premium */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2.5 rounded-full shadow-lg shadow-blue-500/30"
              >
                <Award className="w-4 h-4" strokeWidth={2.5} />
                <span className="text-xs font-bold uppercase tracking-wider">
                  {t({ es: '🏆 Líder Mundial Lipo 4K', en: '🏆 World Leader 4K Lipo' })}
                </span>
              </motion.div>

              {/* Título Principal */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                  <span className="block text-slate-900">
                    {t({ es: 'Transformación', en: 'Body' })}
                  </span>
                  <span className="block text-slate-900">
                    {t({ es: 'corporal', en: 'transformation' })}
                  </span>
                  <span className="block mt-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
                    {t({ es: 'con precisión 4K', en: 'with 4K precision' })}
                  </span>
                </h1>
              </motion.div>

              {/* Descripción */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-slate-600 max-w-xl mx-auto lg:mx-0"
              >
                {t({
                  es: 'Creador de la técnica revolucionaria Lipo 4K. 18,000+ cirugías exitosas en 50+ países con tecnología de última generación.',
                  en: 'Creator of the revolutionary 4K Lipo technique. 18,000+ successful surgeries in 50+ countries with cutting-edge technology.',
                })}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a href="#contacto" className="group">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/60 transition-all w-full sm:w-auto"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center justify-center gap-2.5">
                      <Phone className="w-5 h-5" strokeWidth={2.5} />
                      <span>{t({ es: 'Consulta Virtual Gratis', en: 'Free Virtual Consultation' })}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.button>
                </a>

                <a href="#testimonios" className="group">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white text-slate-900 font-bold px-8 py-4 rounded-2xl border-2 border-slate-300 hover:border-blue-500 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                  >
                    <div className="flex items-center justify-center gap-2.5">
                      <Play className="w-5 h-5 text-blue-600" strokeWidth={2.5} />
                      <span>{t({ es: 'Ver Resultados Reales', en: 'See Real Results' })}</span>
                    </div>
                  </motion.button>
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT CONTENT - IMAGEN CON STATS */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative max-w-md mx-auto lg:mx-0"
            >
              {/* Decorative ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-[2.5rem] blur-2xl" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20 ring-1 ring-blue-500/10">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/20 to-transparent z-10" />
                
                <img
                  src="https://res.cloudinary.com/disqdfjy9/image/upload/v1762930755/LAMADRID_twnk4k.png"
                  alt="Dr. Frank Lamadrid"
                  className="w-full h-[420px] object-cover"
                />
              </div>

              {/* Stats flotantes */}
              <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -6, scale: 1.05 }}
                    className="group relative bg-white/95 backdrop-blur-xl px-4 py-3 rounded-xl shadow-xl shadow-black/10 border border-blue-100 hover:border-blue-300 transition-all"
                  >
                    {/* Accent bar */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
                    
                    <p className="text-xl font-black bg-gradient-to-br from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-[10px] uppercase text-slate-600 font-semibold tracking-wide">
                      {t(stat.label)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* TRUST SECTION INTEGRADO DENTRO DEL HERO */}
          <div className="relative max-w-7xl mx-auto w-full">
            {/* Header centrado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-center mb-10"
            >
              <div className="inline-flex items-center gap-3 mb-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500/50" />
                <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em]">
                  {t({ es: 'Respaldado por', en: 'Backed by' })}
                </span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500/50" />
              </div>
              <h3 className="text-base lg:text-lg font-bold text-slate-700 uppercase tracking-wider">
                {t({
                  es: 'Instituciones Líderes en Colombia',
                  en: 'Leading Institutions in Colombia',
                })}
              </h3>
            </motion.div>

            {/* Carrusel automático y centrado */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="max-w-6xl mx-auto"
            >
              <Swiper
                modules={[Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                loop={true}
                autoplay={{ 
                  delay: 3000, 
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true 
                }}
                speed={1000}
                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 20 },
                  768: { slidesPerView: 3, spaceBetween: 24 },
                  1024: { slidesPerView: 4, spaceBetween: 28 },
                }}
                className="trust-carousel-redesign"
              >
                {trustBadges.map((badge, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/20 transition-all cursor-pointer h-full"
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                      
                      <div className="relative flex flex-col items-center text-center gap-4">
                        {/* Icon container */}
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                          <badge.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                        </div>
                        
                        {/* Text */}
                        <div>
                          <p className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-tight">
                            {badge.name}
                          </p>
                        </div>

                        {/* Verified badge */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                          <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={3} />
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-8">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-slate-300 rounded-full hover:bg-blue-500 transition-colors" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CSS adicional para animaciones */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s ease infinite;
        }

        .trust-carousel-redesign .swiper-slide {
          height: auto;
        }
      `}</style>
    </>
  )
}

export default HeroSection
import { Award, Users, Star, Play, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../../../contexts/LanguageContext'

const AboutPreview = () => {
  const { t } = useLanguage()

  const stats = [
    { value: '18K+', label: { es: 'Cirugías', en: 'Surgeries' }, icon: <CheckCircle /> },
    { value: '50+', label: { es: 'Países', en: 'Countries' }, icon: <Users /> },
    { value: '99.8%', label: { es: 'Satisfacción', en: 'Satisfaction' }, icon: <Star /> },
  ]

  const achievements = [
    {
      icon: <Award />,
      title: { es: 'Certificación ACCC', en: 'ACCC Certification' },
      description: { es: 'Asociación Colombiana de Cirugía Cosmética', en: 'Colombian Association of Cosmetic Surgery' },
    },
    {
      icon: <Users />,
      title: { es: '50+ Países', en: '50+ Countries' },
      description: { es: 'Pacientes internacionales satisfechos', en: 'Satisfied international patients' },
    },
    {
      icon: <Star />,
      title: { es: 'Técnica Lipo 4K', en: '4K Lipo Technique' },
      description: { es: 'Pionero y creador de la técnica patentada', en: 'Pioneer and creator of patented technique' },
    },
  ]

  return (
    <section id="sobre-mi" className="relative min-h-screen flex items-center py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background premium similar al Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-clinical-snow/50 to-white" />
      
      {/* Pattern decorativo sutil */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230089B3' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Orbs decorativos como en Hero */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1], 
          opacity: [0.15, 0.25, 0.15],
          x: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[5%] w-[400px] h-[400px] bg-primary-500/10 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ 
          scale: [1.1, 1, 1.1], 
          opacity: [0.2, 0.3, 0.2],
          x: [0, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] bg-medical-cyan/10 rounded-full blur-[100px]"
      />

      <div className="container-clinical relative z-10">
        {/* Header mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 lg:mb-24"
        >
          {/* Badge premium */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500/10 via-primary-500/5 to-transparent px-6 py-3.5 rounded-full border border-primary-500/20 backdrop-blur-sm shadow-lg shadow-primary-500/5 mb-6"
          >
            <Award className="w-5 h-5 text-primary-600" strokeWidth={2.5} />
            <span className="text-sm font-bold text-primary-700 uppercase tracking-wider">
              {t({ es: 'Liderazgo Médico Internacional', en: 'International Medical Leadership' })}
            </span>
          </motion.div>

          {/* Título impactante */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-clinical-graphite mb-6 tracking-tight leading-[1.1]"
          >
            Dr. Frank Lamadrid
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-clinical-charcoal max-w-4xl mx-auto leading-relaxed font-light"
          >
            {t({
              es: 'Pionero en técnicas de definición corporal 4K. Certificado por ACCC. Casos documentados en 50+ países con resultados verificables.',
              en: 'Pioneer in 4K body definition techniques. ACCC Certified. Documented cases in 50+ countries with verifiable results.',
            })}
          </motion.p>
        </motion.div>

        {/* Grid principal */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center max-w-7xl mx-auto">
          {/* Columna izquierda - Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group order-2 lg:order-1"
          >
            {/* Decorative ring como en Hero */}
            <div className="absolute -inset-8 bg-gradient-to-br from-primary-500/20 to-medical-cyan/20 rounded-[3rem] blur-3xl group-hover:blur-[80px] transition-all duration-700" />
            
            {/* Imagen con overlay */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-12px_rgba(0,137,179,0.3)] ring-1 ring-primary-500/10">
              <div className="absolute inset-0 bg-gradient-to-t from-medical-navy/40 via-medical-navy/10 to-transparent z-10" />
              <img
                src="https://res.cloudinary.com/disqdfjy9/image/upload/v1762930755/franksentado_h03nie.jpg"
                alt="Dr. Frank Lamadrid"
                className="w-full h-[500px] lg:h-[650px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Stats flotantes al estilo Hero */}
            <div className="absolute -bottom-8 left-6 right-6 grid grid-cols-3 gap-4 z-20">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group/stat relative bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-xl shadow-black/5 border border-white/50 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300"
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent rounded-full" />
                  
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-8 h-8 bg-primary-500/10 rounded-lg flex items-center justify-center text-primary-600 group-hover/stat:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                  </div>
                  
                  <p className="text-2xl md:text-3xl font-black bg-gradient-to-br from-primary-600 to-medical-cyan bg-clip-text text-transparent text-center">
                    {stat.value}
                  </p>
                  <p className="text-[10px] md:text-xs text-clinical-slate font-bold mt-2 uppercase tracking-wide text-center">
                    {t(stat.label)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Columna derecha - Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8 order-1 lg:order-2"
          >
            {/* Video preview premium */}
            <div className="relative group cursor-pointer rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="aspect-video relative">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=450&fit=crop&q=80"
                  alt="Video Preview"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Multi-layer overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-medical-navy/80 via-medical-navy/30 to-transparent" />
                <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 transition-colors duration-500" />
                
                {/* Play button premium como en Hero */}
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative">
                    {/* Outer pulse ring */}
                    <div className="absolute inset-0 bg-white/40 rounded-full animate-ping" />
                    {/* Inner glow */}
                    <div className="absolute -inset-2 bg-white/30 rounded-full blur-md" />
                    {/* Main button */}
                    <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white/50 transition-all">
                      <Play className="w-8 h-8 text-primary-600 ml-1" fill="currentColor" strokeWidth={0} />
                    </div>
                  </div>
                </motion.button>

                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-500/20 shadow-lg">
                    <span className="text-xs font-bold text-primary-700 uppercase tracking-wider">
                      {t({ es: 'Ver Historia', en: 'Watch Story' })}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements cards premium */}
            <div className="grid gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 4, scale: 1.01 }}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-clinical-silver/30 hover:border-primary-500/40 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300"
                >
                  {/* Shine effect en hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  <div className="relative flex items-start gap-4">
                    {/* Icon container */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500/15 to-medical-cyan/15 rounded-xl flex items-center justify-center text-primary-600 group-hover:scale-110 group-hover:from-primary-500/25 group-hover:to-medical-cyan/25 transition-all duration-300">
                      {achievement.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-base md:text-lg text-clinical-dark group-hover:text-primary-600 transition-colors mb-1">
                        {t(achievement.title)}
                      </h4>
                      <p className="text-sm text-clinical-slate leading-relaxed">
                        {t(achievement.description)}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <div className="flex-shrink-0 text-primary-500/0 group-hover:text-primary-500/100 transition-all">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-4"
            >
              <motion.a
                href="#turismo-medico"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-block w-full md:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl blur group-hover:blur-md transition-all" />
                <button className="relative w-full md:w-auto bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/40 transition-all">
                  <span className="flex items-center justify-center gap-2">
                    {t({ es: 'Conocer Plan Médico Internacional', en: 'Discover International Medical Plan' })}
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
import { Play, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../../../contexts/LanguageContext'

const TestimonialsVideo = () => {
  const { t } = useLanguage()

  const testimonials = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop&q=80',
      country: { es: 'Estados Unidos', en: 'United States' },
      procedure: { es: 'Lipoescultura 4K', en: '4K Liposculpture' },
      quote: {
        es: 'Resultados increíbles que superaron mis expectativas',
        en: 'Incredible results that exceeded my expectations',
      },
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&q=80',
      country: { es: 'Canadá', en: 'Canada' },
      procedure: { es: 'Marcación Abdominal', en: 'Abdominal Definition' },
      quote: {
        es: 'Proceso profesional desde la consulta hasta el seguimiento',
        en: 'Professional process from consultation to follow-up',
      },
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=400&fit=crop&q=80',
      country: { es: 'Reino Unido', en: 'United Kingdom' },
      procedure: { es: 'Aumento de Glúteos', en: 'Buttock Augmentation' },
      quote: {
        es: 'La atención personalizada marcó la diferencia en mi experiencia',
        en: 'The personalized attention made the difference in my experience',
      },
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
  ]

  return (
    <section id="testimonios" className="relative min-h-screen flex items-center py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* MEJORA: Background premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-clinical-alabaster via-white to-clinical-snow" />
      
      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-[10%] w-[500px] h-[500px] bg-health-emerald/5 rounded-full blur-[120px]" />

      <div className="container-clinical relative z-10">
        {/* MEJORA: Header impactante */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-health-emerald/10 px-5 py-2.5 rounded-full border border-health-emerald/20 mb-6"
          >
            <div className="w-2 h-2 bg-health-emerald rounded-full animate-pulse" />
            <span className="text-sm font-bold text-health-emerald uppercase tracking-wider">
              {t({ es: 'Historias Reales Verificadas', en: 'Verified Real Stories' })}
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            <span className="text-clinical-graphite">
              {t({ es: 'Casos Reales,', en: 'Real Cases,' })}
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-health-emerald bg-clip-text text-transparent">
              {t({ es: 'Resultados Verificables', en: 'Verifiable Results' })}
            </span>
          </h2>

          <p className="text-xl text-clinical-charcoal max-w-3xl mx-auto leading-relaxed">
            {t({
              es: 'Pacientes internacionales comparten su experiencia transformadora',
              en: 'International patients share their transformative experience',
            })}
          </p>
        </motion.div>

        {/* MEJORA: Video Grid con cards premium */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-black/5 border border-clinical-silver/30 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 hover:-translate-y-3">
                {/* MEJORA: Thumbnail con overlay gradiente */}
                <div className="relative aspect-video overflow-hidden cursor-pointer">
                  <img
                    src={testimonial.thumbnail}
                    alt={`Testimonio ${testimonial.id}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Multi-layer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-medical-navy/90 via-medical-navy/40 to-transparent" />
                  <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 transition-colors duration-500" />
                  
                  {/* MEJORA: Play button con efectos premium */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="relative">
                      {/* Outer pulse ring */}
                      <div className="absolute inset-0 bg-primary-500/40 rounded-full animate-ping" />
                      {/* Inner ring */}
                      <div className="absolute -inset-2 bg-primary-500/20 rounded-full blur-md group-hover:bg-primary-500/30 transition-all" />
                      {/* Main button */}
                      <div className="relative w-20 h-20 bg-gradient-to-br from-white to-clinical-snow rounded-full flex items-center justify-center shadow-2xl border-4 border-white/50 group-hover:border-white transition-all">
                        <Play className="w-8 h-8 text-primary-600 ml-1" fill="currentColor" strokeWidth={0} />
                      </div>
                    </div>
                  </motion.div>

                  {/* MEJORA: Badge con glassmorphism */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full border border-health-emerald/30 shadow-lg">
                      <span className="text-xs font-bold text-health-emerald uppercase tracking-wider">
                        {t({ es: 'Antes/Después', en: 'Before/After' })}
                      </span>
                    </div>
                  </div>
                </div>

                {/* MEJORA: Content con mejor spacing */}
                <div className="p-7 space-y-5">
                  {/* Meta info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 bg-health-emerald rounded-full ring-4 ring-health-emerald/20" />
                      <span className="text-sm font-bold text-clinical-slate">
                        {t(testimonial.country)}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-primary-600 bg-primary-500/10 px-3 py-1.5 rounded-full">
                      {t(testimonial.procedure)}
                    </span>
                  </div>

                  {/* MEJORA: Quote con mejor diseño */}
                  <div className="relative">
                    <Quote className="absolute -top-1 -left-1 w-10 h-10 text-primary-500/15" strokeWidth={3} />
                    <p className="relative text-clinical-charcoal leading-relaxed pl-8 font-medium italic">
                      "{t(testimonial.quote)}"
                    </p>
                  </div>

                  {/* MEJORA: CTA button premium */}
                  <a
                    href={testimonial.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 transition-all"
                    >
                      {t({ es: 'Ver Testimonio Completo', en: 'Watch Full Testimonial' })}
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MEJORA: Bottom CTA con diseño premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 rounded-[2.5rem] p-12 md:p-16 shadow-2xl shadow-primary-500/30 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-medical-cyan/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center text-white">
              <h3 className="text-3xl md:text-4xl font-black mb-4">
                {t({
                  es: '¿Listo para tu transformación?',
                  en: 'Ready for your transformation?',
                })}
              </h3>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                {t({
                  es: 'Más de 18,000 pacientes han confiado en nuestra experiencia',
                  en: 'Over 18,000 patients have trusted our expertise',
                })}
              </p>
              
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <button className="bg-white text-primary-600 font-bold px-12 py-5 rounded-2xl shadow-2xl hover:shadow-white/20 transition-all">
                  {t({ es: '¡Sé el Próximo Caso de Éxito!', en: 'Be the Next Success Story!' })}
                </button>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsVideo
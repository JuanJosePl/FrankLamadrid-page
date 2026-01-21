import { Globe2, Plane, Hotel, Calendar, Stethoscope, FileText, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../../../contexts/LanguageContext'

const MedicalTourismProduct = () => {
  const { t } = useLanguage()

  const modules = [
    {
      icon: <Plane />,
      title: { es: 'Coordinación de Viaje', en: 'Travel Coordination' },
      description: { es: 'Asistencia completa desde tu país', en: 'Complete assistance from your country' },
    },
    {
      icon: <Hotel />,
      title: { es: 'Alojamiento Médico', en: 'Medical Accommodation' },
      description: { es: 'Hoteles con servicios post-op', en: 'Hotels with post-op services' },
    },
    {
      icon: <Calendar />,
      title: { es: 'Agenda Personalizada', en: 'Personalized Schedule' },
      description: { es: 'Cronograma pre/post cirugía', en: 'Pre/post surgery timeline' },
    },
    {
      icon: <Stethoscope />,
      title: { es: 'Evaluación Médica', en: 'Medical Evaluation' },
      description: { es: 'Consultas virtuales previas', en: 'Previous virtual consultations' },
    },
    {
      icon: <FileText />,
      title: { es: 'Documentación', en: 'Documentation' },
      description: { es: 'Trámites y permisos', en: 'Procedures and permits' },
    },
    {
      icon: <Phone />,
      title: { es: 'Soporte 24/7', en: '24/7 Support' },
      description: { es: 'WhatsApp multilenguaje', en: 'Multilanguage WhatsApp' },
    },
  ]

  return (
    <section id="turismo-medico" className="relative min-h-screen flex items-center py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* MEJORA: Background con gradiente premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-clinical-snow via-white to-clinical-alabaster" />
      
      {/* MEJORA: Decorative orbs */}
      <div className="absolute top-1/4 left-[10%] w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-[10%] w-[500px] h-[500px] bg-medical-cyan/5 rounded-full blur-[120px]" />

      <div className="container-clinical relative z-10">
        {/* MEJORA: Header con más impacto visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 lg:mb-24"
        >
          {/* Subtitle badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500/10 via-primary-500/5 to-transparent px-6 py-3 rounded-full border border-primary-500/20 mb-6"
          >
            <Globe2 className="w-5 h-5 text-primary-600" strokeWidth={2.5} />
            <span className="text-sm font-bold text-primary-700 uppercase tracking-wider">
              {t({
                es: 'Sistema Integral para Pacientes Internacionales',
                en: 'Comprehensive System for International Patients',
              })}
            </span>
          </motion.div>

          {/* Main title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            <span className="text-clinical-graphite">
              {t({ es: 'Plan Turismo Médico', en: 'Medical Tourism Plan' })}
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-medical-cyan bg-clip-text text-transparent">
              {t({ es: 'Profesional', en: 'Professional' })}
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-clinical-charcoal max-w-3xl mx-auto leading-relaxed">
            {t({
              es: 'Todo lo que necesitas para tu cirugía internacional en un solo sistema',
              en: 'Everything you need for your international surgery in one system',
            })}
          </p>
        </motion.div>

        {/* MEJORA: Premium Card con profundidad extrema */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto"
        >
          <div className="relative bg-white rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-[0_20px_80px_-12px_rgba(0,137,179,0.2)] border border-clinical-silver/30 overflow-hidden">
            {/* MEJORA: Decorative elements más sofisticados */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary-500/5 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tl from-medical-cyan/5 to-transparent rounded-full blur-3xl" />
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230089B3' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />

            <div className="relative z-10">
              {/* MEJORA: Badge con mejor diseño */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-medical-cyan/15 px-5 py-2.5 rounded-full border border-primary-500/30 mb-12"
              >
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                <span className="text-sm font-bold text-primary-700 uppercase tracking-wider">
                  {t({ es: '✓ Incluye 12 módulos especializados', en: '✓ Includes 12 specialized modules' })}
                </span>
              </motion.div>

              {/* MEJORA: Modules Grid con cards premium */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
                {modules.map((module, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative"
                  >
                    {/* MEJORA: Card con glassmorphism y gradiente */}
                    <div className="relative h-full bg-gradient-to-br from-white via-clinical-snow/50 to-white backdrop-blur-sm rounded-2xl p-8 shadow-lg shadow-black/5 border border-clinical-silver/50 hover:border-primary-500/40 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300">
                      {/* Top accent line */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-medical-cyan to-primary-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* MEJORA: Icon con background animado */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="relative w-16 h-16 mb-6"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-medical-cyan/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                        <div className="relative w-full h-full bg-gradient-to-br from-primary-500/10 to-medical-cyan/10 rounded-2xl flex items-center justify-center text-primary-600 group-hover:from-primary-500 group-hover:to-primary-600 group-hover:text-white transition-all duration-300">
                          {module.icon}
                        </div>
                      </motion.div>
                      
                      {/* MEJORA: Text con mejor jerarquía */}
                      <h4 className="font-black text-lg lg:text-xl text-clinical-dark mb-3 group-hover:text-primary-600 transition-colors">
                        {t(module.title)}
                      </h4>
                      <p className="text-sm text-clinical-slate leading-relaxed">
                        {t(module.description)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* MEJORA: CTA con mejor diseño */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold px-12 py-6 rounded-2xl shadow-2xl shadow-primary-500/30 hover:shadow-primary-500/50 transition-all duration-300"
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  
                  <div className="relative flex items-center gap-3">
                    <FileText className="w-6 h-6" strokeWidth={2.5} />
                    <span className="text-lg">
                      {t({ es: 'Descargar Guía Completa (PDF)', en: 'Download Complete Guide (PDF)' })}
                    </span>
                  </div>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MedicalTourismProduct
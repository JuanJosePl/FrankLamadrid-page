import { useState } from 'react'
import { ChevronDown, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../../contexts/LanguageContext'

const FAQSection = () => {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: {
        es: '¿Cómo funciona la consulta virtual internacional?',
        en: 'How does the international virtual consultation work?',
      },
      answer: {
        es: 'Proceso completo en 3 pasos: (1) Completas el formulario de contacto, (2) Recibes enlace para videollamada con el Dr. Lamadrid, (3) Te enviamos plan personalizado y cotización detallada. Todo en tu idioma.',
        en: 'Complete process in 3 steps: (1) Fill out the contact form, (2) Receive video call link with Dr. Lamadrid, (3) Get personalized plan and detailed quote. All in your language.',
      },
    },
    {
      question: {
        es: '¿Qué incluye el Plan Turismo Médico?',
        en: 'What does the Medical Tourism Plan include?',
      },
      answer: {
        es: '12 módulos especializados: Coordinación de viaje y visa, alojamiento médico, transporte aeropuerto-clínica, agenda personalizada pre/post cirugía, traductor 24/7, seguimiento remoto post-operatorio, kit de recuperación, línea directa WhatsApp, documentación médica internacional, y más.',
        en: '12 specialized modules: Travel and visa coordination, medical accommodation, airport-clinic transportation, personalized pre/post surgery schedule, 24/7 translator, remote post-operative follow-up, recovery kit, direct WhatsApp line, international medical documentation, and more.',
      },
    },
    {
      question: {
        es: '¿Cuánto tiempo debo permanecer en Colombia?',
        en: 'How long should I stay in Colombia?',
      },
      answer: {
        es: 'Depende del procedimiento: Lipoescultura 4K requiere 7-10 días, abdominoplastia 10-14 días, aumento de glúteos 12-15 días. Incluye evaluación previa, cirugía y primeras consultas de seguimiento. El Plan Turismo Médico optimiza cada día de tu estadía.',
        en: 'Depends on the procedure: 4K Liposculpture requires 7-10 days, abdominoplasty 10-14 days, buttock augmentation 12-15 days. Includes prior evaluation, surgery and first follow-up consultations. The Medical Tourism Plan optimizes every day of your stay.',
      },
    },
    {
      question: {
        es: '¿Qué certificaciones tiene el Dr. Frank Lamadrid?',
        en: 'What certifications does Dr. Frank Lamadrid have?',
      },
      answer: {
        es: 'Certificado por la Asociación Colombiana de Cirugía Cosmética (ACCC), miembro de ISAPS (International Society of Aesthetic Plastic Surgery), creador de la técnica Lipo 4K patentada, más de 18,000 cirugías documentadas, reconocido por Forbes Colombia.',
        en: 'Certified by the Colombian Association of Cosmetic Surgery (ACCC), member of ISAPS (International Society of Aesthetic Plastic Surgery), creator of patented 4K Lipo technique, over 18,000 documented surgeries, recognized by Forbes Colombia.',
      },
    },
    {
      question: {
        es: '¿Cuáles son los métodos de pago aceptados?',
        en: 'What payment methods are accepted?',
      },
      answer: {
        es: 'Aceptamos transferencias internacionales, tarjetas de crédito (Visa/Mastercard), PayPal, y planes de financiamiento hasta 12 meses sin intereses. 30% adelanto al confirmar fecha, 70% antes de la cirugía. Cotización en USD, EUR, GBP según tu país.',
        en: 'We accept international transfers, credit cards (Visa/Mastercard), PayPal, and financing plans up to 12 months interest-free. 30% advance when confirming date, 70% before surgery. Quote in USD, EUR, GBP according to your country.',
      },
    },
    {
      question: {
        es: '¿Ofrecen seguimiento post-operatorio internacional?',
        en: 'Do you offer international post-operative follow-up?',
      },
      answer: {
        es: 'Sí, sistema completo de telemedicina: Videollamadas programadas a los 7, 15, 30, 60 y 90 días post-cirugía, WhatsApp directo con equipo médico 24/7, app de seguimiento fotográfico, coordinación con médicos en tu país si es necesario. Incluido sin costo adicional.',
        en: 'Yes, complete telemedicine system: Scheduled video calls at 7, 15, 30, 60 and 90 days post-surgery, direct WhatsApp with medical team 24/7, photographic follow-up app, coordination with doctors in your country if necessary. Included at no additional cost.',
      },
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section id="preguntas-frecuentes" className="relative min-h-screen flex items-center py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background premium como Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-clinical-snow/50 to-white" />
      
      {/* Pattern decorativo */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230089B3' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Orbs decorativos */}
      <motion.div
        animate={{ 
          scale: [1, 1.15, 1], 
          opacity: [0.15, 0.25, 0.15],
          y: [0, -20, 0],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] w-[450px] h-[450px] bg-primary-500/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ 
          scale: [1.15, 1, 1.15], 
          opacity: [0.2, 0.3, 0.2],
          y: [0, 20, 0],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-[10%] w-[450px] h-[450px] bg-medical-cyan/10 rounded-full blur-[120px]"
      />

      <div className="container-clinical max-w-6xl relative z-10">
        {/* Header premium */}
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
            <HelpCircle className="w-5 h-5 text-primary-600" strokeWidth={2.5} />
            <span className="text-sm font-bold text-primary-700 uppercase tracking-wider">
              {t({ es: 'Centro de Ayuda', en: 'Help Center' })}
            </span>
          </motion.div>

          {/* Título impactante */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1]"
          >
            <span className="text-clinical-graphite">
              {t({ es: 'Preguntas Frecuentes', en: 'Frequently Asked Questions' })}
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-medical-cyan bg-clip-text text-transparent">
              {t({ es: 'Cirugía Internacional', en: 'International Surgery' })}
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-clinical-charcoal max-w-3xl mx-auto leading-relaxed"
          >
            {t({
              es: 'Resuelve todas tus dudas sobre procedimientos internacionales',
              en: 'Resolve all your questions about international procedures',
            })}
          </motion.p>
        </motion.div>

        {/* FAQ Accordion premium */}
        <div className="space-y-4 mb-20">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group"
            >
              <div className={`relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg shadow-black/5 border-2 transition-all duration-500 overflow-hidden ${
                openIndex === index 
                  ? 'border-primary-500/50 shadow-xl shadow-primary-500/10' 
                  : 'border-clinical-silver/30 hover:border-primary-500/30 hover:shadow-xl'
              }`}>
                {/* Top accent bar animado */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: openIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-medical-cyan to-primary-500 origin-left"
                />

                {/* Question button */}
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 md:px-8 py-6 md:py-7 flex items-start justify-between text-left gap-4 md:gap-6 transition-colors"
                  whileHover={{ backgroundColor: 'rgba(0, 137, 179, 0.02)' }}
                >
                  <span className="font-bold text-base md:text-lg lg:text-xl text-clinical-dark leading-tight flex-1">
                    {t(faq.question)}
                  </span>
                  
                  {/* Icon container premium */}
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <div className={`relative w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      openIndex === index 
                        ? 'bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg shadow-primary-500/40' 
                        : 'bg-clinical-silver/40 group-hover:bg-primary-500/15'
                    }`}>
                      {/* Glow effect cuando está abierto */}
                      {openIndex === index && (
                        <div className="absolute inset-0 bg-primary-500/30 rounded-xl blur-md" />
                      )}
                      
                      <ChevronDown
                        className={`relative w-5 h-5 transition-colors ${
                          openIndex === index ? 'text-white' : 'text-clinical-slate group-hover:text-primary-500'
                        }`}
                        strokeWidth={3}
                      />
                    </div>
                  </motion.div>
                </motion.button>

                {/* Answer con animación suave */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-7 border-t border-primary-500/10">
                        <motion.div
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-6"
                        >
                          <p className="text-clinical-charcoal leading-relaxed text-base md:text-lg">
                            {t(faq.answer)}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Card premium al estilo Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          {/* Glow exterior */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-medical-cyan/20 rounded-[3rem] blur-3xl" />
          
          <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 rounded-[2.5rem] p-10 md:p-16 shadow-2xl shadow-primary-500/30 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-medical-cyan/20 rounded-full blur-3xl" />
            
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
            
            <div className="relative z-10 text-center text-white">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-xl"
              >
                <MessageCircle className="w-10 h-10 text-white" strokeWidth={2} />
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                {t({ es: '¿Tienes más preguntas?', en: 'Have more questions?' })}
              </h3>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                {t({
                  es: 'Nuestro equipo médico está disponible 24/7 para resolver todas tus dudas',
                  en: 'Our medical team is available 24/7 to answer all your questions',
                })}
              </p>
              
              {/* Dual CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="#contacto"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto bg-white text-primary-600 font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-white/30 transition-all flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" strokeWidth={2.5} />
                    {t({ es: 'Hablar con Especialista', en: 'Talk to Specialist' })}
                  </button>
                </motion.a>

                <motion.a
                  href="mailto:contacto@drlamadrid.com"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:border-white font-bold px-8 py-4 rounded-2xl hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" strokeWidth={2.5} />
                    {t({ es: 'Enviar Email', en: 'Send Email' })}
                  </button>
                </motion.a>
              </div>

              {/* Trust badge */}
              <div className="mt-8 flex items-center justify-center gap-2 text-white/80 text-sm">
                <div className="w-2 h-2 bg-health-emerald rounded-full animate-pulse" />
                {t({
                  es: 'Respuesta garantizada en menos de 24 horas',
                  en: 'Guaranteed response in less than 24 hours',
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection
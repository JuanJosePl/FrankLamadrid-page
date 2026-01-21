import { motion } from 'framer-motion'
import { useLanguage } from '../../../contexts/LanguageContext'

const TrustSection = () => {
  const { t } = useLanguage()

  const institutions = [
    { name: 'Instituto Médico', logo: '🏥' },
    { name: 'Country Medical Center', logo: '🏛️' },
    { name: 'ACCC Certificado', logo: '✓' },
    { name: 'Forbes Colombia', logo: '📰' },
    { name: 'Unidad Quirúrgica', logo: '⚕️' },
  ]

  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-b from-white via-clinical-snow to-white overflow-hidden">
      {/* MEJORA: Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-medical-cyan/5 rounded-full blur-[100px]" />

      <div className="container-clinical relative z-10">
        {/* MEJORA: Header con más jerarquía */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-500/50" />
            <span className="text-xs font-bold text-primary-600 uppercase tracking-[0.2em]">
              {t({
                es: 'Confianza Institucional',
                en: 'Institutional Trust',
              })}
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-500/50" />
          </div>
          <h3 className="text-sm md:text-base font-semibold text-clinical-slate uppercase tracking-wider">
            {t({
              es: 'Respaldado por instituciones líderes en Colombia',
              en: 'Backed by leading institutions in Colombia',
            })}
          </h3>
        </motion.div>

        {/* MEJORA: Grid con cards más elegantes */}
        <div className="flex justify-center items-center gap-6 md:gap-10 lg:gap-12 flex-wrap max-w-5xl mx-auto">
          {institutions.map((inst, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* MEJORA: Card con glassmorphism sutil */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-5 shadow-md shadow-black/5 border border-clinical-silver/50 hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300">
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                <div className="relative flex items-center gap-4">
                  {/* MEJORA: Logo con background */}
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500/10 to-medical-cyan/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{inst.logo}</span>
                  </div>
                  
                  {/* MEJORA: Text con mejor tipografía */}
                  <span className="text-sm md:text-base font-bold text-clinical-charcoal group-hover:text-primary-600 transition-colors duration-300 whitespace-nowrap">
                    {inst.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MEJORA: Divider decorativo */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"
        />
      </div>
    </section>
  )
}

export default TrustSection
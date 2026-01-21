// components/steps/DateStep.jsx
// Step 3: Selección de fecha de cirugía con política de precios

import { motion } from 'framer-motion'
import { getDatePriceInfo } from '../../../../utils/pricing.utils'

//hooks
import { useLanguage } from '../../../../contexts/LanguageContext'

const DateStep = ({ formData, updateField }) => {
  const { t, language } = useLanguage()
  
  const dateInfo = getDatePriceInfo(formData.fecha, language)
  const Icon = dateInfo.icon

  // Obtener fecha mínima (hoy)
  const today = new Date().toISOString().split('T')[0]

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
          {t({ es: '📅 Fecha de Cirugía', en: '📅 Surgery Date' })}
        </h3>
        <p className="text-slate-600">
          {t({ 
            es: 'Selecciona tu fecha tentativa - La disponibilidad será confirmada', 
            en: 'Select your tentative date - Availability will be confirmed' 
          })}
        </p>
      </div>

      {/* Date Picker */}
      <div>
        <label className="block mb-2">
          <span className="text-sm font-bold text-slate-700">
            {t({ es: 'Fecha Deseada', en: 'Desired Date' })} *
          </span>
        </label>
        <input
          type="date"
          value={formData.fecha}
          onChange={(e) => updateField('fecha', e.target.value)}
          min={today}
          className="w-full px-6 py-4 rounded-xl bg-white border-2 border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-900 font-semibold text-lg"
          required
        />
      </div>

      {/* Date Impact Display */}
      {formData.fecha && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`p-6 rounded-xl border-2 ${
            dateInfo.percentage > 0 
              ? 'bg-gradient-to-br from-orange-50 to-red-50 border-orange-200' 
              : dateInfo.percentage < 0
              ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200'
              : 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200'
          }`}
        >
          <div className="flex items-center gap-4">
            {Icon && (
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                dateInfo.percentage > 0 
                  ? 'bg-orange-600' 
                  : dateInfo.percentage < 0
                  ? 'bg-green-600'
                  : 'bg-blue-600'
              }`}>
                <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
            )}
            <div className="flex-1">
              <p className="text-sm font-bold text-slate-700 mb-1">
                {t({ es: 'Impacto en precio:', en: 'Price impact:' })}
              </p>
              <p className={`text-2xl font-black ${dateInfo.color}`}>
                {dateInfo.label}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Pricing Policy Info */}
      <div className="p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-blue-900 mb-2">
              {t({ es: '💡 Política de Precios por Fecha', en: '💡 Date Pricing Policy' })}
            </h4>
            <p className="text-sm text-blue-800 mb-4">
              {t({ 
                es: 'Nuestros precios varían según la antelación con la que programes tu cirugía:', 
                en: 'Our prices vary depending on how far in advance you schedule your surgery:' 
              })}
            </p>
          </div>
        </div>

        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-sm">
            <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">!</span>
            </div>
            <div>
              <strong className="text-orange-900">
                {t({ es: 'Menos de 30 días:', en: 'Less than 30 days:' })}
              </strong>
              <p className="text-orange-800">
                {t({ 
                  es: '+15% por preparación urgente del equipo médico y coordinación acelerada', 
                  en: '+15% for urgent preparation of medical team and accelerated coordination' 
                })}
              </p>
            </div>
          </li>

          <li className="flex items-start gap-3 text-sm">
            <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
            <div>
              <strong className="text-blue-900">
                {t({ es: '30-90 días:', en: '30-90 days:' })}
              </strong>
              <p className="text-blue-800">
                {t({ 
                  es: 'Precio estándar - Tiempo óptimo para planificación y preparación', 
                  en: 'Standard price - Optimal time for planning and preparation' 
                })}
              </p>
            </div>
          </li>

          <li className="flex items-start gap-3 text-sm">
            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">★</span>
            </div>
            <div>
              <strong className="text-green-900">
                {t({ es: 'Más de 90 días:', en: 'More than 90 days:' })}
              </strong>
              <p className="text-green-800">
                {t({ 
                  es: '-10% de descuento por planificación anticipada y flexibilidad de agenda', 
                  en: '-10% discount for advance planning and schedule flexibility' 
                })}
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Additional Info */}
      <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
        <p className="text-sm text-slate-700">
          <span className="font-bold">
            {t({ es: 'Importante:', en: 'Important:' })}
          </span>{' '}
          {t({ 
            es: 'Esta fecha es tentativa. La disponibilidad final será confirmada por nuestro equipo de coordinación dentro de 24-48 horas de recibir tu solicitud.', 
            en: 'This date is tentative. Final availability will be confirmed by our coordination team within 24-48 hours of receiving your request.' 
          })}
        </p>
      </div>
    </motion.div>
  )
}

export default DateStep
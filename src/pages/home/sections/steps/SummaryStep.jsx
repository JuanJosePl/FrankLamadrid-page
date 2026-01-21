// components/steps/SummaryStep.jsx
// Step 7: Resumen completo y confirmación final

import { motion } from 'framer-motion'
import { CheckCircle2, DollarSign } from 'lucide-react'
import { PROCEDURES } from '../../../../data/procedures'
import { DESTINATIONS } from '../../../../data/destinations'
import { getDatePriceInfo } from '../../../../utils/pricing.utils'

//hooks
import { useLanguage } from '../../../../contexts/LanguageContext'


const SummaryStep = ({ formData, pricing }) => {
  const { t, language } = useLanguage()

  const procedure = PROCEDURES[formData.procedimiento]
  const dateInfo = getDatePriceInfo(formData.fecha, language)
  
  let cityName = ''
  let hotelName = ''
  
  if (formData.destino && formData.ciudad) {
    const city = DESTINATIONS[formData.destino].cities[formData.ciudad]
    cityName = t(city.name)
    hotelName = city.hotels[formData.hotelCategory].name
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Success Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="text-center mb-8"
      >
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-green-500/30 rounded-full blur-3xl animate-pulse" />
          <CheckCircle2 className="relative w-24 h-24 text-green-500" strokeWidth={2} />
        </div>
        <h3 className="text-3xl md:text-4xl font-black text-slate-900 mt-6 mb-2">
          {t({ es: '¡Cotización Completa!', en: 'Quote Complete!' })}
        </h3>
        <p className="text-lg text-slate-600">
          {t({ es: 'Revisa el desglose detallado de tu procedimiento', en: 'Review the detailed breakdown of your procedure' })}
        </p>
      </motion.div>

      {/* Personal Info Summary */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border-2 border-slate-200">
        <h4 className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-600 rounded-full" />
          {t({ es: 'Información Personal', en: 'Personal Information' })}
        </h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-slate-500 font-semibold mb-1">
              {t({ es: 'Nombre', en: 'Name' })}
            </p>
            <p className="text-slate-900 font-bold">{formData.nombre || '-'}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500 font-semibold mb-1">Email</p>
            <p className="text-slate-900 font-bold break-all">{formData.email || '-'}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500 font-semibold mb-1">
              {t({ es: 'País de Origen', en: 'Country of Origin' })}
            </p>
            <p className="text-slate-900 font-bold">{formData.pais || '-'}</p>
          </div>
        </div>
      </div>

      {/* Price Breakdown - MAIN SECTION */}
      <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-xl">
        <h4 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
          <DollarSign className="w-8 h-8 text-blue-600" />
          {t({ es: 'Desglose de Costos', en: 'Cost Breakdown' })}
        </h4>

        <div className="space-y-4">
          {/* Base Procedure */}
          <div className="flex justify-between items-start pb-4 border-b-2 border-slate-200">
            <div className="flex-1">
              <p className="font-bold text-slate-900 text-lg">
                {procedure ? t(procedure.name) : '-'}
              </p>
              <p className="text-sm text-slate-600 mt-1">
                {t({ es: 'Precio base del procedimiento', en: 'Base procedure price' })}
              </p>
            </div>
            <p className="text-2xl font-black text-slate-900 ml-4">
              ${pricing.basePrice.toLocaleString()}
            </p>
          </div>

          {/* Complexity Adjustment */}
          {pricing.complexityAdjustment > 0 && (
            <div className="flex justify-between items-start pb-4 border-b border-slate-200">
              <div className="flex-1">
                <p className="font-bold text-slate-900">
                  {t({ es: 'Ajuste por Complejidad', en: 'Complexity Adjustment' })}
                </p>
                <p className="text-sm text-slate-600 mt-1 capitalize">
                  {t({ es: 'Nivel', en: 'Level' })} {formData.complexity === 'low' ? t({ es: 'básico', en: 'basic' }) : formData.complexity === 'medium' ? t({ es: 'medio', en: 'medium' }) : t({ es: 'alto', en: 'high' })}
                </p>
              </div>
              <p className="text-xl font-black text-blue-600 ml-4">
                +${pricing.complexityAdjustment.toLocaleString()}
              </p>
            </div>
          )}

          {/* Date Multiplier */}
          {pricing.dateMultiplier !== 1 && (
            <div className="flex justify-between items-start pb-4 border-b border-slate-200">
              <div className="flex-1">
                <p className="font-bold text-slate-900">
                  {t({ es: 'Ajuste por Fecha', en: 'Date Adjustment' })}
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  {dateInfo.label}
                </p>
              </div>
              <p className={`text-xl font-black ml-4 ${
                pricing.dateMultiplier > 1 ? 'text-orange-600' : 'text-green-600'
              }`}>
                ×{pricing.dateMultiplier.toFixed(2)}
              </p>
            </div>
          )}

          {/* Destination Multiplier */}
          {pricing.destinationMultiplier !== 1 && (
            <div className="flex justify-between items-start pb-4 border-b border-slate-200">
              <div className="flex-1">
                <p className="font-bold text-slate-900">
                  {t({ es: 'Ajuste por Destino', en: 'Destination Adjustment' })}
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  {cityName}
                </p>
              </div>
              <p className="text-xl font-black text-blue-600 ml-4">
                ×{pricing.destinationMultiplier.toFixed(2)}
              </p>
            </div>
          )}

          {/* Procedure Subtotal */}
          <div className="flex justify-between items-center py-4 bg-slate-50 -mx-8 px-8 border-y-2 border-slate-300">
            <p className="font-bold text-slate-700 text-lg">
              {t({ es: 'Subtotal Procedimiento', en: 'Procedure Subtotal' })}
            </p>
            <p className="text-2xl md:text-3xl font-black text-slate-900">
              ${pricing.procedureSubtotal.toLocaleString()}
            </p>
          </div>

          {/* Hotel Cost */}
          {pricing.hotelCost > 0 && (
            <div className="flex justify-between items-start pt-4 pb-4">
              <div className="flex-1">
                <p className="font-bold text-slate-900 text-lg">
                  {t({ es: 'Hospedaje Premium', en: 'Premium Accommodation' })}
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  {hotelName}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {formData.nights} {t({ es: formData.nights === 1 ? 'noche' : 'noches', en: formData.nights === 1 ? 'night' : 'nights' })} • {formData.hotelCategory === 'fiveStar' ? '5★' : '4★'}
                </p>
              </div>
              <p className="text-2xl font-black text-purple-600 ml-4">
                ${pricing.hotelCost.toLocaleString()}
              </p>
            </div>
          )}

          {/* TOTAL FINAL */}
          <div className="flex justify-between items-center pt-6 bg-gradient-to-br from-blue-600 to-blue-500 -mx-8 -mb-8 mt-6 px-8 py-8 rounded-b-2xl">
            <div>
              <p className="text-sm font-bold text-blue-100 uppercase tracking-wider mb-1">
                {t({ es: 'Total Final', en: 'Final Total' })}
              </p>
              <p className="text-white/90 text-xs md:text-sm">
                {t({ es: 'Incluye todo lo mencionado arriba', en: 'Includes everything mentioned above' })}
              </p>
            </div>
            <motion.p
              key={pricing.total}
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-4xl md:text-5xl font-black text-white"
            >
              ${pricing.total.toLocaleString()}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Additional Details */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Surgery Date */}
        <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
          <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
            {t({ es: 'Fecha de Cirugía', en: 'Surgery Date' })}
          </p>
          <p className="text-lg font-black text-blue-900">
            {formData.fecha ? new Date(formData.fecha).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            }) : '-'}
          </p>
        </div>

        {/* Destination */}
        <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
          <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
            {t({ es: 'Destino Médico', en: 'Medical Destination' })}
          </p>
          <p className="text-lg font-black text-green-900">
            {cityName ? `${cityName}, ${t(DESTINATIONS[formData.destino].name)}` : '-'}
          </p>
        </div>
      </div>

      {/* Medical Confirmation Status */}
      <div className={`p-6 rounded-xl border-2 ${
        formData.confirmacionMedica 
          ? 'bg-green-50 border-green-300' 
          : 'bg-amber-50 border-amber-300'
      }`}>
        <div className="flex items-center gap-3">
          {formData.confirmacionMedica ? (
            <>
              <CheckCircle2 className="w-7 h-7 text-green-600 flex-shrink-0" />
              <div>
                <p className="font-bold text-green-900 text-lg">
                  {t({ es: '✓ Confirmación médica completada', en: '✓ Medical confirmation completed' })}
                </p>
                <p className="text-sm text-green-700 mt-1">
                  {t({ es: 'Tu información será revisada por especialistas certificados', en: 'Your information will be reviewed by certified specialists' })}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="w-7 h-7 rounded-full border-3 border-amber-600 flex-shrink-0" />
              <div>
                <p className="font-bold text-amber-900 text-lg">
                  {t({ es: '⚠ Pendiente: Confirmación médica requerida', en: '⚠ Pending: Medical confirmation required' })}
                </p>
                <p className="text-sm text-amber-700 mt-1">
                  {t({ es: 'Regresa al paso 6 para completar', en: 'Go back to step 6 to complete' })}
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* What's Included */}
      <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200">
        <h4 className="font-bold text-purple-900 mb-4 text-lg">
          {t({ es: '✨ Incluido en tu Paquete', en: '✨ Included in Your Package' })}
        </h4>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex items-start gap-2 text-sm text-purple-800">
            <span className="text-purple-600">✓</span>
            <span>{t({ es: 'Consulta virtual pre-operatoria', en: 'Pre-operative virtual consultation' })}</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-purple-800">
            <span className="text-purple-600">✓</span>
            <span>{t({ es: 'Procedimiento completo', en: 'Complete procedure' })}</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-purple-800">
            <span className="text-purple-600">✓</span>
            <span>{t({ es: 'Anestesia y medicamentos', en: 'Anesthesia and medications' })}</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-purple-800">
            <span className="text-purple-600">✓</span>
            <span>{t({ es: 'Hospedaje premium', en: 'Premium accommodation' })}</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-purple-800">
            <span className="text-purple-600">✓</span>
            <span>{t({ es: 'Transporte médico', en: 'Medical transportation' })}</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-purple-800">
            <span className="text-purple-600">✓</span>
            <span>{t({ es: 'Coordinador bilingüe 24/7', en: 'Bilingual coordinator 24/7' })}</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-purple-800">
            <span className="text-purple-600">✓</span>
            <span>{t({ es: 'Seguimiento post-operatorio', en: 'Post-operative follow-up' })}</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-purple-800">
            <span className="text-purple-600">✓</span>
            <span>{t({ es: 'Garantía de satisfacción', en: 'Satisfaction guarantee' })}</span>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
        <h4 className="font-bold text-blue-900 mb-3 text-lg">
          {t({ es: '📋 Próximos Pasos', en: '📋 Next Steps' })}
        </h4>
        <ol className="space-y-3 text-sm text-blue-800">
          <li className="flex items-start gap-3">
            <span className="font-bold text-blue-600 flex-shrink-0">1.</span>
            <span>{t({ es: 'Envía tu solicitud haciendo clic en el botón de abajo', en: 'Submit your request by clicking the button below' })}</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="font-bold text-blue-600 flex-shrink-0">2.</span>
            <span>{t({ es: 'Recibirás confirmación por email en menos de 1 hora', en: 'You will receive email confirmation in less than 1 hour' })}</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="font-bold text-blue-600 flex-shrink-0">3.</span>
            <span>{t({ es: 'Un especialista revisará tu caso en 24-48 horas', en: 'A specialist will review your case in 24-48 hours' })}</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="font-bold text-blue-600 flex-shrink-0">4.</span>
            <span>{t({ es: 'Agendaremos tu consulta virtual gratuita', en: 'We will schedule your free virtual consultation' })}</span>
          </li>
        </ol>
      </div>
    </motion.div>
  )
}

export default SummaryStep
// components/steps/DestinationStep.jsx
// Step 4: Selección de destino médico (país y ciudad)

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { DESTINATIONS } from '../../../../data/destinations'

//hooks
import { useLanguage } from '../../../../contexts/LanguageContext'

const DestinationStep = ({ formData, updateField, pricing }) => {
  const { t } = useLanguage()

  const handleCountryChange = (countryId) => {
    updateField('destino', countryId)
    updateField('ciudad', '') // Reset city when country changes
  }

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
          {t({ es: '🌎 Destino Médico', en: '🌎 Medical Destination' })}
        </h3>
        <p className="text-slate-600">
          {t({ 
            es: 'Selecciona el país y ciudad donde deseas realizar tu procedimiento', 
            en: 'Select the country and city where you want to perform your procedure' 
          })}
        </p>
      </div>

      {/* Country Selection */}
      <div>
        <label className="block mb-3">
          <span className="text-sm font-bold text-slate-700">
            {t({ es: 'País', en: 'Country' })} *
          </span>
        </label>

        <div className="grid md:grid-cols-3 gap-4">
          {Object.entries(DESTINATIONS).map(([key, dest]) => (
            <motion.div
              key={key}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCountryChange(key)}
              className={`
                p-5 rounded-xl border-2 cursor-pointer transition-all
                ${
                  formData.destino === key
                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                    : 'border-slate-300 bg-white hover:border-blue-300'
                }
              `}
            >
              <div className="text-4xl mb-2 text-center">{dest.flag}</div>
              <p className="text-center font-bold text-slate-900">
                {t(dest.name)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* City Selection */}
      {formData.destino && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label className="block mb-3">
            <span className="text-sm font-bold text-slate-700">
              {t({ es: 'Ciudad', en: 'City' })} *
            </span>
          </label>

          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(DESTINATIONS[formData.destino].cities).map(([key, city]) => (
              <motion.div
                key={key}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => updateField('ciudad', key)}
                className={`
                  p-5 rounded-xl border-2 cursor-pointer transition-all
                  ${
                    formData.ciudad === key
                      ? 'border-blue-500 bg-blue-50 shadow-lg'
                      : 'border-slate-300 bg-white hover:border-blue-300'
                  }
                `}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">
                      {t(city.name)}
                    </h4>
                    <p className="text-sm text-slate-600 mt-1">
                      {t({ es: 'Multiplicador:', en: 'Multiplier:' })} ×{city.priceMultiplier}
                    </p>
                  </div>
                  <MapPin className={`w-6 h-6 ${formData.ciudad === key ? 'text-blue-600' : 'text-slate-400'}`} />
                </div>

                {/* Hospitals */}
                <div className="mb-3">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    {t({ es: 'Hospitales Certificados', en: 'Certified Hospitals' })}
                  </p>
                  <div className="space-y-1">
                    {city.hospitals.slice(0, 2).map((hospital, idx) => (
                      <p key={idx} className="text-xs text-slate-700 flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-green-500 rounded-full" />
                        {hospital}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Airport */}
                <div className="pt-3 border-t border-slate-200">
                  <p className="text-xs text-slate-500">
                    ✈️ {t({ es: 'Aeropuertos:', en: 'Airports:' })} {city.airports.join(', ')}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Destination Impact */}
      {formData.destino && formData.ciudad && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-green-700 mb-1">
                {t({ es: 'Ajuste de destino seleccionado:', en: 'Selected destination adjustment:' })}
              </p>
              <p className="text-2xl font-black text-green-600">
                ×{pricing.destinationMultiplier.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-green-200">
            <p className="text-sm text-green-800">
              {t({ 
                es: 'Este multiplicador refleja los costos operativos y certificaciones médicas del destino seleccionado.', 
                en: 'This multiplier reflects the operating costs and medical certifications of the selected destination.' 
              })}
            </p>
          </div>
        </motion.div>
      )}

      {/* Info Box */}
      <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
        <div className="flex items-start gap-3">
          <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="font-bold text-blue-900 mb-1">
              {t({ es: '¿Por qué varían los precios?', en: 'Why do prices vary?' })}
            </p>
            <p className="text-sm text-blue-800">
              {t({ 
                es: 'Los precios reflejan las certificaciones internacionales, costos operativos locales y calidad de las instalaciones médicas en cada destino. Todas nuestras clínicas cumplen con estándares internacionales JCI.', 
                en: 'Prices reflect international certifications, local operating costs, and quality of medical facilities in each destination. All our clinics meet JCI international standards.' 
              })}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default DestinationStep
// components/ui/PriceDisplay.jsx
// Componente para mostrar el precio estimado con animación

import { motion } from 'framer-motion'
import { DollarSign, Sparkles } from 'lucide-react'

const PriceDisplay = ({ pricing, language = 'es', visible = true }) => {
  const t = (obj) => obj[language]

  if (!visible || pricing.total === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200 shadow-lg"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Icon Container */}
          <motion.div
            className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <DollarSign className="w-6 h-6 text-white" strokeWidth={2.5} />
          </motion.div>

          {/* Text Content */}
          <div>
            <p className="text-sm font-bold text-slate-600 uppercase tracking-wider">
              {t({ es: 'Precio Estimado', en: 'Estimated Price' })}
            </p>
            <motion.p
              key={pricing.total}
              initial={{ scale: 1.2, color: '#3b82f6' }}
              animate={{ scale: 1, color: '#2563eb' }}
              transition={{ duration: 0.3 }}
              className="text-3xl md:text-4xl font-black text-blue-600"
            >
              ${pricing.total.toLocaleString('en-US')} USD
            </motion.p>
          </div>
        </div>

        {/* Sparkle Icon */}
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 10, 0],
            scale: [1, 1.1, 1, 1.1, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatDelay: 1 
          }}
        >
          <Sparkles className="w-8 h-8 text-blue-400" />
        </motion.div>
      </div>

      {/* Breakdown Preview (opcional) */}
      {pricing.procedureSubtotal > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ delay: 0.2 }}
          className="mt-4 pt-4 border-t border-blue-200"
        >
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-slate-600 font-semibold">
                {t({ es: 'Procedimiento', en: 'Procedure' })}
              </p>
              <p className="text-blue-900 font-bold">
                ${pricing.procedureSubtotal.toLocaleString()}
              </p>
            </div>
            {pricing.hotelCost > 0 && (
              <div>
                <p className="text-slate-600 font-semibold">
                  {t({ es: 'Hospedaje', en: 'Accommodation' })}
                </p>
                <p className="text-purple-700 font-bold">
                  ${pricing.hotelCost.toLocaleString()}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default PriceDisplay
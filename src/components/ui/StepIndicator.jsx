// components/ui/StepIndicator.jsx
// Componente visual del indicador de progreso de steps

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const StepIndicator = ({ steps, currentStep, language = 'es' }) => {
  const t = (obj) => obj[language]

  return (
    <div className="mb-16 overflow-x-auto pb-4">
      <div className="flex justify-between items-center min-w-max md:min-w-0 px-4 md:px-0">
        {steps.map((s, index) => (
          <div key={s.num} className="flex items-center flex-1 min-w-[100px] md:min-w-0">
            <div className="flex flex-col items-center flex-1">
              {/* Circle Container */}
              <motion.div
                animate={{ scale: currentStep >= s.num ? 1 : 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Glow effect para step activo */}
                {currentStep === s.num && (
                  <motion.div
                    className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}

                {/* Circle */}
                <div
                  className={`
                    relative w-12 h-12 rounded-full flex items-center justify-center 
                    font-bold text-lg transition-all duration-300
                    ${
                      currentStep >= s.num
                        ? 'bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30'
                        : 'bg-slate-200 text-slate-400'
                    }
                  `}
                >
                  {currentStep > s.num ? (
                    <CheckCircle2 className="w-6 h-6" strokeWidth={2.5} />
                  ) : (
                    s.num
                  )}
                </div>
              </motion.div>

              {/* Label */}
              <span
                className={`
                  text-xs md:text-sm font-semibold mt-3 text-center 
                  transition-colors duration-300
                  ${currentStep >= s.num ? 'text-slate-900' : 'text-slate-400'}
                `}
              >
                {t(s.label)}
              </span>
            </div>

            {/* Connector Line */}
            {s.num < steps.length && (
              <div className="flex-1 h-1 mx-4 bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: currentStep > s.num ? '100%' : '0%' }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="h-full bg-gradient-to-r from-blue-600 to-blue-500"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default StepIndicator
// components/steps/ProcedureStep.jsx
// Step 2: Selección de procedimiento médico y complejidad

import { motion } from 'framer-motion'
import { PROCEDURES } from '../../../../data/procedures'

//hooks
import { useLanguage } from '../../../../contexts/LanguageContext'


const ProcedureStep = ({ formData, updateField }) => {
  const { t } = useLanguage()

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
          {t({ es: '🏥 Selecciona tu Procedimiento', en: '🏥 Select Your Procedure' })}
        </h3>
        <p className="text-slate-600">
          {t({ 
            es: 'Elige el procedimiento que deseas realizar', 
            en: 'Choose the procedure you want to perform' 
          })}
        </p>
      </div>

      {/* Procedures Grid */}
      <div className="grid gap-4">
        {Object.values(PROCEDURES).map((proc) => (
          <motion.div
            key={proc.id}
            whileHover={{ scale: 1.01, y: -2 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => updateField('procedimiento', proc.id)}
            className={`
              p-6 rounded-xl border-2 cursor-pointer transition-all
              ${
                formData.procedimiento === proc.id
                  ? 'border-blue-500 bg-blue-50 shadow-lg shadow-blue-500/20'
                  : 'border-slate-300 bg-white hover:border-blue-300 hover:shadow-md'
              }
            `}
          >
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h4 className="text-lg font-bold text-slate-900 mb-1">
                  {t(proc.name)}
                </h4>
                <p className="text-sm text-slate-600 mb-3">
                  {t(proc.description)}
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>
                    {t({ es: 'Recuperación:', en: 'Recovery:' })} {proc.recoveryDays} {t({ es: 'días', en: 'days' })}
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="text-right">
                <p className="text-xs text-slate-500 font-semibold mb-1">
                  {t({ es: 'Desde', en: 'From' })}
                </p>
                <p className="text-2xl md:text-3xl font-black text-blue-600">
                  ${proc.basePrice.toLocaleString()}
                </p>
                <p className="text-xs text-slate-500 mt-1">USD</p>
              </div>
            </div>

            {/* Selection Indicator */}
            {formData.procedimiento === proc.id && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="mt-4 pt-4 border-t border-blue-200 flex items-center gap-2 text-blue-700"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-bold">
                  {t({ es: 'Seleccionado', en: 'Selected' })}
                </span>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Complexity Selector */}
      {formData.procedimiento && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border-2 border-slate-200"
        >
          <label className="block">
            <div className="mb-4">
              <span className="text-lg font-bold text-slate-900 block mb-1">
                {t({ es: 'Complejidad del Caso', en: 'Case Complexity' })}
              </span>
              <span className="text-sm text-slate-600">
                {t({ 
                  es: 'Selecciona según la evaluación preliminar de tu caso', 
                  en: 'Select based on the preliminary evaluation of your case' 
                })}
              </span>
            </div>

            <select
              value={formData.complexity}
              onChange={(e) => updateField('complexity', e.target.value)}
              className="w-full px-6 py-4 rounded-xl bg-white border-2 border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-900 font-semibold text-lg"
            >
              <option value="low">
                {t({ es: '🟢 Básico (incluido en precio base)', en: '🟢 Basic (included in base price)' })}
              </option>
              <option value="medium">
                {t({ es: '🟡 Medio (+$', en: '🟡 Medium (+$' })}{PROCEDURES[formData.procedimiento].complexity.medium.toLocaleString()})
              </option>
              <option value="high">
                {t({ es: '🔴 Alto (+$', en: '🔴 High (+$' })}{PROCEDURES[formData.procedimiento].complexity.high.toLocaleString()})
              </option>
            </select>
          </label>

          {/* Complexity Info */}
          <div className="mt-4 p-4 bg-white rounded-lg border border-slate-200">
            <p className="text-sm text-slate-700">
              <span className="font-bold">
                {t({ es: 'Nota:', en: 'Note:' })}
              </span>{' '}
              {t({ 
                es: 'La complejidad final será determinada por el cirujano durante la consulta virtual. Este es solo un estimado inicial.', 
                en: 'The final complexity will be determined by the surgeon during the virtual consultation. This is just an initial estimate.' 
              })}
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default ProcedureStep
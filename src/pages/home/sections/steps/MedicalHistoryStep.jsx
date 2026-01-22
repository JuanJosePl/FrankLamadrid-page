// components/steps/MedicalHistoryStep.jsx
// Step 6: Historial médico y confirmación de veracidad

// en este paso cuando paso al paso 7 se va hacia arriba.


import { motion } from 'framer-motion'
import { Stethoscope, AlertCircle } from 'lucide-react'

//hooks
import { useLanguage } from '../../../../contexts/LanguageContext'


const MedicalHistoryStep = ({ formData, updateField }) => {
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
          {t({ es: '🩺 Historial Médico', en: '🩺 Medical History' })}
        </h3>
        <p className="text-slate-600">
          {t({ 
            es: 'Información confidencial esencial para tu seguridad', 
            en: 'Confidential information essential for your safety' 
          })}
        </p>
      </div>

      {/* Medical Conditions */}
      <div>
        <label className="block mb-2">
          <span className="text-sm font-bold text-slate-700">
            {t({ es: 'Condiciones Médicas Previas', en: 'Previous Medical Conditions' })}
          </span>
          <span className="text-xs text-slate-500 ml-2">
            ({t({ es: 'Opcional pero recomendado', en: 'Optional but recommended' })})
          </span>
        </label>
        <textarea
          placeholder={t({
            es: 'Ej: Diabetes tipo 2, hipertensión controlada, alergias a medicamentos (penicilina), asma...',
            en: 'Ex: Type 2 diabetes, controlled hypertension, drug allergies (penicillin), asthma...',
          })}
          value={formData.condiciones}
          onChange={(e) => updateField('condiciones', e.target.value)}
          rows={5}
          className="w-full px-6 py-4 rounded-xl bg-white border-2 border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none text-slate-900 placeholder:text-slate-400"
        />
        <p className="text-xs text-slate-500 mt-2 flex items-center gap-2">
          <AlertCircle className="w-4 h-4" />
          {t({ 
            es: 'Incluye alergias, medicamentos actuales, enfermedades crónicas', 
            en: 'Include allergies, current medications, chronic diseases' 
          })}
        </p>
      </div>

      {/* Previous Surgeries */}
      <div>
        <label className="block mb-2">
          <span className="text-sm font-bold text-slate-700">
            {t({ es: 'Cirugías Previas', en: 'Previous Surgeries' })}
          </span>
          <span className="text-xs text-slate-500 ml-2">
            ({t({ es: 'Opcional pero recomendado', en: 'Optional but recommended' })})
          </span>
        </label>
        <textarea
          placeholder={t({
            es: 'Ej: Apendicectomía (2018), cesárea (2020), rinoplastia (2022)...',
            en: 'Ex: Appendectomy (2018), cesarean section (2020), rhinoplasty (2022)...',
          })}
          value={formData.cirugias}
          onChange={(e) => updateField('cirugias', e.target.value)}
          rows={5}
          className="w-full px-6 py-4 rounded-xl bg-white border-2 border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none text-slate-900 placeholder:text-slate-400"
        />
        <p className="text-xs text-slate-500 mt-2 flex items-center gap-2">
          <AlertCircle className="w-4 h-4" />
          {t({ 
            es: 'Especifica tipo de cirugía, año aproximado y si hubo complicaciones', 
            en: 'Specify type of surgery, approximate year, and if there were complications' 
          })}
        </p>
      </div>

      {/* Medical Confirmation Checkbox */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className={`p-6 rounded-xl border-2 transition-all ${
          formData.confirmacionMedica
            ? 'bg-green-50 border-green-300'
            : 'bg-red-50 border-red-300'
        }`}
      >
        <label className="flex items-start gap-4 cursor-pointer group">
          <div className="relative flex-shrink-0 mt-1">
            <input
              type="checkbox"
              checked={formData.confirmacionMedica}
              onChange={(e) => updateField('confirmacionMedica', e.target.checked)}
              className="w-6 h-6 rounded-lg border-2 border-red-400 text-red-600 focus:ring-red-500 focus:ring-4 focus:ring-red-500/20 cursor-pointer transition-all"
            />
          </div>

          <div>
            <p className={`font-bold mb-2 ${
              formData.confirmacionMedica ? 'text-green-900' : 'text-red-900'
            }`}>
              {t({ es: 'Confirmación Médica Requerida *', en: 'Medical Confirmation Required *' })}
            </p>
            <p className={`text-sm leading-relaxed ${
              formData.confirmacionMedica ? 'text-green-800' : 'text-red-800'
            }`}>
              {t({
                es: 'Confirmo que toda la información médica proporcionada es verídica y completa. Comprendo que esta información será revisada por profesionales médicos certificados y que cualquier omisión o falsedad podría comprometer mi seguridad y los resultados del procedimiento.',
                en: 'I confirm that all medical information provided is truthful and complete. I understand that this information will be reviewed by certified medical professionals and that any omission or falsehood could compromise my safety and the results of the procedure.',
              })}
            </p>

            {formData.confirmacionMedica && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-3 flex items-center gap-2 text-green-700 font-semibold"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">
                  {t({ es: 'Confirmación aceptada', en: 'Confirmation accepted' })}
                </span>
              </motion.div>
            )}
          </div>
        </label>
      </motion.div>

      {/* Important Notes */}
      <div className="space-y-4">
        {/* Confidentiality Notice */}
        <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
          <div className="flex items-start gap-3">
            <Stethoscope className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-blue-900 mb-2">
                {t({ es: 'Confidencialidad Médica', en: 'Medical Confidentiality' })}
              </p>
              <p className="text-sm text-blue-800">
                {t({
                  es: 'Esta información es estrictamente confidencial y solo será compartida con el equipo médico autorizado. Cumplimos con estándares HIPAA y legislación internacional de protección de datos médicos.',
                  en: 'This information is strictly confidential and will only be shared with authorized medical staff. We comply with HIPAA standards and international medical data protection legislation.',
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Why Important */}
        <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-900 mb-2">
                {t({ es: '¿Por qué es importante?', en: 'Why is this important?' })}
              </p>
              <p className="text-sm text-amber-800 mb-2">
                {t({
                  es: 'La precisión de tu historial médico es fundamental para:',
                  en: 'The accuracy of your medical history is essential for:',
                })}
              </p>
              <ul className="text-sm text-amber-800 space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 flex-shrink-0">•</span>
                  <span>{t({ es: 'Seleccionar la técnica quirúrgica más segura', en: 'Selecting the safest surgical technique' })}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 flex-shrink-0">•</span>
                  <span>{t({ es: 'Prevenir interacciones medicamentosas', en: 'Preventing drug interactions' })}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 flex-shrink-0">•</span>
                  <span>{t({ es: 'Ajustar protocolos de anestesia', en: 'Adjusting anesthesia protocols' })}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 flex-shrink-0">•</span>
                  <span>{t({ es: 'Planificar tu recuperación personalizada', en: 'Planning your personalized recovery' })}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
          <p className="text-sm text-slate-700">
            <span className="font-bold">
              {t({ es: 'Próximos pasos:', en: 'Next steps:' })}
            </span>{' '}
            {t({
              es: 'Un médico especialista revisará tu información dentro de 24-48 horas y se pondrá en contacto contigo para una evaluación preliminar y responder tus preguntas.',
              en: 'A specialist doctor will review your information within 24-48 hours and will contact you for a preliminary evaluation and answer your questions.',
            })}
          </p>
        </div>
      </div>

      {/* Reminder if not confirmed */}
      {!formData.confirmacionMedica && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 bg-red-100 border-2 border-red-300 rounded-xl text-center"
        >
          <p className="text-red-900 font-bold text-sm">
            ⚠️ {t({ 
              es: 'Debes aceptar la confirmación médica para continuar', 
              en: 'You must accept the medical confirmation to continue' 
            })}
          </p>
        </motion.div>
      )}
    </motion.div>
  )
}

export default MedicalHistoryStep
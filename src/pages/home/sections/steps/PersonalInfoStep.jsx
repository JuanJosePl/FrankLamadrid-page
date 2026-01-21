// components/steps/PersonalInfoStep.jsx
// Step 1: Información Personal del paciente

import { motion } from 'framer-motion'
import { useLanguage } from '../../../../contexts/LanguageContext'

const PersonalInfoStep = ({ formData, updateField }) => {
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
          {t({ es: '👤 Información Personal', en: '👤 Personal Information' })}
        </h3>
        <p className="text-slate-600">
          {t({ 
            es: 'Comencemos con tus datos básicos para personalizar tu experiencia', 
            en: "Let's start with your basic information to personalize your experience" 
          })}
        </p>
      </div>

      {/* Nombre Completo */}
      <div>
        <label className="block mb-2">
          <span className="text-sm font-bold text-slate-700">
            {t({ es: 'Nombre Completo', en: 'Full Name' })} *
          </span>
        </label>
        <input
          type="text"
          placeholder={t({ es: 'Juan Pérez García', en: 'John Smith' })}
          value={formData.nombre}
          onChange={(e) => updateField('nombre', e.target.value)}
          className="w-full px-6 py-4 rounded-xl bg-white border-2 border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-900 font-medium placeholder:text-slate-400"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block mb-2">
          <span className="text-sm font-bold text-slate-700">
            {t({ es: 'Correo Electrónico', en: 'Email Address' })} *
          </span>
        </label>
        <input
          type="email"
          placeholder={t({ es: 'tu@email.com', en: 'your@email.com' })}
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          className="w-full px-6 py-4 rounded-xl bg-white border-2 border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-900 font-medium placeholder:text-slate-400"
          required
        />
        <p className="text-xs text-slate-500 mt-2 flex items-center gap-1.5">
          <span className="w-1 h-1 bg-blue-500 rounded-full" />
          {t({ 
            es: 'Recibirás tu cotización por este correo', 
            en: 'You will receive your quote via this email' 
          })}
        </p>
      </div>

      {/* País de Origen */}
      <div>
        <label className="block mb-2">
          <span className="text-sm font-bold text-slate-700">
            {t({ es: 'País de Origen', en: 'Country of Origin' })} *
          </span>
        </label>
        <input
          type="text"
          placeholder={t({ es: 'Estados Unidos', en: 'United States' })}
          value={formData.pais}
          onChange={(e) => updateField('pais', e.target.value)}
          className="w-full px-6 py-4 rounded-xl bg-white border-2 border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-900 font-medium placeholder:text-slate-400"
          required
        />
        <p className="text-xs text-slate-500 mt-2 flex items-center gap-1.5">
          <span className="w-1 h-1 bg-blue-500 rounded-full" />
          {t({ 
            es: 'Esto nos ayuda a coordinar tu viaje médico', 
            en: 'This helps us coordinate your medical trip' 
          })}
        </p>
      </div>

      {/* Info Box */}
      <div className="mt-8 p-5 bg-blue-50 rounded-xl border border-blue-200">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-blue-900 mb-1">
              {t({ es: '¿Por qué necesitamos estos datos?', en: 'Why do we need this information?' })}
            </p>
            <p className="text-sm text-blue-800">
              {t({ 
                es: 'Toda la información proporcionada es confidencial y protegida bajo estándares HIPAA. Solo la utilizamos para personalizar tu cotización y coordinar tu experiencia médica.', 
                en: 'All information provided is confidential and protected under HIPAA standards. We only use it to personalize your quote and coordinate your medical experience.' 
              })}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PersonalInfoStep
// components/MedicalStepForm.jsx
// Componente principal que orquesta todo el flujo del formulario

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'

// Hooks
import useStepFormCalculator from '../../../hooks/useStepFormCalculator'

//contexts
import { useLanguage } from '../../../contexts/LanguageContext'


// UI Components
import StepIndicator from '../../../components/ui/StepIndicator'
import PriceDisplay from '../../../components/ui/PriceDisplay'

// Step Components
import PersonalInfoStep from './steps/PersonalInfoStep'
import ProcedureStep from './steps/ProcedureStep'
import DateStep from './steps/DateStep'
import DestinationStep from './steps/DestinationStep'
import AccommodationStep from './steps/AccommodationStep'
import MedicalHistoryStep from './steps/MedicalHistoryStep'
import SummaryStep from './steps/SummaryStep'

const MedicalStepForm = () => {
  const { language, t } = useLanguage()
  const [currentStep, setCurrentStep] = useState(1)
  const { formData, updateField, pricing, validateStep } = useStepFormCalculator()



  // Definición de los steps
  const steps = [
    { num: 1, label: { es: 'Información Personal', en: 'Personal Information' } },
    { num: 2, label: { es: 'Procedimiento', en: 'Procedure' } },
    { num: 3, label: { es: 'Fecha de Cirugía', en: 'Surgery Date' } },
    { num: 4, label: { es: 'Destino Médico', en: 'Medical Destination' } },
    { num: 5, label: { es: 'Hospedaje Premium', en: 'Premium Accommodation' } },
    { num: 6, label: { es: 'Historial Médico', en: 'Medical History' } },
    { num: 7, label: { es: 'Confirmación', en: 'Confirmation' } }
  ]

  // Navegación
  const handleNext = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Envío del formulario
  const handleSubmit = () => {
    const submitData = {
      formData,
      pricing,
      timestamp: new Date().toISOString()
    }

    console.log('📋 Form Submitted:', submitData)

    // Aquí iría la llamada a tu API
    // await fetch('/api/medical-quote', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(submitData)
    // })

    alert(t({ 
      es: '✅ ¡Solicitud enviada con éxito! Recibirás un email de confirmación en breve.', 
      en: '✅ Request sent successfully! You will receive a confirmation email shortly.' 
    }))

    // Opcional: Resetear formulario o redirigir
    // resetForm()
    // window.location.href = '/gracias'
  }

  // Validación del botón siguiente
  const isNextDisabled = () => {
    return !validateStep(currentStep)
  }

  // Renderizado condicional del step actual
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoStep formData={formData} updateField={updateField} language={language} />
      case 2:
        return <ProcedureStep formData={formData} updateField={updateField} language={language} />
      case 3:
        return <DateStep formData={formData} updateField={updateField} language={language} />
      case 4:
        return <DestinationStep formData={formData} updateField={updateField} pricing={pricing} language={language} />
      case 5:
        return <AccommodationStep formData={formData} updateField={updateField} pricing={pricing} language={language} />
      case 6:
        return <MedicalHistoryStep formData={formData} updateField={updateField} language={language} />
      case 7:
        return <SummaryStep formData={formData} pricing={pricing} language={language} />
      default:
        return null
    }
  }

  return (
    <section 
      id="calculadora-medica" 
      className="relative min-h-screen flex items-center py-24 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-[5%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-[5%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 px-5 py-2.5 rounded-full border border-blue-500/20 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-bold text-blue-700 uppercase tracking-wider">
                {t({ es: 'Calculadora Médica Internacional', en: 'International Medical Calculator' })}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tight">
              {t({ es: 'Cotiza tu Procedimiento', en: 'Quote Your Procedure' })}
            </h2>
            <p className="text-xl text-slate-600 font-light">
              {t({ es: 'Transparencia total en 7 pasos simples', en: 'Total transparency in 7 simple steps' })}
            </p>
          </motion.div>

          {/* Main Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200"
          >
            {/* Step Indicator */}
            <StepIndicator 
              steps={steps} 
              currentStep={currentStep} 
              language={language} 
            />

            {/* Price Display (visible from step 2 onwards) */}
            <PriceDisplay 
              pricing={pricing} 
              language={language} 
              visible={currentStep >= 2} 
            />

            {/* Step Content */}
            <div className="min-h-[500px]">
              {renderCurrentStep()}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t-2 border-slate-200">
              {/* Previous Button */}
              {currentStep > 1 && (
                <motion.button
                  whileHover={{ scale: 1.02, x: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePrev}
                  className="px-8 py-4 bg-white border-2 border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-600 font-bold rounded-xl transition-all shadow-sm hover:shadow-md"
                >
                  {t({ es: '← Anterior', en: '← Previous' })}
                </motion.button>
              )}

              {/* Next / Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={currentStep === 7 ? handleSubmit : handleNext}
                disabled={isNextDisabled()}
                className={`
                  ml-auto px-10 py-4 font-bold rounded-xl shadow-xl transition-all
                  ${isNextDisabled() 
                    ? 'bg-slate-300 text-slate-500 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40'
                  }
                `}
              >
                {currentStep === 7
                  ? t({ es: 'Enviar Solicitud →', en: 'Submit Request →' })
                  : t({ es: 'Siguiente →', en: 'Next →' })
                }
              </motion.button>
            </div>

            {/* Security Footer */}
            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-3 text-slate-600 text-center">
              <Lock className="w-4 h-4 text-blue-600" />
              <p className="text-xs font-semibold">
                {t({
                  es: 'Tus datos están protegidos bajo estándares HIPAA y encriptación de grado médico',
                  en: 'Your data is protected under HIPAA standards and medical-grade encryption',
                })}
              </p>
            </div>

            {/* Progress Indicator (mobile friendly) */}
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-500 font-medium">
                {t({ es: 'Paso', en: 'Step' })} {currentStep} {t({ es: 'de', en: 'of' })} 7
              </p>
              <div className="mt-2 w-full max-w-xs mx-auto h-2 bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentStep / 7) * 100}%` }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-blue-600 to-blue-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MedicalStepForm
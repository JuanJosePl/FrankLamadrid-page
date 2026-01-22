// hooks/useScrollToTop.js
// Hook personalizado para hacer scroll automático al cambiar de step

import { useEffect } from 'react'

/**
 * Hook que hace scroll suave hacia arriba del formulario cuando cambia el step
 * @param {number} currentStep - Step actual del formulario
 * @param {string} containerRef - Ref del contenedor del formulario (opcional)
 */
export const useScrollToTop = (currentStep, containerRef = null) => {
  useEffect(() => {
    // Opciones de scroll suave
    const scrollOptions = {
      top: 0,
      behavior: 'smooth'
    }

    // Si hay un contenedor específico, hacer scroll en ese contenedor
    if (containerRef && containerRef.current) {
      containerRef.current.scrollTo(scrollOptions)
    } else {
      // Si no, hacer scroll en la ventana principal
      window.scrollTo(scrollOptions)
    }

    // Método alternativo más agresivo para navegadores que no soporten smooth
    setTimeout(() => {
      if (containerRef && containerRef.current) {
        containerRef.current.scrollTop = 0
      } else {
        window.scrollTo(0, 0)
      }
    }, 100)

  }, [currentStep, containerRef])
}

export default useScrollToTop


// ============================================
// IMPLEMENTACIÓN EN TU COMPONENTE PRINCIPAL
// ============================================

// En MedicalStepForm.jsx o donde tengas el formulario principal:

import { useRef } from 'react'
import useScrollToTop from '../hooks/useScrollToTop'

const MedicalStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const formContainerRef = useRef(null)
  
  // Agregar el hook
  useScrollToTop(currentStep, formContainerRef)
  
  const nextStep = () => {
    if (currentStep < 7) {
      setCurrentStep(prev => prev + 1)
    }
  }
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  return (
    <div 
      ref={formContainerRef} 
      className="max-h-screen overflow-y-auto"
    >
      {/* Tu formulario aquí */}
      <div className="container mx-auto">
        {/* Steps content */}
        {currentStep === 1 && <PersonalInfoStep />}
        {currentStep === 2 && <ProcedureStep />}
        {currentStep === 3 && <DateStep />}
        {currentStep === 4 && <DestinationStep />}
        {currentStep === 5 && <AccommodationStep />}
        {currentStep === 6 && <MedicalHistoryStep />}
        {currentStep === 7 && <SummaryStep />}
        
        {/* Botones de navegación */}
        <div className="flex gap-4 mt-8">
          {currentStep > 1 && (
            <button onClick={prevStep}>Anterior</button>
          )}
          {currentStep < 7 && (
            <button onClick={nextStep}>Siguiente</button>
          )}
        </div>
      </div>
    </div>
  )
}




// ============================================
// SOLUCIÓN CSS ALTERNATIVA
// ============================================

/*
Si prefieres una solución CSS, agrega esto a tu archivo CSS principal:

.step-container {
  scroll-behavior: smooth;
}

Y en cada transición de step, añade una clase que resetee el scroll:

.step-enter {
  animation: scrollToTop 0.3s ease-in-out;
}

@keyframes scrollToTop {
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
*/
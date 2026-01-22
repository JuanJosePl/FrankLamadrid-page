// hooks/useStepFormCalculator.js
// Custom hook para manejar el estado del formulario y cálculo de precios
// ACTUALIZADO con sistema de fechas disponibles y scroll automático

import { useState, useEffect, useRef } from 'react'
import { PROCEDURES } from '../data/procedures'
import { DESTINATIONS } from '../data/destinations'
import { 
  calculateDateMultiplier,
  getMultiplierFromAvailableDate,
  calculateHotelCost,
  getRecommendedNights,
  generateAvailableDates
} from '../utils/pricing.utils'

const useStepFormCalculator = () => {
  // Estado del step actual
  const [currentStep, setCurrentStep] = useState(1)
  
  // Ref para el scroll automático
  const formContainerRef = useRef(null)
  
  // Fechas disponibles generadas
  const [availableDates, setAvailableDates] = useState([])

  // Estado del formulario
  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    nombre: '',
    email: '',
    pais: '',
    
    // Step 2: Procedure
    procedimiento: '',
    complexity: 'medium',
    
    // Step 3: Date
    fecha: '',
    
    // Step 4: Destination
    destino: '',
    ciudad: '',
    
    // Step 5: Accommodation
    hotelCategory: 'fourStar',
    nights: 5,
    
    // Step 6: Medical History
    condiciones: '',
    cirugias: '',
    confirmacionMedica: false
  })

  // Estado del pricing
  const [pricing, setPricing] = useState({
    basePrice: 0,
    complexityAdjustment: 0,
    dateMultiplier: 1,
    destinationMultiplier: 1,
    hotelCost: 0,
    procedureSubtotal: 0,
    total: 0
  })

  // Generar fechas disponibles al montar el componente
  useEffect(() => {
    const dates = generateAvailableDates(8)
    setAvailableDates(dates)
  }, [])

  // Scroll automático cuando cambia el step
  useEffect(() => {
    const scrollOptions = {
      top: 0,
      behavior: 'smooth'
    }

    if (formContainerRef.current) {
      formContainerRef.current.scrollTo(scrollOptions)
    } else {
      window.scrollTo(scrollOptions)
    }

    // Fallback para navegadores sin smooth scroll
    setTimeout(() => {
      if (formContainerRef.current) {
        formContainerRef.current.scrollTop = 0
      } else {
        window.scrollTo(0, 0)
      }
    }, 100)
  }, [currentStep])

  // Efecto para recalcular precios cuando cambian dependencias
  useEffect(() => {
    calculatePricing()
  }, [
    formData.procedimiento,
    formData.complexity,
    formData.fecha,
    formData.destino,
    formData.ciudad,
    formData.hotelCategory,
    formData.nights,
    availableDates
  ])

  // Función principal de cálculo
  const calculatePricing = () => {
    // Si no hay procedimiento, resetear pricing
    if (!formData.procedimiento) {
      setPricing({
        basePrice: 0,
        complexityAdjustment: 0,
        dateMultiplier: 1,
        destinationMultiplier: 1,
        hotelCost: 0,
        procedureSubtotal: 0,
        total: 0
      })
      return
    }

    // Obtener procedimiento
    const procedure = PROCEDURES[formData.procedimiento]
    if (!procedure) return

    // Calcular base price y complejidad
    const basePrice = procedure.basePrice
    const complexityAdjustment = procedure.complexity[formData.complexity] || 0

    // Calcular multiplicador de fecha
    // Usar el multiplicador de la fecha disponible si existe
    let dateMultiplier = 1
    if (formData.fecha) {
      const availableDate = availableDates.find(d => d.dateString === formData.fecha)
      dateMultiplier = availableDate ? availableDate.multiplier : calculateDateMultiplier(formData.fecha)
    }

    // Calcular multiplicador de destino
    let destinationMultiplier = 1
    if (formData.destino && formData.ciudad) {
      const destination = DESTINATIONS[formData.destino]?.cities[formData.ciudad]
      if (destination) {
        destinationMultiplier = destination.priceMultiplier
      }
    }

    // Calcular costo de hotel
    let hotelCost = 0
    if (formData.destino && formData.ciudad && formData.nights > 0) {
      const destination = DESTINATIONS[formData.destino]?.cities[formData.ciudad]
      if (destination) {
        const hotel = destination.hotels[formData.hotelCategory]
        if (hotel) {
          hotelCost = calculateHotelCost(hotel.pricePerNight, formData.nights)
        }
      }
    }

    // Calcular subtotal del procedimiento
    const procedureSubtotal = (basePrice + complexityAdjustment) * dateMultiplier * destinationMultiplier

    // Calcular total final
    const total = procedureSubtotal + hotelCost

    // Actualizar estado de pricing
    setPricing({
      basePrice,
      complexityAdjustment,
      dateMultiplier,
      destinationMultiplier,
      hotelCost,
      procedureSubtotal: Math.round(procedureSubtotal),
      total: Math.round(total)
    })
  }

  // Función para actualizar un campo del formulario
  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  // Función para actualizar múltiples campos a la vez
  const updateFields = (fields) => {
    setFormData(prev => ({ ...prev, ...fields }))
  }

  // Función para resetear el formulario
  const resetForm = () => {
    setFormData({
      nombre: '',
      email: '',
      pais: '',
      procedimiento: '',
      complexity: 'medium',
      fecha: '',
      destino: '',
      ciudad: '',
      hotelCategory: 'fourStar',
      nights: 5,
      condiciones: '',
      cirugias: '',
      confirmacionMedica: false
    })
    setCurrentStep(1)
  }

  // Función para actualizar noches recomendadas según procedimiento
  const setRecommendedNights = () => {
    if (formData.procedimiento) {
      const recommended = getRecommendedNights(formData.procedimiento)
      updateField('nights', recommended)
    }
  }

  // Navegación de steps
  const nextStep = () => {
    if (currentStep < 7 && validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const goToStep = (step) => {
    if (step >= 1 && step <= 7) {
      setCurrentStep(step)
    }
  }

  // Función de validación por step
  const validateStep = (step) => {
    switch(step) {
      case 1:
        return formData.nombre && formData.email && formData.pais
      case 2:
        return formData.procedimiento
      case 3:
        return formData.fecha
      case 4:
        return formData.destino && formData.ciudad
      case 5:
        return formData.hotelCategory && formData.nights > 0
      case 6:
        return formData.confirmacionMedica
      default:
        return true
    }
  }

  // Función para verificar si el formulario está completo
  const isFormComplete = () => {
    return (
      formData.nombre &&
      formData.email &&
      formData.pais &&
      formData.procedimiento &&
      formData.fecha &&
      formData.destino &&
      formData.ciudad &&
      formData.hotelCategory &&
      formData.nights > 0 &&
      formData.confirmacionMedica
    )
  }

  // Función para obtener el porcentaje de completitud
  const getCompletionPercentage = () => {
    const totalSteps = 7
    return Math.round((currentStep / totalSteps) * 100)
  }

  return {
    // Estado
    formData,
    pricing,
    currentStep,
    availableDates,
    formContainerRef,
    
    // Métodos de actualización
    updateField,
    updateFields,
    setFormData,
    
    // Navegación
    nextStep,
    prevStep,
    goToStep,
    
    // Utilidades
    resetForm,
    setRecommendedNights,
    validateStep,
    isFormComplete,
    getCompletionPercentage
  }
}

export default useStepFormCalculator
// hooks/useStepFormCalculator.js
// Custom hook para manejar el estado del formulario y cálculo de precios

import { useState, useEffect } from 'react'
import { PROCEDURES } from '../data/procedures'
import { DESTINATIONS } from '../data/destinations'
import { 
  calculateDateMultiplier, 
  calculateHotelCost,
  getRecommendedNights 
} from '../utils/pricing.utils'

const useStepFormCalculator = () => {
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
    formData.nights
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
    const dateMultiplier = calculateDateMultiplier(formData.fecha)

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
  }

  // Función para actualizar noches recomendadas según procedimiento
  const setRecommendedNights = () => {
    if (formData.procedimiento) {
      const recommended = getRecommendedNights(formData.procedimiento)
      updateField('nights', recommended)
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

  return {
    formData,
    pricing,
    updateField,
    updateFields,
    resetForm,
    setRecommendedNights,
    validateStep,
    isFormComplete,
    setFormData
  }
}

export default useStepFormCalculator
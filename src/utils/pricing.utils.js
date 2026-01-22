// utils/pricing.utils.js
// Lógica completa de cálculo de precios para procedimientos médicos
// ACTUALIZADO para trabajar con sistema de fechas disponibles

import { TrendingDown, TrendingUp, Minus } from 'lucide-react'

/**
 * Genera fechas disponibles del doctor con pricing dinámico
 * @param {number} count - Número de fechas a generar (default: 8)
 * @returns {Array} Array de objetos con fechas disponibles
 */
export const generateAvailableDates = (count = 8) => {
  const today = new Date()
  const dates = []
  
  // Distribución de fechas:
  // 2 fechas urgentes (15-25 días) -> +15%
  // 3 fechas estándar (35-60 días) -> precio base
  // 3 fechas anticipadas (95-120 días) -> -10%
  
  const dateRanges = [
    { minDays: 15, maxDays: 25, count: 2, multiplier: 1.15, priceImpact: '+15%', color: 'orange' },
    { minDays: 35, maxDays: 60, count: 3, multiplier: 1.0, priceImpact: 'Estándar', color: 'blue' },
    { minDays: 95, maxDays: 120, count: 3, multiplier: 0.90, priceImpact: '-10%', color: 'green' }
  ]

  dateRanges.forEach(range => {
    for (let i = 0; i < range.count; i++) {
      const daysToAdd = Math.floor(
        Math.random() * (range.maxDays - range.minDays) + range.minDays
      )
      const date = new Date(today)
      date.setDate(date.getDate() + daysToAdd)
      
      let icon = Minus
      if (range.multiplier > 1) icon = TrendingUp
      if (range.multiplier < 1) icon = TrendingDown
      
      dates.push({
        date: date,
        dateString: date.toISOString().split('T')[0],
        daysUntil: daysToAdd,
        multiplier: range.multiplier,
        priceImpact: range.priceImpact,
        icon: icon,
        color: range.color
      })
    }
  })

  // Ordenar por fecha
  return dates.sort((a, b) => a.date - b.date)
}

/**
 * Calcula el multiplicador de precio basado en la fecha de cirugía
 * @param {string} selectedDate - Fecha seleccionada en formato ISO
 * @returns {number} Multiplicador (0.90, 1.0, o 1.15)
 */
export const calculateDateMultiplier = (selectedDate) => {
  if (!selectedDate) return 1

  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  const surgery = new Date(selectedDate)
  surgery.setHours(0, 0, 0, 0)
  
  const daysUntil = Math.floor((surgery - today) / (1000 * 60 * 60 * 24))
  
  // Fecha pasada o inválida
  if (daysUntil < 0) return 1
  
  // Cirugía urgente (menos de 30 días)
  if (daysUntil < 30) return 1.15  // +15%
  
  // Rango estándar (30-90 días)
  if (daysUntil >= 30 && daysUntil <= 90) return 1.0  // precio base
  
  // Planificación anticipada (más de 90 días)
  return 0.90  // -10%
}

/**
 * Obtiene información visual sobre el impacto de la fecha en el precio
 * @param {string} selectedDate - Fecha seleccionada
 * @param {string} lang - Idioma ('es' o 'en')
 * @returns {object} Información de etiqueta, color, icono y porcentaje
 */
export const getDatePriceInfo = (selectedDate, lang = 'es') => {
  if (!selectedDate) {
    return { 
      label: '', 
      color: '', 
      icon: null, 
      percentage: 0 
    }
  }
  
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  const surgery = new Date(selectedDate)
  surgery.setHours(0, 0, 0, 0)
  
  const daysUntil = Math.floor((surgery - today) / (1000 * 60 * 60 * 24))
  
  // Fecha pasada
  if (daysUntil < 0) {
    return { 
      label: lang === 'es' ? 'Fecha pasada - selecciona una fecha futura' : 'Past date - select a future date', 
      color: 'text-red-600', 
      icon: null, 
      percentage: 0 
    }
  }
  
  // Cirugía urgente
  if (daysUntil < 30) {
    return { 
      label: lang === 'es' ? 'Cirugía urgente +15%' : 'Urgent surgery +15%', 
      color: 'text-orange-600', 
      icon: TrendingUp, 
      percentage: 15 
    }
  }
  
  // Precio estándar
  if (daysUntil >= 30 && daysUntil <= 90) {
    return { 
      label: lang === 'es' ? 'Precio estándar (óptimo)' : 'Standard price (optimal)', 
      color: 'text-blue-600', 
      icon: Minus, 
      percentage: 0 
    }
  }
  
  // Descuento por planificación
  return { 
    label: lang === 'es' ? 'Descuento por planificación -10%' : 'Planning discount -10%', 
    color: 'text-green-600', 
    icon: TrendingDown, 
    percentage: -10 
  }
}

/**
 * Obtiene el multiplicador desde una fecha generada disponible
 * @param {string} dateString - Fecha en formato ISO
 * @param {Array} availableDates - Array de fechas disponibles generadas
 * @returns {number} Multiplicador de precio
 */
export const getMultiplierFromAvailableDate = (dateString, availableDates) => {
  const found = availableDates.find(d => d.dateString === dateString)
  return found ? found.multiplier : 1
}

/**
 * Calcula el precio total del procedimiento incluyendo todos los factores
 * @param {object} params - Parámetros del cálculo
 * @returns {object} Desglose completo de precios
 */
export const calculateTotalPricing = ({
  basePrice = 0,
  complexityAdjustment = 0,
  dateMultiplier = 1,
  destinationMultiplier = 1,
  hotelCost = 0
}) => {
  // Subtotal del procedimiento (antes de hotel)
  const procedureSubtotal = (basePrice + complexityAdjustment) * dateMultiplier * destinationMultiplier
  
  // Total final
  const total = procedureSubtotal + hotelCost
  
  return {
    basePrice,
    complexityAdjustment,
    dateMultiplier,
    destinationMultiplier,
    procedureSubtotal: Math.round(procedureSubtotal),
    hotelCost,
    total: Math.round(total)
  }
}

/**
 * Calcula el costo de hospedaje
 * @param {number} pricePerNight - Precio por noche del hotel
 * @param {number} nights - Número de noches
 * @returns {number} Costo total de hospedaje
 */
export const calculateHotelCost = (pricePerNight, nights) => {
  if (!pricePerNight || !nights || nights < 1) return 0
  return pricePerNight * nights
}

/**
 * Valida que la fecha de cirugía sea válida
 * @param {string} date - Fecha a validar
 * @returns {boolean} true si es válida
 */
export const isValidSurgeryDate = (date) => {
  if (!date) return false
  
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  const surgery = new Date(date)
  surgery.setHours(0, 0, 0, 0)
  
  return surgery >= today
}

/**
 * Formatea precio a USD con separadores de miles
 * @param {number} amount - Cantidad a formatear
 * @returns {string} Precio formateado
 */
export const formatPrice = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

/**
 * Calcula días recomendados de hospedaje según procedimiento
 * @param {string} procedureId - ID del procedimiento
 * @returns {number} Número de noches recomendadas
 */
export const getRecommendedNights = (procedureId) => {
  const recommendations = {
    lipo4k: 5,
    abdomen: 7,
    gluteos: 7,
    rinoplastia: 5,
    mamoplastia: 5,
    abdominoplastia: 7
  }
  
  return recommendations[procedureId] || 5
}

/**
 * Formatea fecha para mostrar en idioma específico
 * @param {string} dateString - Fecha en formato ISO
 * @param {string} lang - Idioma ('es' o 'en')
 * @param {object} options - Opciones de formato
 * @returns {string} Fecha formateada
 */
export const formatDate = (dateString, lang = 'es', options = {}) => {
  if (!dateString) return ''
  
  const defaultOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options
  }
  
  const locale = lang === 'es' ? 'es-ES' : 'en-US'
  return new Date(dateString).toLocaleDateString(locale, defaultOptions)
}

export default {
  generateAvailableDates,
  calculateDateMultiplier,
  getDatePriceInfo,
  getMultiplierFromAvailableDate,
  calculateTotalPricing,
  calculateHotelCost,
  isValidSurgeryDate,
  formatPrice,
  getRecommendedNights,
  formatDate
}
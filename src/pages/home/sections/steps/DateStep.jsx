// components/steps/DateStep.jsx
// Step 3: Selección de fecha de cirugía con fechas disponibles del doctor

import { motion } from 'framer-motion'
import { Calendar, TrendingDown, TrendingUp, Minus } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useLanguage } from '../../../../contexts/LanguageContext'

const DateStep = ({ formData, updateField, availableDates }) => {
  const { t, language } = useLanguage()

  const getPriceColor = (color) => {
    const colors = {
      orange: 'from-orange-50 to-red-50 border-orange-300',
      blue: 'from-blue-50 to-cyan-50 border-blue-300',
      green: 'from-green-50 to-emerald-50 border-green-300'
    }
    return colors[color] || colors.blue
  }

  const getIconColor = (color) => {
    const colors = {
      orange: 'bg-orange-600',
      blue: 'bg-blue-600',
      green: 'bg-green-600'
    }
    return colors[color] || colors.blue
  }

  const getTextColor = (color) => {
    const colors = {
      orange: 'text-orange-600',
      blue: 'text-blue-600',
      green: 'text-green-600'
    }
    return colors[color] || colors.blue
  }

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
          {t({ es: '📅 Fecha de Cirugía', en: '📅 Surgery Date' })}
        </h3>
        <p className="text-slate-600">
          {t({ 
            es: 'Selecciona una de las fechas disponibles del doctor', 
            en: "Select one of the doctor's available dates" 
          })}
        </p>
      </div>

      {/* Available Dates Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {availableDates && availableDates.map((dateOption, index) => {
          const Icon = dateOption.icon
          const isSelected = formData.fecha === dateOption.dateString
          
          // Format display date
          const displayDate = new Date(dateOption.dateString).toLocaleDateString(
            language === 'es' ? 'es-ES' : 'en-US', 
            {
              weekday: 'short',
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }
          )
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => updateField('fecha', dateOption.dateString)}
              className={`
                relative p-5 rounded-xl border-2 cursor-pointer transition-all
                ${isSelected 
                  ? `bg-gradient-to-br ${getPriceColor(dateOption.color)} shadow-lg ring-2 ring-offset-2 ring-blue-400` 
                  : 'bg-white border-slate-300 hover:border-slate-400 hover:shadow-md'
                }
              `}
            >
              {/* Selected Indicator */}
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              )}

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${getIconColor(dateOption.color)}`}>
                  <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-lg font-black text-slate-900 mb-1">
                    {displayDate}
                  </p>
                  <p className="text-sm text-slate-600 mb-3">
                    {t({ es: 'En', en: 'In' })} {dateOption.daysUntil} {t({ es: 'días', en: 'days' })}
                  </p>
                  
                  {/* Price Impact Badge */}
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${
                    dateOption.color === 'orange' ? 'bg-orange-100' :
                    dateOption.color === 'green' ? 'bg-green-100' :
                    'bg-blue-100'
                  }`}>
                    <span className={`text-sm font-bold ${getTextColor(dateOption.color)}`}>
                      {dateOption.priceImpact}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Selected Date Summary */}
      {formData.fecha && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200"
        >
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-6 h-6 text-blue-600" />
            <h4 className="text-lg font-bold text-blue-900">
              {t({ es: 'Fecha Seleccionada', en: 'Selected Date' })}
            </h4>
          </div>
          <p className="text-2xl font-black text-blue-600">
            {new Date(formData.fecha).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </p>
        </motion.div>
      )}

      {/* Pricing Policy Info */}
      <div className="p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-blue-900 mb-2">
              {t({ es: '💡 Política de Precios por Fecha', en: '💡 Date Pricing Policy' })}
            </h4>
            <p className="text-sm text-blue-800 mb-4">
              {t({ 
                es: 'Los precios varían según la disponibilidad y anticipación:', 
                en: 'Prices vary based on availability and advance notice:' 
              })}
            </p>
          </div>
        </div>

        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-sm">
            <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">!</span>
            </div>
            <div>
              <strong className="text-orange-900">
                {t({ es: 'Menos de 30 días:', en: 'Less than 30 days:' })}
              </strong>
              <p className="text-orange-800">
                {t({ 
                  es: '+15% - Preparación urgente del equipo médico', 
                  en: '+15% - Urgent medical team preparation' 
                })}
              </p>
            </div>
          </li>

          <li className="flex items-start gap-3 text-sm">
            <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
            <div>
              <strong className="text-blue-900">
                {t({ es: '30-90 días:', en: '30-90 days:' })}
              </strong>
              <p className="text-blue-800">
                {t({ 
                  es: 'Precio estándar - Tiempo óptimo de preparación', 
                  en: 'Standard price - Optimal preparation time' 
                })}
              </p>
            </div>
          </li>

          <li className="flex items-start gap-3 text-sm">
            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">★</span>
            </div>
            <div>
              <strong className="text-green-900">
                {t({ es: 'Más de 90 días:', en: 'More than 90 days:' })}
              </strong>
              <p className="text-green-800">
                {t({ 
                  es: '-10% descuento por planificación anticipada', 
                  en: '-10% discount for advance planning' 
                })}
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Important Notice */}
      <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
        <p className="text-sm text-slate-700">
          <span className="font-bold">
            {t({ es: 'Importante:', en: 'Important:' })}
          </span>{' '}
          {t({ 
            es: 'Estas son fechas reales de disponibilidad del doctor. Una vez seleccionada, será confirmada dentro de 24 horas.', 
            en: "These are the doctor's real availability dates. Once selected, it will be confirmed within 24 hours." 
          })}
        </p>
      </div>
    </motion.div>
  )
}

export default DateStep
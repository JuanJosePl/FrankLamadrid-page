// components/steps/AccommodationStep.jsx
// Step 5: Selección de hospedaje premium (4★ y 5★)


import { motion } from 'framer-motion'
import { Hotel, Star } from 'lucide-react'
import { DESTINATIONS } from '../../../../data/destinations'

//hooks
import { useLanguage } from '../../../../contexts/LanguageContext'


const AccommodationStep = ({ formData, updateField, pricing }) => {
  const { t } = useLanguage()


  // Verificar si hay destino seleccionado
  if (!formData.destino || !formData.ciudad) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="p-12 bg-amber-50 rounded-xl border-2 border-amber-200 text-center"
      >
        <Hotel className="w-20 h-20 text-amber-600 mx-auto mb-6" />
        <h3 className="text-2xl font-black text-amber-900 mb-3">
          {t({ es: 'Selecciona tu destino primero', en: 'Select your destination first' })}
        </h3>
        <p className="text-amber-800 max-w-md mx-auto">
          {t({ 
            es: 'Para ver las opciones de hospedaje disponibles, primero debes seleccionar el país y ciudad donde realizarás tu procedimiento.', 
            en: 'To see available accommodation options, you must first select the country and city where you will perform your procedure.' 
          })}
        </p>
      </motion.div>
    )
  }

  const city = DESTINATIONS[formData.destino].cities[formData.ciudad]
  const hotels = city.hotels

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
          {t({ es: '🏨 Hospedaje Premium', en: '🏨 Premium Accommodation' })}
        </h3>
        <p className="text-slate-600">
          {t({ 
            es: 'Solo hoteles 4★ y 5★ cerca de instalaciones médicas', 
            en: 'Only 4★ and 5★ hotels near medical facilities' 
          })}
        </p>
      </div>

      {/* Hotel Selection */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* 4 Star Hotel */}
        <motion.div
          whileHover={{ scale: 1.02, y: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => updateField('hotelCategory', 'fourStar')}
          className={`
            p-6 rounded-xl border-2 cursor-pointer transition-all
            ${
              formData.hotelCategory === 'fourStar'
                ? 'border-blue-500 bg-blue-50 shadow-xl shadow-blue-500/20'
                : 'border-slate-300 bg-white hover:border-blue-300 hover:shadow-lg'
            }
          `}
        >
          {/* Stars */}
          <div className="flex items-center gap-1 mb-3">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          {/* Hotel Name */}
          <h4 className="text-lg font-bold text-slate-900 mb-2">
            {hotels.fourStar.name}
          </h4>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded">
              <span className="text-xs font-bold text-green-800">
                {hotels.fourStar.rating}
              </span>
              <Star className="w-3 h-3 fill-green-600 text-green-600" />
            </div>
            <span className="text-xs text-slate-500">
              {t({ es: 'Excelente', en: 'Excellent' })}
            </span>
          </div>

          {/* Amenities */}
          <div className="mb-4">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              {t({ es: 'Servicios incluidos', en: 'Included amenities' })}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {hotels.fourStar.amenities.slice(0, 4).map((amenity, idx) => (
                <span key={idx} className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-700">
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="pt-4 border-t border-slate-200">
            <p className="text-xs text-slate-500 mb-1">
              {t({ es: 'Precio por noche', en: 'Price per night' })}
            </p>
            <p className="text-3xl font-black text-blue-600">
              ${hotels.fourStar.pricePerNight}
              <span className="text-base text-slate-500 font-normal ml-1">USD</span>
            </p>
          </div>
        </motion.div>

        {/* 5 Star Hotel */}
        <motion.div
          whileHover={{ scale: 1.02, y: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => updateField('hotelCategory', 'fiveStar')}
          className={`
            p-6 rounded-xl border-2 cursor-pointer transition-all relative overflow-hidden
            ${
              formData.hotelCategory === 'fiveStar'
                ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 shadow-xl shadow-purple-500/20'
                : 'border-slate-300 bg-white hover:border-purple-300 hover:shadow-lg'
            }
          `}
        >
          {/* Premium Badge */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            {t({ es: 'PREMIUM', en: 'PREMIUM' })}
          </div>

          {/* Stars */}
          <div className="flex items-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          {/* Hotel Name */}
          <h4 className="text-lg font-bold text-slate-900 mb-2 pr-20">
            {hotels.fiveStar.name}
          </h4>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded">
              <span className="text-xs font-bold text-green-800">
                {hotels.fiveStar.rating}
              </span>
              <Star className="w-3 h-3 fill-green-600 text-green-600" />
            </div>
            <span className="text-xs text-slate-500">
              {t({ es: 'Sobresaliente', en: 'Outstanding' })}
            </span>
          </div>

          {/* Amenities */}
          <div className="mb-4">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              {t({ es: 'Servicios VIP', en: 'VIP amenities' })}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {hotels.fiveStar.amenities.slice(0, 4).map((amenity, idx) => (
                <span key={idx} className="text-xs bg-purple-100 px-2 py-1 rounded-full text-purple-700 font-medium">
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="pt-4 border-t border-purple-200">
            <p className="text-xs text-slate-500 mb-1">
              {t({ es: 'Precio por noche', en: 'Price per night' })}
            </p>
            <p className="text-3xl font-black text-purple-600">
              ${hotels.fiveStar.pricePerNight}
              <span className="text-base text-slate-500 font-normal ml-1">USD</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Nights Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border-2 border-slate-200"
      >
        <label className="block">
          <div className="flex items-center justify-between mb-3">
            <span className="text-lg font-bold text-slate-900">
              {t({ es: 'Noches de hospedaje', en: 'Accommodation nights' })}
            </span>
            <span className="text-2xl font-black text-blue-600">
              {formData.nights} {t({ es: formData.nights === 1 ? 'noche' : 'noches', en: formData.nights === 1 ? 'night' : 'nights' })}
            </span>
          </div>

          <input
            type="range"
            min="1"
            max="14"
            value={formData.nights}
            onChange={(e) => updateField('nights', parseInt(e.target.value))}
            className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />

          <div className="flex justify-between text-xs text-slate-500 mt-2">
            <span>1 {t({ es: 'noche', en: 'night' })}</span>
            <span>14 {t({ es: 'noches', en: 'nights' })}</span>
          </div>
        </label>

        <p className="text-sm text-slate-600 mt-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          {t({ 
            es: 'Recomendado: 5-7 noches para recuperación óptima', 
            en: 'Recommended: 5-7 nights for optimal recovery' 
          })}
        </p>
      </motion.div>

      {/* Total Hotel Cost */}
      {pricing.hotelCost > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200 shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-purple-700 mb-1">
                {t({ es: 'Costo total de hospedaje', en: 'Total accommodation cost' })}
              </p>
              <p className="text-xs text-purple-600">
                {formData.nights} {t({ es: 'noches', en: 'nights' })} × ${formData.hotelCategory === 'fiveStar' ? hotels.fiveStar.pricePerNight : hotels.fourStar.pricePerNight}
              </p>
            </div>
            <p className="text-4xl font-black text-purple-600">
              ${pricing.hotelCost.toLocaleString()}
            </p>
          </div>
        </motion.div>
      )}

      {/* Info Box */}
      <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
        <div className="flex items-start gap-3">
          <Hotel className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-blue-900 mb-1">
              {t({ es: 'Incluido en tu hospedaje', en: 'Included in your accommodation' })}
            </p>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>✓ {t({ es: 'Transporte médico (hotel ↔ clínica)', en: 'Medical transport (hotel ↔ clinic)' })}</li>
              <li>✓ {t({ es: 'Coordinador médico 24/7', en: '24/7 medical coordinator' })}</li>
              <li>✓ {t({ es: 'Asistencia bilingüe', en: 'Bilingual assistance' })}</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default AccommodationStep
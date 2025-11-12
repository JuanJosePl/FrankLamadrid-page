// ============================================
// BeforeAfterGallery.jsx - VERSIÓN MEJORADA RESPONSIVE
// ============================================
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ZoomIn, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'

export const BeforeAfterGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const MotionLink = motion(Link);
  
  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'lipo4k', label: 'Lipo 4K' },
    { id: 'abs', label: 'Marcación Abdominal' },
    { id: 'bbl', label: 'BBL' },
    { id: 'breast', label: 'Mamas' }
  ]

  const gallery = [
    {
      id: 1,
      category: 'lipo4k',
      before: 'https://images.unsplash.com/photo-1559667086-3a9c210f197b?w=600',
      after: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600',
      procedure: 'Lipoescultura 4K Completa',
      gender: 'Mujer, 32 años'
    },
    {
      id: 2,
      category: 'abs',
      before: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600',
      after: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600',
      procedure: 'Marcación Abdominal 4K',
      gender: 'Hombre, 28 años'
    },
    {
      id: 3,
      category: 'bbl',
      before: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600',
      after: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600',
      procedure: 'BBL 4K + Lipo',
      gender: 'Mujer, 29 años'
    },
    {
      id: 4,
      category: 'breast',
      before: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600',
      after: 'https://images.unsplash.com/photo-1559667086-3a9c210f197b?w=600',
      procedure: 'Aumento Mamario',
      gender: 'Mujer, 35 años'
    },
    {
      id: 5,
      category: 'lipo4k',
      before: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600',
      after: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600',
      procedure: 'Lipo 4K Abdomen',
      gender: 'Hombre, 34 años'
    },
    {
      id: 6,
      category: 'abs',
      before: 'https://images.unsplash.com/photo-1559667086-3a9c210f197b?w=600',
      after: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600',
      procedure: '8 Pack Definition',
      gender: 'Hombre, 26 años'
    },
    {
      id: 7,
      category: 'bbl',
      before: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600',
      after: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600',
      procedure: 'Gluteoplastia BBL',
      gender: 'Mujer, 31 años'
    },
    {
      id: 8,
      category: 'lipo4k',
      before: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600',
      after: 'https://images.unsplash.com/photo-1559667086-3a9c210f197b?w=600',
      procedure: 'Lipo 4K Completa',
      gender: 'Mujer, 38 años'
    }
  ]

  const filteredGallery = selectedCategory === 'all' 
    ? gallery 
    : gallery.filter(item => item.category === selectedCategory)

  // Función para navegar entre imágenes
  const navigateImage = (direction) => {
    const currentIndex = filteredGallery.findIndex(item => item.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex < filteredGallery.length - 1 ? currentIndex + 1 : 0;
    } else {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredGallery.length - 1;
    }
    
    setSelectedImage(filteredGallery[newIndex]);
  }

  // Modal mejorado con cierre por backdrop click
  const LightboxModal = ({ image, onClose }) => {
    const handleBackdropClick = (e) => {
      // Solo cerrar si se hace clic en el backdrop, no en el contenido
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
        onClick={handleBackdropClick}
      >
        {/* Close Button - Fixed, siempre visible */}
        <button
          className="fixed top-2 right-2 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-50"
          onClick={onClose}
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>

        {/* Navigation Buttons Desktop */}
        <button
          className="hidden md:block fixed left-2 lg:left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-50"
          onClick={(e) => {
            e.stopPropagation();
            navigateImage('prev');
          }}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          className="hidden md:block fixed right-2 lg:right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-50"
          onClick={(e) => {
            e.stopPropagation();
            navigateImage('next');
          }}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Contenido del Modal */}
        <div 
          className="max-w-7xl w-full my-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Grid Before/After - Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 lg:gap-6 mb-4 sm:mb-6">
            {/* Before Image */}
            <div className="relative rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden">
              <img
                src={image.before}
                alt="Before"
                className="w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-red-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg font-bold text-xs sm:text-sm">
                ANTES
              </div>
            </div>

            {/* After Image */}
            <div className="relative rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden">
              <img
                src={image.after}
                alt="After"
                className="w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-green-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg font-bold text-xs sm:text-sm">
                DESPUÉS
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="text-center text-white px-2 sm:px-4">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">{image.procedure}</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4">{image.gender}</p>

            {/* Mobile Navigation Buttons */}
            <div className="flex md:hidden gap-3 justify-center mt-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition-all flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Anterior</span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition-all flex items-center gap-2"
              >
                <span className="text-sm sm:text-base">Siguiente</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Keyboard hint for desktop */}
            <p className="hidden md:block text-xs sm:text-sm text-gray-400 mt-4">
              Usa las flechas ← → del teclado para navegar
            </p>
          </div>
        </div>
      </motion.div>
    );
  };

  // Efecto de teclado para navegación
  useState(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-medical-blue/10 px-3 sm:px-4 py-2 rounded-full mb-4">
            <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-medical-blue" />
            <span className="text-xs sm:text-sm font-semibold text-medical-blue">Galería de Resultados</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-navy mb-4 sm:mb-6 px-4">
            Transformaciones
            <span className="block gradient-text mt-2">Que Hablan por Sí Solas</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Resultados reales de pacientes reales. Cada imagen cuenta una historia de 
            transformación y confianza renovada.
          </p>
        </motion.div>

        {/* Category Filter - Responsive */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-luxury-gold to-luxury-darkGold text-white shadow-luxury'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredGallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              {/* Before/After Images */}
              <div className="relative h-64 sm:h-72 lg:h-80">
                <div className="absolute inset-0 grid grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.before}
                      alt="Before"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                      Antes
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <img
                      src={item.after}
                      alt="After"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                      Después
                    </div>
                  </div>
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-luxury-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
              </div>

              {/* Info */}
              <div className="p-3 sm:p-4 bg-gradient-to-br from-gray-50 to-white">
                <h4 className="font-bold text-luxury-navy mb-1 text-sm sm:text-base">{item.procedure}</h4>
                <p className="text-xs sm:text-sm text-gray-600">{item.gender}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <LightboxModal 
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 px-4"
        >
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
            ¿Quieres ver más casos de éxito? Visita nuestra galería completa
          </p>

          <MotionLink
            to="/galeria"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-luxury inline-block text-sm sm:text-base"
          >
            Ver Galería Completa
          </MotionLink>
        </motion.div>
      </div>
    </section>
  )
}
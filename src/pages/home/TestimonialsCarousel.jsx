import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const TestimonialsCarousel = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "María González",
      location: t({ es: "Miami, USA 🇺🇸", en: "Miami, USA 🇺🇸" }),
      procedure: t({
        es: "Lipoescultura 4K + BBL",
        en: "4K Liposculpture + BBL",
      }),
      rating: 5,
      text: t({
        es: "El Dr. Lamadrid transformó mi vida completamente. Su técnica 4K es increíble, los resultados son tan naturales que nadie nota que me operé. La recuperación fue mucho más rápida de lo que esperaba. ¡Totalmente recomendado!",
        en: "Dr. Lamadrid completely transformed my life. His 4K technique is incredible, the results are so natural that no one notices I had surgery. The recovery was much faster than I expected. Totally recommended!",
      }),
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      beforeAfter: {
        before:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
        after:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
      },
      video: true,
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      location: t({ es: "Madrid, España 🇪🇸", en: "Madrid, Spain 🇪🇸" }),
      procedure: t({
        es: "Marcación Abdominal 4K",
        en: "4K Abdominal Definition",
      }),
      rating: 5,
      text: t({
        es: "Vine desde España específicamente para operarme con el Dr. Lamadrid y valió cada centavo. Su equipo es profesional, las instalaciones de primera y los resultados superaron mis expectativas. Mi abdomen luce increíble.",
        en: "I came from Spain specifically to have surgery with Dr. Lamadrid and it was worth every penny. His team is professional, first-class facilities and the results exceeded my expectations. My abdomen looks incredible.",
      }),
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      beforeAfter: {
        before:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
        after:
          "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
      },
      video: false,
    },
    {
      id: 3,
      name: "Ana Patricia Silva",
      location: t({ es: "São Paulo, Brasil 🇧🇷", en: "São Paulo, Brazil 🇧🇷" }),
      procedure: t({
        es: "Mamoplastia + Lipo 360",
        en: "Breast Surgery + Lipo 360",
      }),
      rating: 5,
      text: t({
        es: "Después de dos embarazos, quería recuperar mi figura. El Dr. Lamadrid no solo me dio un cuerpo hermoso, también me devolvió la confianza en mí misma. Su técnica es arte puro. Gracias infinitas.",
        en: "After two pregnancies, I wanted to get my figure back. Dr. Lamadrid not only gave me a beautiful body, he also gave me back my self-confidence. His technique is pure art. Infinite thanks.",
      }),
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
      beforeAfter: {
        before:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80",
        after:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
      },
      video: true,
    },
  ];

  const current = testimonials[currentIndex];

  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setInterval(() => {
        nextTestimonial();
      }, 7000);
      return () => clearInterval(timer);
    }
  }, [currentIndex, isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0077B6] via-[#00B4D8] to-[#0096C7] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-[#06D6A0] rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 sm:px-5 py-2.5 rounded-full mb-6">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-current" />
            <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              {t({ es: "Testimonios Reales", en: "Real Testimonials" })}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 px-4">
            {t({ es: "Lo Que Dicen Nuestros", en: "What Our" })}
            <span className="block mt-2">
              {t({
                es: "Pacientes Transformados",
                en: "Transformed Patients Say",
              })}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto px-4">
            {t({
              es: "Miles de personas han confiado en el Dr. Lamadrid para transformar sus vidas. Estas son sus historias de éxito.",
              en: "Thousands of people have trusted Dr. Lamadrid to transform their lives. These are their success stories.",
            })}
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Left - Testimonial */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-white/20 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 sm:top-8 right-6 sm:right-8 opacity-10">
                  <Quote className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4 sm:mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFD700] fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-lg sm:text-xl text-white leading-relaxed mb-6 sm:mb-8 relative z-10">
                  "{current.text}"
                </p>

                {/* Patient Info */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white"
                  />
                  <div>
                    <h4 className="font-bold text-white text-base sm:text-lg">
                      {current.name}
                    </h4>
                    <p className="text-white/80 text-sm">{current.location}</p>
                    <p className="text-white font-semibold text-xs sm:text-sm mt-1">
                      {current.procedure}
                    </p>
                  </div>
                </div>

                {/* Video Badge */}
                {current.video && (
                  <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8">
                    <div className="bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full flex items-center space-x-2">
                      <Play className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      <span className="text-xs sm:text-sm text-white font-semibold">
                        {t({ es: "Video disponible", en: "Video available" })}
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Right - Before/After */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`images-${current.id}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {/* Before */}
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={current.beforeAfter.before}
                      alt="Before"
                      className="w-full h-64 sm:h-72 lg:h-80 object-cover"
                    />
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-[#FF6B6B] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                      {t({ es: "Antes", en: "Before" })}
                    </div>
                  </div>

                  {/* After */}
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={current.beforeAfter.after}
                      alt="After"
                      className="w-full h-64 sm:h-72 lg:h-80 object-cover"
                    />
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-[#06D6A0] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                      {t({ es: "Después", en: "After" })}
                    </div>
                  </div>
                </div>

                {/* Info Badge */}
                <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-[#0077B6] px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg">
                  <p className="text-xs sm:text-sm font-bold">
                    {t({
                      es: "Resultado Real • Sin Edición",
                      en: "Real Result • No Editing",
                    })}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 sm:space-x-6 mt-12 sm:mt-16">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 sm:w-10 bg-white"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 max-w-3xl mx-auto"
          >
            {[
              {
                number: "18K+",
                label: t({
                  es: "Cirugías Exitosas",
                  en: "Successful Surgeries",
                }),
              },
              {
                number: "99.8%",
                label: t({ es: "Satisfacción", en: "Satisfaction" }),
              },
              { number: "50+", label: t({ es: "Países", en: "Countries" }) },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl sm:text-4xl font-black text-white mb-2">
                  {stat.number}
                </p>
                <p className="text-sm sm:text-base text-white/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

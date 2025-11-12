import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Play,
  Zap,
  Eye,
  Droplet,
  Clock,
  Heart,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Activity,
  Award,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

const Lipo4KSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { t } = useLanguage();

  const features = [
    {
      icon: Eye,
      title: { es: "Definición 4K", en: "4K Definition" },
      description: {
        es: "Marcación abdominal con precisión ultra-alta",
        en: "Abdominal definition with ultra-high precision",
      },
    },
    {
      icon: Droplet,
      title: { es: "Incisiones Mínimas", en: "Minimal Incisions" },
      description: {
        es: "Solo ~3mm, cicatrices imperceptibles",
        en: "Only ~3mm, imperceptible scars",
      },
    },
    {
      icon: Zap,
      title: { es: "Tecnología Avanzada", en: "Advanced Technology" },
      description: {
        es: "Licúa grasa + estimula colágeno",
        en: "Liquefies fat + stimulates collagen",
      },
    },
    {
      icon: Clock,
      title: { es: "Recuperación Rápida", en: "Fast Recovery" },
      description: {
        es: "Retorno a actividades en días",
        en: "Return to activities in days",
      },
    },
  ];

  const benefits = [
    {
      text: {
        es: "Resultados naturales y armoniosos",
        en: "Natural and harmonious results",
      },
    },
    {
      text: {
        es: "Sin necesidad de remoción de costillas",
        en: "No need for rib removal",
      },
    },
    {
      text: {
        es: "Retracción de piel sin cirugía adicional",
        en: "Skin retraction without additional surgery",
      },
    },
    {
      text: {
        es: "Reducción significativa de cintura",
        en: "Significant waist reduction",
      },
    },
    {
      text: {
        es: "Definición muscular realista",
        en: "Realistic muscle definition",
      },
    },
    {
      text: {
        es: "Mínimo sangrado y hematomas",
        en: "Minimal bleeding and bruising",
      },
    },
  ];

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0056A3] via-[#0077B6] to-[#00B4D8] text-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-[#00B4D8]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-white/20 backdrop-blur-xl rounded-full mb-6 border border-white/30">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              {t({
                es: "Innovación Revolucionaria",
                en: "Revolutionary Innovation",
              })}
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 px-4">
            {t({ es: "Técnica", en: "Technique" })}{" "}
            <span className="block mt-2">Lipoescultura 4K®</span>
          </h2>

          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
            {t({
              es: "Una técnica única creada por el Dr. Frank Lamadrid que revoluciona la cirugía de contorno corporal, combinando precisión quirúrgica con tecnología de vanguardia",
              en: "A unique technique created by Dr. Frank Lamadrid that revolutionizes body contouring surgery, combining surgical precision with cutting-edge technology",
            })}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          {/* Left: Video/Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Video Container */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group">
              <div className="aspect-video bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80"
                  alt="Técnica Lipoescultura 4K"
                  className="w-full h-full object-cover"
                />

                {/* Play Button Overlay */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute inset-0 bg-[#0056A3]/70 flex items-center justify-center cursor-pointer backdrop-blur-sm group-hover:bg-[#0056A3]/50 transition-all"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-[#0077B6] fill-current ml-1" />
                  </div>
                </motion.div>
              </div>

              {/* Badge */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/95 backdrop-blur-xl px-3 sm:px-4 py-2 rounded-full shadow-lg">
                <p className="text-xs sm:text-sm font-bold text-[#0077B6]">
                  🎥{" "}
                  {t({
                    es: "Ver Explicación en Video",
                    en: "Watch Video Explanation",
                  })}
                </p>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 border-2 border-white/20"
              >
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-[#0077B6] mb-2" />
                <p className="text-2xl sm:text-3xl font-black text-[#0056A3] mb-1">
                  99%
                </p>
                <p className="text-xs text-[#48556A]">
                  {t({ es: "Satisfacción", en: "Satisfaction" })}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 border-2 border-white/20"
              >
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-[#0077B6] mb-2" />
                <p className="text-2xl sm:text-3xl font-black text-[#0056A3] mb-1">
                  5-7
                </p>
                <p className="text-xs text-[#48556A]">
                  {t({ es: "Días Recuperación", en: "Days Recovery" })}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 lg:space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {t({
                  es: "¿Qué Hace Especial a la Técnica 4K?",
                  en: "What Makes the 4K Technique Special?",
                })}
              </h3>
              <p className="text-white/90 leading-relaxed">
                {t({
                  es: "La Lipoescultura 4K® no es solo una cirugía, es un arte que esculpe el cuerpo con precisión milimétrica, creando definiciones musculares naturales y resultados que desafían el tiempo.",
                  en: "The 4K Liposculpture® is not just a surgery, it is an art that sculpts the body with millimetric precision, creating natural muscle definitions and results that defy time.",
                })}
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 group cursor-pointer border-2 border-white/20 hover:border-white/40 transition-all"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0077B6]/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#0077B6]/20 transition-colors">
                    <feature.icon
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#0077B6]"
                      strokeWidth={2}
                    />
                  </div>
                  <h4 className="font-bold text-[#0056A3] mb-2 text-sm sm:text-base">
                    {t(feature.title)}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#48556A]">
                    {t(feature.description)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12"
        >
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {t({ es: "Beneficios Comprobados", en: "Proven Benefits" })}
              </h3>
              <p className="text-white/90 mb-6">
                {t({
                  es: "Cada aspecto de la técnica ha sido diseñado para maximizar resultados y minimizar molestias.",
                  en: "Every aspect of the technique has been designed to maximize results and minimize discomfort.",
                })}
              </p>

              <Link to="/lipoescultura-4k">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#0077B6] font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <span>
                    {t({
                      es: "Conocer Más Detalles",
                      en: "Learn More Details",
                    })}
                  </span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>

            <div className="space-y-2 sm:space-y-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1 + index * 0.05 }}
                  className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 hover:bg-white/20 transition-colors"
                >
                  <CheckCircle2
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <span className="text-sm text-white">{t(benefit.text)}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-8 sm:mt-12 bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center border-2 border-white/20"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Award
              className="w-8 h-8 sm:w-10 sm:h-10 text-[#0077B6]"
              strokeWidth={2}
            />
            <p className="text-xl sm:text-2xl font-bold text-[#0056A3]">
              {t({
                es: "Técnica Exclusiva Reconocida Internacionalmente",
                en: "Exclusive Internationally Recognized Technique",
              })}
            </p>
          </div>
          <p className="text-[#48556A] text-sm sm:text-base">
            {t({
              es: "Pacientes de más de 40 países han confiado en esta innovación",
              en: "Patients from over 40 countries have trusted this innovation",
            })}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Lipo4KSection;

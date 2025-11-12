import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ChevronDown,
  Play,
  Award,
  Users,
  Globe2,
  Sparkles,
  Calendar,
  Shield,
  Star,
  ChevronLeft,
  ChevronRight,
  Heart,
  CheckCircle,
  TrendingUp,
  Clock,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);

  // Parallax profesional con useScroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Múltiples capas de parallax para profundidad extrema
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);

  // 🏥 PALETA MÉDICA AZULADA MÁS INTENSA
  const slides = [
    {
      id: 1,
      layout: "imageRight",
      badge: {
        icon: "🏥",
        text: t({
          es: "Cirujano Plástico Certificado",
          en: "Certified Plastic Surgeon",
        }),
      },
      mainTitle: t({ es: "Líder Mundial en", en: "World Leader in" }),
      highlightTitle: "Lipoescultura 4K",
      subtitle: t({
        es: "Más de 18,000 pacientes confían en sus resultados naturales y personalizados. Experiencia, precisión y arte en cada detalle.",
        en: "Over 18,000 patients trust his natural and personalized results. Experience, precision, and artistry in every detail.",
      }),
      image: "https://res.cloudinary.com/disqdfjy9/image/upload/v1762930755/cirugiaFrank_z07813.jpg",
      stats: [
        {
          value: "18,000+",
          label: t({ es: "Pacientes", en: "Patients" }),
          icon: Users,
          color: "#0056A3",
        },
        {
          value: "50+",
          label: t({ es: "Países", en: "Countries" }),
          icon: Globe2,
          color: "#0077B6",
        },
        {
          value: "99.8%",
          label: t({ es: "Satisfacción", en: "Satisfaction" }),
          icon: Heart,
          color: "#00B4D8",
        },
      ],
      gradient: {
        primary: "from-[#0056A3] via-[#0077B6] to-[#00B4D8]",
        bg: "from-[#E3F2FD] via-[#BBDEFB] to-white",
        glow: "rgba(0, 86, 163, 0.25)",
        particles: "#0077B6",
      },
    },
    {
      id: 2,
      layout: "imageLeft",
      badge: {
        icon: "⚡",
        text: t({ es: "Innovación Quirúrgica", en: "Surgical Innovation" }),
      },
      mainTitle: t({
        es: "Transforma Vidas con",
        en: "Transforming Lives with",
      }),
      highlightTitle: t({
        es: "Precisión y Tecnología",
        en: "Precision & Technology",
      }),
      subtitle: t({
        es: "Procedimientos diseñados para resaltar la armonía corporal y acortar el tiempo de recuperación. Belleza y seguridad en equilibrio.",
        en: "Procedures designed to enhance body harmony and reduce recovery time. Beauty and safety in balance.",
      }),
      image: "https://res.cloudinary.com/disqdfjy9/image/upload/v1762930755/frankmadridHisto_cvsok3.jpg",
      stats: [
        {
          value: "3mm",
          label: t({ es: "Incisiones", en: "Incisions" }),
          icon: Sparkles,
          color: "#0056A3",
        },
        {
          value: "40%",
          label: t({ es: "Recuperación", en: "Recovery" }),
          icon: TrendingUp,
          color: "#0077B6",
        },
        {
          value: "100%",
          label: t({ es: "Naturalidad", en: "Natural Look" }),
          icon: CheckCircle,
          color: "#00B4D8",
        },
      ],
      gradient: {
        primary: "from-[#00B4D8] via-[#0077B6] to-[#0056A3]",
        bg: "from-white via-[#BBDEFB] to-[#E3F2FD]",
        glow: "rgba(0, 180, 216, 0.25)",
        particles: "#00B4D8",
      },
    },
    {
      id: 3,
      layout: "imageRight",
      badge: {
        icon: "🏆",
        text: t({
          es: "Excelencia Internacional",
          en: "International Excellence",
        }),
      },
      mainTitle: t({ es: "Reconocido por", en: "Recognized by" }),
      highlightTitle: t({
        es: "Instituciones Globales",
        en: "Global Institutions",
      }),
      subtitle: t({
        es: "Miembro activo de asociaciones médicas de prestigio mundial. Su carrera refleja compromiso, ética y liderazgo en cirugía estética.",
        en: "Active member of world-renowned medical associations. His career reflects commitment, ethics, and leadership in aesthetic surgery.",
      }),
      image: "https://res.cloudinary.com/disqdfjy9/image/upload/v1762930755/DR2916_mz5mrv.png",
      stats: [
        {
          value: "15+",
          label: t({ es: "Años", en: "Years" }),
          icon: Calendar,
          color: "#0056A3",
        },
        {
          value: "Elite",
          label: t({ es: "Nivel", en: "Level" }),
          icon: Shield,
          color: "#0077B6",
        },
        {
          value: "Global",
          label: t({ es: "Alcance", en: "Reach" }),
          icon: Star,
          color: "#00B4D8",
        },
      ],
      gradient: {
        primary: "from-[#0056A3] via-[#0077B6] to-[#00B4D8]",
        bg: "from-[#E3F2FD] via-white to-[#BBDEFB]",
        glow: "rgba(0, 119, 182, 0.25)",
        particles: "#0096C7",
      },
    },
  ];

  const currentSlideData = slides[currentSlide];

  // Mouse parallax ultra suave
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (!isPlaying) return; // Si está pausado, no ejecutar

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [slides.length, isPlaying]); // Agregar isPlaying como dependencia

  // Función para toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsPlaying(false); // Pausar al cambiar manualmente
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPlaying(false); // Pausar al cambiar manualmente
  };

  // Layout configurations
  const getLayoutClasses = (layout) => {
    switch (layout) {
      case "imageRight":
        return {
          grid: "lg:grid-cols-12",
          content: "lg:col-span-6 lg:pr-12",
          image: "lg:col-span-6",
          contentOrder: "order-1",
          imageOrder: "order-2",
          textAlign: "text-left",
          imageAlign: "justify-end",
        };
      case "imageLeft":
        return {
          grid: "lg:grid-cols-12",
          content: "lg:col-span-6 lg:pl-12",
          image: "lg:col-span-6",
          contentOrder: "order-2",
          imageOrder: "order-1",
          textAlign: "text-left",
          imageAlign: "justify-start",
        };
      case "imageCentered":
        return {
          grid: "lg:grid-cols-1",
          content: "lg:col-span-1 text-center max-w-4xl mx-auto",
          image: "lg:col-span-1 mt-12",
          contentOrder: "order-1",
          imageOrder: "order-2",
          textAlign: "text-center",
          imageAlign: "justify-center",
        };
      default:
        return {};
    }
  };

  const layoutClasses = getLayoutClasses(currentSlideData.layout);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-white"
    >
      {/* Background Layers con Parallax */}
      <div className="absolute inset-0">
        {/* Layer 1: Base gradient - AZUL CLARO MÉDICO */}
        <motion.div
          style={{ y: y4 }}
          className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.gradient.bg}`}
        />

        {/* Layer 2: Pattern médico sutil */}
        <motion.div
          style={{ y: y3 }}
          className="absolute inset-0 opacity-[0.03]"
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #0077B6 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          />
        </motion.div>

        {/* Layer 3: Glows médicos azulados */}
        <motion.div
          style={{ y: y2 }}
          className="absolute inset-0 overflow-hidden"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-[600px] h-[600px] bg-[#0077B6]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.08, 0.12, 0.08],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-20 w-[700px] h-[700px] bg-[#00B4D8]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.06, 0.1, 0.06],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#06D6A0]/8 rounded-full blur-3xl"
          />
        </motion.div>

        {/* Layer 4: Partículas flotantes médicas */}
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0 pointer-events-none"
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor:
                  i % 3 === 0 ? "#0077B6" : i % 3 === 1 ? "#00B4D8" : "#06D6A0",
                opacity: 0.15,
              }}
              animate={{
                y: [0, -150, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0.1, 0.25, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 8 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <motion.div
          style={{ opacity, scale }}
          className={`grid ${layoutClasses.grid} gap-8 lg:gap-16 items-center w-full max-w-7xl mx-auto`}
        >
          {/* Content Side */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{
                opacity: 0,
                x: currentSlideData.layout === "imageLeft" ? 50 : -50,
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: currentSlideData.layout === "imageLeft" ? -50 : 50,
              }}
              transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
              className={`${layoutClasses.content} ${layoutClasses.contentOrder} space-y-6 lg:space-y-8`}
            >
              {/* Badge médico */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`inline-flex items-center gap-3 px-5 py-2.5 bg-white border-2 border-[#0077B6]/20 rounded-full shadow-lg ${
                  layoutClasses.textAlign === "text-center" ? "mx-auto" : ""
                }`}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2.5 h-2.5 rounded-full bg-[#06D6A0]"
                />
                <span className="text-xs font-bold text-[#0077B6] uppercase tracking-wider">
                  {currentSlideData.badge.icon} {currentSlideData.badge.text}
                </span>
              </motion.div>

              {/* Títulos */}
              <div className={`space-y-3 ${layoutClasses.textAlign}`}>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#2C3E50] leading-tight"
                >
                  {currentSlideData.mainTitle}
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#0077B6] leading-tight"
                >
                  {currentSlideData.highlightTitle}
                </motion.h2>
              </div>

              {/* Descripción */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className={`text-lg lg:text-xl text-[#4A5660] leading-relaxed ${
                  currentSlideData.layout === "imageCentered"
                    ? "max-w-3xl mx-auto"
                    : "max-w-2xl"
                } ${layoutClasses.textAlign}`}
              >
                {currentSlideData.subtitle}
              </motion.p>

              {/* Stats médicos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className={`grid grid-cols-3 gap-4 ${
                  currentSlideData.layout === "imageCentered"
                    ? "max-w-2xl mx-auto"
                    : ""
                }`}
              >
                {currentSlideData.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="group relative"
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 rounded-2xl"
                      style={{ backgroundColor: stat.color }}
                    />
                    <div className="relative bg-white border-2 border-[#E8EBED] group-hover:border-[#0077B6]/40 rounded-2xl p-4 lg:p-5 transition-all shadow-soft group-hover:shadow-medical">
                      <div className="flex flex-col items-center gap-2 text-center">
                        <stat.icon
                          className="w-6 h-6 lg:w-7 lg:h-7 transition-colors"
                          style={{ color: stat.color }}
                          strokeWidth={2}
                        />
                        <div
                          className="text-2xl lg:text-3xl font-black"
                          style={{ color: stat.color }}
                        >
                          {stat.value}
                        </div>
                        <div className="text-xs text-[#6C757D] uppercase tracking-wide font-semibold">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className={`flex flex-col sm:flex-row gap-4 ${
                  currentSlideData.layout === "imageCentered"
                    ? "justify-center"
                    : ""
                }`}
              >
                <motion.a
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0, 119, 182, 0.25)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  href="https://api.whatsapp.com/send?phone=573175112107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white font-bold rounded-full shadow-lg transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  <span>
                    {t({
                      es: "Agendar Consulta Gratis",
                      en: "Book Free Consultation",
                    })}
                  </span>
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0077B6] font-bold border-2 border-[#0077B6]/30 hover:border-[#0077B6] rounded-full transition-all shadow-soft"
                >
                  <Play className="w-5 h-5" />
                  <span>{t({ es: "Ver Video", en: "Watch Video" })}</span>
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className={`flex flex-wrap items-center gap-6 text-sm text-[#6C757D] ${
                  currentSlideData.layout === "imageCentered"
                    ? "justify-center"
                    : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#06D6A0]" />
                  <span>{t({ es: "100% Seguro", en: "100% Safe" })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#06D6A0]" />
                  <span>
                    {t({
                      es: "Certificado Internacional",
                      en: "International Certified",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#06D6A0]" />
                  <span>{t({ es: "Sin Cicatrices", en: "No Scars" })}</span>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Image Side con Parallax Extremo */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${currentSlide}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
              className={`${layoutClasses.image} ${layoutClasses.imageOrder} hidden lg:block`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className={`relative flex ${layoutClasses.imageAlign}`}>
                {/* Main Image Container con Parallax */}
                <motion.div
                  animate={{
                    x: mousePosition.x * 0.4,
                    y: mousePosition.y * 0.4,
                  }}
                  transition={{ type: "spring", stiffness: 80, damping: 25 }}
                  className="relative"
                >
                  {/* Floating Animation */}
                  <motion.div
                    animate={{
                      y: [-20, 20, -20],
                      rotate: [-2, 2, -2],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative"
                  >
                    <img
                      src={currentSlideData.image}
                      alt="Dr. Frank Lamadrid"
                      className={`w-full rounded-3xl shadow-2xl relative z-10 ${
                        currentSlideData.id === 3
                          ? "max-w-xs lg:max-w-sm xl:max-w-md"
                          : "max-w-md lg:max-w-lg xl:max-w-xl"
                      }`}
                      style={{
                        filter: `drop-shadow(0 30px 60px ${currentSlideData.gradient.glow})`,
                        maskImage:
                          "linear-gradient(to bottom, black 75%, transparent 100%)",
                        WebkitMaskImage:
                          "linear-gradient(to bottom, black 75%, transparent 100%)",
                      }}
                    />

                    {/* Glow Effect Animado */}
                    <motion.div
                      animate={{
                        scale: isHovered ? [1, 1.3, 1] : [1, 1.2, 1],
                        opacity: isHovered ? [0.4, 0.7, 0.4] : [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full blur-3xl"
                      style={{
                        background: `radial-gradient(circle, ${currentSlideData.gradient.glow} 0%, transparent 70%)`,
                      }}
                    />
                  </motion.div>

                  {/* Decorative Rings - Azul Médico */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                      transition={{
                        duration: 40 + i * 15,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                      style={{
                        width: `${115 + i * 15}%`,
                        height: `${115 + i * 15}%`,
                        border: `1px solid ${
                          i === 0 ? "#0077B6" : i === 1 ? "#00B4D8" : "#06D6A0"
                        }`,
                        opacity: 0.1,
                      }}
                    />
                  ))}

                  {/* Floating Medical Icons */}
                  {[
                    {
                      Icon: Award,
                      pos: "top-8 right-8",
                      delay: 0,
                      color: "#0077B6",
                    },
                    {
                      Icon: Shield,
                      pos: "bottom-8 left-8",
                      delay: 1,
                      color: "#00B4D8",
                    },
                    {
                      Icon: Star,
                      pos: "top-1/2 -right-4",
                      delay: 2,
                      color: "#06D6A0",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.8 + item.delay * 0.2,
                        type: "spring",
                      }}
                      className={`absolute ${item.pos} z-20`}
                    >
                      <motion.div
                        animate={{
                          y: [-10, 10, -10],
                          rotate: [-5, 5, -5],
                        }}
                        transition={{
                          duration: 6 + index,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="w-16 h-16 bg-white border-2 rounded-2xl flex items-center justify-center shadow-xl"
                        style={{ borderColor: `${item.color}40` }}
                      >
                        <item.Icon
                          className="w-8 h-8"
                          style={{ color: item.color }}
                          strokeWidth={2}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* 🎮 Play/Pause Control - Desktop */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute top-1/2 -translate-y-1/2 right-8 lg:right-12 z-30 hidden lg:block"
      >
        <motion.button
          onClick={togglePlayPause}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="group relative"
        >
          {/* Glow Effect */}
          <motion.div
            animate={{
              scale: isPlaying ? [1, 1.3, 1] : 1,
              opacity: isPlaying ? [0.3, 0.5, 0.3] : 0.2,
            }}
            transition={{
              duration: 2,
              repeat: isPlaying ? Infinity : 0,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-full blur-xl"
          />

          {/* Button Container */}
          <div className="relative w-14 h-14 bg-white border-2 border-[#0077B6]/20 group-hover:border-[#0077B6] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all">
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="pause"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-1"
                >
                  <div className="w-1 h-5 bg-[#0077B6] rounded-full" />
                  <div className="w-1 h-5 bg-[#0077B6] rounded-full" />
                </motion.div>
              ) : (
                <motion.div
                  key="play"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <Play
                    className="w-5 h-5 text-[#0077B6] ml-0.5"
                    fill="currentColor"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none"
          >
            <div className="bg-white/95 backdrop-blur-xl px-4 py-2 rounded-xl border-2 border-[#0077B6]/20 shadow-lg">
              <span className="text-sm font-bold text-[#2C3E50]">
                {isPlaying
                  ? t({ es: "Pausar", en: "Pause" })
                  : t({ es: "Reproducir", en: "Play" })}
              </span>
            </div>
          </motion.div>
        </motion.button>

        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-3 text-center"
        >
          <div className="flex items-center justify-center gap-2">
            <motion.div
              animate={{
                scale: isPlaying ? [1, 1.3, 1] : 1,
                opacity: isPlaying ? [0.5, 1, 0.5] : 0.3,
              }}
              transition={{
                duration: 1.5,
                repeat: isPlaying ? Infinity : 0,
              }}
              className={`w-2 h-2 rounded-full ${
                isPlaying ? "bg-[#06D6A0]" : "bg-[#9BA3A9]"
              }`}
            />
            <span className="text-xs font-semibold text-[#6C757D] uppercase tracking-wider">
              {isPlaying ? "Auto" : "Manual"}
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Navigation Controls - MODIFICADO con Play/Pause Mobile */}
      <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-30">
        <div className="flex flex-col items-center gap-4">
          {/* 🎮 Play/Pause Mobile */}
          <motion.button
            onClick={togglePlayPause}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden w-12 h-12 bg-white/95 backdrop-blur-xl border-2 border-[#0077B6]/20 rounded-full flex items-center justify-center shadow-lg"
          >
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="pause-mobile"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 90 }}
                  className="flex gap-1"
                >
                  <div className="w-1 h-4 bg-[#0077B6] rounded-full" />
                  <div className="w-1 h-4 bg-[#0077B6] rounded-full" />
                </motion.div>
              ) : (
                <motion.div
                  key="play-mobile"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 90 }}
                >
                  <Play
                    className="w-4 h-4 text-[#0077B6] ml-0.5"
                    fill="currentColor"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Navigation existente */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-12 h-12 bg-white border-2 border-[#0077B6]/20 hover:border-[#0077B6] rounded-full flex items-center justify-center shadow-lg transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-[#0077B6]" />
            </motion.button>

            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setIsPlaying(false);
                  }}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative"
                >
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      index === currentSlide
                        ? "w-16 bg-gradient-to-r from-[#0077B6] to-[#00B4D8]"
                        : "w-8 bg-[#D1D5D9]"
                    }`}
                  />
                  {index === currentSlide && (
                    <motion.div
                      layoutId="activeSlide"
                      className="absolute inset-0 bg-[#0077B6]/30 opacity-50 blur-lg rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-12 h-12 bg-white border-2 border-[#0077B6]/20 hover:border-[#0077B6] rounded-full flex items-center justify-center shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6 text-[#0077B6]" />
            </motion.button>
          </div>

          {/* Status Text Mobile */}
          <div className="lg:hidden flex items-center gap-2 px-4 py-1.5 bg-white/95 backdrop-blur-xl rounded-full border border-[#0077B6]/20 shadow-md">
            <motion.div
              animate={{
                scale: isPlaying ? [1, 1.3, 1] : 1,
              }}
              transition={{
                duration: 1.5,
                repeat: isPlaying ? Infinity : 0,
              }}
              className={`w-1.5 h-1.5 rounded-full ${
                isPlaying ? "bg-[#06D6A0]" : "bg-[#9BA3A9]"
              }`}
            />
            <span className="text-xs font-bold text-[#2C3E50]">
              {isPlaying
                ? t({ es: "Auto", en: "Auto" })
                : t({ es: "Pausado", en: "Paused" })}
            </span>
          </div>
        </div>
      </div>

      {/* Progress Bar con Pause */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#E8EBED] overflow-hidden">
        {isPlaying ? (
          <motion.div
            key={`progress-${currentSlide}`}
            className="h-full bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#06D6A0]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 8, ease: "linear" }}
          />
        ) : (
          <div className="h-full bg-[#9BA3A9] w-0" />
        )}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-20 right-8 lg:right-12 z-20 hidden xl:flex flex-col items-center gap-3"
      >
        <span
          className="text-[10px] text-[#6C757D] uppercase tracking-[0.2em] font-bold"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-[#0077B6]" />
        </motion.div>
      </motion.div>

      {/* Floating Trust Badges */}
      <div className="absolute top-24 right-8 hidden xl:block z-20">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          className="space-y-3"
        >
          {[
            {
              icon: Shield,
              text: t({ es: "Certificado", en: "Certified" }),
              color: "#0077B6",
            },
            {
              icon: Heart,
              text: t({ es: "99.8% Éxito", en: "99.8% Success" }),
              color: "#06D6A0",
            },
            {
              icon: Clock,
              text: t({ es: "Rápida Recuperación", en: "Fast Recovery" }),
              color: "#00B4D8",
            },
          ].map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.7 + index * 0.15 }}
              whileHover={{ scale: 1.05, x: -5 }}
              className="flex items-center gap-3 bg-white/95 backdrop-blur-xl border-2 rounded-2xl px-4 py-3 shadow-lg"
              style={{ borderColor: `${badge.color}30` }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${badge.color}15` }}
              >
                <badge.icon
                  className="w-5 h-5"
                  style={{ color: badge.color }}
                  strokeWidth={2}
                />
              </div>
              <span className="text-sm font-bold text-[#2C3E50]">
                {badge.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Particle Effects Enhanced */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-5">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor:
                i % 3 === 0 ? "#0077B6" : i % 3 === 1 ? "#00B4D8" : "#06D6A0",
              opacity: 0.2,
            }}
            animate={{
              y: [0, -200, 0],
              opacity: [0, 0.4, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 10 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Mobile CTA Button */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)]"
      >
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="https://api.whatsapp.com/send?phone=573175112107"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group block overflow-hidden rounded-2xl shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0077B6] to-[#00B4D8]" />
          <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 px-8 py-5 flex items-center justify-center gap-3">
            <Calendar className="w-6 h-6 text-white" />
            <span className="text-white font-bold text-base uppercase tracking-wider">
              {t({ es: "Consulta Gratis", en: "Free Consultation" })}
            </span>
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;

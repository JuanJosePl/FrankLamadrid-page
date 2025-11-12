import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  Award,
  Users,
  MapPin,
  Star,
  TrendingUp,
  Heart,
  Shield,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { t } = useLanguage();

  const mainStats = [
    {
      icon: Award,
      value: 18000,
      suffix: "+",
      label: { es: "Cirugías Exitosas", en: "Successful Surgeries" },
      description: { es: "Realizadas con éxito", en: "Successfully performed" },
      color: "from-primary-500 to-primary-700",
      iconBg: "bg-primary-500/10",
      iconColor: "text-primary-500",
    },
    {
      icon: Users,
      value: 673,
      suffix: "K",
      label: { es: "Seguidores Globales", en: "Global Followers" },
      description: { es: "Comunidad activa", en: "Active community" },
      color: "from-primary-400 to-medical-teal",
      iconBg: "bg-primary-400/10",
      iconColor: "text-primary-400",
    },
    {
      icon: MapPin,
      value: 40,
      suffix: "+",
      label: { es: "Países Atendidos", en: "Countries Served" },
      description: {
        es: "Turismo médico internacional",
        en: "International medical tourism",
      },
      color: "from-medical-navy to-primary-600",
      iconBg: "bg-medical-navy/10",
      iconColor: "text-medical-navy",
    },
    {
      icon: TrendingUp,
      value: 99,
      suffix: "%",
      label: { es: "Satisfacción del Paciente", en: "Patient Satisfaction" },
      description: { es: "Calificación promedio", en: "Average rating" },
      color: "from-health-emerald to-health-forest",
      iconBg: "bg-health-emerald/10",
      iconColor: "text-health-emerald",
    },
  ];

  const achievements = [
    {
      icon: Shield,
      text: {
        es: "Certificación Internacional en Cirugía Estética",
        en: "International Certification in Aesthetic Surgery",
      },
    },
    {
      icon: Star,
      text: {
        es: "Creador de la Técnica Lipoescultura 4K®",
        en: "Creator of 4K Liposculpture® Technique",
      },
    },
    {
      icon: Heart,
      text: {
        es: "Máster en Medicina Estética & Anti-Aging",
        en: "Master in Aesthetic Medicine & Anti-Aging",
      },
    },
    {
      icon: CheckCircle2,
      text: {
        es: "Miembro de Asociaciones Internacionales",
        en: "Member of International Associations",
      },
    },
  ];

  return (
    <section
      ref={ref}
      className="section-spacing bg-white relative overflow-hidden"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-clinical relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header max-w-3xl mx-auto"
        >
          <p className="section-subtitle text-primary-500">
            {t({ es: "EXCELENCIA COMPROBADA", en: "PROVEN EXCELLENCE" })}
          </p>
          <h2 className="heading-xl text-clinical-graphite mb-6">
            {t({
              es: "Números que Reflejan Nuestra",
              en: "Numbers that Reflect Our",
            })}{" "}
            <span className="gradient-text">
              {t({ es: "Dedicación", en: "Dedication" })}
            </span>
          </h2>
          <p className="body-lg text-clinical-charcoal">
            {t({
              es: "Más de 15 años transformando vidas con resultados excepcionales y tecnología de vanguardia",
              en: "Over 15 years transforming lives with exceptional results and cutting-edge technology",
            })}
          </p>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="clinic-card interactive-hover h-full">
                {/* Icon */}
                <div
                  className={`${stat.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className={`w-8 h-8 ${stat.iconColor}`} />
                </div>

                {/* Value with Counter */}
                <div className="mb-3">
                  <div
                    className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent counter-number`}
                  >
                    {inView && (
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        suffix={stat.suffix}
                        separator=","
                      />
                    )}
                  </div>
                </div>

                {/* Label */}
                <h3 className="text-lg font-bold text-clinical-graphite mb-2">
                  {t(stat.label)}
                </h3>

                {/* Description */}
                <p className="text-sm text-clinical-charcoal">
                  {t(stat.description)}
                </p>

                {/* Progress Bar */}
                <div className="mt-6 pt-6 border-t border-clinical-silver">
                  <div className="h-1.5 bg-clinical-alabaster rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: "100%" } : {}}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-medical"></div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="content-block">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: Title */}
              <div>
                <h3 className="heading-md text-clinical-graphite mb-4">
                  {t({
                    es: "Certificaciones y Reconocimientos",
                    en: "Certifications and Recognitions",
                  })}
                </h3>
                <p className="text-clinical-charcoal leading-relaxed mb-6">
                  {t({
                    es: "Formación académica internacional y especialización continua en las técnicas más avanzadas de cirugía estética.",
                    en: "International academic training and continuous specialization in the most advanced aesthetic surgery techniques.",
                  })}
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold border-4 border-white shadow-md">
                      5.0
                    </div>
                    <div className="w-12 h-12 rounded-full bg-health-emerald flex items-center justify-center text-white border-4 border-white shadow-md">
                      <Star className="w-6 h-6 fill-current" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-clinical-graphite">
                      {t({ es: "Calificación Perfecta", en: "Perfect Rating" })}
                    </p>
                    <p className="text-xs text-clinical-slate">
                      {t({
                        es: "Por pacientes verificados",
                        en: "By verified patients",
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Achievement List */}
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-medical-light/50 transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/20 transition-colors">
                      <achievement.icon className="w-5 h-5 text-primary-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-clinical-graphite leading-relaxed">
                        {t(achievement.text)}
                      </p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-health-emerald flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 info-panel text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-soft">
              <Award className="w-8 h-8 text-primary-500" />
            </div>
            <div className="text-left">
              <p className="text-xl font-bold text-clinical-graphite mb-1">
                {t({
                  es: "Reconocido internacionalmente como líder en innovación",
                  en: "Internationally recognized as a leader in innovation",
                })}
              </p>
              <p className="text-sm text-clinical-charcoal">
                {t({
                  es: "Miembro activo de asociaciones de cirugía plástica en Colombia y el mundo",
                  en: "Active member of plastic surgery associations in Colombia and worldwide",
                })}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;

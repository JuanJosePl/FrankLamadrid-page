import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  GraduationCap,
  Award,
  Briefcase,
  ArrowRight,
  Sparkles,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

const AboutPreview = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { t } = useLanguage();

  const timeline = [
    {
      year: "2008",
      icon: GraduationCap,
      title: { es: "Médico Cirujano", en: "Surgeon Degree" },
      subtitle: {
        es: "Universidad Simón Bolívar, Barranquilla",
        en: "Simon Bolivar University, Barranquilla",
      },
    },
    {
      year: "2012",
      icon: Award,
      title: {
        es: "Máster en Cirugía Estética",
        en: "Master in Aesthetic Surgery",
      },
      subtitle: {
        es: "Universidad John F. Kennedy, Buenos Aires",
        en: "John F. Kennedy University, Buenos Aires",
      },
    },
    {
      year: "2015",
      icon: Sparkles,
      title: { es: "Creación Técnica 4K", en: "4K Technique Creation" },
      subtitle: {
        es: "Innovación en Lipoescultura",
        en: "Innovation in Liposculpture",
      },
    },
    {
      year: "2025",
      icon: Briefcase,
      title: { es: "Líder Mundial", en: "World Leader" },
      subtitle: {
        es: "18,000+ Cirugías Exitosas",
        en: "18,000+ Successful Surgeries",
      },
    },
  ];

  return (
    <section
      ref={ref}
      className="section-spacing bg-gradient-to-b from-white via-clinical-snow to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container-clinical relative z-10">
        <div className="grid-clinical-2 gap-16">
          {/* Left: Image & Badge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative">
              <div className="img-clinical-container">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary-500/10 to-medical-teal/10">
                  <img
                    src="https://res.cloudinary.com/disqdfjy9/image/upload/v1762930755/LAMADRID_twnk4k.png"
                    alt="Dr. Frank Lamadrid - Sobre mí"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Quote Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-8 -right-8 glass-clinic rounded-2xl p-6 max-w-xs shadow-hover hidden md:block"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm italic text-clinical-charcoal mb-2">
                      "
                      {t({
                        es: "Mi misión es realzar la belleza natural de cada paciente con técnicas innovadoras",
                        en: "My mission is to enhance the natural beauty of each patient with innovative techniques",
                      })}
                      "
                    </p>
                    <p className="text-xs font-semibold text-primary-500">
                      Dr. Frank Lamadrid
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Badge Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-12 md:mt-8 flex items-center gap-4 bg-white rounded-2xl p-4 shadow-soft"
            >
              <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-primary-500" />
              </div>
              <div>
                <p className="font-bold text-clinical-graphite">
                  {t({
                    es: "15+ Años de Experiencia",
                    en: "15+ Years of Experience",
                  })}
                </p>
                <p className="text-sm text-clinical-charcoal">
                  {t({
                    es: "Formación internacional",
                    en: "International training",
                  })}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Header */}
            <div>
              <p className="section-subtitle text-primary-500 mb-3">
                {t({ es: "CONOCE AL DOCTOR", en: "MEET THE DOCTOR" })}
              </p>
              <h2 className="heading-xl text-clinical-graphite mb-6">
                {t({ es: "Experiencia y", en: "Experience and" })}{" "}
                <span className="gradient-text">
                  {t({ es: "Pasión", en: "Passion" })}
                </span>
                <br />
                {t({ es: "por la Excelencia", en: "for Excellence" })}
              </h2>
              <div className="divider-medical !mx-0"></div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-clinical-charcoal leading-relaxed">
              <p className="body-lg">
                {t({
                  es: "El Dr. Frank Lamadrid Florian es un cirujano plástico reconocido internacionalmente, especializado en técnicas innovadoras de contorno corporal y rejuvenecimiento estético.",
                  en: "Dr. Frank Lamadrid Florian is an internationally renowned plastic surgeon, specialized in innovative body contouring and aesthetic rejuvenation techniques.",
                })}
              </p>
              <p>
                {t({
                  es: "Graduado de la Universidad Simón Bolívar como Médico Cirujano, completó su Máster en Cirugía Estética en la Universidad John F. Kennedy de Buenos Aires y su Máster en Medicina Estética & Anti-Aging en la European Academy of Aesthetic Medicine.",
                  en: "Graduated from Simon Bolivar University as a Surgeon, he completed his Master in Aesthetic Surgery at John F. Kennedy University in Buenos Aires and his Master in Aesthetic Medicine & Anti-Aging at the European Academy of Aesthetic Medicine.",
                })}
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-clinical-graphite">
                {t({
                  es: "Trayectoria Profesional",
                  en: "Professional Journey",
                })}
              </h3>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary-500 via-medical-teal to-primary-500"></div>

                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="relative pl-14 group"
                    >
                      {/* Dot */}
                      <div className="absolute left-0 top-0 w-10 h-10 bg-white border-4 border-primary-500 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <item.icon className="w-4 h-4 text-primary-500" />
                      </div>

                      {/* Content */}
                      <div className="bg-white rounded-xl p-4 shadow-soft group-hover:shadow-card transition-all">
                        <span className="text-xs font-bold text-primary-500 uppercase tracking-wider">
                          {item.year}
                        </span>
                        <h4 className="font-bold text-clinical-graphite mt-1">
                          {t(item.title)}
                        </h4>
                        <p className="text-sm text-clinical-charcoal mt-1">
                          {t(item.subtitle)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
            >
              <Link to="/sobre-mi">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary-clinic flex items-center gap-2"
                >
                  <span>
                    {t({
                      es: "Conocer Más Sobre Mí",
                      en: "Learn More About Me",
                    })}
                  </span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

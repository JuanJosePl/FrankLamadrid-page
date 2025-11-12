// ============================================
// WhyChooseUs.jsx
// ============================================
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Users,
  Globe,
  Heart,
  Shield,
  Sparkles,
  TrendingUp,
  CheckCircle,
  ArrowRight ,
  X,
} from "lucide-react";

export const WhyChooseUs = () => {
  const [selectedReason, setSelectedReason] = useState(null);
  const [showConsultModal, setShowConsultModal] = useState(false);

  const reasons = [
    {
      icon: Award,
      title: "Creador de la Técnica 4K",
      description:
        "Dr. Lamadrid desarrolló y perfeccionó la revolucionaria técnica de Lipoescultura 4K, reconocida mundialmente.",
      stat: "Primera en el mundo",
      // Color clínico unificado: azul médico profesional
      color: "from-primary-500 to-primary-700",
      iconBg: "bg-primary-500/10",
      iconColor: "text-primary-500",
      detail:
        "La técnica 4K redefine la precisión en la lipoescultura. Gracias a microcánulas y visualización de alta definición, se logra una definición muscular natural y armónica sin cicatrices visibles.",
    },
    {
      icon: Users,
      title: "18,000+ Cirugías Exitosas",
      description:
        "Más de dos décadas transformando vidas con resultados excepcionales y satisfacción comprobada.",
      stat: "98% satisfacción",
      // Color clínico unificado: azul médico profesional
      color: "from-primary-500 to-primary-700",
      iconBg: "bg-primary-500/10",
      iconColor: "text-primary-500",
      detail:
        "Cada paciente recibe un plan quirúrgico personalizado. El Dr. Lamadrid supervisa todo el proceso, garantizando resultados seguros y naturales.",
    },
    {
      icon: Globe,
      title: "Referencia Internacional",
      description:
        "Pacientes de más de 40 países confían en el Dr. Lamadrid para sus procedimientos estéticos.",
      stat: "40+ países",
      // Color clínico unificado: azul médico profesional
      color: "from-primary-500 to-primary-700",
      iconBg: "bg-primary-500/10",
      iconColor: "text-primary-500",
      detail:
        "Con reconocimiento global, el Dr. Lamadrid ha sido invitado a congresos internacionales y capacita a otros cirujanos en la técnica 4K.",
    },
    {
      icon: Shield,
      title: "Máxima Seguridad",
      description:
        "Instalaciones certificadas internacionalmente con los más altos estándares de seguridad médica.",
      stat: "Certificación ISO",
      // Color clínico unificado: verde salud
      color: "from-health-emerald to-health-forest",
      iconBg: "bg-health-emerald/10",
      iconColor: "text-health-emerald",
      detail:
        "Todas las cirugías se realizan en quirófanos certificados, con anestesiólogos expertos y monitoreo avanzado para tu tranquilidad.",
    },
    {
      icon: Sparkles,
      title: "Tecnología de Vanguardia",
      description:
        "Equipos de última generación y técnicas innovadoras para resultados superiores.",
      stat: "Tecnología 4K",
      // Color clínico unificado: azul médico profesional
      color: "from-primary-500 to-primary-700",
      iconBg: "bg-primary-500/10",
      iconColor: "text-primary-500",
      detail:
        "La tecnología 4K combina precisión óptica y herramientas avanzadas que reducen la inflamación y el tiempo de recuperación.",
    },
    {
      icon: Heart,
      title: "Atención Personalizada",
      description:
        "Seguimiento integral desde la consulta inicial hasta la recuperación completa.",
      stat: "24/7 disponible",
      // Color clínico unificado: azul médico profesional
      color: "from-primary-500 to-primary-700",
      iconBg: "bg-primary-500/10",
      iconColor: "text-primary-500",
      detail:
        "Tu bienestar es la prioridad. Cada paciente cuenta con acompañamiento médico y emocional durante todo el proceso.",
    },
  ];

  const certifications = [
    "Sociedad Colombiana de Cirugía Plástica",
    "International Society of Aesthetic Plastic Surgery (ISAPS)",
    "Sociedad Brasileña de Cirugía Plástica",
    "American Academy of Cosmetic Surgery",
  ];

  return (

  <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-clinical-alabaster via-white to-medical-light relative overflow-hidden">
       {/* Background */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-medical-teal/5 rounded-full blur-3xl"></div>

    <div className="container mx-auto px-4 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16"
      >
        <div className="inline-flex items-center space-x-2 bg-primary-500/10 px-4 py-2 rounded-full mb-4">
          <TrendingUp className="w-4 h-4 text-primary-500" />
          <span className="text-sm font-semibold text-primary-500">
            ¿Por Qué Elegirnos?
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-clinical-graphite mb-6">
          Excelencia Comprobada en
          <span className="block gradient-text mt-2">
            Cirugía Estética
          </span>
        </h2>
        <p className="text-base sm:text-lg text-clinical-charcoal max-w-3xl mx-auto">
          Más que un procedimiento, es una experiencia integral de
          transformación respaldada por años de experiencia y miles de
          pacientes satisfechos.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-500 border border-clinical-silver relative overflow-hidden group"
            onClick={() => setSelectedReason(reason)}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
            ></div>
            <div className="relative">
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 ${reason.iconBg} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-500`}
              >
                <reason.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${reason.iconColor}`} />
              </div>
              <div className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {reason.stat}
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-clinical-graphite mb-3 group-hover:text-primary-500 transition-colors">
              {reason.title}
            </h3>
            <p className="text-sm sm:text-base text-clinical-charcoal leading-relaxed">
              {reason.description}
            </p>
            <div className="mt-6 flex items-center text-primary-500 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-sm font-semibold mr-2">Conocer más</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-clinical-silver"
      >
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-8 h-8 text-primary-500" />
              <h3 className="text-xl sm:text-2xl font-bold text-clinical-graphite">
                Certificaciones y Membresías
              </h3>
            </div>
            <p className="text-clinical-charcoal mb-6 text-sm sm:text-base">
              El Dr. Lamadrid mantiene las certificaciones más prestigiosas
              en cirugía plástica y estética, garantizando los más altos
              estándares de calidad y seguridad.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-health-emerald flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-clinical-charcoal">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl flex items-center justify-center shadow-medical transform hover:rotate-6 transition-transform duration-500">
                <div className="text-center text-white">
                  <Award className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4" />
                  <p className="text-3xl sm:text-4xl font-bold">15+</p>
                  <p className="text-base sm:text-lg opacity-90">Años de</p>
                  <p className="text-base sm:text-lg opacity-90">Excelencia</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-medical-teal/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12 sm:mt-16"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowConsultModal(true)}
          className="btn-medical text-base sm:text-lg px-8 sm:px-12"
        >
          Agendar Mi Consulta Gratuita
        </motion.button>
      </motion.div>
    </div>

      {/* Modal de información de las cards */}
      <AnimatePresence>
        {selectedReason && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-lg w-full relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                onClick={() => setSelectedReason(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-luxury-gold"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-2xl font-bold text-luxury-navy mb-4">
                {selectedReason.title}
              </h3>
              <p className="text-gray-600">{selectedReason.detail}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de Consulta */}
      <AnimatePresence>
        {showConsultModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl p-10 max-w-lg w-full relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                onClick={() => setShowConsultModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-luxury-gold"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-2xl font-bold text-luxury-navy mb-6">
                Agenda tu Consulta Gratuita
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-luxury-gold outline-none"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-luxury-gold outline-none"
                />
                <input
                  type="tel"
                  placeholder="Número de contacto"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-luxury-gold outline-none"
                />
                <textarea
                  placeholder="¿Qué procedimiento te interesa?"
                  rows="3"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-luxury-gold outline-none"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-luxury w-full py-3 text-lg font-semibold"
                >
                  Enviar Solicitud
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

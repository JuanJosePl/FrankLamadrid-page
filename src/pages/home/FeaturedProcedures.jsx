// ============================================
// 2. FeaturedProcedures.jsx
// ============================================
import { useState } from "react";
import { Scissors, Sparkles, Activity, Zap, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FeaturedProcedures = () => {
  const [selectedProcedure, setSelectedProcedure] = useState(null);
  const [showAllModal, setShowAllModal] = useState(false);

  const procedures = [
    {
      id: "4k",
      icon: Sparkles,
      titleEs: "Lipoescultura 4K",
      descEs:
        "La técnica revolucionaria creada por el Dr. Lamadrid que redefine el contorno corporal con precisión ultra-definida. Utiliza equipos de última generación y microcánulas para lograr resultados naturales y armónicos.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900",
      // Color clínico: azul médico profesional
      color: "from-primary-500 to-primary-700",
      iconBg: "bg-primary-500/10",
      iconColor: "text-primary-500",
      features: [
        "Incisiones de 3mm",
        "Sin cicatrices visibles",
        "Recuperación rápida",
        "Resultados inmediatos",
      ],
    },
    {
      id: "abs",
      icon: Activity,
      titleEs: "Marcación Abdominal 4K",
      descEs:
        "Esculpido abdominal de alta definición que revela la musculatura natural del paciente con una apariencia atlética y natural, sin necesidad de implantes.",
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900",
      // Color clínico: azul médico oscuro
      color: "from-medical-dark to-medical-navy",
      iconBg: "bg-medical-dark/10",
      iconColor: "text-medical-dark",
      features: [
        "8 Pack Definition",
        "Resultados naturales",
        "Sin prótesis",
        "Técnica exclusiva",
      ],
    },
    {
      id: "glutes",
      icon: Zap,
      titleEs: "Gluteoplastia BBL 4K",
      descEs:
        "Aumento y contorneo de glúteos con transferencia de grasa autóloga, logrando proporciones equilibradas y resultados duraderos con mínima intervención.",
      image:
        "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=900",
      // Color clínico: azul-verde médico
      color: "from-medical-teal to-medical-cyan",
      iconBg: "bg-medical-teal/10",
      iconColor: "text-medical-teal",
      features: [
        "Resultados naturales",
        "Aumento permanente",
        "Contorno armónico",
        "Técnica segura",
      ],
    },
    {
      id: "breast",
      icon: Scissors,
      titleEs: "Cirugía de Mamas",
      descEs:
        "Aumento, reducción o lifting mamario con técnicas de vanguardia, logrando resultados armoniosos, naturales y personalizados según la anatomía de cada paciente.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900",
      // Color clínico: azul marino profesional
      color: "from-medical-navy to-clinical-dark",
      iconBg: "bg-medical-navy/10",
      iconColor: "text-medical-navy",
      features: [
        "Prótesis de última generación",
        "Cicatrices mínimas",
        "Forma natural",
        "Recuperación óptima",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-500/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-semibold text-primary-500">
              Procedimientos Destacados
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-clinical-graphite mb-6">
            Especialidades que
            <span className="block gradient-text mt-2">Transforman Vidas</span>
          </h2>
          <p className="text-base sm:text-lg text-clinical-charcoal max-w-3xl mx-auto">
            Descubre los procedimientos más avanzados en cirugía estética,
            desarrollados con la técnica 4K del Dr. Lamadrid.
          </p>
        </motion.div>

        {/* Grid de Procedimientos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {procedures.map((procedure, index) => (
            <motion.div
              key={procedure.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 border border-clinical-silver"
            >
              {/* Imagen */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={procedure.image}
                  alt={procedure.titleEs}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${procedure.color} opacity-60 group-hover:opacity-70 transition-opacity`}
                />

                {/* Icono */}
                <div className="absolute top-6 left-6">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 ${procedure.iconBg} backdrop-blur-md rounded-2xl flex items-center justify-center`}
                  >
                    <procedure.icon
                      className={`w-7 h-7 sm:w-8 sm:h-8 ${procedure.iconColor}`}
                    />
                  </div>
                </div>

                {/* Etiqueta */}
                <div className="absolute top-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full">
                    <span className="text-xs sm:text-sm font-bold text-clinical-graphite">
                      Técnica 4K
                    </span>
                  </div>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-clinical-graphite mb-3 group-hover:text-primary-500 transition-colors">
                  {procedure.titleEs}
                </h3>
                <p className="text-clinical-charcoal mb-6 leading-relaxed text-sm sm:text-base">
                  {procedure.descEs}
                </p>

                {/* Características */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {procedure.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-clinical-charcoal">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Botón Modal */}
                <button
                  onClick={() => setSelectedProcedure(procedure)}
                  className="w-full py-3 bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold rounded-full hover:shadow-medical transform group-hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                >
                  Conocer Más
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón Ver Todos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <button
            onClick={() => setShowAllModal(true)}
            className="btn-medical inline-flex items-center space-x-2 group"
          >
            <span>Ver Todos los Procedimientos</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Modal Individual */}
      <AnimatePresence>
        {selectedProcedure && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelectedProcedure(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl max-w-3xl w-full mx-4 overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProcedure.image}
                alt={selectedProcedure.titleEs}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-3xl font-bold text-luxury-navy mb-4">
                  {selectedProcedure.titleEs}
                </h3>
                <p className="text-gray-600 mb-6">{selectedProcedure.descEs}</p>
                <ul className="space-y-2">
                  {selectedProcedure.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center space-x-2 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedProcedure(null)}
                  className="mt-8 bg-luxury-gold text-white px-6 py-3 rounded-full font-semibold hover:opacity-90"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Todos los Procedimientos */}
      <AnimatePresence>
        {showAllModal && (
          <motion.div
            key="allModal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setShowAllModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-3xl font-bold text-luxury-navy">
                    Todos los Procedimientos
                  </h3>
                  <button
                    onClick={() => setShowAllModal(false)}
                    className="text-gray-500 hover:text-gray-800"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {procedures.map((p) => (
                    <div
                      key={p.id}
                      className="border border-gray-200 rounded-2xl overflow-hidden"
                    >
                      <img
                        src={p.image}
                        alt={p.titleEs}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="text-xl font-semibold text-luxury-navy">
                          {p.titleEs}
                        </h4>
                        <p className="text-gray-600 text-sm mt-2">{p.descEs}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

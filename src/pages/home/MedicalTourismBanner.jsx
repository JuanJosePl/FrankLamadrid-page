import { useState } from "react";
import {
  Plane,
  Hotel,
  Heart,
  ShieldCheck,
  Users,
  MapPin,
  Check,
  X,
  Globe2,
  DollarSign,
  Send,
  Shield,
  Clock,
  Sparkles,
  Star,
  Award,
  Info,
  MessageCircle
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

export const MedicalTourismBanner = () => {
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [showPricesModal, setShowPricesModal] = useState(false);

  const benefits = [
    {
      icon: Plane,
      title: "Vuelo + Traslados",
      desc: "Coordinamos todo tu viaje",
    },
    {
      icon: Hotel,
      title: "Hospedaje Premium",
      desc: "Hotel 5 estrellas incluido",
    },
    { icon: Heart, title: "Asistencia 24/7", desc: "Equipo médico disponible" },
    {
      icon: ShieldCheck,
      title: "Seguridad Total",
      desc: "Clínicas certificadas",
    },
  ];

  const destinations = [
    { country: "Estados Unidos 🇺🇸", patients: "2,500+" },
    { country: "España 🇪🇸", patients: "1,200+" },
    { country: "Argentina 🇦🇷", patients: "800+" },
    { country: "México 🇲🇽", patients: "1,500+" },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary-500 via-primary-600 to-medical-cyan relative overflow-hidden">
      {/* Medical Background Glow */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-white rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-medical-light rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Medical Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1.5px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Medical Tourism Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/25 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 border border-white/30 shadow-lg">
              <MapPin className="w-4 h-4 text-white" strokeWidth={2.5} />
              <span className="text-sm font-bold text-white uppercase tracking-wider">
                Turismo Médico
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Tu Transformación en{" "}
              <span className="block mt-2">Colombia 🇨🇴</span>
            </h2>

            <p className="text-base sm:text-lg text-white/95 mb-8 leading-relaxed">
              Paquetes completos de turismo médico que incluyen cirugía,
              hospedaje, traslados y recuperación. Vive la experiencia estética
              más avanzada en Latinoamérica.
            </p>

            {/* Benefits Grid - Medical Professional */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.03, y: -3 }}
                  className="bg-white/15 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/25 shadow-lg hover:bg-white/20 transition-all"
                >
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                    <benefit.icon
                      className="w-6 h-6 text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h4 className="font-bold text-white mb-1 text-base">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-white/85 leading-relaxed">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons - Medical Professional */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowRequestModal(true)}
                className="group bg-white text-primary-700 font-bold py-4 px-7 rounded-full hover:shadow-2xl transition-all flex items-center justify-center gap-2"
              >
                <Globe2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Solicitar Paquete Internacional</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowPricesModal(true)}
                className="border-2 border-white text-white font-bold py-4 px-7 rounded-full hover:bg-white hover:text-primary-600 transition-all flex items-center justify-center gap-2"
              >
                <DollarSign className="w-5 h-5" />
                <span>Ver Precios</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border-2 border-white/20">
              {/* Header Stats */}
              <div className="flex items-center space-x-4 mb-8 pb-6 border-b-2 border-clinical-silver/40">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-500 to-medical-cyan rounded-2xl flex items-center justify-center shadow-medical flex-shrink-0">
                  <Users
                    className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                    strokeWidth={2.5}
                  />
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-black text-clinical-dark">
                    6,000+
                  </p>
                  <p className="text-clinical-charcoal font-semibold text-sm sm:text-base">
                    Pacientes Internacionales
                  </p>
                </div>
              </div>

              {/* Destinations List */}
              <div className="space-y-4">
                <h4 className="font-black text-clinical-dark text-lg sm:text-xl mb-5">
                  Pacientes de Todo el Mundo:
                </h4>
                {destinations.map((dest, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center justify-between py-4 border-b border-clinical-silver/60 hover:border-primary-300 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-br from-primary-500 to-medical-cyan" />
                      <span className="text-clinical-charcoal font-semibold group-hover:text-primary-700 transition-colors">
                        {dest.country}
                      </span>
                    </div>
                    <span className="font-black text-primary-600 text-lg">
                      {dest.patients}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="mt-6 pt-6 border-t-2 border-clinical-silver/40">
                <div className="flex items-center justify-center gap-2 text-sm text-clinical-slate">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-health-emerald to-health-forest flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="font-bold">Datos Verificados 2024</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===================== Modal 1: Solicitud - Medical Professional ===================== */}
      <AnimatePresence>
        {showRequestModal && (
          <motion.div
            className="fixed inset-0 bg-clinical-dark/90 backdrop-blur-md flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowRequestModal(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 w-full max-w-2xl relative max-h-[90vh] overflow-y-auto border-2 border-primary-200/40"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowRequestModal(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-clinical-silver/40 hover:bg-clinical-silver rounded-full flex items-center justify-center transition-all"
              >
                <X size={20} className="text-clinical-dark" />
              </button>

              {/* Modal Header */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-medical-cyan rounded-2xl flex items-center justify-center mb-4">
                  <Globe2 className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-clinical-dark mb-3">
                  Solicitar Paquete Internacional
                </h2>
                <p className="text-clinical-charcoal leading-relaxed">
                  Completa el siguiente formulario y te contactaremos con una
                  cotización personalizada.
                </p>
              </div>

              {/* Form */}
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-clinical-dark mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    className="w-full border-2 border-clinical-silver focus:border-primary-500 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    placeholder="Ej. María López"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-clinical-dark mb-2">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      className="w-full border-2 border-clinical-silver focus:border-primary-500 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="maria@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-clinical-dark mb-2">
                      País de Origen
                    </label>
                    <input
                      type="text"
                      className="w-full border-2 border-clinical-silver focus:border-primary-500 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="Ej. México"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-clinical-dark mb-2">
                    Procedimiento de Interés
                  </label>
                  <select className="w-full border-2 border-clinical-silver focus:border-primary-500 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-200 outline-none transition-all">
                    <option value="">Selecciona una opción</option>
                    <option>Lipoescultura 4K</option>
                    <option>Abdominoplastia</option>
                    <option>Mamoplastia</option>
                    <option>Rinoplastia</option>
                    <option>BBL (Brazilian Butt Lift)</option>
                  </select>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold py-4 rounded-xl hover:shadow-medical-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Solicitud</span>
                </motion.button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t-2 border-clinical-silver/40 flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 text-xs text-clinical-slate">
                  <Shield className="w-4 h-4 text-primary-600" />
                  <span className="font-semibold">Información Segura</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-clinical-slate">
                  <Clock className="w-4 h-4 text-health-emerald" />
                  <span className="font-semibold">Respuesta en 24h</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===================== Modal 2: Precios - Medical Professional ===================== */}
      <AnimatePresence>
        {showPricesModal && (
          <motion.div
            className="fixed inset-0 bg-clinical-dark/90 backdrop-blur-md flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPricesModal(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 w-full max-w-2xl relative max-h-[90vh] overflow-y-auto border-2 border-primary-200/40"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowPricesModal(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-clinical-silver/40 hover:bg-clinical-silver rounded-full flex items-center justify-center transition-all"
              >
                <X size={20} className="text-clinical-dark" />
              </button>

              {/* Modal Header */}
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-health-emerald to-health-forest rounded-2xl flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-clinical-dark mb-3">
                  Precios Internacionales
                </h2>
                <p className="text-clinical-charcoal leading-relaxed">
                  Precios especiales para pacientes internacionales con paquetes
                  todo incluido
                </p>
              </div>

              {/* Price List */}
              <div className="space-y-4 mb-8">
                {[
                  {
                    name: "Lipoescultura 4K",
                    price: "Desde $4,800 USD",
                    icon: Sparkles,
                  },
                  {
                    name: "Abdominoplastia",
                    price: "Desde $5,200 USD",
                    icon: Heart,
                  },
                  {
                    name: "Mamoplastia",
                    price: "Desde $4,500 USD",
                    icon: Star,
                  },
                  {
                    name: "Rinoplastia",
                    price: "Desde $3,900 USD",
                    icon: Award,
                  },
                ].map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group bg-gradient-to-br from-clinical-snow to-white rounded-2xl p-5 border-2 border-clinical-silver/60 hover:border-primary-300 transition-all shadow-soft hover:shadow-medical"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-medical-light rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <p.icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-clinical-dark group-hover:text-primary-700 transition-colors">
                            {p.name}
                          </h4>
                          <p className="text-sm text-clinical-slate font-semibold">
                            Incluye consulta, cirugía y seguimiento
                          </p>
                        </div>
                      </div>
                      <span className="font-black text-primary-600 text-lg whitespace-nowrap ml-3">
                        {p.price}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Info Box */}
              <div className="bg-gradient-to-br from-primary-50 to-medical-light rounded-2xl p-5 mb-6 border border-primary-200/50">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-clinical-charcoal leading-relaxed">
                    <span className="font-bold">Incluye:</span> Hospedaje,
                    traslados, enfermera 24/7, drenajes linfáticos, faja de
                    compresión y seguimiento post-operatorio completo.
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setShowPricesModal(false);
                  setShowRequestModal(true);
                }}
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold py-4 rounded-xl hover:shadow-medical-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Solicitar Cotización Personalizada</span>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

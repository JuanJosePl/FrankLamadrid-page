// ============================================
// CTASection.jsx
// ============================================
import {
  Phone,
  MessageCircle,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Heart,
  Users,
  Star,
  MapPin,
  Globe2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const CTASection = () => {
  const whatsappNumbers = [
    { id: 1, phone: "+573175112107", label: "Asistente Principal" },
    { id: 2, phone: "+573175112092", label: "Consultas Internacionales" },
    { id: 3, phone: "+573124586286", label: "Turismo Médico" },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-clinical-dark via-primary-700 to-clinical-dark relative overflow-hidden">
      {/* Animated Medical Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-80 sm:w-96 h-80 sm:h-96 bg-medical-cyan rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-20 w-80 sm:w-96 h-80 sm:h-96 bg-primary-400 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>

      {/* Medical Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 2px, transparent 0)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Header Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary-400 to-medical-cyan rounded-full mb-8 shadow-medical"
          >
            <Calendar
              className="w-10 h-10 sm:w-12 sm:h-12 text-white"
              strokeWidth={2.5}
            />
          </motion.div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 leading-tight">
            ¿Listo para tu
            <span className="block mt-2 bg-gradient-to-r from-medical-light via-white to-primary-100 bg-clip-text text-transparent">
              Transformación?
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-10">
            Da el primer paso hacia el cuerpo que siempre has soñado. Nuestro
            equipo está listo para acompañarte en cada etapa de tu
            transformación.
          </p>

          {/* Main CTA Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-white/20 mb-10 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
              Agenda tu Consulta Personalizada
            </h3>
            <p className="text-white/90 mb-8 text-base sm:text-lg">
              Primera consulta{" "}
              <span className="font-bold text-health-mint">GRATIS</span> •
              Evaluación completa • Plan personalizado
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <motion.a
                href="tel:+573175112107"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group flex-1 bg-white text-primary-700 font-bold py-4 sm:py-5 px-6 sm:px-10 rounded-full shadow-medical hover:shadow-medical-lg transition-all text-base sm:text-lg flex items-center justify-center space-x-3"
              >
                <Phone
                  className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform"
                  strokeWidth={2.5}
                />
                <span>Llamar Ahora</span>
              </motion.a>

              <motion.a
                href="https://api.whatsapp.com/send?phone=573175112107"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group flex-1 bg-gradient-to-r from-health-emerald to-health-forest hover:from-health-forest hover:to-health-emerald text-white font-bold py-4 sm:py-5 px-6 sm:px-10 rounded-full shadow-xl transition-all text-base sm:text-lg flex items-center justify-center space-x-3"
              >
                <MessageCircle
                  className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform"
                  strokeWidth={2.5}
                />
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </div>

          {/* WhatsApp Numbers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
            {whatsappNumbers.map((contact, index) => (
              <motion.a
                key={contact.id}
                href={`https://api.whatsapp.com/send?phone=${contact.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border-2 border-white/20 hover:border-health-emerald/60 hover:bg-white/15 transition-all"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-health-emerald to-health-forest rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform shadow-lg">
                  <MessageCircle
                    className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                    strokeWidth={2.5}
                  />
                </div>
                <h4 className="font-bold text-white mb-2 text-sm sm:text-base">
                  {contact.label}
                </h4>
                <p className="text-health-mint text-xs sm:text-sm font-semibold">
                  {contact.phone}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
            {[
              {
                icon: ShieldCheck,
                text: "Cirugías Seguras",
                color: "from-primary-400 to-medical-cyan",
              },
              {
                icon: Heart,
                text: "99.8% Satisfacción",
                color: "from-health-emerald to-health-forest",
              },
              {
                icon: Users,
                text: "18K+ Pacientes",
                color: "from-primary-500 to-primary-600",
              },
              {
                icon: Star,
                text: "5 Estrellas",
                color: "from-medical-cyan to-primary-400",
              },
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/10"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 bg-gradient-to-br ${badge.color} rounded-xl flex items-center justify-center shadow-lg`}
                >
                  <badge.icon
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    strokeWidth={2.5}
                  />
                </div>
                <p className="text-sm sm:text-base text-white/90 font-bold">
                  {badge.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/20 max-w-3xl mx-auto mb-8">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
              <div className="flex items-center gap-2 text-white/90">
                <div className="w-2 h-2 rounded-full bg-health-emerald animate-pulse" />
                <span className="font-semibold">Respuesta Inmediata</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <div
                  className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
                <span className="font-semibold">Atención 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <div
                  className="w-2 h-2 rounded-full bg-medical-cyan animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <span className="font-semibold">Financiamiento Disponible</span>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 text-white/80 text-sm sm:text-base"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary-300" strokeWidth={2.5} />
              <span className="font-semibold">
                🇨🇴 Bogotá & Barranquilla, Colombia
              </span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/40" />
            <div className="flex items-center gap-2">
              <Globe2 className="w-5 h-5 text-primary-300" strokeWidth={2.5} />
              <span className="font-semibold">
                Atención en Español e Inglés
              </span>
            </div>
          </motion.div>

          {/* Bottom Decorative Line */}
          <div className="flex items-center justify-center gap-2 mt-10">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-gradient-to-br from-primary-400 to-medical-cyan shadow-lg" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-white/40 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

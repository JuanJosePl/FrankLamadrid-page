import { useState, useEffect } from "react";
import {
  MessageCircle,
  X,
  Phone,
  Sparkles,
  Clock,
  Globe2,
  Zap,
  Shield,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, t } = useLanguage();
  const [showPulse, setShowPulse] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPulse(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const assistants = [
    {
      name: t({ es: "Consultas Generales", en: "General Inquiries" }),
      phone: "573175112092",
      flag: "🇨🇴",
      specialty: t({
        es: "Información y Agendamiento",
        en: "Information & Scheduling",
      }),
      available: true,
      icon: MessageCircle,
    },
    {
      name: t({ es: "Turismo Médico", en: "Medical Tourism" }),
      phone: "573202485496",
      flag: "🌎",
      specialty: t({
        es: "Paquetes Internacionales",
        en: "International Packages",
      }),
      available: true,
      icon: Globe2,
    },
    {
      name: t({ es: "Emergencias Post-Op", en: "Post-Op Emergency" }),
      phone: "573013807953",
      flag: "🚨",
      specialty: t({ es: "Atención Urgente 24/7", en: "Urgent Care 24/7" }),
      available: true,
      icon: Zap,
    },
    {
      name: t({ es: "Asesor Bogotá", en: "Bogotá Advisor" }),
      phone: "573124586286",
      flag: "🇨🇴",
      specialty: t({ es: "Sede Bogotá", en: "Bogotá Location" }),
      available: true,
      icon: Phone,
    },
    {
      name: t({ es: "Asesor Barranquilla", en: "Barranquilla Advisor" }),
      phone: "573175112107",
      flag: "🇨🇴",
      specialty: t({ es: "Sede Barranquilla", en: "Barranquilla Location" }),
      available: true,
      icon: Phone,
    },
    {
      name: t({ es: "Financiamiento", en: "Financing" }),
      phone: "573222732466",
      flag: "💳",
      specialty: t({ es: "Opciones de Pago", en: "Payment Options" }),
      available: true,
      icon: Sparkles,
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="mb-4 glass-clinic rounded-3xl shadow-premium p-6 w-80 md:w-96 max-h-[32rem] overflow-y-auto border-2 border-primary-500/20"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-medical-cyan rounded-full blur-md opacity-50" />
                  <div className="relative w-12 h-12 bg-gradient-to-br from-primary-500 to-medical-cyan rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-clinical-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-black text-clinical-graphite">
                    {t({
                      es: "¿Cómo podemos ayudarte?",
                      en: "How can we help you?",
                    })}
                  </h3>
                  <p className="text-xs text-clinical-slate font-semibold">
                    {t({ es: "Respuesta inmediata", en: "Immediate response" })}
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-clinical-silver rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-clinical-graphite" />
              </motion.button>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              <div className="bg-gradient-to-br from-primary-500/10 to-medical-cyan/10 p-3 rounded-xl border border-primary-500/20">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-primary-600" />
                  <span className="text-xs font-bold text-clinical-graphite">
                    {t({ es: "Horario", en: "Hours" })}
                  </span>
                </div>
                <p className="text-xs text-clinical-slate font-semibold">
                  Lun-Sáb 8AM-6PM
                </p>
              </div>

              <div className="bg-gradient-to-br from-health-emerald/10 to-health-forest/10 p-3 rounded-xl border border-health-emerald/20">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-health-emerald" />
                  <span className="text-xs font-bold text-clinical-graphite">
                    {t({ es: "Emergencias", en: "Emergency" })}
                  </span>
                </div>
                <p className="text-xs text-clinical-slate font-semibold">
                  24/7 Post-Op
                </p>
              </div>
            </div>

            <p className="text-sm text-clinical-slate mb-4 font-medium">
              {t({
                es: "Selecciona el asesor adecuado para tu consulta:",
                en: "Select the right advisor for your inquiry:",
              })}
            </p>

            {/* Assistants List */}
            <div className="space-y-3">
              {assistants.map((assistant, index) => (
                <motion.a
                  key={index}
                  href={`https://api.whatsapp.com/send?phone=${
                    assistant.phone
                  }&text=${encodeURIComponent(
                    t({
                      es: "Hola, me gustaría obtener más información sobre los procedimientos",
                      en: "Hello, I would like to get more information about the procedures",
                    })
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative block"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-medical-cyan/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center space-x-3 p-4 bg-gradient-to-br from-clinical-snow to-clinical-white hover:from-primary-50 hover:to-medical-light rounded-xl border-2 border-clinical-silver group-hover:border-primary-500/30 transition-all shadow-soft group-hover:shadow-medical">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-health-emerald to-health-forest rounded-full blur-md opacity-50" />
                      <div className="relative w-12 h-12 bg-gradient-to-br from-health-emerald to-health-forest rounded-full flex items-center justify-center shadow-medical">
                        <assistant.icon
                          className="w-6 h-6 text-clinical-white"
                          strokeWidth={2.5}
                        />
                      </div>
                      {assistant.available && (
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute -top-1 -right-1 w-4 h-4 bg-health-emerald rounded-full border-2 border-clinical-white"
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-bold text-clinical-graphite group-hover:text-primary-600 transition-colors text-sm">
                          {assistant.name}
                        </p>
                        <span className="text-lg">{assistant.flag}</span>
                      </div>
                      <p className="text-xs text-clinical-slate font-medium truncate">
                        {assistant.specialty}
                      </p>
                      {assistant.available && (
                        <div className="flex items-center gap-1 mt-1">
                          <div className="w-1.5 h-1.5 bg-health-emerald rounded-full animate-pulse" />
                          <span className="text-xs text-health-emerald font-semibold">
                            {t({ es: "Disponible", en: "Available" })}
                          </span>
                        </div>
                      )}
                    </div>
                    <MessageCircle className="w-5 h-5 text-health-emerald group-hover:scale-110 transition-transform" />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Footer Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 pt-4 border-t-2 border-clinical-silver text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-primary-600" />
                <p className="text-xs text-clinical-slate font-bold">
                  {t({
                    es: "Comunicación Segura y Confidencial",
                    en: "Secure & Confidential Communication",
                  })}
                </p>
              </div>
              <p className="text-xs text-clinical-slate">
                {t({
                  es: "Respetamos tu privacidad. Información protegida.",
                  en: "We respect your privacy. Protected information.",
                })}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative group"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-health-emerald to-health-forest rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />

        {/* Pulse Rings */}
        {showPulse && !isOpen && (
          <>
            <motion.div
              animate={{ scale: [1, 2, 2], opacity: [0.5, 0, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-health-emerald rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 2.5, 2.5], opacity: [0.3, 0, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute inset-0 bg-health-forest rounded-full"
            />
          </>
        )}

        {/* Button */}
        <div className="relative w-16 h-16 bg-gradient-to-br from-health-emerald to-health-forest rounded-full shadow-medical-xl flex items-center justify-center overflow-hidden group-hover:shadow-premium transition-all">
          <motion.div
            animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <X className="w-8 h-8 text-clinical-white" strokeWidth={2.5} />
            ) : (
              <MessageCircle
                className="w-8 h-8 text-clinical-white"
                strokeWidth={2.5}
              />
            )}
          </motion.div>
        </div>

        {/* Badge */}
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 bg-primary-500 rounded-full blur-md opacity-50"
              />
              <div className="relative w-7 h-7 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full border-3 border-clinical-white flex items-center justify-center shadow-medical">
                <span className="text-clinical-white text-xs font-black">
                  6
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </motion.button>

      {/* Tooltip */}
      {!isOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{ delay: 1 }}
            className="absolute right-20 bottom-4 glass-clinic px-5 py-3 rounded-2xl shadow-medical-lg whitespace-nowrap border-2 border-primary-500/20"
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 text-primary-600" />
              </motion.div>
              <p className="text-sm font-bold text-clinical-graphite">
                {t({ es: "¿Necesitas ayuda?", en: "Need help?" })}
              </p>
            </div>
            <p className="text-xs text-clinical-slate mt-1">
              {t({ es: "6 asesores disponibles", en: "6 advisors available" })}
            </p>

            {/* Arrow */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2">
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[8px] border-l-clinical-white border-b-[8px] border-b-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default WhatsAppFloat;

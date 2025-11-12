import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Award,
  Heart,
  Shield,
  Globe2,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

const Footer = () => {
  const { language, t } = useLanguage();

  const locations = [
    {
      city: "Bogotá",
      address: "Carrera 19A #82-85, Chapinero",
      phone: "+57 317 511 2107",
      icon: MapPin,
    },
    {
      city: "Barranquilla",
      address: "Calle 81 #46-41, Unidad Quirúrgica San Miguel",
      phone: "+57 317 511 2092",
      icon: MapPin,
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      url: "https://instagram.com/drfranklamadrid",
      label: "Instagram",
      color: "from-primary-400 to-medical-cyan",
    },
    {
      icon: Facebook,
      url: "https://facebook.com/drfranklamadrid",
      label: "Facebook",
      color: "from-primary-500 to-primary-700",
    },
    {
      icon: Youtube,
      url: "https://youtube.com/drfranklamadrid",
      label: "YouTube",
      color: "from-primary-600 to-medical-navy",
    },
  ];

  const quickLinks = [
    {
      path: "/sobre-mi",
      label: { es: "Sobre Mí", en: "About Me" },
      icon: Award,
    },
    {
      path: "/lipoescultura-4k",
      label: { es: "Lipoescultura 4K", en: "4K Liposculpture" },
      icon: Shield,
    },
    {
      path: "/procedimientos",
      label: { es: "Procedimientos", en: "Procedures" },
      icon: CheckCircle2,
    },
    {
      path: "/turismo-medico",
      label: { es: "Turismo Médico", en: "Medical Tourism" },
      icon: Globe2,
    },
    { path: "/galeria", label: { es: "Galería", en: "Gallery" }, icon: Award },
    {
      path: "/testimonios",
      label: { es: "Testimonios", en: "Testimonials" },
      icon: Heart,
    },
  ];

  const achievements = [
    {
      value: "18,000+",
      label: { es: "Cirugías Exitosas", en: "Successful Surgeries" },
    },
    { value: "50+", label: { es: "Países", en: "Countries" } },
    { value: "99.8%", label: { es: "Satisfacción", en: "Satisfaction" } },
    {
      value: "15+",
      label: { es: "Años de Experiencia", en: "Years Experience" },
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-clinical-graphite via-clinical-dark to-medical-navy text-clinical-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #0089B3 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-medical-cyan/20 rounded-full blur-3xl"
        />
      </div>

      {/* Main Footer */}
      <div className="relative container-clinical py-16">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative"
              >
                {/* Halo brillante clínico */}
                <div className="absolute inset-0 bg-gradient-to-br from-medical-cyan/70 via-primary-500/60 to-medical-teal/70 rounded-full blur-2xl opacity-80 group-hover:opacity-100 transition-all duration-300" />

                {/* Fondo del ícono con alto contraste */}
                <div className="relative w-16 h-16 bg-gradient-to-br from-white via-sky-100 to-emerald-100 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/30 border border-primary-500/50">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-medical-teal opacity-30 blur-sm" />
                  <img
                    src="https://res.cloudinary.com/disqdfjy9/image/upload/v1762930755/newIconNav_gtdbsd.png"
                    alt="Icono Dr. Frank Lamadrid"
                    className="relative z-10 w-11 h-11 object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)]"
                  />
                </div>
              </motion.div>

              {/* Texto */}
              <div>
                <h3 className="text-xl font-black bg-gradient-to-r from-primary-500 via-medical-cyan to-medical-teal bg-clip-text text-transparent">
                  Dr. Frank Lamadrid
                </h3>
                <p className="text-sm text-clinical-silver font-semibold">
                  {t({ es: "Cirujano Plástico", en: "Plastic Surgeon" })}
                </p>
              </div>
            </Link>

            <p className="text-clinical-silver text-sm leading-relaxed">
              {t({
                es: "Líder mundial en Lipoescultura & Marcación Abdominal 4K. Creador de la técnica revolucionaria Lipo 4K.",
                en: "World leader in 4K Liposculpture & Abdominal Definition. Creator of the revolutionary 4K Lipo technique.",
              })}
            </p>

            <div className="flex items-center space-x-2 px-4 py-3 bg-primary-500/10 rounded-xl border border-primary-500/20">
              <Shield className="w-5 h-5 text-primary-400" />
              <span className="text-sm font-bold text-primary-300">
                {t({
                  es: "Certificación Internacional",
                  en: "International Certification",
                })}
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-black mb-6 gradient-text bg-gradient-to-r from-primary-100 to-medical-sky bg-clip-text text-transparent">
              {t({ es: "Enlaces Rápidos", en: "Quick Links" })}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className="group flex items-center space-x-3 text-clinical-silver hover:text-primary-400 transition-colors"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="w-8 h-8 rounded-lg bg-primary-500/10 group-hover:bg-primary-500/20 flex items-center justify-center transition-all"
                    >
                      <link.icon className="w-4 h-4" />
                    </motion.div>
                    <span className="text-sm font-medium">{t(link.label)}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Locations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-black mb-6 gradient-text bg-gradient-to-r from-primary-100 to-medical-sky bg-clip-text text-transparent">
              {t({ es: "Nuestras Sedes", en: "Our Locations" })}
            </h4>
            <div className="space-y-6">
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ x: 5 }}
                  className="space-y-3 p-4 rounded-xl bg-primary-500/5 border border-primary-500/10 hover:border-primary-500/30 transition-all"
                >
                  <h5 className="font-bold text-primary-400 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {location.city}
                  </h5>
                  <p className="text-clinical-silver text-sm leading-relaxed">
                    {location.address}
                  </p>
                  <a
                    href={`tel:${location.phone}`}
                    className="flex items-center space-x-2 text-clinical-silver hover:text-primary-400 transition-colors text-sm group"
                  >
                    <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    <span className="font-semibold">{location.phone}</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-black mb-6 gradient-text bg-gradient-to-r from-primary-100 to-medical-sky bg-clip-text text-transparent">
              {t({ es: "Conecta con Nosotros", en: "Connect With Us" })}
            </h4>

            <div className="space-y-4 mb-6">
              <motion.a
                href="mailto:info@drfranklamadrid.com"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-clinical-silver hover:text-primary-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 group-hover:bg-primary-500/20 flex items-center justify-center transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">
                  info@drfranklamadrid.com
                </span>
              </motion.a>

              <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-primary-500/10 to-medical-cyan/10 rounded-xl border border-primary-500/20">
                <Instagram className="w-5 h-5 text-primary-400" />
                <div>
                  <p className="text-xs text-clinical-silver">Instagram</p>
                  <p className="text-sm font-bold text-primary-300">
                    673K Seguidores
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-medical-cyan/10 to-primary-500/10 rounded-xl border border-primary-500/20">
                <Clock className="w-5 h-5 text-medical-cyan" />
                <div>
                  <p className="text-xs text-clinical-silver">
                    {t({ es: "Horario de Atención", en: "Business Hours" })}
                  </p>
                  <p className="text-sm font-bold text-primary-300">
                    Lun - Sáb: 8AM - 6PM
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-clinical-silver font-semibold">
                {t({
                  es: "Síguenos en redes sociales",
                  en: "Follow us on social media",
                })}
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-xl blur-md opacity-0 group-hover:opacity-75 transition-opacity`}
                    />
                    <div
                      className={`relative w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center shadow-medical group-hover:shadow-medical-lg transition-all`}
                    >
                      <social.icon
                        className="w-6 h-6 text-clinical-white"
                        strokeWidth={2}
                      />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-clinical-white/10">
        <div className="container-clinical py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-clinical-silver text-center md:text-left"
            >
              © {new Date().getFullYear()} Dr. Frank Lamadrid.{" "}
              {t({
                es: "Todos los derechos reservados.",
                en: "All rights reserved.",
              })}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-sm text-clinical-silver"
            >
              <span>{t({ es: "Hecho con", en: "Made with" })}</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-health-emerald fill-current" />
              </motion.div>
              <span>{t({ es: "en Colombia", en: "in Colombia" })} 🇨🇴</span>
            </motion.div>

            <div className="flex space-x-6 text-sm text-clinical-silver">
              <Link
                to="/privacidad"
                className="hover:text-primary-400 transition-colors font-medium"
              >
                {t({ es: "Privacidad", en: "Privacy" })}
              </Link>
              <Link
                to="/terminos"
                className="hover:text-primary-400 transition-colors font-medium"
              >
                {t({ es: "Términos", en: "Terms" })}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

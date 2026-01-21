// Footer.jsx - DISEÑO BLANCO PREMIUM (MATCHING NAVBAR)
import { Link } from "react-router-dom"
import {
  MapPin, Phone, Mail, Instagram, Facebook, Youtube,
  Award, Heart, Shield, Globe2, Clock, CheckCircle2,
  ArrowUpRight
} from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "../../contexts/LanguageContext"

const Footer = () => {
  const { language, t } = useLanguage()

  const locations = [
    {
      city: "Bogotá",
      address: "Carrera 19A #82-85, Chapinero",
      phone: "+57 317 511 2107",
    },
    {
      city: "Barranquilla",
      address: "Calle 81 #46-41, Unidad Quirúrgica San Miguel",
      phone: "+57 317 511 2092",
    },
  ]

  const socialLinks = [
    {
      icon: Instagram,
      url: "https://instagram.com/drfranklamadrid",
      label: "Instagram",
      gradient: "from-pink-500 via-purple-600 to-orange-500",
    },
    {
      icon: Facebook,
      url: "https://facebook.com/drfranklamadrid",
      label: "Facebook",
      gradient: "from-blue-600 to-blue-700",
    },
    {
      icon: Youtube,
      url: "https://youtube.com/drfranklamadrid",
      label: "YouTube",
      gradient: "from-red-600 to-red-700",
    },
  ]

  const quickLinks = [
    { path: "/sobre-mi", label: { es: "Sobre Mí", en: "About Me" }, icon: Award },
    { path: "/lipoescultura-4k", label: { es: "Lipoescultura 4K", en: "4K Liposculpture" }, icon: Shield },
    { path: "/procedimientos", label: { es: "Procedimientos", en: "Procedures" }, icon: CheckCircle2 },
    { path: "/turismo-medico", label: { es: "Turismo Médico", en: "Medical Tourism" }, icon: Globe2 },
    { path: "/galeria", label: { es: "Galería", en: "Gallery" }, icon: Award },
    { path: "/testimonios", label: { es: "Testimonios", en: "Testimonials" }, icon: Heart },
  ]

  const achievements = [
    { value: "18,000+", label: { es: "Cirugías Exitosas", en: "Successful Surgeries" } },
    { value: "50+", label: { es: "Países", en: "Countries" } },
    { value: "99.8%", label: { es: "Satisfacción", en: "Satisfaction" } },
    { value: "15+", label: { es: "Años de Experiencia", en: "Years Experience" } },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-white via-clinical-snow to-clinical-alabaster overflow-hidden">
      
      {/* DECORATIVE BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, #0089B3 1px, transparent 0)",
          backgroundSize: "50px 50px",
        }} />
      </div>

      {/* SUBTLE ORBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-medical-cyan/10 rounded-full blur-3xl"
        />
      </div>

      {/* STATS BAR - TOP SECTION */}
      <div className="relative border-b border-clinical-silver/50">
        <div className="container-clinical py-12 lg:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {achievements.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="text-center group"
              >
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-medical-cyan rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative px-6 py-4 bg-white rounded-2xl border-2 border-clinical-silver/50 group-hover:border-primary-500/40 transition-all shadow-sm group-hover:shadow-md">
                    <p className="text-2xl lg:text-3xl xl:text-4xl font-black bg-gradient-to-r from-primary-600 to-medical-cyan bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                  </div>
                </div>
                <p className="text-xs lg:text-sm text-clinical-charcoal font-semibold mt-3 uppercase tracking-wider">
                  {t(stat.label)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN FOOTER CONTENT */}
      <div className="relative container-clinical py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* BRAND SECTION */}
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
                {/* Halo brillante */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/40 via-medical-cyan/30 to-medical-teal/40 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-300" />
                
                {/* Logo container */}
                <div className="relative w-16 h-16 bg-gradient-to-br from-white via-sky-100 to-emerald-100 rounded-full flex items-center justify-center shadow-medical border border-primary-500/30">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-medical-teal opacity-20 blur-sm" />
                  <img
                    src="https://res.cloudinary.com/disqdfjy9/image/upload/v1762930755/newIconNav_gtdbsd.png"
                    alt="Dr. Frank Lamadrid"
                    className="relative z-10 w-11 h-11 object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_2px_8px_rgba(0,137,179,0.3)]"
                  />
                </div>
              </motion.div>

              <div>
                <h3 className="text-xl font-black bg-gradient-to-r from-primary-600 via-medical-cyan to-medical-teal bg-clip-text text-transparent">
                  Dr. Frank Lamadrid
                </h3>
                <p className="text-sm text-clinical-charcoal font-semibold">
                  {t({ es: "Cirujano Plástico", en: "Plastic Surgeon" })}
                </p>
              </div>
            </Link>

            <p className="text-clinical-slate text-sm leading-relaxed">
              {t({
                es: "Líder mundial en Lipoescultura & Marcación Abdominal 4K. Creador de la técnica revolucionaria Lipo 4K.",
                en: "World leader in 4K Liposculpture & Abdominal Definition. Creator of the revolutionary 4K Lipo technique.",
              })}
            </p>

            <div className="flex items-center space-x-2 px-4 py-3 bg-primary-50 rounded-xl border border-primary-500/20 hover:border-primary-500/40 transition-all group">
              <Shield className="w-5 h-5 text-primary-600 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold text-primary-700">
                {t({ es: "Certificación Internacional", en: "International Certification" })}
              </span>
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-black mb-6 bg-gradient-to-r from-primary-600 to-medical-cyan bg-clip-text text-transparent">
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
                  whileHover={{ x: 4 }}
                >
                  <Link
                    to={link.path}
                    className="group flex items-center space-x-3 text-clinical-charcoal hover:text-primary-600 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary-50 group-hover:bg-primary-100 flex items-center justify-center transition-all">
                      <link.icon className="w-4 h-4 text-primary-600" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-medium">{t(link.label)}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* LOCATIONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-black mb-6 bg-gradient-to-r from-primary-600 to-medical-cyan bg-clip-text text-transparent">
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
                  whileHover={{ x: 4 }}
                  className="space-y-3 p-4 rounded-xl bg-white border border-clinical-silver/50 hover:border-primary-500/40 transition-all shadow-sm hover:shadow-md"
                >
                  <h5 className="font-bold text-primary-600 flex items-center gap-2">
                    <MapPin className="w-4 h-4" strokeWidth={2.5} />
                    {location.city}
                  </h5>
                  <p className="text-clinical-slate text-sm leading-relaxed">
                    {location.address}
                  </p>
                  <a
                    href={`tel:${location.phone}`}
                    className="flex items-center space-x-2 text-clinical-charcoal hover:text-primary-600 transition-colors text-sm group"
                  >
                    <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" strokeWidth={2.5} />
                    <span className="font-semibold">{location.phone}</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CONTACT & SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-black mb-6 bg-gradient-to-r from-primary-600 to-medical-cyan bg-clip-text text-transparent">
              {t({ es: "Conecta con Nosotros", en: "Connect With Us" })}
            </h4>

            <div className="space-y-4 mb-6">
              <motion.a
                href="mailto:info@drfranklamadrid.com"
                whileHover={{ x: 4 }}
                className="flex items-center space-x-3 text-clinical-charcoal hover:text-primary-600 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-50 group-hover:bg-primary-100 flex items-center justify-center transition-all">
                  <Mail className="w-5 h-5 text-primary-600" strokeWidth={2.5} />
                </div>
                <span className="text-sm font-medium">info@drfranklamadrid.com</span>
              </motion.a>

              <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-primary-50 to-medical-light rounded-xl border border-primary-500/20">
                <Instagram className="w-5 h-5 text-primary-600" strokeWidth={2.5} />
                <div>
                  <p className="text-xs text-clinical-slate">Instagram</p>
                  <p className="text-sm font-bold text-primary-700">673K Seguidores</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-medical-light to-primary-50 rounded-xl border border-primary-500/20">
                <Clock className="w-5 h-5 text-medical-cyan" strokeWidth={2.5} />
                <div>
                  <p className="text-xs text-clinical-slate">
                    {t({ es: "Horario de Atención", en: "Business Hours" })}
                  </p>
                  <p className="text-sm font-bold text-primary-700">Lun - Sáb: 8AM - 6PM</p>
                </div>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="space-y-4">
              <p className="text-sm text-clinical-charcoal font-semibold">
                {t({ es: "Síguenos en redes sociales", en: "Follow us on social media" })}
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity`} />
                    <div className={`relative w-12 h-12 bg-gradient-to-br ${social.gradient} rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all`}>
                      <social.icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative border-t border-clinical-silver/50 bg-white/50 backdrop-blur-sm">
        <div className="container-clinical py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-clinical-slate text-center md:text-left"
            >
              © {new Date().getFullYear()} Dr. Frank Lamadrid.{" "}
              {t({ es: "Todos los derechos reservados.", en: "All rights reserved." })}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-sm text-clinical-slate"
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

            <div className="flex space-x-6 text-sm text-clinical-slate">
              <Link to="/privacidad" className="hover:text-primary-600 transition-colors font-medium">
                {t({ es: "Privacidad", en: "Privacy" })}
              </Link>
              <Link to="/terminos" className="hover:text-primary-600 transition-colors font-medium">
                {t({ es: "Términos", en: "Terms" })}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL TO TOP BUTTON */}
      <motion.a
        href="#inicio"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -4, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-40 group hidden lg:block"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-medical-cyan rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
        <div className="relative w-14 h-14 bg-gradient-to-r from-primary-600 to-medical-cyan rounded-2xl flex items-center justify-center text-white shadow-medical">
          <ArrowUpRight className="w-6 h-6" strokeWidth={2.5} />
        </div>
      </motion.a>
    </footer>
  )
}

export default Footer
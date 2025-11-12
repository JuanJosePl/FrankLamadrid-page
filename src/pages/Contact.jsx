import React, { useState } from "react";
import {
  MessageCircle,
  Mail,
  Phone,
  Clock,
  MapPin,
  Globe,
  Send,
  Check,
  Star,
  Users,
  Heart,
  Calendar,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    procedure: "",
    message: "",
    preferredContact: "whatsapp",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const whatsappNumbers = [
    {
      id: 1,
      name: "Asistente Principal 🇨🇴-🇺🇸",
      number: "+573175112107",
      description: "Español e Inglés",
      availability: "24/7",
      color: "from-primary-500 to-primary-700",
    },
    {
      id: 2,
      name: "Coordinador Internacional",
      number: "+573175112092",
      description: "Turismo Médico",
      availability: "8am - 8pm COT",
      color: "from-medical-cyan to-primary-600",
    },
    {
      id: 3,
      name: "Especialista Consultas",
      number: "+573124586286",
      description: "Agendamiento",
      availability: "8am - 6pm COT",
      color: "from-primary-600 to-medical-cyan",
    },
    {
      id: 4,
      name: "Soporte Post-Operatorio",
      number: "+573013807953",
      description: "Seguimiento Pacientes",
      availability: "24/7 Emergencias",
      color: "from-accent-error to-accent-warning",
    },
    {
      id: 5,
      name: "Asistente VIP",
      number: "+573222732466",
      description: "Paquetes Premium",
      availability: "9am - 7pm COT",
      color: "from-primary-500 to-primary-700",
    },
    {
      id: 6,
      name: "Coordinador Financiero",
      number: "+573202485496",
      description: "Cotizaciones y Pagos",
      availability: "8am - 5pm COT",
      color: "from-medical-cyan to-primary-600",
    },
  ];

  const locations = [
    {
      city: "Barranquilla",
      address: "Calle 81 #46-41",
      location: "Unidad Quirúrgica San Miguel",
      phone: "+57 (5) 385-4400",
      email: "barranquilla@drlamadrid.com",
      hours: "Lun - Vie: 8am - 6pm, Sáb: 9am - 2pm",
      mapImage:
        "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80",
      features: [
        "Quirófano Certificado",
        "Sala Recuperación VIP",
        "Parking Privado",
        "Acceso Discapacitados",
      ],
    },
    {
      city: "Bogotá",
      address: "Carrera 19A #82-85",
      location: "Chapinero",
      phone: "+57 (1) 756-3200",
      email: "bogota@drlamadrid.com",
      hours: "Lun - Vie: 9am - 7pm, Sáb: 10am - 3pm",
      mapImage:
        "https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?w=800&q=80",
      features: [
        "Tecnología 4K",
        "Consultorios Modernos",
        "Zona T Cercana",
        "Valet Parking",
      ],
    },
  ];

  const procedures = [
    "Lipoescultura 4K",
    "Marcación Abdominal 4K",
    "Brazilian Butt Lift (BBL)",
    "Aumento Mamario",
    "Abdominoplastia",
    "Rinoplastia",
    "Múltiples Procedimientos",
    "Solo Consulta",
  ];

  const faqs = [
    {
      q: "¿Cuánto tiempo antes debo agendar mi consulta?",
      a: "Recomendamos agendar con al menos 2-3 semanas de anticipación, especialmente para pacientes internacionales que necesitan coordinar viaje.",
    },
    {
      q: "¿La consulta inicial tiene costo?",
      a: "La primera consulta virtual es completamente GRATIS para pacientes internacionales. Consultas presenciales en Colombia tienen un costo de $150,000 COP que se descuenta del procedimiento.",
    },
    {
      q: "¿Hablan inglés?",
      a: "Sí, todo nuestro equipo es bilingüe. El Dr. Lamadrid y nuestros coordinadores hablan perfectamente español e inglés.",
    },
    {
      q: "¿Cómo puedo pagar?",
      a: "Aceptamos transferencias internacionales, tarjetas de crédito/débito, efectivo y planes de financiamiento. Cotizaciones en USD, EUR y otras monedas disponibles.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-clinical-white via-clinical-snow to-clinical-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-medical-light/30 to-medical-cyan/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
              <span className="gradient-text-medical">Estamos Aquí</span>
              <br />
              <span className="text-clinical-graphite">Para Ti 24/7</span>
            </h1>
            <p className="text-xl text-clinical-charcoal mb-8 animate-fadeInUp animation-delay-200">
              Atención personalizada en español e inglés para pacientes de todo
              el mundo
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp animation-delay-400">
              <div className="bg-white rounded-2xl px-6 py-3 shadow-card flex items-center gap-3 border border-clinical-silver">
                <MessageCircle className="w-6 h-6 text-primary-500" />
                <div className="text-left">
                  <p className="text-sm text-clinical-slate">Respuesta en</p>
                  <p className="font-bold text-clinical-graphite">
                    Menos de 1 hora
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl px-6 py-3 shadow-card flex items-center gap-3 border border-clinical-silver">
                <Globe className="w-6 h-6 text-medical-cyan" />
                <div className="text-left">
                  <p className="text-sm text-clinical-slate">Atendemos</p>
                  <p className="font-bold text-clinical-graphite">50+ Países</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl px-6 py-3 shadow-card flex items-center gap-3 border border-clinical-silver">
                <Clock className="w-6 h-6 text-primary-600" />
                <div className="text-left">
                  <p className="text-sm text-clinical-slate">Disponibles</p>
                  <p className="font-bold text-clinical-graphite">24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Numbers Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-clinical-graphite mb-4">
              <span className="gradient-text-medical">Contacto Directo</span>{" "}
              por WhatsApp
            </h2>
            <p className="text-xl text-clinical-charcoal max-w-3xl mx-auto">
              Equipo especializado listo para responder todas tus preguntas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {whatsappNumbers.map((contact) => (
              <div
                key={contact.id}
                className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transform hover:-translate-y-2 transition-all group border border-clinical-silver"
              >
                <div
                  className={`bg-gradient-to-br ${contact.color} p-6 text-white`}
                >
                  <MessageCircle className="w-10 h-10 mb-3" />
                  <h3 className="text-xl font-bold mb-2">{contact.name}</h3>
                  <p className="text-sm opacity-90">{contact.description}</p>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-clinical-charcoal mb-4">
                    <Clock className="w-5 h-5" />
                    <span className="text-sm">{contact.availability}</span>
                  </div>
                  <a
                    href={`https://api.whatsapp.com/send?phone=${contact.number.replace(
                      /\D/g,
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full bg-gradient-to-r ${contact.color} text-white font-bold py-3 px-6 rounded-full hover:shadow-medical transform group-hover:scale-105 transition-all flex items-center justify-center gap-2`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Chatear Ahora</span>
                  </a>
                  <p className="text-center text-clinical-slate text-sm mt-3">
                    {contact.number}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-b from-clinical-snow to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-clinical-graphite mb-6">
                  Envíanos un{" "}
                  <span className="gradient-text-medical">Mensaje</span>
                </h2>
                <p className="text-lg text-clinical-charcoal mb-8">
                  Completa el formulario y nuestro equipo te contactará en menos
                  de 1 hora durante horario laboral.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: <Phone className="w-6 h-6" />,
                      title: "Llámanos",
                      info: "+57 (5) 385-4400",
                      color: "from-primary-500 to-primary-700",
                    },
                    {
                      icon: <Mail className="w-6 h-6" />,
                      title: "Email",
                      info: "info@drlamadrid.com",
                      color: "from-medical-cyan to-primary-600",
                    },
                    {
                      icon: <Clock className="w-6 h-6" />,
                      title: "Horarios",
                      info: "Lun-Vie 8am-6pm, Sáb 9am-2pm",
                      color: "from-primary-600 to-medical-cyan",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-bold text-clinical-graphite">
                          {item.title}
                        </p>
                        <p className="text-clinical-charcoal">{item.info}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-primary-500/10 to-medical-cyan/10 rounded-2xl border border-primary-500/20">
                  <p className="font-bold text-clinical-graphite mb-2">
                    🎁 Promoción Especial
                  </p>
                  <p className="text-clinical-charcoal">
                    ¡Consulta virtual GRATIS para pacientes internacionales!
                    Agenda hoy y recibe evaluación personalizada sin costo.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-card border border-clinical-silver">
                <div className="space-y-6">
                  <div>
                    <label className="block text-clinical-graphite font-semibold mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-clinical-silver focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-clinical-graphite font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-clinical-silver focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-clinical-graphite font-semibold mb-2">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-clinical-silver focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-clinical-graphite font-semibold mb-2">
                      País *
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-clinical-silver focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                      placeholder="¿Desde dónde nos contactas?"
                    />
                  </div>

                  <div>
                    <label className="block text-clinical-graphite font-semibold mb-2">
                      Procedimiento de Interés *
                    </label>
                    <select
                      value={formData.procedure}
                      onChange={(e) =>
                        setFormData({ ...formData, procedure: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-clinical-silver focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                    >
                      <option value="">Selecciona un procedimiento</option>
                      {procedures.map((proc, idx) => (
                        <option key={idx} value={proc}>
                          {proc}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-clinical-graphite font-semibold mb-2">
                      Mensaje
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-clinical-silver focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                      placeholder="Cuéntanos más sobre lo que buscas..."
                    />
                  </div>

                  <div>
                    <label className="block text-clinical-graphite font-semibold mb-3">
                      Método de Contacto Preferido
                    </label>
                    <div className="flex gap-4">
                      {[
                        {
                          value: "whatsapp",
                          label: "WhatsApp",
                          icon: <MessageCircle className="w-5 h-5" />,
                        },
                        {
                          value: "email",
                          label: "Email",
                          icon: <Mail className="w-5 h-5" />,
                        },
                        {
                          value: "phone",
                          label: "Teléfono",
                          icon: <Phone className="w-5 h-5" />,
                        },
                      ].map((method) => (
                        <button
                          key={method.value}
                          onClick={() =>
                            setFormData({
                              ...formData,
                              preferredContact: method.value,
                            })
                          }
                          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 transition-all ${
                            formData.preferredContact === method.value
                              ? "border-primary-500 bg-primary-500/10"
                              : "border-clinical-silver hover:border-primary-500/50"
                          }`}
                        >
                          {method.icon}
                          <span className="font-semibold">{method.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold py-4 px-8 rounded-full hover:shadow-medical transform hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    {submitted ? (
                      <>
                        <Check className="w-5 h-5" />
                        <span>¡Mensaje Enviado!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-clinical-graphite mb-4">
              Nuestras{" "}
              <span className="gradient-text-medical">Ubicaciones</span>
            </h2>
            <p className="text-xl text-clinical-charcoal max-w-3xl mx-auto">
              Dos sedes de clase mundial en Colombia para servirte mejor
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {locations.map((location, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all border border-clinical-silver"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={location.mapImage}
                    alt={location.city}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-bold mb-1">{location.city}</h3>
                    <p className="text-sm opacity-90">{location.location}</p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-clinical-graphite">
                          {location.address}
                        </p>
                        <p className="text-clinical-charcoal text-sm">
                          {location.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-6 h-6 text-medical-cyan flex-shrink-0" />
                      <p className="text-clinical-charcoal">{location.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-6 h-6 text-primary-600 flex-shrink-0" />
                      <p className="text-clinical-charcoal">{location.email}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-6 h-6 text-health-emerald flex-shrink-0" />
                      <p className="text-clinical-charcoal">{location.hours}</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-clinical-silver">
                    <p className="font-semibold text-clinical-graphite mb-3">
                      Servicios de la Sede:
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {location.features.map((feature, featIdx) => (
                        <div
                          key={featIdx}
                          className="flex items-center gap-2 text-sm text-clinical-charcoal"
                        >
                          <Check className="w-4 h-4 text-primary-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold py-3 px-6 rounded-full hover:shadow-medical transform hover:scale-105 transition-all flex items-center justify-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>Ver en Google Maps</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-clinical-snow to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-clinical-graphite mb-4">
              Preguntas{" "}
              <span className="gradient-text-medical">Frecuentes</span>
            </h2>
            <p className="text-xl text-clinical-charcoal max-w-3xl mx-auto">
              Respuestas rápidas a las dudas más comunes
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all group border border-clinical-silver"
              >
                <summary className="font-bold text-lg text-clinical-graphite cursor-pointer flex items-center justify-between">
                  <span>{faq.q}</span>
                  <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all flex-shrink-0 ml-4">
                    <span className="text-xl">+</span>
                  </div>
                </summary>
                <p className="text-clinical-charcoal mt-4 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-medical-cyan to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Síguenos en Redes Sociales
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Únete a nuestra comunidad de 673K seguidores y descubre
            transformaciones diarias
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              {
                name: "Instagram",
                followers: "673K",
                color: "from-primary-600 to-medical-cyan",
              },
              {
                name: "Facebook",
                followers: "125K",
                color: "from-medical-cyan to-primary-700",
              },
              {
                name: "YouTube",
                followers: "89K",
                color: "from-accent-error to-primary-600",
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href="#"
                className={`bg-gradient-to-r ${social.color} px-8 py-4 rounded-full hover:shadow-medical-xl transform hover:scale-105 transition-all flex items-center gap-3 font-bold border-2 border-white/20`}
              >
                <div className="text-left">
                  <p className="text-sm opacity-90">{social.name}</p>
                  <p className="text-lg">{social.followers}</p>
                </div>
              </a>
            ))}
          </div>

          <p className="text-sm opacity-75">
            📱 Respuestas más rápidas por WhatsApp - Disponible 24/7
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;

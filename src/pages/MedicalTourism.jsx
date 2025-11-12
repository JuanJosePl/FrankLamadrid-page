import { useState } from "react";
import {
  Plane,
  Hotel,
  Heart,
  Shield,
  MapPin,
  Calendar,
  Users,
  Star,
  CheckCircle,
  Globe,
  Palmtree,
  Camera,
  Coffee,
  ArrowRight,
  Phone,
  X,
} from "lucide-react";

const MedicalTourism = () => {
  const [selectedPackage, setSelectedPackage] = useState("complete");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const packages = [
    {
      id: "complete",
      name: "Paquete Completo Premium",
      price: "Desde $8,500 USD",
      duration: "7-10 días",
      ideal: "Procedimientos mayores",
      color: "from-primary-500 to-primary-700",
      features: [
        { icon: <Plane />, text: "Recogida en aeropuerto VIP" },
        { icon: <Hotel />, text: "Hotel 5 estrellas 7 noches" },
        { icon: <Heart />, text: "Cirugía + Anestesia + Medicamentos" },
        { icon: <Users />, text: "Enfermera 24/7 los primeros 3 días" },
        { icon: <Shield />, text: "5 sesiones drenaje linfático" },
        { icon: <Coffee />, text: "3 comidas diarias balanceadas" },
        { icon: <Camera />, text: "City tour recuperación" },
        { icon: <Phone />, text: "Línea directa emergencias" },
      ],
    },
    {
      id: "express",
      name: "Paquete Express",
      price: "Desde $6,200 USD",
      duration: "4-5 días",
      ideal: "Procedimientos ambulatorios",
      color: "from-primary-400 to-medical-cyan",
      features: [
        { icon: <Plane />, text: "Transfer aeropuerto incluido" },
        { icon: <Hotel />, text: "Hotel 4 estrellas 4 noches" },
        { icon: <Heart />, text: "Cirugía completa" },
        { icon: <Users />, text: "Acompañamiento post-op 48h" },
        { icon: <Shield />, text: "2 sesiones drenaje linfático" },
        { icon: <Coffee />, text: "Desayunos incluidos" },
        { icon: <Phone />, text: "Asistencia 24/7" },
      ],
    },
    {
      id: "vip",
      name: "Experiencia VIP Luxury",
      price: "Desde $12,000 USD",
      duration: "10-14 días",
      ideal: "Máximo confort y exclusividad",
      color: "from-medical-navy to-primary-600",
      features: [
        { icon: <Plane />, text: "Transfer privado de lujo" },
        { icon: <Hotel />, text: "Suite presidencial 10 noches" },
        { icon: <Heart />, text: "Cirugía VIP + Sedación exclusiva" },
        { icon: <Users />, text: "Enfermera privada 24/7 toda estadía" },
        { icon: <Shield />, text: "10 sesiones spa y drenaje" },
        { icon: <Coffee />, text: "Chef privado y nutricionista" },
        { icon: <Camera />, text: "Tours privados y experiencias" },
        { icon: <Star />, text: "Concierge personal" },
      ],
    },
  ];

  const destinations = [
    {
      city: "Barranquilla",
      image:
        "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80",
      description:
        "Ciudad caribeña con clima cálido, playas cercanas y la alegría del Carnaval",
      attractions: [
        "Carnaval de Barranquilla",
        "Bocas de Ceniza",
        "Malecón del Río",
        "Gastronomía costeña",
      ],
      temp: "28-32°C",
    },
    {
      city: "Bogotá",
      image:
        "https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?w=800&q=80",
      description:
        "Capital cosmopolita con vida cultural vibrante, gastronomía de clase mundial",
      attractions: ["Monserrate", "Zona T", "La Candelaria", "Museos de oro"],
      temp: "8-19°C",
    },
  ];

  const processTimeline = [
    {
      step: "1",
      title: "Consulta Virtual Gratis",
      description:
        "Videollamada con el Dr. Lamadrid para evaluar tu caso y diseñar tu plan",
      icon: <Globe />,
      color: "bg-primary-500",
    },
    {
      step: "2",
      title: "Planificación del Viaje",
      description:
        "Coordinamos fechas, vuelos, hotel y todos los detalles de tu estadía",
      icon: <Calendar />,
      color: "bg-medical-cyan",
    },
    {
      step: "3",
      title: "Llegada a Colombia",
      description:
        "Te recogemos en el aeropuerto y te llevamos directo a tu hotel",
      icon: <Plane />,
      color: "bg-primary-600",
    },
    {
      step: "4",
      title: "Día Pre-Operatorio",
      description:
        "Consulta presencial, exámenes finales y preparación para cirugía",
      icon: <Heart />,
      color: "bg-primary-400",
    },
    {
      step: "5",
      title: "Tu Transformación",
      description: "Día de la cirugía en quirófano de última generación",
      icon: <Star />,
      color: "bg-medical-navy",
    },
    {
      step: "6",
      title: "Recuperación VIP",
      description: "Cuidados post-operatorios, drenajes, y seguimiento diario",
      icon: <Shield />,
      color: "bg-health-emerald",
    },
    {
      step: "7",
      title: "Explora Colombia",
      description: "Tours opcionales mientras te recuperas en paraíso",
      icon: <Palmtree />,
      color: "bg-medical-cyan",
    },
    {
      step: "8",
      title: "Regreso a Casa",
      description: "Transfer al aeropuerto y seguimiento virtual continuo",
      icon: <Phone />,
      color: "bg-primary-500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      country: "Estados Unidos 🇺🇸",
      procedure: "Lipoescultura 4K + BBL",
      rating: 5,
      text: "La mejor decisión de mi vida. El equipo me cuidó increíblemente, el hotel fue hermoso y Barranquilla es mágica. Ahorré más de $10,000 comparado con USA y los resultados son perfectos.",
      savings: "$10,500",
    },
    {
      name: "Emma L.",
      country: "Canadá 🇨🇦",
      procedure: "Abdominoplastia + Lipo 360",
      rating: 5,
      text: "Todo fue organizado perfectamente. Me sentí segura en cada momento. Colombia es hermoso y el Dr. Lamadrid es un artista. Recuperación más fácil de lo esperado.",
      savings: "$8,200",
    },
    {
      name: "Isabella R.",
      country: "Italia 🇮🇹",
      procedure: "Marcación Abdominal 4K",
      rating: 5,
      text: "Vine desde Europa y valió cada kilómetro. La técnica 4K es realmente única. El equipo habla perfecto inglés y me hicieron sentir como en casa. ¡Volveré!",
      savings: "€7,800",
    },
  ];

  const includedServices = [
    {
      category: "Servicios Médicos",
      icon: <Heart className="w-6 h-6" />,
      color: "from-primary-500 to-primary-700",
      items: [
        "Consulta pre-operatoria completa",
        "Exámenes de laboratorio",
        "Cirugía con anestesia incluida",
        "Medicamentos post-operatorios",
        "Faja de compresión premium",
        "Controles médicos seguimiento",
        "Línea directa 24/7 emergencias",
      ],
    },
    {
      category: "Alojamiento & Transporte",
      icon: <Hotel className="w-6 h-6" />,
      color: "from-medical-cyan to-primary-500",
      items: [
        "Hotel 4-5 estrellas ubicación prime",
        "Desayuno buffet diario",
        "Transfer aeropuerto-hotel-clínica",
        "WiFi alta velocidad",
        "Habitación privada confortable",
        "Servicio de lavandería",
        "Asistencia concierge",
      ],
    },
    {
      category: "Cuidados Post-Operatorios",
      icon: <Shield className="w-6 h-6" />,
      color: "from-health-emerald to-health-forest",
      items: [
        "Enfermera acompañamiento 24/7",
        "Sesiones drenaje linfático",
        "Terapia recuperación",
        "Plan nutricional personalizado",
        "Kit recuperación completo",
        "Seguimiento fotográfico",
        "Soporte emocional continuo",
      ],
    },
    {
      category: "Experiencia Turística",
      icon: <Camera className="w-6 h-6" />,
      color: "from-primary-400 to-medical-cyan",
      items: [
        "City tour durante recuperación",
        "Guía turístico bilingüe",
        "Recomendaciones restaurantes",
        "Asistencia para compras",
        "Experiencias culturales",
        "Fotografía profesional opcional",
        "SIM card local con datos",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-clinical-white via-clinical-snow to-clinical-white">
      {/* Hero Section */}
      <section className="relative section-spacing overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80"
            alt="Colombia"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/40 via-medical-cyan/30 to-primary-600/40" />
        </div>

        <div className="container-clinical relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 animate-fade-in-up">
              <span className="badge-medical">
                🌎 TURISMO MÉDICO INTERNACIONAL
              </span>
            </div>
            <h1 className="heading-display text-clinical-white mb-6 animate-fade-in-up animation-delay-200">
              Transforma Tu Vida en el
              <br />
              <span className="gradient-text bg-gradient-to-r from-primary-100 to-medical-light">
                Paraíso Colombiano
              </span>
            </h1>
            <p className="body-lg text-clinical-white mb-8 animate-fade-in-up animation-delay-400">
              Cirugía de clase mundial + Hospitalidad de 5 estrellas + Ahorro
              hasta 70% + Vacaciones inolvidables
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-600">
              <a
                href="https://api.whatsapp.com/send?phone=573175112107"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-clinic inline-flex items-center gap-2"
              >
                <span>Consulta Virtual Gratis</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-secondary-clinic"
              >
                Ver Paquetes Completos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-clinical-dark/60 backdrop-blur-sm p-4">
          <div className="glass-clinic rounded-3xl shadow-premium max-w-5xl w-full relative overflow-hidden">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-clinical-silver p-2 rounded-full hover:bg-clinical-steel smooth-transition"
            >
              <X className="w-6 h-6 text-clinical-graphite" />
            </button>

            <div className="p-8 text-center border-b border-clinical-silver">
              <h2 className="heading-lg text-clinical-graphite mb-2">
                Nuestros Paquetes Completos
              </h2>
              <p className="text-clinical-charcoal">
                Selecciona el plan ideal para tu cirugía y recuperación
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 p-6">
              {packages.map((pkg) => (
                <div key={pkg.id} className="clinic-card">
                  <div
                    className={`bg-gradient-to-br ${pkg.color} text-clinical-white p-6 rounded-2xl mb-6`}
                  >
                    <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-lg font-semibold">{pkg.price}</p>
                    <p className="text-sm opacity-90">
                      {pkg.duration} • {pkg.ideal}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {pkg.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div
                          className={`w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br ${pkg.color} text-clinical-white`}
                        >
                          {f.icon}
                        </div>
                        <span className="text-clinical-charcoal text-sm">
                          {f.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-clinical-silver text-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="btn-primary-clinic"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Why Colombia Section */}
      <section className="section-spacing bg-clinical-white">
        <div className="container-clinical">
          <div className="section-header">
            <h2 className="heading-xl text-clinical-graphite mb-4">
              ¿Por Qué <span className="gradient-text-medical">Colombia</span>?
            </h2>
            <p className="body-lg max-w-3xl mx-auto">
              El destino #1 en Latinoamérica para turismo médico de calidad
            </p>
          </div>

          <div className="grid-clinical-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "💰",
                title: "Ahorro 60-70%",
                description:
                  "Misma calidad que USA/Europa a fracción del precio",
              },
              {
                icon: "⭐",
                title: "Cirujanos de Elite",
                description:
                  "Especialistas formados en las mejores instituciones mundiales",
              },
              {
                icon: "🏥",
                title: "Tecnología Avanzada",
                description: "Quirófanos con equipamiento de última generación",
              },
              {
                icon: "🌴",
                title: "Recuperación en Paraíso",
                description: "Clima perfecto, playas y cultura vibrante",
              },
            ].map((reason, idx) => (
              <div key={idx} className="clinic-card text-center">
                <div className="text-5xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-clinical-graphite mb-3">
                  {reason.title}
                </h3>
                <p className="text-clinical-charcoal">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-spacing bg-gradient-to-b from-clinical-snow to-clinical-white">
        <div className="container-clinical">
          <div className="section-header">
            <h2 className="heading-xl text-clinical-graphite mb-4">
              Paquetes{" "}
              <span className="gradient-text-medical">Todo Incluido</span>
            </h2>
            <p className="body-lg max-w-3xl mx-auto">
              Elige el paquete perfecto para tu transformación sin
              preocupaciones
            </p>
          </div>

          <div className="grid-clinical-3 max-w-7xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`procedure-card ${
                  selectedPackage === pkg.id ? "ring-4 ring-primary-500" : ""
                }`}
              >
                <div
                  className={`bg-gradient-to-br ${pkg.color} text-clinical-white p-8 text-center`}
                >
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold mb-2">{pkg.price}</div>
                  <div className="flex items-center justify-center gap-2 text-sm opacity-90">
                    <Calendar className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="mt-3 bg-clinical-white/20 rounded-full px-4 py-1 text-sm inline-block">
                    Ideal: {pkg.ideal}
                  </div>
                </div>

                <div className="p-8">
                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${pkg.color} text-clinical-white flex items-center justify-center`}
                        >
                          {feature.icon}
                        </div>
                        <p className="text-clinical-charcoal pt-2">
                          {feature.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`w-full font-bold py-4 px-6 rounded-full smooth-transition ${
                      selectedPackage === pkg.id
                        ? `bg-gradient-to-r ${pkg.color} text-clinical-white shadow-medical`
                        : "bg-clinical-silver text-clinical-graphite hover:bg-clinical-steel"
                    }`}
                  >
                    {selectedPackage === pkg.id
                      ? "Paquete Seleccionado"
                      : "Seleccionar Paquete"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-spacing bg-clinical-white">
        <div className="container-clinical">
          <div className="section-header">
            <h2 className="heading-xl text-clinical-graphite mb-4">
              Tu Viaje{" "}
              <span className="gradient-text-medical">Paso a Paso</span>
            </h2>
            <p className="body-lg max-w-3xl mx-auto">
              Un proceso simple y seguro desde la consulta hasta tu regreso a
              casa
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 via-medical-cyan to-health-emerald hidden md:block" />

              {processTimeline.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative flex items-center mb-12 ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-full md:w-5/12 ${
                      idx % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="clinic-card">
                      <h3 className="text-xl font-bold text-clinical-graphite mb-2">
                        {item.title}
                      </h3>
                      <p className="text-clinical-charcoal">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                    <div
                      className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-clinical-white text-2xl font-bold shadow-medical`}
                    >
                      {item.step}
                    </div>
                  </div>

                  <div className="w-full md:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="section-spacing bg-gradient-to-b from-clinical-snow to-clinical-white">
        <div className="container-clinical">
          <div className="section-header">
            <h2 className="heading-xl text-clinical-graphite mb-4">
              Nuestras{" "}
              <span className="gradient-text-medical">Sedes en Colombia</span>
            </h2>
            <p className="body-lg max-w-3xl mx-auto">
              Dos ciudades increíbles, una misma excelencia médica
            </p>
          </div>

          <div className="grid-clinical-2 max-w-6xl mx-auto">
            {destinations.map((dest, idx) => (
              <div key={idx} className="procedure-card group">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.city}
                    className="w-full h-full object-cover transform group-hover:scale-110 smooth-transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-clinical-dark/80 via-clinical-dark/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-clinical-white">
                    <h3 className="text-3xl font-bold mb-2">{dest.city}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>Temperatura: {dest.temp}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-clinical-charcoal mb-6">
                    {dest.description}
                  </p>
                  <h4 className="font-bold text-clinical-graphite mb-3">
                    Atracciones Cercanas:
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {dest.attractions.map((attraction, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-clinical-charcoal text-sm"
                      >
                        <Star className="w-4 h-4 text-primary-500 flex-shrink-0" />
                        <span>{attraction}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included Services */}
      <section className="section-spacing bg-clinical-white">
        <div className="container-clinical">
          <div className="section-header">
            <h2 className="heading-xl text-clinical-graphite mb-4">
              <span className="gradient-text-medical">Todo Incluido</span> en Tu
              Paquete
            </h2>
            <p className="body-lg max-w-3xl mx-auto">
              Sin sorpresas, sin costos ocultos. Todo lo que necesitas está
              cubierto
            </p>
          </div>

          <div className="grid-clinical-2 max-w-6xl mx-auto">
            {includedServices.map((service, idx) => (
              <div key={idx} className="content-block">
                <div
                  className={`inline-block p-4 bg-gradient-to-br ${service.color} text-clinical-white rounded-2xl mb-6`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-clinical-graphite mb-6">
                  {service.category}
                </h3>
                <div className="space-y-3">
                  {service.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-health-emerald flex-shrink-0 mt-0.5" />
                      <span className="text-clinical-charcoal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-spacing bg-gradient-to-b from-clinical-snow to-clinical-white">
        <div className="container-clinical">
          <div className="section-header">
            <h2 className="heading-xl text-clinical-graphite mb-4">
              Historias de{" "}
              <span className="gradient-text-medical">
                Pacientes Internacionales
              </span>
            </h2>
            <p className="body-lg max-w-3xl mx-auto">
              Miles de personas de todo el mundo han confiado en nosotros
            </p>
          </div>

          <div className="grid-clinical-3 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-clinical">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-bold text-clinical-graphite text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-clinical-charcoal text-sm">
                      {testimonial.country}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary-500 text-primary-500"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-clinical-charcoal mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-clinical-silver pt-4">
                  <p className="text-sm text-clinical-slate">Procedimiento:</p>
                  <p className="font-semibold text-clinical-graphite">
                    {testimonial.procedure}
                  </p>
                  <div className="mt-2 bg-health-mint text-health-forest px-4 py-2 rounded-full text-sm inline-block font-semibold">
                    Ahorró: {testimonial.savings}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-spacing bg-gradient-to-br from-clinical-graphite via-primary-300 to-medical-navy text-clinical-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-medical-cyan rounded-full filter blur-3xl" />
        </div>
        <div className="container-clinical relative z-10 text-center">
          <h2 className="heading-xl mb-6">
            Comienza Tu Aventura de Transformación
          </h2>
          <p className="body-lg mb-8 max-w-2xl mx-auto opacity-90">
            Agenda tu consulta virtual gratis hoy y recibe un plan personalizado
            sin compromiso
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=573175112107"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-clinic bg-clinical-white text-primary-700 hover:bg-clinical-snow inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Consulta Virtual Gratis</span>
            </a>
            <button className="btn-secondary-clinic bg-primary-500 border-clinical-white text-clinical-white hover:bg-primary-600">
              Descargar Guía del Viajero
            </button>
          </div>
          <p className="mt-8 text-sm opacity-75">
            Atendemos pacientes de: 🇺🇸 🇨🇦 🇬🇧 🇩🇪 🇫🇷 🇮🇹 🇪🇸 🇦🇺 y más de 50 países
          </p>
        </div>
      </section>
    </div>
  );
};

export default MedicalTourism;

import { useState } from "react";
import {
  Sparkles,
  Zap,
  Heart,
  Star,
  Clock,
  Shield,
  ArrowRight,
  Play,
  X,
  CheckCircle2,
} from "lucide-react";

const Procedures = () => {
  const [selectedProcedure, setSelectedProcedure] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const procedures = [
    {
      id: 1,
      title: "Lipoescultura 4K",
      subtitle: "Técnica Revolucionaria Exclusiva",
      icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8" />,
      description:
        "Técnica innovadora creada por el Dr. Lamadrid que combina extracción profunda de grasa con tecnología de última generación para resultados 4K de alta definición.",
      benefits: [
        "Incisiones mínimas de solo 3mm",
        "Tecnología que licúa grasa y estimula colágeno",
        "Retracción natural de la piel",
        "Reducción de cintura sin cirugía de costillas",
        "Recuperación más rápida",
        "Resultados de alta definición 4K",
      ],
      process: [
        { step: "Consulta inicial y análisis 3D", duration: "1 hora" },
        { step: "Preparación y marcación personalizada", duration: "45 min" },
        {
          step: "Procedimiento con anestesia local o general",
          duration: "2-4 horas",
        },
        {
          step: "Recuperación inmediata con acompañamiento",
          duration: "2-4 horas",
        },
        {
          step: "Seguimiento post-operatorio especializado",
          duration: "3 meses",
        },
      ],
      recovery: "3-7 días reposo, 2-3 semanas para actividad normal",
      color: "from-primary-500 to-primary-700",
      bgGradient: "from-primary-50 to-medical-light",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    },
    {
      id: 2,
      title: "Marcación Abdominal 4K",
      subtitle: "Abdomen Esculpido de Alta Definición",
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
      description:
        "Esculpido preciso del abdomen para revelar la musculatura natural con resultados de alta definición, creando el aspecto atlético deseado.",
      benefits: [
        "Definición muscular natural y visible",
        "Resultados permanentes con estilo de vida saludable",
        "Sin necesidad de ejercicio extremo",
        "Técnica mínimamente invasiva",
        "Apto para hombres y mujeres",
        "Armonización completa del torso",
      ],
      process: [
        {
          step: "Evaluación física y diseño personalizado",
          duration: "1 hora",
        },
        { step: "Marcación anatómica precisa", duration: "30 min" },
        { step: "Lipoescultura selectiva 4K", duration: "3-5 horas" },
        { step: "Aplicación de faja de compresión", duration: "15 min" },
        { step: "Protocolo de recuperación guiado", duration: "4-6 semanas" },
      ],
      recovery: "5-10 días reposo, resultados visibles en 2-3 meses",
      color: "from-medical-cyan to-primary-600",
      bgGradient: "from-medical-light to-medical-sky",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    },
    {
      id: 3,
      title: "Aumento de Glúteos",
      subtitle: "Brazilian Butt Lift (BBL) Seguro",
      icon: <Heart className="w-6 h-6 md:w-8 md:h-8" />,
      description:
        "Técnica de lipotransferencia para aumentar y remodelar los glúteos utilizando grasa propia del paciente, con los más altos estándares de seguridad.",
      benefits: [
        "Uso de grasa propia (100% natural)",
        "Resultados naturales y armoniosos",
        "Doble beneficio: reduce zonas y aumenta glúteos",
        "Sin implantes ni materiales extraños",
        "Protocolo de seguridad internacional",
        "Forma personalizada según anatomía",
      ],
      process: [
        { step: "Análisis corporal y diseño de contorno", duration: "1 hora" },
        {
          step: "Extracción de grasa de zonas donantes",
          duration: "1-2 horas",
        },
        { step: "Purificación y preparación de grasa", duration: "45 min" },
        { step: "Infiltración estratégica en glúteos", duration: "1-2 horas" },
        { step: "Cuidados especiales post-operatorios", duration: "6 semanas" },
      ],
      recovery: "2 semanas sin sentarse directamente, 1 mes actividad completa",
      color: "from-primary-400 to-medical-cyan",
      bgGradient: "from-primary-50 to-medical-light",
      image:
        "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80",
    },
    {
      id: 4,
      title: "Mamoplastia de Aumento",
      subtitle: "Senos Naturales y Armoniosos",
      icon: <Star className="w-6 h-6 md:w-8 md:h-8" />,
      description:
        "Aumento mamario con implantes de última generación, diseñado para crear proporciones naturales y armoniosas según tu anatomía única.",
      benefits: [
        "Implantes de alta tecnología y seguridad",
        "Cicatrices mínimas y discretas",
        "Resultados naturales al tacto",
        "Múltiples opciones de forma y tamaño",
        "Técnica de bolsillo submuscular",
        "Garantía de implantes de por vida",
      ],
      process: [
        { step: "Consulta y selección de implantes", duration: "1.5 horas" },
        { step: "Pruebas preoperatorias completas", duration: "Día previo" },
        { step: "Cirugía con técnica avanzada", duration: "2-3 horas" },
        { step: "Recuperación en sala especializada", duration: "4-6 horas" },
        { step: "Seguimiento y ajustes post-operatorios", duration: "6 meses" },
      ],
      recovery: "7 días reposo, 3-4 semanas para actividad normal",
      color: "from-primary-600 to-medical-navy",
      bgGradient: "from-primary-100 to-medical-light",
      image:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
    },
    {
      id: 5,
      title: "Abdominoplastia",
      subtitle: "Abdomen Plano y Firme",
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />,
      description:
        "Remoción de exceso de piel y grasa abdominal, reparación muscular y recontorneo para un abdomen firme, plano y juvenil.",
      benefits: [
        "Elimina piel flácida y estrías",
        "Repara diástasis de rectos abdominales",
        "Redefine la cintura y contorno",
        "Resultados dramáticos y duraderos",
        "Mejora postura y dolor de espalda",
        "Puede combinarse con lipoescultura",
      ],
      process: [
        { step: "Evaluación completa y planeación", duration: "1 hora" },
        { step: "Marcación quirúrgica detallada", duration: "30 min" },
        { step: "Cirugía completa de abdomen", duration: "3-5 horas" },
        { step: "Colocación de drenajes y vendajes", duration: "30 min" },
        {
          step: "Recuperación supervisada especializada",
          duration: "2-3 meses",
        },
      ],
      recovery: "2-3 semanas reposo, 6-8 semanas actividad completa",
      color: "from-health-emerald to-health-forest",
      bgGradient: "from-health-mint to-health-sage",
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    },
    {
      id: 6,
      title: "Rinoplastia",
      subtitle: "Armonía Facial Perfecta",
      icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8" />,
      description:
        "Cirugía de nariz para mejorar proporciones faciales, corregir problemas respiratorios y crear armonía estética natural.",
      benefits: [
        "Mejora proporciones faciales",
        "Corrección funcional respiratoria",
        "Técnicas abiertas o cerradas",
        "Resultados naturales y permanentes",
        "Aumento de autoestima",
        "Personalización total según rostro",
      ],
      process: [
        { step: "Análisis facial computarizado 3D", duration: "1 hora" },
        { step: "Diseño de nueva estructura nasal", duration: "45 min" },
        { step: "Cirugía de remodelación", duration: "2-4 horas" },
        { step: "Colocación de férula protectora", duration: "15 min" },
        { step: "Seguimiento y retiro de puntos", duration: "1 año" },
      ],
      recovery: "1 semana con férula, 2-3 semanas para verse bien",
      color: "from-primary-500 to-medical-cyan",
      bgGradient: "from-primary-50 to-medical-sky",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
    },
  ];

  const ProcedureModal = ({ procedure, onClose }) => (
    <div className="fixed inset-0 bg-clinical-dark/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="glass-clinic rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative border-2 border-primary-500/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-clinical-white rounded-full p-2 shadow-medical hover:shadow-medical-lg smooth-transition hover:rotate-90"
        >
          <X className="w-6 h-6 text-clinical-graphite" />
        </button>

        <div
          className={`bg-gradient-to-br ${procedure.bgGradient} p-6 md:p-8 rounded-t-3xl`}
        >
          <div
            className={`inline-block p-3 md:p-4 bg-gradient-to-br ${procedure.color} text-clinical-white rounded-2xl mb-4`}
          >
            {procedure.icon}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-clinical-graphite mb-2">
            {procedure.title}
          </h2>
          <p className="text-lg md:text-xl text-clinical-charcoal">{procedure.subtitle}</p>
        </div>

        <div className="p-6 md:p-8">
          <div className="mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-clinical-graphite mb-4">
              Descripción del Procedimiento
            </h3>
            <p className="text-clinical-charcoal text-base md:text-lg leading-relaxed">
              {procedure.description}
            </p>
          </div>

          <div className="mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-clinical-graphite mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 md:w-6 md:h-6 text-primary-500" />
              Beneficios Clave
            </h3>
            <div className="grid md:grid-cols-2 gap-3 md:gap-4">
              {procedure.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-clinical-snow p-3 md:p-4 rounded-xl border border-clinical-silver"
                >
                  <CheckCircle2 className="w-5 h-5 text-health-emerald flex-shrink-0 mt-0.5" />
                  <p className="text-clinical-charcoal text-sm md:text-base">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-clinical-graphite mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary-500" />
              Proceso Paso a Paso
            </h3>
            <div className="space-y-3 md:space-y-4">
              {procedure.process.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 md:gap-4 bg-clinical-snow p-4 md:p-5 rounded-xl border border-clinical-silver"
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br ${procedure.color} text-clinical-white flex items-center justify-center font-bold text-sm md:text-base`}
                  >
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-clinical-graphite text-sm md:text-base">{item.step}</p>
                    <p className="text-xs md:text-sm text-clinical-slate mt-1">
                      Duración: {item.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="info-panel p-4 md:p-6 rounded-xl mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl font-bold text-clinical-graphite mb-2 flex items-center gap-2">
              <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary-600" />
              Recuperación
            </h3>
            <p className="text-clinical-charcoal text-base md:text-lg">{procedure.recovery}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=573175112107"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-clinic flex items-center justify-center gap-2 flex-1"
            >
              <span>Agendar Consulta</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <button
              onClick={() => setShowVideoModal(true)}
              className="btn-secondary-clinic flex items-center justify-center gap-2 flex-1"
            >
              <Play className="w-5 h-5" />
              <span>Ver Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-clinical-snow to-clinical-white">
      {/* Hero Section */}
      <section className="relative section-spacing overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-medical-cyan/3 to-transparent" />
        <div className="container-clinical relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-display mb-6 animate-fade-in-up">
              <span className="gradient-text-medical">Procedimientos de</span>
              <br />
              <span className="text-clinical-graphite">Clase Mundial</span>
            </h1>
            <p className="body-lg mb-8 animate-fade-in-up text-clinical-charcoal">
              Técnicas avanzadas y resultados excepcionales con más de 18,000
              cirugías exitosas
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up">
              <div className="clinic-card px-4 md:px-6 py-3 min-w-[120px]">
                <p className="text-2xl md:text-3xl font-bold text-primary-600">18,000+</p>
                <p className="text-xs md:text-sm text-clinical-slate font-semibold">Cirugías Exitosas</p>
              </div>
              <div className="clinic-card px-4 md:px-6 py-3 min-w-[120px]">
                <p className="text-2xl md:text-3xl font-bold text-medical-cyan">50+</p>
                <p className="text-xs md:text-sm text-clinical-slate font-semibold">Países Atendidos</p>
              </div>
              <div className="clinic-card px-4 md:px-6 py-3 min-w-[120px]">
                <p className="text-2xl md:text-3xl font-bold text-primary-600">15+</p>
                <p className="text-xs md:text-sm text-clinical-slate font-semibold">Años Experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procedures Grid */}
      <section className="section-spacing">
        <div className="container-clinical">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {procedures.map((procedure, idx) => (
              <div
                key={procedure.id}
                className="procedure-card group cursor-pointer"
                onClick={() => setSelectedProcedure(procedure)}
              >
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={procedure.image}
                    alt={procedure.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 smooth-transition duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${procedure.color} opacity-60 group-hover:opacity-40 smooth-transition`}
                  />
                  <div className="absolute top-4 right-4 bg-clinical-white rounded-full p-2 md:p-3 shadow-medical">
                    {procedure.icon}
                  </div>
                </div>

                <div className="p-5 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-clinical-graphite mb-2 group-hover:text-primary-600 smooth-transition">
                    {procedure.title}
                  </h3>
                  <p className="text-clinical-slate mb-4 text-sm md:text-base font-semibold">{procedure.subtitle}</p>
                  <p className="text-clinical-charcoal mb-6 line-clamp-3 text-sm md:text-base">
                    {procedure.description}
                  </p>

                  <button className="w-full bg-gradient-to-r from-clinical-silver to-clinical-steel text-clinical-graphite font-semibold py-3 px-6 rounded-full hover:from-primary-500 hover:to-medical-cyan hover:text-clinical-white smooth-transition flex items-center justify-center gap-2 group/btn">
                    <span>Ver Detalles</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 smooth-transition" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-br from-clinical-graphite to-primary-200 text-clinical-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-medical-cyan rounded-full filter blur-3xl" />
        </div>
        <div className="container-clinical relative z-10 text-center">
          <h2 className="heading-xl mb-6">
            ¿Listo para Tu Transformación?
          </h2>
          <p className="body-lg mb-8 max-w-2xl mx-auto opacity-90">
            Agenda una consulta personalizada y descubre cómo podemos ayudarte a
            alcanzar tus objetivos estéticos
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=573175112107"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-clinic bg-clinical-white text-primary-700 hover:bg-clinical-snow inline-flex items-center gap-2 justify-center"
            >
              <span>Contactar WhatsApp</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <button className="btn-secondary-clinic bg-primary-500 border-clinical-white text-clinical-white hover:bg-primary-600">
              Descargar Guía de Procedimientos
            </button>
          </div>
        </div>
      </section>

      {/* Modals */}
      {selectedProcedure && (
        <ProcedureModal
          procedure={selectedProcedure}
          onClose={() => setSelectedProcedure(null)}
        />
      )}

      {showVideoModal && (
        <div className="fixed inset-0 bg-clinical-dark/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute -top-12 right-0 text-clinical-white hover:text-primary-400 smooth-transition"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-video bg-clinical-graphite rounded-3xl overflow-hidden shadow-premium">
              <div className="w-full h-full flex items-center justify-center text-clinical-white p-8">
                <div className="text-center">
                  <Play className="w-16 h-16 md:w-20 md:h-20 mb-4 text-primary-500 mx-auto" />
                  <p className="text-xl md:text-2xl font-bold mb-2">Video explicativo del procedimiento</p>
                  <span className="text-sm text-clinical-silver">
                    Contenido multimedia aquí
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Procedures;
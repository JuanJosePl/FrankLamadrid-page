import { useState } from 'react';
import { Sparkles, Zap, Target, TrendingUp, Award, Shield, Clock, CheckCircle, Play, X, ArrowRight, Star } from 'lucide-react';

const Lipo4K = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeTab, setActiveTab] = useState('technique');

  const technique4KFeatures = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precisión Milimétrica",
      description: "Tecnología 4K que permite una definición exacta de cada contorno muscular y curva corporal"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Licuefacción Avanzada",
      description: "Sistema que licúa la grasa de forma selectiva, preservando tejidos importantes y reduciendo trauma"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Estimulación de Colágeno",
      description: "Tecnología que activa la producción natural de colágeno para retracción cutánea superior"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Incisiones Mínimas",
      description: "Solo 3mm de incisión, reduciendo cicatrices y acelerando la recuperación significativamente"
    }
  ];

  const beforeAfterCases = [
    {
      id: 1,
      title: "Marcación Abdominal Completa",
      description: "Transformación total con definición muscular visible",
      stats: { fat: "3.5L", time: "3.5h", recovery: "7 días" }
    },
    {
      id: 2,
      title: "Cintura Reducida 360°",
      description: "Contorno completo con reducción de 12cm de cintura",
      stats: { fat: "4.2L", time: "4h", recovery: "10 días" }
    },
    {
      id: 3,
      title: "Definición Atlética",
      description: "Esculpido muscular de alta definición estilo fitness",
      stats: { fat: "2.8L", time: "3h", recovery: "5 días" }
    }
  ];

  const comparisonData = [
    {
      feature: "Definición de resultados",
      traditional: "Definición básica",
      lipo4k: "Ultra Alta Definición 4K",
      advantage: true
    },
    {
      feature: "Tamaño de incisiones",
      traditional: "10-15mm",
      lipo4k: "3mm (70% más pequeñas)",
      advantage: true
    },
    {
      feature: "Tiempo de recuperación",
      traditional: "2-3 semanas",
      lipo4k: "5-7 días",
      advantage: true
    },
    {
      feature: "Retracción de piel",
      traditional: "Limitada",
      lipo4k: "Estimulación activa de colágeno",
      advantage: true
    },
    {
      feature: "Precisión del contorno",
      traditional: "Estándar",
      lipo4k: "Precisión milimétrica",
      advantage: true
    },
    {
      feature: "Resultados naturales",
      traditional: "Buenos",
      lipo4k: "Excepcionales y duraderos",
      advantage: true
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consulta & Análisis 3D",
      description: "Evaluación completa con tecnología 3D para diseñar tu transformación perfecta",
      duration: "1 hora",
      details: ["Análisis corporal computarizado", "Diseño personalizado 3D", "Simulación de resultados", "Plan quirúrgico detallado"]
    },
    {
      number: "02",
      title: "Preparación Pre-Operatoria",
      description: "Protocolo completo de preparación para garantizar los mejores resultados",
      duration: "1-2 días antes",
      details: ["Exámenes de laboratorio", "Evaluación médica completa", "Instrucciones personalizadas", "Ajuste nutricional"]
    },
    {
      number: "03",
      title: "Día de la Cirugía",
      description: "Procedimiento con tecnología 4K en quirófano de última generación",
      duration: "2-4 horas",
      details: ["Marcación anatómica precisa", "Anestesia segura", "Lipoescultura 4K", "Esculpido de alta definición"]
    },
    {
      number: "04",
      title: "Recuperación Inmediata",
      description: "Cuidado post-operatorio con acompañamiento profesional constante",
      duration: "4-6 horas",
      details: ["Monitoreo continuo", "Manejo del dolor", "Colocación de faja", "Instrucciones detalladas"]
    },
    {
      number: "05",
      title: "Seguimiento & Resultados",
      description: "Protocolo de seguimiento para optimizar y mantener tus resultados",
      duration: "3-6 meses",
      details: ["Controles programados", "Drenajes linfáticos", "Ajustes de faja", "Resultados finales"]
    }
  ];

  const faqs = [
    {
      question: "¿Qué hace única a la Lipoescultura 4K del Dr. Lamadrid?",
      answer: "La técnica 4K fue creada exclusivamente por el Dr. Lamadrid, combinando tecnología de licuefacción avanzada, estimulación de colágeno y precisión milimétrica. A diferencia de la liposucción tradicional, la técnica 4K permite definición muscular visible, incisiones mínimas de solo 3mm, y recuperación más rápida. Es la única técnica que garantiza resultados de ultra alta definición comparables a 4K en imagen."
    },
    {
      question: "¿Cuánto tiempo dura la recuperación?",
      answer: "La mayoría de pacientes retoman actividades livianas en 5-7 días. El reposo completo es de 3 días, y puedes regresar al trabajo de oficina en una semana. Actividades físicas intensas se retoman gradualmente entre 3-4 semanas. La recuperación es 60% más rápida que la liposucción tradicional gracias a las incisiones mínimas y menor trauma tisular."
    },
    {
      question: "¿Los resultados son permanentes?",
      answer: "Sí, las células de grasa extraídas no se regeneran. Los resultados son permanentes siempre que mantengas un estilo de vida saludable. El Dr. Lamadrid diseña cada procedimiento pensando en resultados naturales y duraderos. Con ejercicio moderado y alimentación balanceada, tu nueva figura permanecerá por años."
    },
    {
      question: "¿Es seguro el procedimiento?",
      answer: "Absolutamente. El Dr. Lamadrid ha realizado más de 18,000 cirugías exitosas con los más altos estándares de seguridad. La técnica 4K es menos invasiva que métodos tradicionales, con incisiones de solo 3mm. Todos los procedimientos se realizan en quirófanos certificados con tecnología de última generación y equipo médico altamente capacitado."
    },
    {
      question: "¿Necesito tener buen físico antes de la cirugía?",
      answer: "No necesitas estar en forma perfecta, pero tener un peso estable y saludable optimiza los resultados. La lipoescultura 4K no es para pérdida de peso, sino para definición y contorneo. El Dr. Lamadrid evaluará tu caso específico y te guiará sobre la preparación ideal para tu procedimiento."
    },
    {
      question: "¿Qué áreas se pueden tratar con la técnica 4K?",
      answer: "La técnica 4K puede aplicarse en abdomen, cintura, espalda, brazos, piernas, glúteos, papada y prácticamente cualquier área con grasa localizada. Es especialmente efectiva para marcación abdominal, definición de cintura 360°, y creación de contornos atléticos. Cada procedimiento se personaliza según tus objetivos."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-clinical-white via-clinical-snow to-clinical-white">
      {/* Hero Section */}
      <section className="relative section-spacing overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-medical-cyan/10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/20 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-medical-cyan/15 rounded-full filter blur-3xl animate-pulse" />
        </div>

        <div className="container-clinical relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-6 animate-fade-in-up">
                <span className="badge-medical bg-gradient-to-r from-primary-500 to-medical-cyan text-clinical-white">
                  TÉCNICA EXCLUSIVA DEL DR. LAMADRID
                </span>
              </div>
              <h1 className="heading-display mb-6 animate-fade-in-up">
                <span className="gradient-text-medical">Lipoescultura 4K</span>
                <br />
                <span className="text-clinical-graphite">La Revolución en Contorneo Corporal</span>
              </h1>
              <p className="body-lg mb-8 max-w-3xl mx-auto animate-fade-in-up text-clinical-charcoal">
                La única técnica en el mundo que combina extracción profunda, estimulación de colágeno y definición de ultra alta resolución
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 animate-fade-in-up">
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="btn-primary-clinic flex items-center gap-2 justify-center"
                >
                  <Play className="w-5 h-5" />
                  <span>Ver Técnica en Video</span>
                </button>
                <a
                  href="https://api.whatsapp.com/send?phone=573175112107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-clinic flex items-center gap-2 justify-center"
                >
                  <span>Agendar Consulta</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">
              {[
                { number: "18,000+", label: "Cirugías Exitosas", icon: <Award className="w-5 h-5 md:w-6 md:h-6" /> },
                { number: "3mm", label: "Incisiones Mínimas", icon: <Target className="w-5 h-5 md:w-6 md:h-6" /> },
                { number: "5-7 días", label: "Recuperación", icon: <Clock className="w-5 h-5 md:w-6 md:h-6" /> },
                { number: "100%", label: "Personalizado", icon: <Star className="w-5 h-5 md:w-6 md:h-6" /> }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="clinic-card text-center"
                >
                  <div className="inline-block p-3 bg-gradient-to-br from-primary-500 to-medical-cyan text-clinical-white rounded-xl mb-3">
                    {stat.icon}
                  </div>
                  <p className="text-2xl md:text-3xl font-bold gradient-text-medical mb-1">{stat.number}</p>
                  <p className="text-clinical-slate text-xs md:text-sm font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="section-spacing bg-clinical-white">
        <div className="container-clinical">
          <div className="section-header">
            <h2 className="heading-xl text-clinical-graphite mb-4">
              ¿Qué Hace Única la <span className="gradient-text-medical">Técnica 4K</span>?
            </h2>
            <p className="body-lg max-w-3xl mx-auto text-clinical-charcoal">
              Tecnología de vanguardia que redefine los estándares de la cirugía estética corporal
            </p>
          </div>

          <div className="grid-clinical-3 gap-6 md:gap-8">
            {technique4KFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="content-block group hover:border-primary-500/30"
              >
                <div className="bg-gradient-to-br from-primary-500 to-medical-cyan text-clinical-white rounded-2xl p-4 inline-block mb-6 group-hover:scale-110 smooth-transition">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-clinical-graphite mb-3">{feature.title}</h3>
                <p className="text-clinical-charcoal leading-relaxed text-sm md:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-spacing bg-gradient-to-b from-clinical-snow to-clinical-white">
        <div className="container-clinical">
          <div className="section-header">
            <h2 className="heading-xl text-clinical-graphite mb-4">
              Tu Viaje de <span className="gradient-text-medical">Transformación</span>
            </h2>
            <p className="body-lg max-w-3xl mx-auto text-clinical-charcoal">
              Un proceso cuidadosamente diseñado para garantizar resultados excepcionales y tu completa satisfacción
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="clinic-card group"
              >
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-medical-cyan text-clinical-white flex items-center justify-center text-xl md:text-2xl font-bold group-hover:scale-110 smooth-transition">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-clinical-graphite mb-2">{step.title}</h3>
                        <p className="text-clinical-charcoal text-base md:text-lg">{step.description}</p>
                      </div>
                      <div className="badge-medical bg-primary-500/10 text-primary-700 whitespace-nowrap">
                        {step.duration}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                      {step.details.map((detail, detailIdx) => (
                        <div key={detailIdx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-health-emerald flex-shrink-0" />
                          <span className="text-clinical-charcoal text-sm md:text-base">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-spacing bg-clinical-white">
        <div className="container-clinical">
          <div className="section-header">
            <h2 className="heading-xl text-clinical-graphite mb-4">
              <span className="gradient-text-medical">Lipoescultura 4K</span> vs Liposucción Tradicional
            </h2>
            <p className="body-lg max-w-3xl mx-auto text-clinical-charcoal">
              Descubre por qué miles de pacientes eligen la técnica revolucionaria del Dr. Lamadrid
            </p>
          </div>

          <div className="max-w-5xl mx-auto glass-clinic rounded-3xl shadow-premium overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-clinical-graphite to-primary-700 text-clinical-white">
                    <th className="px-4 md:px-6 py-3 md:py-4 text-left font-bold text-sm md:text-base">Característica</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-center font-bold text-sm md:text-base">Tradicional</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-center font-bold bg-primary-500/20 text-sm md:text-base">
                      <div className="flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                        <span className="hidden sm:inline">Lipo 4K</span>
                        <span className="sm:hidden">4K</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-clinical-snow' : 'bg-clinical-white'}>
                      <td className="px-4 md:px-6 py-3 md:py-4 font-semibold text-clinical-graphite text-sm md:text-base">{row.feature}</td>
                      <td className="px-4 md:px-6 py-3 md:py-4 text-center text-clinical-charcoal text-xs md:text-sm">{row.traditional}</td>
                      <td className="px-4 md:px-6 py-3 md:py-4 text-center font-semibold text-primary-600 bg-primary-500/5">
                        <div className="flex items-center justify-center gap-1 md:gap-2">
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                          <span className="text-xs md:text-sm">{row.lipo4k}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Cases */}
      <section className="section-spacing bg-gradient-to-b from-clinical-snow to-clinical-white">
        <div className="container-clinical">
          <div className="section-header">
            <h2 className="heading-xl text-clinical-graphite mb-4">
              Casos de <span className="gradient-text-medical">Éxito Real</span>
            </h2>
            <p className="body-lg max-w-3xl mx-auto text-clinical-charcoal">
              Transformaciones reales de pacientes que confiaron en la técnica 4K
            </p>
          </div>

          <div className="grid-clinical-3 max-w-6xl mx-auto">
            {beforeAfterCases.map((case_, idx) => (
              <div
                key={case_.id}
                className="procedure-card group"
              >
                <div className="relative h-60 md:h-80 bg-gradient-to-br from-clinical-silver to-clinical-alabaster">
                  <div className="absolute inset-0 flex items-center justify-center text-clinical-slate">
                    <div className="text-center">
                      <div className="text-4xl md:text-6xl mb-2">📸</div>
                      <p className="text-xs md:text-sm font-semibold">Antes / Después</p>
                      <p className="text-xs">Caso #{case_.id}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-clinical-graphite mb-2">{case_.title}</h3>
                  <p className="text-clinical-charcoal mb-4 text-sm md:text-base">{case_.description}</p>
                  <div className="grid grid-cols-3 gap-2 md:gap-3 pt-4 border-t-2 border-clinical-silver">
                    <div className="text-center">
                      <p className="text-xl md:text-2xl font-bold text-primary-600">{case_.stats.fat}</p>
                      <p className="text-xs text-clinical-slate">Grasa extraída</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl md:text-2xl font-bold text-medical-cyan">{case_.stats.time}</p>
                      <p className="text-xs text-clinical-slate">Duración</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl md:text-2xl font-bold text-health-emerald">{case_.stats.recovery}</p>
                      <p className="text-xs text-clinical-slate">Recuperación</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing bg-clinical-white">
        <div className="container-clinical">
          <div className="section-header">
            <h2 className="heading-xl text-clinical-graphite mb-4">
              Preguntas <span className="gradient-text-medical">Frecuentes</span>
            </h2>
            <p className="body-lg max-w-3xl mx-auto text-clinical-charcoal">
              Todo lo que necesitas saber sobre la Lipoescultura 4K
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="content-block group cursor-pointer"
              >
                <summary className="font-bold text-base md:text-lg text-clinical-graphite cursor-pointer flex items-center justify-between">
                  <span className="pr-4">{faq.question}</span>
                  <div className="w-8 h-8 rounded-full bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-clinical-white smooth-transition flex-shrink-0">
                    <span className="text-xl">+</span>
                  </div>
                </summary>
                <p className="text-clinical-charcoal mt-4 leading-relaxed text-sm md:text-base">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-spacing bg-gradient-to-br from-clinical-graphite via-primary-700 to-medical-cyan text-clinical-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-clinical-white rounded-full filter blur-3xl" />
        </div>
        <div className="container-clinical relative z-10 text-center">
          <h2 className="heading-xl mb-6">
            Comienza Tu Transformación Hoy
          </h2>
          <p className="body-lg mb-8 max-w-2xl mx-auto opacity-90">
            Miles de pacientes han confiado en el Dr. Lamadrid. Ahora es tu turno de experimentar la diferencia de la técnica 4K
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=573175112107"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-clinic bg-clinical-white text-primary-700 hover:bg-clinical-snow inline-flex items-center gap-2 justify-center"
            >
              <span>Agendar Consulta Gratis</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <button className="btn-secondary-clinic bg-primary-500 border-clinical-white text-clinical-white hover:bg-primary-600">
              Descargar Guía Completa 4K
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-clinical-dark/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative w-full max-w-5xl">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute -top-12 right-0 text-clinical-white hover:text-primary-400 smooth-transition"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-video bg-clinical-graphite rounded-3xl overflow-hidden shadow-premium">
              <div className="w-full h-full flex flex-col items-center justify-center text-clinical-white p-8">
                <Play className="w-16 h-16 md:w-20 md:h-20 mb-4 text-primary-500" />
                <p className="text-xl md:text-2xl font-bold mb-2 text-center">Video Explicativo de la Técnica 4K</p>
                <p className="text-clinical-silver text-sm md:text-base text-center">Dr. Frank Lamadrid explica paso a paso su técnica revolucionaria</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lipo4K;
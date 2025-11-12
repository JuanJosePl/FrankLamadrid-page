import React from "react";
import {
  Award,
  Users,
  Globe2,
  Star,
  Shield,
  Heart,
  Target,
  BookOpen,
  GraduationCap,
  MapPin,
  TrendingUp,
  Zap,
} from "lucide-react";

const About = () => {
  const t = ({ es, en }) => es;

  const education = [
    {
      title: { es: "Médico Cirujano", en: "Medical Doctor" },
      institution: { es: "Universidad del Norte", en: "Universidad del Norte" },
      location: "Barranquilla, Colombia",
      icon: GraduationCap,
    },
    {
      title: {
        es: "Especialización en Cirugía Plástica",
        en: "Plastic Surgery Specialization",
      },
      institution: {
        es: "Universidad de los Andes",
        en: "Universidad de los Andes",
      },
      location: "Bogotá, Colombia",
      icon: Award,
    },
    {
      title: {
        es: "Fellowship en Cirugía Estética Corporal",
        en: "Body Aesthetic Surgery Fellowship",
      },
      institution: {
        es: "Instituto de Estudios Avanzados",
        en: "Advanced Studies Institute",
      },
      location: "Miami, USA",
      icon: Star,
    },
  ];

  const achievements = [
    {
      title: {
        es: "Creador de la Técnica 4K®",
        en: "Creator of 4K® Technique",
      },
      description: {
        es: "Pionero en técnica revolucionaria de lipoescultura de ultra alta definición con más de 18,000 procedimientos exitosos",
        en: "Pioneer in revolutionary ultra-high definition liposculpture technique with over 18,000 successful procedures",
      },
      icon: Zap,
    },
    {
      title: {
        es: "Reconocimiento Internacional",
        en: "International Recognition",
      },
      description: {
        es: "Miembro activo de las asociaciones de cirugía plástica más prestigiosas a nivel mundial",
        en: "Active member of the most prestigious plastic surgery associations worldwide",
      },
      icon: Globe2,
    },
    {
      title: { es: "Más de 18,000 Cirugías", en: "Over 18,000 Surgeries" },
      description: {
        es: "Amplia experiencia quirúrgica con pacientes de más de 50 países con índice de satisfacción del 99.8%",
        en: "Extensive surgical experience with patients from over 50 countries with 99.8% satisfaction rate",
      },
      icon: Users,
    },
    {
      title: { es: "Líder en Innovación", en: "Innovation Leader" },
      description: {
        es: "Constante actualización en las técnicas más avanzadas y tecnología de vanguardia en cirugía estética",
        en: "Constant updating in the most advanced techniques and cutting-edge technology in aesthetic surgery",
      },
      icon: TrendingUp,
    },
  ];

  const values = [
    {
      title: { es: "Excelencia", en: "Excellence" },
      description: {
        es: "Compromiso con los más altos estándares de calidad",
        en: "Commitment to the highest quality standards",
      },
      icon: Award,
    },
    {
      title: { es: "Seguridad", en: "Safety" },
      description: {
        es: "Protocolos médicos certificados internacionalmente",
        en: "Internationally certified medical protocols",
      },
      icon: Shield,
    },
    {
      title: { es: "Empatía", en: "Empathy" },
      description: {
        es: "Atención personalizada y humana en cada caso",
        en: "Personalized and humane care in each case",
      },
      icon: Heart,
    },
    {
      title: { es: "Innovación", en: "Innovation" },
      description: {
        es: "Técnicas de vanguardia y mejora continua",
        en: "Cutting-edge techniques and continuous improvement",
      },
      icon: Target,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-clinical-graphite via-primary-200 to-clinical-dark">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500 rounded-full filter blur-3xl animate-pulse-slow" />
            <div
              className="absolute bottom-20 right-20 w-96 h-96 bg-medical-cyan rounded-full filter blur-3xl animate-pulse-slow"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-6 py-2 bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 rounded-full text-primary-200 font-semibold text-sm mb-6">
            {t({ es: "👨‍⚕️ Conoce al Doctor", en: "👨‍⚕️ Meet the Doctor" })}
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Dr. Frank Lamadrid
          </h1>

          <p className="text-2xl text-clinical-silver max-w-3xl mx-auto">
            <span className="gradient-text-medical font-semibold">
              {t({
                es: "Líder Mundial en Lipoescultura 4K",
                en: "World Leader in 4K Liposculpture",
              })}
            </span>
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-clinical-graphite mb-6">
                {t({ es: "Una Pasión por la", en: "A Passion for" })}{" "}
                <span className="gradient-text-medical">
                  {t({ es: "Excelencia", en: "Excellence" })}
                </span>
              </h2>

              <p className="text-lg text-clinical-charcoal leading-relaxed">
                {t({
                  es: "El Dr. Frank Lamadrid es reconocido internacionalmente como líder mundial en lipoescultura y marcación abdominal de alta definición. Con más de 15 años de experiencia y más de 18,000 cirugías exitosas, ha transformado la vida de pacientes de más de 50 países.",
                  en: "Dr. Frank Lamadrid is internationally recognized as a world leader in liposculpture and high-definition abdominal marking. With over 15 years of experience and more than 18,000 successful surgeries, he has transformed the lives of patients from over 50 countries.",
                })}
              </p>

              <p className="text-lg text-clinical-charcoal leading-relaxed">
                {t({
                  es: "Su dedicación a la innovación lo llevó a crear la revolucionaria técnica de Lipoescultura 4K, que combina precisión quirúrgica de última generación con un enfoque artístico único, logrando resultados naturales y armoniosos que realzan la belleza individual de cada paciente.",
                  en: "His dedication to innovation led him to create the revolutionary 4K Liposculpture technique, which combines state-of-the-art surgical precision with a unique artistic approach, achieving natural and harmonious results that enhance each patient's individual beauty.",
                })}
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-gradient-to-br from-primary-500/10 to-primary-700/10 p-6 rounded-xl border border-primary-500/20">
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    673K+
                  </div>
                  <div className="text-clinical-charcoal font-medium">
                    {t({
                      es: "Seguidores en Redes",
                      en: "Social Media Followers",
                    })}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-medical-cyan/10 to-primary-600/10 p-6 rounded-xl border border-medical-cyan/20">
                  <div className="text-4xl font-bold text-medical-cyan mb-2">
                    50+
                  </div>
                  <div className="text-clinical-charcoal font-medium">
                    {t({ es: "Países Atendidos", en: "Countries Served" })}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-primary-500/20 to-medical-cyan/20 rounded-3xl overflow-hidden shadow-medical-xl border border-clinical-silver">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center"></div>
                  <img src="https://res.cloudinary.com/disqdfjy9/image/upload/v1762930755/franksentado_h03nie.jpg" alt="" />
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-500/30 rounded-full filter blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-medical-cyan/30 rounded-full filter blur-2xl" />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gradient-to-br from-clinical-snow to-clinical-alabaster">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-clinical-graphite mb-4">
              {t({ es: "Formación", en: "Education" })}{" "}
              <span className="gradient-text-medical">
                {t({ es: "Académica", en: "Background" })}
              </span>
            </h2>
            <p className="text-xl text-clinical-charcoal max-w-3xl mx-auto">
              {t({
                es: "Preparación de clase mundial en las mejores instituciones",
                en: "World-class training at the best institutions",
              })}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all flex items-start space-x-6 group border border-clinical-silver"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-medical">
                  <edu.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-clinical-graphite mb-2">
                    {t(edu.title)}
                  </h3>
                  <p className="text-lg text-primary-600 font-semibold mb-1">
                    {t(edu.institution)}
                  </p>
                  <div className="flex items-center text-clinical-charcoal">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-clinical-graphite mb-4">
              {t({ es: "Logros y", en: "Achievements and" })}{" "}
              <span className="gradient-text-medical">
                {t({ es: "Reconocimientos", en: "Recognition" })}
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-clinical-snow p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all border border-clinical-silver group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6 shadow-medical group-hover:scale-110 transition-transform">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-clinical-graphite mb-4">
                  {t(achievement.title)}
                </h3>
                <p className="text-clinical-charcoal leading-relaxed">
                  {t(achievement.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-medical-cyan text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t({ es: "Nuestros", en: "Our" })}{" "}
              <span className="text-primary-100">
                {t({ es: "Valores", en: "Values" })}
              </span>
            </h2>
            <p className="text-xl text-clinical-silver max-w-3xl mx-auto">
              {t({
                es: "Los principios que guían cada decisión y procedimiento",
                en: "The principles that guide every decision and procedure",
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl text-center hover:bg-white/15 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-white to-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-medical group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-primary-700" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t(value.title)}</h3>
                <p className="text-clinical-silver text-sm">
                  {t(value.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-clinical-graphite mb-6">
              {t({
                es: "¿Listo para tu Transformación?",
                en: "Ready for Your Transformation?",
              })}
            </h2>
            <p className="text-xl text-clinical-charcoal mb-10">
              {t({
                es: "Agenda una consulta personalizada y descubre cómo podemos ayudarte a alcanzar tus objetivos",
                en: "Schedule a personalized consultation and discover how we can help you achieve your goals",
              })}
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=573175112107"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold rounded-full shadow-medical hover:shadow-medical-xl text-lg transform hover:scale-105 transition-all"
            >
              {t({ es: "Agendar Consulta", en: "Book Consultation" })}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

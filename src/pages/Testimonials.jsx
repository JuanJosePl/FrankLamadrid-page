import React, { useState } from "react";
import {
  Star,
  Play,
  X,
  Calendar,
  Quote,
  Heart,
  TrendingUp,
  Users,
  Globe2,
  Award,
} from "lucide-react";

const Testimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const stats = [
    {
      number: "18,000+",
      label: "Cirugías Exitosas",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "99.8%",
      label: "Satisfacción",
      icon: <Star className="w-6 h-6" />,
    },
    { number: "50+", label: "Países", icon: <Globe2 className="w-6 h-6" /> },
    {
      number: "673K+",
      label: "Seguidores",
      icon: <Heart className="w-6 h-6" />,
    },
  ];

  const videoTestimonials = [
    {
      id: 1,
      name: "María González",
      country: "Estados Unidos 🇺🇸",
      procedure: "Lipoescultura 4K",
      thumbnail:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
      duration: "3:42",
      rating: 5,
      date: "Marzo 2024",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      country: "Canadá 🇨🇦",
      procedure: "BBL + Lipo 360",
      thumbnail:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
      duration: "4:15",
      rating: 5,
      date: "Febrero 2024",
    },
    {
      id: 3,
      name: "Isabella Romano",
      country: "Italia 🇮🇹",
      procedure: "Marcación Abdominal",
      thumbnail:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
      duration: "2:58",
      rating: 5,
      date: "Enero 2024",
    },
  ];

  const writtenTestimonials = [
    {
      id: 1,
      name: "Ana Martínez",
      country: "España",
      flag: "🇪🇸",
      procedure: "Lipoescultura 4K + BBL",
      rating: 5,
      date: "15 de Marzo, 2024",
      text: "Mi experiencia con el Dr. Lamadrid fue excepcional. Desde la primera consulta me sentí en confianza. La técnica 4K es realmente revolucionaria, la recuperación fue más rápida de lo esperado y los resultados son perfectamente naturales. El equipo médico es profesional y atento en cada detalle.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      likes: 234,
      helpful: 189,
    },
    {
      id: 2,
      name: "Jennifer Smith",
      country: "Estados Unidos",
      flag: "🇺🇸",
      procedure: "Abdominoplastia + Lipo 360",
      rating: 5,
      date: "8 de Febrero, 2024",
      text: "Vine desde Los Ángeles específicamente para el Dr. Lamadrid después de investigar extensamente. Su reputación está completamente justificada. Los resultados superaron mis expectativas y el cuidado postoperatorio fue impecable. Vale cada centavo del viaje.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      likes: 312,
      helpful: 267,
    },
    {
      id: 3,
      name: "Carla Rodríguez",
      country: "Colombia",
      flag: "🇨🇴",
      procedure: "Marcación Abdominal 4K",
      rating: 5,
      date: "22 de Enero, 2024",
      text: "Como atleta, buscaba resultados que se vieran naturales y deportivos. El Dr. Lamadrid entendió perfectamente mi visión. La precisión de la técnica 4K es increíble, cada músculo quedó perfectamente definido. Estoy feliz con mi nueva figura.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
      likes: 289,
      helpful: 234,
    },
  ];

  const VideoModal = ({ video, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-white hover:text-primary-500 transition-colors"
      >
        <X className="w-8 h-8" />
      </button>
      <div className="relative w-full max-w-5xl">
        <div className="aspect-video bg-clinical-graphite rounded-xl overflow-hidden">
          <div className="w-full h-full flex flex-col items-center justify-center text-white p-8">
            <Play className="w-20 h-20 mb-4 text-primary-500" />
            <p className="text-2xl font-bold mb-2">Testimonio en Video</p>
            <p className="text-lg text-clinical-slate mb-1">{video.name}</p>
            <p className="text-clinical-silver">{video.procedure}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-clinical-white via-clinical-snow to-clinical-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-medical-light/30 to-medical-cyan/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
              <span className="gradient-text-medical">Historias Reales de</span>
              <br />
              <span className="text-clinical-graphite">Transformación</span>
            </h1>
            <p className="text-xl text-clinical-charcoal mb-8 animate-fadeInUp animation-delay-200">
              Miles de pacientes satisfechos de todo el mundo comparten sus
              experiencias con el Dr. Lamadrid
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-medical hover:shadow-medical-lg transform hover:-translate-y-2 transition-all text-center"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="inline-block p-3 bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-xl mb-3">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-primary-600 mb-1">
                  {stat.number}
                </p>
                <p className="text-clinical-slate text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-clinical-graphite mb-4">
              Testimonios en{" "}
              <span className="gradient-text-medical">Video</span>
            </h2>
            <p className="text-xl text-clinical-charcoal max-w-3xl mx-auto">
              Escucha directamente de nuestros pacientes sobre su experiencia
              completa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {videoTestimonials.map((video, idx) => (
              <div
                key={video.id}
                className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transform hover:-translate-y-2 transition-all group cursor-pointer border border-clinical-silver"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-medical">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-sm">
                    {video.duration}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex mb-2">
                    {[...Array(video.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary-500 text-primary-500"
                      />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-clinical-graphite mb-1">
                    {video.name}
                  </h3>
                  <p className="text-clinical-charcoal text-sm mb-2">
                    {video.country}
                  </p>
                  <p className="text-clinical-graphite font-semibold">
                    {video.procedure}
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-sm text-clinical-slate">
                    <Calendar className="w-4 h-4" />
                    <span>{video.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-20 bg-gradient-to-b from-clinical-snow to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-clinical-graphite mb-4">
              Reseñas de{" "}
              <span className="gradient-text-medical">Pacientes</span>
            </h2>
            <p className="text-xl text-clinical-charcoal max-w-3xl mx-auto">
              Experiencias detalladas de transformación y recuperación
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {writtenTestimonials.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all border border-clinical-silver"
              >
                <div className="flex items-start gap-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                  />

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-clinical-graphite">
                          {testimonial.name}
                        </h3>
                        <p className="text-clinical-charcoal">
                          {testimonial.flag} {testimonial.country}
                        </p>
                        <p className="text-sm text-clinical-slate mt-1">
                          {testimonial.date}
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

                    <div className="bg-gradient-to-r from-primary-500/10 to-medical-cyan/10 rounded-2xl px-4 py-2 inline-block mb-4">
                      <p className="font-semibold text-clinical-graphite">
                        {testimonial.procedure}
                      </p>
                    </div>

                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary-500/30" />
                      <p className="text-clinical-charcoal leading-relaxed pl-6">
                        {testimonial.text}
                      </p>
                    </div>

                    <div className="flex items-center gap-6 mt-6 pt-6 border-t border-clinical-silver">
                      <button className="flex items-center gap-2 text-clinical-charcoal hover:text-primary-500 transition-colors">
                        <Heart className="w-5 h-5" />
                        <span className="font-semibold">
                          {testimonial.likes}
                        </span>
                      </button>
                      <div className="flex items-center gap-2 text-clinical-charcoal">
                        <TrendingUp className="w-5 h-5" />
                        <span>
                          {testimonial.helpful} personas encontraron esto útil
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary-600 to-medical-cyan rounded-3xl overflow-hidden shadow-medical-xl">
            <div className="p-12 text-white text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Únete a Miles de Pacientes Satisfechos
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Cada día, personas de todo el mundo confían en la experiencia y
                dedicación del Dr. Lamadrid
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    emoji: "⭐",
                    text: "Calificaciones 5 estrellas constantes",
                  },
                  { emoji: "🌍", text: "Pacientes de más de 50 países" },
                  { emoji: "💚", text: "99.8% de satisfacción documentada" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                  >
                    <div className="text-4xl mb-3">{item.emoji}</div>
                    <p className="font-semibold">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://api.whatsapp.com/send?phone=573175112107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary-700 font-bold py-4 px-8 rounded-full hover:shadow-medical-lg transform hover:scale-105 transition-all"
                >
                  Agenda Tu Consulta Gratis
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gradient-to-b from-clinical-snow to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Verificación Completa",
                  description:
                    "Todos los testimonios son de pacientes reales verificados",
                  icon: "✓",
                },
                {
                  title: "Seguimiento Continuo",
                  description:
                    "Mantenemos contacto con cada paciente post-operatorio",
                  icon: "📋",
                },
                {
                  title: "Transparencia Total",
                  description:
                    "Publicamos resultados reales, incluyendo proceso de recuperación",
                  icon: "👁️",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all text-center border border-clinical-silver"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-clinical-graphite mb-3">
                    {item.title}
                  </h3>
                  <p className="text-clinical-charcoal">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
};

export default Testimonials;

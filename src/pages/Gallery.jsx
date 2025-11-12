import React, { useState } from "react";
import {
  Filter,
  Calendar,
  Star,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  User,
} from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: "all", name: "Todos", count: 127 },
    { id: "lipo4k", name: "Lipoescultura 4K", count: 45 },
    { id: "abdomen", name: "Marcación Abdominal", count: 32 },
    { id: "bbl", name: "BBL", count: 28 },
    { id: "breast", name: "Mamoplastia", count: 15 },
    { id: "abdominoplasty", name: "Abdominoplastia", count: 7 },
  ];

  const galleryItems = [
    {
      id: 1,
      procedure: "Lipoescultura 4K Completa",
      category: "lipo4k",
      beforeImage:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
      patient: "Paciente #127",
      date: "Marzo 2024",
      description: "Transformación completa con técnica 4K de alta definición",
      age: "32 años",
      removed: "3.5L",
      recovery: "6 días",
    },
    {
      id: 2,
      procedure: "Marcación Abdominal 4K",
      category: "abdomen",
      beforeImage:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
      patient: "Paciente #126",
      date: "Marzo 2024",
      description:
        "Definición muscular de alta resolución con retracción natural",
      age: "28 años",
      removed: "2.8L",
      recovery: "5 días",
    },
    {
      id: 3,
      procedure: "BBL + Lipo 360°",
      category: "bbl",
      beforeImage:
        "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&q=80",
      patient: "Paciente #125",
      date: "Febrero 2024",
      description: "Contorneo completo con aumento natural de glúteos",
      age: "35 años",
      removed: "4.2L",
      recovery: "7 días",
    },
    {
      id: 4,
      procedure: "Abdominoplastia + Lipo",
      category: "abdominoplasty",
      beforeImage:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=80",
      patient: "Paciente #124",
      date: "Febrero 2024",
      description: "Abdomen plano con eliminación de exceso de piel",
      age: "40 años",
      removed: "3.0L",
      recovery: "10 días",
    },
    {
      id: 5,
      procedure: "Mamoplastia de Aumento",
      category: "breast",
      beforeImage:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
      patient: "Paciente #123",
      date: "Enero 2024",
      description: "Aumento natural con implantes de última generación",
      age: "29 años",
      removed: "N/A",
      recovery: "7 días",
    },
    {
      id: 6,
      procedure: "Lipo 360° + Brazos",
      category: "lipo4k",
      beforeImage:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
      patient: "Paciente #122",
      date: "Enero 2024",
      description: "Contorneo corporal completo con brazos esculpidos",
      age: "38 años",
      removed: "3.8L",
      recovery: "6 días",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const ImageModal = ({ item, onClose, onPrev, onNext }) => {
    const handleBackdropClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-2 sm:p-4 animate-fadeIn overflow-y-auto"
        onClick={handleBackdropClick}
      >
        <div className="relative w-full max-w-7xl my-4">
          <button
            onClick={onClose}
            className="fixed top-2 right-2 sm:top-4 sm:right-4 z-50 bg-white rounded-full p-2 sm:p-3 shadow-medical hover:shadow-medical-lg transform hover:scale-110 transition-all"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-clinical-graphite" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="hidden md:block fixed left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-medical hover:shadow-medical-lg hover:scale-110 transition-all z-50"
          >
            <ChevronLeft className="w-6 h-6 text-clinical-graphite" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="hidden md:block fixed right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-medical hover:shadow-medical-lg hover:scale-110 transition-all z-50"
          >
            <ChevronRight className="w-6 h-6 text-clinical-graphite" />
          </button>

          <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-medical-xl">
            <div className="p-4 sm:p-6 bg-gradient-to-r from-primary-500 to-primary-700 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 pr-8">
                {item.procedure}
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{item.patient}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{item.date}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-1">
              <div className="relative group">
                <img
                  src={item.beforeImage}
                  alt="Antes"
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-accent-error text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full font-bold text-xs sm:text-sm">
                  ANTES
                </div>
              </div>
              <div className="relative group border-t md:border-t-0 md:border-l border-clinical-silver">
                <img
                  src={item.afterImage}
                  alt="Después"
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 md:right-4 md:left-auto bg-health-emerald text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full font-bold text-xs sm:text-sm">
                  DESPUÉS
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 lg:p-8">
              <p className="text-clinical-charcoal text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                {item.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-clinical-snow rounded-xl p-3 sm:p-4 text-center border border-clinical-silver">
                  <p className="text-clinical-slate text-xs sm:text-sm mb-1">
                    Edad
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-primary-600">
                    {item.age}
                  </p>
                </div>
                <div className="bg-clinical-snow rounded-xl p-3 sm:p-4 text-center border border-clinical-silver">
                  <p className="text-clinical-slate text-xs sm:text-sm mb-1">
                    Grasa Extraída
                  </p>
                  <p className="text-lg sm:text-2xl font-bold text-medical-cyan">
                    {item.removed}
                  </p>
                </div>
                <div className="bg-clinical-snow rounded-xl p-3 sm:p-4 text-center border border-clinical-silver">
                  <p className="text-clinical-slate text-xs sm:text-sm mb-1">
                    Recuperación
                  </p>
                  <p className="text-lg sm:text-2xl font-bold text-health-emerald">
                    {item.recovery}
                  </p>
                </div>
                <div className="bg-clinical-snow rounded-xl p-3 sm:p-4 text-center col-span-2 md:col-span-1 border border-clinical-silver">
                  <p className="text-clinical-slate text-xs sm:text-sm mb-1">
                    Satisfacción
                  </p>
                  <div className="flex justify-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-primary-500 text-primary-500"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex md:hidden gap-3 mt-6">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onPrev();
                  }}
                  className="flex-1 bg-clinical-silver text-clinical-graphite font-semibold py-3 px-4 rounded-full hover:bg-clinical-steel transition-all flex items-center justify-center gap-2"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>Anterior</span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                  }}
                  className="flex-1 bg-clinical-silver text-clinical-graphite font-semibold py-3 px-4 rounded-full hover:bg-clinical-steel transition-all flex items-center justify-center gap-2"
                >
                  <span>Siguiente</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-clinical-white via-clinical-snow to-clinical-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-medical-cyan/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
              <span className="gradient-text-medical">Galería de</span>
              <br />
              <span className="text-clinical-graphite">
                Transformaciones Reales
              </span>
            </h1>
            <p className="text-xl text-clinical-charcoal mb-8 animate-fadeInUp animation-delay-200">
              Más de 18,000 cirugías exitosas documentadas. Resultados reales de
              pacientes reales.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp animation-delay-400">
              <div className="bg-white rounded-2xl px-6 py-3 shadow-card border border-clinical-silver">
                <p className="text-3xl font-bold text-primary-600">127</p>
                <p className="text-sm text-clinical-slate">
                  Casos Documentados
                </p>
              </div>
              <div className="bg-white rounded-2xl px-6 py-3 shadow-card border border-clinical-silver">
                <p className="text-3xl font-bold text-medical-cyan">100%</p>
                <p className="text-sm text-clinical-slate">Satisfacción</p>
              </div>
              <div className="bg-white rounded-2xl px-6 py-3 shadow-card border border-clinical-silver">
                <p className="text-3xl font-bold text-primary-600">6 Meses</p>
                <p className="text-sm text-clinical-slate">Seguimiento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-soft border-b border-clinical-silver">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <div className="flex items-center gap-2 text-clinical-graphite font-semibold flex-shrink-0">
              <Filter className="w-5 h-5" />
              <span>Filtrar:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-primary-500 to-primary-700 text-white shadow-medical"
                    : "bg-clinical-silver text-clinical-graphite hover:bg-clinical-steel"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transform hover:-translate-y-2 transition-all duration-500 cursor-pointer border border-clinical-silver"
                onClick={() => setSelectedImage(item)}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.beforeImage}
                        alt="Antes"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-2 left-2 bg-accent-error text-white text-xs px-3 py-1 rounded-full font-bold">
                        ANTES
                      </div>
                    </div>
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.afterImage}
                        alt="Después"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-2 left-2 bg-health-emerald text-white text-xs px-3 py-1 rounded-full font-bold">
                        DESPUÉS
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center">
                    <div className="transform scale-0 group-hover:scale-100 transition-transform">
                      <div className="bg-white rounded-full p-4 shadow-medical">
                        <ZoomIn className="w-8 h-8 text-primary-500" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-clinical-graphite mb-2 group-hover:text-primary-600 transition-colors">
                    {item.procedure}
                  </h3>
                  <p className="text-clinical-charcoal text-sm mb-4">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-clinical-slate">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary-500 text-primary-500"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-clinical-slate">
                No se encontraron resultados para esta categoría
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-medical-cyan text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-medical-cyan rounded-full filter blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tu Transformación Comienza Aquí
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Cada resultado que ves es un testimonio de precisión quirúrgica,
              tecnología de vanguardia y dedicación a la excelencia
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: "✓", text: "Fotos 100% reales sin filtros" },
                { icon: "✓", text: "Seguimiento de 6 meses" },
                { icon: "✓", text: "Consentimiento verificado" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="font-semibold">{item.text}</p>
                </div>
              ))}
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=573175112107"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary-700 font-bold py-4 px-8 rounded-full hover:shadow-medical-xl transform hover:scale-105 transition-all"
            >
              Agenda Tu Consulta Ahora
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <ImageModal
          item={selectedImage}
          onClose={() => setSelectedImage(null)}
          onPrev={() => {
            const currentIndex = filteredItems.findIndex(
              (item) => item.id === selectedImage.id
            );
            const prevIndex =
              currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
            setSelectedImage(filteredItems[prevIndex]);
          }}
          onNext={() => {
            const currentIndex = filteredItems.findIndex(
              (item) => item.id === selectedImage.id
            );
            const nextIndex =
              currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
            setSelectedImage(filteredItems[nextIndex]);
          }}
        />
      )}
    </div>
  );
};

export default Gallery;

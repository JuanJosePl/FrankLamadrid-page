import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  TrendingUp,
  Heart,
  Eye,
  Share2,
  Bookmark,
  X,
  Search,
  Filter,
  ChevronDown,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Copy,
  Check,
  MessageCircle,
} from "lucide-react";

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [likedArticles, setLikedArticles] = useState(new Set());
  const [bookmarkedArticles, setBookmarkedArticles] = useState(new Set());
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [shareModal, setShareModal] = useState(null);
  const [copied, setCopied] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);

  const categories = [
    { id: "all", name: "Todos los Artículos", icon: "📚", count: 24 },
    { id: "procedures", name: "Procedimientos", icon: "💉", count: 8 },
    { id: "recovery", name: "Recuperación", icon: "💪", count: 6 },
    { id: "tourism", name: "Turismo Médico", icon: "✈️", count: 5 },
    { id: "tips", name: "Consejos", icon: "💡", count: 5 },
  ];

  const featuredArticle = {
    id: "featured",
    title:
      "Lipoescultura 4K: La Revolución que Está Cambiando la Cirugía Estética",
    excerpt:
      "Descubre cómo la técnica exclusiva del Dr. Lamadrid está transformando vidas con resultados de ultra alta definición y recuperación más rápida.",
    content: `
      <h2>La Revolución de la Lipoescultura 4K</h2>
      <p>La técnica de Lipoescultura 4K desarrollada por el Dr. Frank Lamadrid representa un avance revolucionario en la cirugía estética corporal. Esta innovadora metodología combina tecnología de vanguardia con años de experiencia y perfeccionamiento técnico.</p>
      
      <h3>¿Qué hace única a la Lipo 4K?</h3>
      <p>A diferencia de la liposucción tradicional, la técnica 4K utiliza:</p>
      <ul>
        <li>Incisiones mínimas de apenas 3mm</li>
        <li>Tecnología que licúa la grasa de manera controlada</li>
        <li>Estimulación de colágeno para retracción natural de la piel</li>
        <li>Definición muscular de ultra alta resolución</li>
      </ul>

      <h3>Resultados Comprobados</h3>
      <p>Con más de 18,000 cirugías exitosas, la técnica 4K ha demostrado consistentemente:</p>
      <ul>
        <li>98% de satisfacción en pacientes</li>
        <li>Recuperación 40% más rápida que métodos tradicionales</li>
        <li>Resultados naturales y duraderos</li>
        <li>Sin cicatrices visibles</li>
      </ul>

      <h3>¿Eres Candidato?</h3>
      <p>La Lipoescultura 4K es ideal para personas que:</p>
      <ul>
        <li>Tienen depósitos de grasa localizados</li>
        <li>Mantienen un peso estable</li>
        <li>Buscan definición muscular sin prótesis</li>
        <li>Desean resultados naturales y armoniosos</li>
      </ul>
    `,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    category: "Procedimientos",
    categoryId: "procedures",
    author: "Dr. Frank Lamadrid",
    date: "15 de Octubre, 2024",
    readTime: "8 min",
    views: 12543,
    likes: 847,
    tags: ["Lipoescultura", "4K", "Innovación", "Resultados"],
  };

  const articles = [
    {
      id: 1,
      title:
        "¿Cómo Prepararte para Tu Lipoescultura 4K? Guía Completa Pre-Operatoria",
      excerpt:
        "Todo lo que necesitas saber antes de tu cirugía: desde exámenes médicos hasta preparación mental y física.",
      content: `
        <h2>Preparación Pre-Operatoria Completa</h2>
        <p>Una adecuada preparación es clave para el éxito de tu procedimiento. Aquí te guiamos paso a paso.</p>
        
        <h3>30 Días Antes</h3>
        <ul>
          <li>Consulta inicial con el Dr. Lamadrid</li>
          <li>Exámenes médicos completos</li>
          <li>Fotografías pre-operatorias</li>
          <li>Plan nutricional personalizado</li>
        </ul>

        <h3>15 Días Antes</h3>
        <ul>
          <li>Suspender anticoagulantes</li>
          <li>Dejar de fumar (si aplica)</li>
          <li>Preparar tu hogar para recuperación</li>
          <li>Comprar fajas y medicamentos</li>
        </ul>

        <h3>1 Día Antes</h3>
        <ul>
          <li>Ayuno desde medianoche</li>
          <li>Ducha con jabón antibacterial</li>
          <li>Descanso adecuado</li>
          <li>Confirmar transporte</li>
        </ul>
      `,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      category: "Preparación",
      categoryId: "tips",
      categoryColor: "from-blue-500 to-cyan-500",
      author: "Equipo Médico",
      date: "10 de Octubre, 2024",
      readTime: "6 min",
      views: 8234,
      likes: 523,
      tags: ["Preparación", "Lipoescultura", "Pre-op", "Guía"],
    },
    {
      id: 2,
      title:
        "Los Primeros 7 Días Después de Tu BBL: Qué Esperar y Cómo Cuidarte",
      excerpt:
        "Guía día a día de recuperación post-operatoria para Brazilian Butt Lift con consejos prácticos y reales.",
      content: `
        <h2>Recuperación BBL: Semana 1</h2>
        
        <h3>Día 1-2: Inmediato Post-Op</h3>
        <p>Los primeros días son cruciales. Mantén reposo, toma medicamentos según prescripción, usa tu faja constantemente.</p>

        <h3>Día 3-4: Adaptación</h3>
        <p>Comenzarás a sentirte mejor. Puedes caminar suavemente, pero evita sentarte directamente sobre glúteos.</p>

        <h3>Día 5-7: Recuperación Visible</h3>
        <p>La inflamación disminuye notablemente. Ya puedes ver resultados preliminares.</p>
      `,
      image:
        "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80",
      category: "Recuperación",
      categoryId: "recovery",
      categoryColor: "from-green-500 to-emerald-500",
      author: "Dra. Carolina Ruiz",
      date: "5 de Octubre, 2024",
      readTime: "10 min",
      views: 15324,
      likes: 1245,
      tags: ["BBL", "Recuperación", "Post-op", "Cuidados"],
    },
    {
      id: 3,
      title: "Turismo Médico en Colombia: Por Qué Miles Eligen Barranquilla",
      excerpt:
        "Las razones por las que Colombia se ha convertido en el destino #1 para cirugía estética de calidad.",
      content: `
        <h2>Colombia: Destino de Excelencia Médica</h2>
        <p>Descubre por qué pacientes de más de 40 países eligen Colombia para sus procedimientos estéticos.</p>

        <h3>Ventajas del Turismo Médico en Colombia</h3>
        <ul>
          <li>Ahorro de hasta 70% vs países desarrollados</li>
          <li>Cirujanos certificados internacionalmente</li>
          <li>Tecnología de última generación</li>
          <li>Hospitalidad y calidez colombiana</li>
        </ul>
      `,
      image:
        "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80",
      category: "Turismo Médico",
      categoryId: "tourism",
      categoryColor: "from-purple-500 to-pink-500",
      author: "María González",
      date: "1 de Octubre, 2024",
      readTime: "7 min",
      views: 9876,
      likes: 678,
      tags: ["Colombia", "Turismo", "Barranquilla", "Internacional"],
    },
    {
      id: 4,
      title: "Marcación Abdominal vs Abdominoplastia: ¿Cuál es la Diferencia?",
      excerpt:
        "Análisis detallado de ambos procedimientos, quién es candidato ideal y qué resultados esperar.",
      content: `
        <h2>Comparativa de Procedimientos Abdominales</h2>
        
        <h3>Marcación Abdominal 4K</h3>
        <p>Ideal para: Personas con buena elasticidad de piel que buscan definición muscular.</p>
        <p>Procedimiento: Lipoescultura de alta definición sin remover exceso de piel.</p>

        <h3>Abdominoplastia</h3>
        <p>Ideal para: Personas con exceso de piel (post-embarazo o pérdida masiva de peso).</p>
        <p>Procedimiento: Remoción de exceso de piel y grasa, reparación muscular.</p>
      `,
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
      category: "Procedimientos",
      categoryId: "procedures",
      categoryColor: "from-yellow-500 to-orange-500",
      author: "Dr. Frank Lamadrid",
      date: "28 de Septiembre, 2024",
      readTime: "9 min",
      views: 11234,
      likes: 892,
      tags: ["Abdomen", "Comparación", "Procedimientos", "Guía"],
    },
    {
      id: 5,
      title: "5 Errores Que Debes Evitar Antes de Tu Cirugía Estética",
      excerpt:
        "Consejos importantes que todo paciente debe conocer para garantizar los mejores resultados y seguridad.",
      content: `
        <h2>Evita Estos Errores Comunes</h2>
        
        <h3>1. No Investigar al Cirujano</h3>
        <p>Verifica certificaciones, experiencia y casos reales antes de decidir.</p>

        <h3>2. Expectativas Poco Realistas</h3>
        <p>La cirugía mejora tu versión, no te convierte en otra persona.</p>

        <h3>3. No Seguir Instrucciones Pre-Op</h3>
        <p>Cada indicación tiene una razón de seguridad importante.</p>

        <h3>4. Ocultar Información Médica</h3>
        <p>La transparencia total con tu cirujano es vital para tu seguridad.</p>

        <h3>5. No Planificar la Recuperación</h3>
        <p>Una buena recuperación es 50% del éxito de tu cirugía.</p>
      `,
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      category: "Consejos",
      categoryId: "tips",
      categoryColor: "from-red-500 to-pink-500",
      author: "Equipo Médico",
      date: "25 de Septiembre, 2024",
      readTime: "5 min",
      views: 13765,
      likes: 1034,
      tags: ["Consejos", "Seguridad", "Preparación", "Errores"],
    },
    {
      id: 6,
      title: "La Alimentación Ideal para una Recuperación Óptima Post-Cirugía",
      excerpt:
        "Plan nutricional recomendado por expertos para acelerar la cicatrización y optimizar resultados.",
      content: `
        <h2>Nutrición para Recuperación</h2>
        
        <h3>Proteínas: Base de Cicatrización</h3>
        <p>Consume 1.5g por kg de peso corporal diario. Fuentes: pollo, pescado, huevos.</p>

        <h3>Vitaminas Esenciales</h3>
        <ul>
          <li>Vitamina C: Cítricos, fresas, kiwi</li>
          <li>Vitamina A: Zanahoria, batata, espinaca</li>
          <li>Zinc: Carnes rojas, semillas, nueces</li>
        </ul>

        <h3>Hidratación</h3>
        <p>Mínimo 2-3 litros de agua diaria para eliminar toxinas y reducir inflamación.</p>
      `,
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
      category: "Recuperación",
      categoryId: "recovery",
      categoryColor: "from-green-500 to-teal-500",
      author: "Nutricionista Laura Pérez",
      date: "20 de Septiembre, 2024",
      readTime: "8 min",
      views: 7543,
      likes: 567,
      tags: ["Nutrición", "Recuperación", "Salud", "Alimentación"],
    },
    {
      id: 7,
      title: "Tecnología 4K en Cirugía Estética: El Futuro es Ahora",
      excerpt:
        "Cómo la tecnología de última generación está revolucionando los resultados en cirugía corporal.",
      content: `
        <h2>La Era de la Cirugía 4K</h2>
        
        <h3>¿Qué es la Tecnología 4K?</h3>
        <p>Un sistema de esculpido corporal de ultra alta definición que permite resultados imposibles con técnicas tradicionales.</p>

        <h3>Ventajas Tecnológicas</h3>
        <ul>
          <li>Precisión milimétrica en esculpido</li>
          <li>Menor trauma tisular</li>
          <li>Recuperación más rápida</li>
          <li>Resultados más naturales</li>
        </ul>
      `,
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      category: "Tecnología",
      categoryId: "procedures",
      categoryColor: "from-indigo-500 to-blue-500",
      author: "Dr. Frank Lamadrid",
      date: "15 de Septiembre, 2024",
      readTime: "7 min",
      views: 10345,
      likes: 743,
      tags: ["Tecnología", "4K", "Innovación", "Futuro"],
    },
    {
      id: 8,
      title: "Testimonio Real: Mi Experiencia con la Lipoescultura 4K",
      excerpt:
        "Historia completa de transformación: desde la consulta inicial hasta los resultados finales.",
      content: `
        <h2>Mi Viaje de Transformación</h2>
        
        <h3>La Decisión</h3>
        <p>Después de años de inseguridad, finalmente tomé la decisión de contactar al Dr. Lamadrid...</p>

        <h3>El Proceso</h3>
        <p>Desde la primera consulta, me sentí en las mejores manos. El equipo fue profesional, empático y transparente.</p>

        <h3>Los Resultados</h3>
        <p>No solo cambió mi cuerpo, cambió mi vida. La confianza que gané es invaluable.</p>
      `,
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
      category: "Testimonios",
      categoryId: "tips",
      categoryColor: "from-pink-500 to-rose-500",
      author: "Paciente Verificado",
      date: "10 de Septiembre, 2024",
      readTime: "12 min",
      views: 18976,
      likes: 1567,
      tags: ["Testimonio", "Experiencia", "Resultados", "Historia"],
    },
    {
      id: 9,
      title: "Financiamiento para Tu Cirugía: Opciones y Consejos",
      excerpt:
        "Guía completa sobre planes de pago, financiamiento y cómo hacer tu cirugía más accesible.",
      content: `
        <h2>Opciones de Financiamiento</h2>
        
        <h3>Planes de Pago</h3>
        <p>Ofrecemos planes flexibles de 6, 12 y 18 meses sin intereses.</p>

        <h3>Alianzas Bancarias</h3>
        <p>Convenios con principales bancos para créditos preaprobados.</p>

        <h3>Paquetes Integrales</h3>
        <p>Opciones todo incluido con descuentos especiales.</p>
      `,
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      category: "Información",
      categoryId: "tips",
      categoryColor: "from-gray-500 to-slate-500",
      author: "Coordinador Financiero",
      date: "5 de Septiembre, 2024",
      readTime: "6 min",
      views: 6823,
      likes: 445,
      tags: ["Financiamiento", "Costos", "Planes", "Opciones"],
    },
  ];

  const trendingTopics = [
    { topic: "Lipoescultura 4K", posts: 127, trend: "+45%" },
    { topic: "BBL Seguro", posts: 89, trend: "+32%" },
    { topic: "Recuperación Rápida", posts: 76, trend: "+28%" },
    { topic: "Turismo Médico", posts: 64, trend: "+51%" },
    { topic: "Resultados Naturales", posts: 58, trend: "+22%" },
  ];

  const allTags = [
    "Lipoescultura",
    "BBL",
    "Recuperación",
    "Turismo",
    "Abdomen",
    "Resultados",
    "Consejos",
    "4K",
    "Seguridad",
    "Nutrición",
    "Testimonios",
    "Tecnología",
  ];

  // Filter articles
  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "all" || article.categoryId === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesTag = !selectedTag || article.tags.includes(selectedTag);
    return matchesCategory && matchesSearch && matchesTag;
  });

  // Toggle like
  const toggleLike = (articleId) => {
    setLikedArticles((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(articleId)) {
        newSet.delete(articleId);
      } else {
        newSet.add(articleId);
      }
      return newSet;
    });
  };

  // Toggle bookmark
  const toggleBookmark = (articleId) => {
    setBookmarkedArticles((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(articleId)) {
        newSet.delete(articleId);
      } else {
        newSet.add(articleId);
      }
      return newSet;
    });
  };

  // Handle newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setIsSubscribed(false);
      }, 3000);
    }
  };

  // Share functions
  const shareArticle = (article, platform) => {
    const url = `https://drfranklamadrid.com/blog/${article.id}`;
    const text = article.title;

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(text)}`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "whatsapp":
        window.open(
          `https://api.whatsapp.com/send?text=${encodeURIComponent(
            text + " " + url
          )}`,
          "_blank"
        );
        break;
      case "email":
        window.location.href = `mailto:?subject=${encodeURIComponent(
          text
        )}&body=${encodeURIComponent(url)}`;
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
    setShareModal(null);
  };

  // Open article modal
  const openArticle = (article) => {
    setSelectedArticle(article);
    document.body.style.overflow = "hidden";
  };

  // Close article modal
  const closeArticle = () => {
    setSelectedArticle(null);
    document.body.style.overflow = "auto";
  };

  // Increment views when opening article
  useEffect(() => {
    if (selectedArticle) {
      // Simulate view increment
      console.log(`Viewing article: ${selectedArticle.title}`);
    }
  }, [selectedArticle]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/10 via-medical-blue/5 to-purple-500/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Blog & Noticias</span>
              <br />
              <span className="text-gray-900">
                Educación en Cirugía Estética
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Información valiosa, consejos de expertos y últimas tendencias en
              cirugía plástica
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Buscar artículos, temas, procedimientos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-6 py-5 rounded-full border-2 border-gray-200 focus:border-luxury-gold outline-none text-lg transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap flex items-center gap-2 flex-shrink-0 ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-luxury-gold to-luxury-darkGold text-white shadow-lg"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                <span className="text-xl">{cat.icon}</span>
                <span>{cat.name}</span>
                <span className="text-xs opacity-75">({cat.count})</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Search Results Info */}
      {searchQuery && (
        <div className="container mx-auto px-4 py-6">
          <p className="text-gray-600">
            Mostrando{" "}
            <span className="font-bold text-luxury-gold">
              {filteredArticles.length}
            </span>{" "}
            resultados para
            <span className="font-bold"> "{searchQuery}"</span>
          </p>
        </div>
      )}

      {/* Featured Article */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => openArticle(featuredArticle)}
              className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
            >
              <div className="relative h-[500px] overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <div className="inline-block px-4 py-2 bg-luxury-gold rounded-full text-sm font-bold mb-4">
                  ⭐ ARTÍCULO DESTACADO
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 max-w-4xl">
                  {featuredArticle.title}
                </h2>
                <p className="text-xl mb-6 max-w-3xl opacity-90">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    <span>{featuredArticle.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{featuredArticle.readTime} de lectura</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    <span>{featuredArticle.views.toLocaleString()} vistas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart
                      className={`w-5 h-5 ${
                        likedArticles.has(featuredArticle.id)
                          ? "fill-current"
                          : ""
                      }`}
                    />
                    <span>
                      {featuredArticle.likes +
                        (likedArticles.has(featuredArticle.id) ? 1 : 0)}{" "}
                      likes
                    </span>
                  </div>
                </div>
                <button className="mt-6 text-black bg-white text-navy font-bold py-3 px-8 rounded-full hover:shadow-xl transform hover:scale-105 transition-all inline-flex items-center gap-2">
                  <span>Leer Artículo Completo</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Articles Grid */}
            <div className="lg:col-span-2">
              {filteredArticles.length === 0 ? (
                <div className="text-center py-20">
                  <Search className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    No se encontraron artículos
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Intenta con otros términos de búsqueda
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                      setSelectedTag(null);
                    }}
                    className="btn-luxury"
                  >
                    Ver Todos los Artículos
                  </button>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredArticles.map((article, idx) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all group cursor-pointer"
                    >
                      <div onClick={() => openArticle(article)}>
                        <div className="relative h-56 overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                          <div
                            className={`absolute top-4 left-4 px-4 py-2 bg-gradient-to-r ${article.categoryColor} text-white rounded-full text-xs font-bold`}
                          >
                            {article.category}
                          </div>

                          {/* Bookmark button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleBookmark(article.id);
                            }}
                            className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all"
                          >
                            <Bookmark
                              className={`w-5 h-5 ${
                                bookmarkedArticles.has(article.id)
                                  ? "fill-luxury-gold text-luxury-gold"
                                  : "text-gray-600"
                              }`}
                            />
                          </button>
                        </div>

                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-luxury-gold transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {article.excerpt}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {article.tags.slice(0, 2).map((tag, idx) => (
                              <button
                                key={idx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedTag(tag);
                                  window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                  });
                                }}
                                className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-luxury-gold hover:text-white transition-all"
                              >
                                #{tag}
                              </button>
                            ))}
                          </div>

                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{article.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between px-6 pb-6 pt-0 border-t border-gray-200 mx-6">
                        <div className="flex items-center gap-4 text-sm text-gray-600 py-4">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{article.views.toLocaleString()}</span>
                          </div>
                          <button
                            onClick={() => toggleLike(article.id)}
                            className="flex items-center gap-1 hover:text-red-500 transition-colors"
                          >
                            <Heart
                              className={`w-4 h-4 ${
                                likedArticles.has(article.id)
                                  ? "fill-current text-red-500"
                                  : ""
                              }`}
                            />
                            <span>
                              {article.likes +
                                (likedArticles.has(article.id) ? 1 : 0)}
                            </span>
                          </button>
                        </div>
                        <button
                          onClick={() => setShareModal(article)}
                          className="text-luxury-gold font-semibold hover:text-luxury-darkGold transition-colors flex items-center gap-1"
                        >
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trending Topics */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-4 shadow-lg max-w-sm mx-auto"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-luxury-gold" />
                  Temas Trending
                </h3>
                <div className="space-y-4">
                  {trendingTopics.map((topic, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div>
                        <p className="font-semibold text-gray-900">
                          {topic.topic}
                        </p>
                        <p className="text-sm text-gray-600">
                          {topic.posts} artículos
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-green-600 font-bold text-sm">
                          {topic.trend}
                        </p>
                        <TrendingUp className="w-4 h-4 text-green-600 ml-auto" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-luxury-gold to-luxury-darkGold text-white rounded-3xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4">
                  📧 Newsletter Semanal
                </h3>
                <p className="mb-6 opacity-90">
                  Recibe los mejores artículos, consejos y promociones
                  exclusivas directo en tu email
                </p>
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    placeholder="Tu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl text-gray-900 outline-none"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-white text-luxury-gold font-bold py-3 px-6 rounded-xl hover:shadow-xl transition-all"
                  >
                    {isSubscribed ? "✓ ¡Suscrito!" : "Suscribirme Gratis"}
                  </motion.button>
                </form>
                <p className="text-xs mt-4 opacity-75">
                  Más de 25,000 suscriptores ya reciben nuestros consejos
                </p>
              </motion.div>

              {/* Popular Tags */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Tag className="w-6 h-6 text-medical-blue" />
                  Tags Populares
                </h3>
                {selectedTag && (
                  <div className="mb-4 flex items-center justify-between bg-luxury-gold/10 p-3 rounded-xl">
                    <span className="text-sm text-luxury-darkGold">
                      Filtrando por: <strong>#{selectedTag}</strong>
                    </span>
                    <button
                      onClick={() => setSelectedTag(null)}
                      className="text-luxury-darkGold hover:text-luxury-gold"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSelectedTag(selectedTag === tag ? null : tag);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={`px-4 py-2 rounded-full text-sm transition-all ${
                        selectedTag === tag
                          ? "bg-luxury-gold text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-luxury-gold hover:text-white"
                      }`}
                    >
                      #{tag}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* CTA Box */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-medical-blue to-cyan-600 text-white rounded-3xl p-8 shadow-lg text-center"
              >
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-3">
                  ¿Listo para Tu Transformación?
                </h3>
                <p className="mb-6 opacity-90">
                  Agenda tu consulta gratis y recibe un plan personalizado
                </p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://api.whatsapp.com/send?phone=573175112107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-medical-blue font-bold py-3 px-8 rounded-full hover:shadow-xl transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Contactar Ahora</span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-medical-blue to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-luxury-gold rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className=" text-4xl md:text-5xl font-bold mb-6">
            Mantente Informado
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Nuevos artículos cada semana con información valiosa para tu viaje
            de transformación
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                alert(`Tienes ${bookmarkedArticles.size} artículos guardados`)
              }
              className="text-black bg-white text-navy font-bold py-4 px-8 rounded-full hover:shadow-2xl transition-all inline-flex items-center gap-2"
            >
              <Bookmark className="w-5 h-5" />
              <span>Ver Artículos Guardados ({bookmarkedArticles.size})</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                setShareModal({ title: "Blog Dr. Frank Lamadrid", id: "blog" })
              }
              className="bg-luxury-gold text-white font-bold py-4 px-8 rounded-full hover:shadow-2xl transition-all inline-flex items-center gap-2"
            >
              <Share2 className="w-5 h-5" />
              <span>Compartir Blog</span>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={closeArticle}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto my-auto relative shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={closeArticle}
                className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all z-10 shadow-lg"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>

              {/* Article Image */}
              <div className="relative h-46 overflow-hidden rounded-t-3xl">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div
                    className={`inline-block px-4 py-2 bg-gradient-to-r ${
                      selectedArticle.categoryColor ||
                      "from-luxury-gold to-luxury-darkGold"
                    } rounded-full text-sm font-bold mb-4`}
                  >
                    {selectedArticle.category}
                  </div>
                  <h2 className="text-4xl font-bold mb-4">
                    {selectedArticle.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{selectedArticle.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedArticle.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{selectedArticle.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-8 md:p-12">
                {/* Stats */}
                <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Eye className="w-5 h-5" />
                    <span>{selectedArticle.views.toLocaleString()} vistas</span>
                  </div>
                  <button
                    onClick={() => toggleLike(selectedArticle.id)}
                    className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        likedArticles.has(selectedArticle.id)
                          ? "fill-current text-red-500"
                          : ""
                      }`}
                    />
                    <span>
                      {selectedArticle.likes +
                        (likedArticles.has(selectedArticle.id) ? 1 : 0)}{" "}
                      likes
                    </span>
                  </button>
                  <button
                    onClick={() => toggleBookmark(selectedArticle.id)}
                    className="flex items-center gap-2 text-gray-600 hover:text-luxury-gold transition-colors"
                  >
                    <Bookmark
                      className={`w-5 h-5 ${
                        bookmarkedArticles.has(selectedArticle.id)
                          ? "fill-current text-luxury-gold"
                          : ""
                      }`}
                    />
                    <span>
                      {bookmarkedArticles.has(selectedArticle.id)
                        ? "Guardado"
                        : "Guardar"}
                    </span>
                  </button>
                  <button
                    onClick={() => setShareModal(selectedArticle)}
                    className="flex items-center gap-2 text-gray-600 hover:text-luxury-gold transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                    <span>Compartir</span>
                  </button>
                </div>

                {/* Article Body */}
                <div
                  className="prose prose-lg max-w-none article-content"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-4">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedArticle.tags.map((tag, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedTag(tag);
                          closeArticle();
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-luxury-gold hover:text-white transition-all"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 bg-gradient-to-r from-luxury-gold to-luxury-darkGold text-white rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold mb-3">
                    ¿Te gustó este artículo?
                  </h3>
                  <p className="mb-6 opacity-90">
                    Agenda tu consulta gratuita y comienza tu transformación
                  </p>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://api.whatsapp.com/send?phone=573175112107"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-luxury-gold font-bold py-3 px-8 rounded-full hover:shadow-xl transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Contactar por WhatsApp</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Share Modal */}
      <AnimatePresence>
        {shareModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShareModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-md w-full"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Compartir</h3>
                <button
                  onClick={() => setShareModal(null)}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => shareArticle(shareModal, "whatsapp")}
                  className="flex flex-col items-center gap-2 p-4 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors"
                >
                  <MessageCircle className="w-8 h-8 text-green-600" />
                  <span className="text-xs font-semibold text-green-600">
                    WhatsApp
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => shareArticle(shareModal, "facebook")}
                  className="flex flex-col items-center gap-2 p-4 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors"
                >
                  <Facebook className="w-8 h-8 text-blue-600" />
                  <span className="text-xs font-semibold text-blue-600">
                    Facebook
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => shareArticle(shareModal, "twitter")}
                  className="flex flex-col items-center gap-2 p-4 bg-sky-50 rounded-2xl hover:bg-sky-100 transition-colors"
                >
                  <Twitter className="w-8 h-8 text-sky-600" />
                  <span className="text-xs font-semibold text-sky-600">
                    Twitter
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => shareArticle(shareModal, "linkedin")}
                  className="flex flex-col items-center gap-2 p-4 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors"
                >
                  <Linkedin className="w-8 h-8 text-blue-700" />
                  <span className="text-xs font-semibold text-blue-700">
                    LinkedIn
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => shareArticle(shareModal, "email")}
                  className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
                >
                  <Mail className="w-8 h-8 text-gray-600" />
                  <span className="text-xs font-semibold text-gray-600">
                    Email
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => shareArticle(shareModal, "copy")}
                  className="flex flex-col items-center gap-2 p-4 bg-luxury-lightGold rounded-2xl hover:bg-luxury-gold hover:text-white transition-colors"
                >
                  {copied ? (
                    <Check className="w-8 h-8 text-luxury-gold" />
                  ) : (
                    <Copy className="w-8 h-8 text-luxury-darkGold" />
                  )}
                  <span className="text-xs font-semibold text-luxury-darkGold">
                    {copied ? "Copiado" : "Copiar"}
                  </span>
                </motion.button>
              </div>

              <div className="text-center text-sm text-gray-600">
                Comparte con tus amigos y ayúdalos a tomar decisiones informadas
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

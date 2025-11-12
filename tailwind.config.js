/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ===== PALETA MÉDICA PROFESIONAL =====
        primary: {
          50: '#E8F4F8',    // Azul ultra claro - Calma
          100: '#D1E9F1',   // Azul muy claro - Serenidad
          200: '#A3D3E3',   // Azul claro - Paz
          300: '#75BDD5',   // Azul medio claro - Claridad
          400: '#47A7C7',   // Azul medio - Confianza
          500: '#0089B3',   // Azul médico principal - Profesionalismo
          600: '#006D8F',   // Azul profundo - Autoridad
          700: '#00526B',   // Azul oscuro - Experiencia
          800: '#003647',   // Azul muy oscuro - Seriedad
          900: '#001B23',   // Azul noche - Profundidad
        },

        // ===== AZULES MÉDICOS (Confianza Absoluta) =====
        medical: {
          // Azules principales
          primary: '#0089B3',      // Azul médico confiable
          dark: '#005A7A',         // Azul médico oscuro
          light: '#E8F4F8',        // Azul ultra claro
          sky: '#B8E0EE',          // Azul cielo suave
          
          // Tonos complementarios
          teal: '#008B8B',         // Verde azulado profesional
          cyan: '#00A8CC',         // Cyan médico
          navy: '#1A4D6D',         // Azul marino institucional
        },

        // ===== GRISES CLÍNICOS (Neutralidad Profesional) =====
        clinical: {
          white: '#FFFFFF',        // Blanco puro
          snow: '#FAFBFC',         // Blanco nieve
          alabaster: '#F5F7F9',    // Blanco alabastro
          silver: '#E8EBED',       // Plata claro
          steel: '#D1D5D9',        // Acero
          slate: '#9BA3A9',        // Pizarra
          charcoal: '#4A5660',     // Carbón
          graphite: '#2C3E50',     // Grafito
          dark: '#1A252F',         // Oscuro profesional
        },

        // ===== VERDES MÉDICOS (Salud y Vida) =====
        health: {
          mint: '#E8F5F1',         // Menta claro
          sage: '#C8E6DD',         // Salvia claro
          emerald: '#00B894',      // Esmeralda
          forest: '#00856A',       // Verde bosque
          success: '#059669',      // Verde éxito
        },

        // ===== ACENTOS PROFESIONALES =====
        accent: {
          info: '#0284C7',         // Información
          warning: '#F59E0B',      // Advertencia
          error: '#DC2626',        // Error
          success: '#10B981',      // Éxito
        },

        // ===== SISTEMA SEMÁNTICO =====
        status: {
          active: '#00B894',       // Activo
          pending: '#0089B3',      // Pendiente
          inactive: '#9BA3A9',     // Inactivo
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
        body: ['Roboto', 'Inter', 'sans-serif'],
        heading: ['Montserrat', 'Poppins', 'sans-serif'],
      },

      backgroundImage: {
        // Gradientes médicos profesionales
        'gradient-medical': 'linear-gradient(135deg, #0089B3 0%, #005A7A 100%)',
        'gradient-medical-soft': 'linear-gradient(135deg, #E8F4F8 0%, #D1E9F1 100%)',
        'gradient-trust': 'linear-gradient(135deg, #1A4D6D 0%, #0089B3 100%)',
        'gradient-professional': 'linear-gradient(135deg, #2C3E50 0%, #1A4D6D 100%)',
        
        // Gradientes clínicos
        'gradient-clinic': 'linear-gradient(180deg, #FAFBFC 0%, #F5F7F9 100%)',
        'gradient-clean': 'linear-gradient(135deg, #FFFFFF 0%, #F5F7F9 100%)',
        
        // Gradientes de éxito
        'gradient-success': 'linear-gradient(135deg, #00B894 0%, #00856A 100%)',
      },

      boxShadow: {
        // Sombras médicas profesionales
        'medical': '0 10px 40px -8px rgba(0, 137, 179, 0.15)',
        'medical-sm': '0 4px 20px -4px rgba(0, 137, 179, 0.12)',
        'medical-lg': '0 20px 60px -12px rgba(0, 137, 179, 0.20)',
        'medical-xl': '0 30px 80px -16px rgba(0, 137, 179, 0.25)',
        
        // Sombras clínicas suaves
        'clinic': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'clinic-hover': '0 8px 30px rgba(0, 0, 0, 0.10)',
        'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 48px rgba(0, 0, 0, 0.12)',
        'hover': '0 16px 56px rgba(0, 0, 0, 0.14)',
        
        // Sombras internas
        'inner-soft': 'inset 0 2px 4px rgba(0, 0, 0, 0.04)',
        
        // Sombras premium
        'premium': '0 20px 60px -12px rgba(0, 137, 179, 0.20)',
      },

      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'slide-left': 'slideLeft 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'scale-up': 'scaleUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },

      // Espaciado personalizado
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },

      // Border radius personalizado
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      // Blur personalizado
      blur: {
        'xs': '2px',
        '4xl': '72px',
      },

      // Z-index personalizado
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}
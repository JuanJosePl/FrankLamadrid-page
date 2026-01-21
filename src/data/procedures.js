// data/procedures.js
// Catálogo completo de procedimientos médicos con precios base y ajustes por complejidad

export const PROCEDURES = {
  lipo4k: {
    id: 'lipo4k',
    name: { 
      es: 'Lipoescultura 4K', 
      en: '4K Liposculpture' 
    },
    basePrice: 4500,
    complexity: { 
      low: 0,       // Sin costo adicional
      medium: 500,  // +$500
      high: 1200    // +$1,200
    },
    description: { 
      es: 'Definición de alta precisión con tecnología 4K', 
      en: 'High precision definition with 4K technology' 
    },
    recoveryDays: 7
  },
  
  abdomen: {
    id: 'abdomen',
    name: { 
      es: 'Marcación Abdominal', 
      en: 'Abdominal Definition' 
    },
    basePrice: 5200,
    complexity: { 
      low: 0, 
      medium: 600, 
      high: 1400 
    },
    description: { 
      es: 'Six-pack profesional con definición muscular', 
      en: 'Professional six-pack with muscle definition' 
    },
    recoveryDays: 10
  },
  
  gluteos: {
    id: 'gluteos',
    name: { 
      es: 'Aumento de Glúteos (BBL)', 
      en: 'Buttock Augmentation (BBL)' 
    },
    basePrice: 5800,
    complexity: { 
      low: 0, 
      medium: 700, 
      high: 1600 
    },
    description: { 
      es: 'BBL con grasa autóloga y técnica VASER', 
      en: 'BBL with autologous fat and VASER technique' 
    },
    recoveryDays: 14
  },
  
  rinoplastia: {
    id: 'rinoplastia',
    name: { 
      es: 'Rinoplastia', 
      en: 'Rhinoplasty' 
    },
    basePrice: 4200,
    complexity: { 
      low: 0, 
      medium: 800, 
      high: 1800 
    },
    description: { 
      es: 'Armonización facial y corrección estructural', 
      en: 'Facial harmonization and structural correction' 
    },
    recoveryDays: 12
  },
  
  mamoplastia: {
    id: 'mamoplastia',
    name: { 
      es: 'Mamoplastia de Aumento', 
      en: 'Breast Augmentation' 
    },
    basePrice: 4800,
    complexity: { 
      low: 0, 
      medium: 600, 
      high: 1300 
    },
    description: { 
      es: 'Implantes premium FDA con garantía de por vida', 
      en: 'Premium FDA implants with lifetime warranty' 
    },
    recoveryDays: 8
  },

  abdominoplastia: {
    id: 'abdominoplastia',
    name: { 
      es: 'Abdominoplastia (Tummy Tuck)', 
      en: 'Abdominoplasty (Tummy Tuck)' 
    },
    basePrice: 5500,
    complexity: { 
      low: 0, 
      medium: 800, 
      high: 1700 
    },
    description: { 
      es: 'Eliminación de exceso de piel y grasa abdominal', 
      en: 'Removal of excess skin and abdominal fat' 
    },
    recoveryDays: 14
  }
}

// Helper para obtener procedimiento por ID
export const getProcedureById = (id) => {
  return PROCEDURES[id] || null
}

// Helper para obtener todos los IDs
export const getAllProcedureIds = () => {
  return Object.keys(PROCEDURES)
}

// Helper para calcular precio con complejidad
export const calculateProcedurePrice = (procedureId, complexityLevel = 'medium') => {
  const procedure = PROCEDURES[procedureId]
  if (!procedure) return 0
  
  return procedure.basePrice + procedure.complexity[complexityLevel]
}

export default PROCEDURES
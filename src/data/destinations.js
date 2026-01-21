// data/destinations.js
// Catálogo de destinos médicos internacionales con hoteles premium

export const DESTINATIONS = {
  colombia: {
    id: 'colombia',
    name: { es: 'Colombia', en: 'Colombia' },
    flag: '🇨🇴',
    cities: {
      barranquilla: {
        id: 'barranquilla',
        name: { es: 'Barranquilla', en: 'Barranquilla' },
        priceMultiplier: 1.0,
        timezone: 'America/Bogota',
        airports: ['BAQ'],
        hospitals: ['Clínica Bautista', 'Clínica La Concepción'],
        hotels: {
          fourStar: { 
            name: 'Hotel Dann Carlton Barranquilla', 
            pricePerNight: 120,
            amenities: ['Pool', 'Gym', 'Spa', 'Restaurant'],
            rating: 4.5
          },
          fiveStar: { 
            name: 'Hilton Garden Inn Barranquilla', 
            pricePerNight: 180,
            amenities: ['Pool', 'Gym', 'Spa', 'Restaurant', 'Bar', 'Conference Rooms'],
            rating: 4.7
          }
        }
      },
      bogota: {
        id: 'bogota',
        name: { es: 'Bogotá', en: 'Bogota' },
        priceMultiplier: 1.15,
        timezone: 'America/Bogota',
        airports: ['BOG'],
        hospitals: ['Fundación Santa Fe', 'Clínica del Country'],
        hotels: {
          fourStar: { 
            name: 'Hotel Tequendama', 
            pricePerNight: 140,
            amenities: ['Pool', 'Gym', 'Restaurant'],
            rating: 4.3
          },
          fiveStar: { 
            name: 'JW Marriott Hotel Bogota', 
            pricePerNight: 220,
            amenities: ['Pool', 'Gym', 'Spa', 'Restaurant', 'Bar', 'Concierge'],
            rating: 4.8
          }
        }
      },
      medellin: {
        id: 'medellin',
        name: { es: 'Medellín', en: 'Medellin' },
        priceMultiplier: 1.1,
        timezone: 'America/Bogota',
        airports: ['MDE'],
        hospitals: ['Hospital Pablo Tobón Uribe', 'Clínica Las Américas'],
        hotels: {
          fourStar: { 
            name: 'Hotel Estelar Milla de Oro', 
            pricePerNight: 130,
            amenities: ['Gym', 'Restaurant', 'Business Center'],
            rating: 4.4
          },
          fiveStar: { 
            name: 'InterContinental Medellin', 
            pricePerNight: 200,
            amenities: ['Pool', 'Gym', 'Spa', 'Restaurant', 'Rooftop Bar'],
            rating: 4.7
          }
        }
      }
    }
  },

  mexico: {
    id: 'mexico',
    name: { es: 'México', en: 'Mexico' },
    flag: '🇲🇽',
    cities: {
      cancun: {
        id: 'cancun',
        name: { es: 'Cancún', en: 'Cancun' },
        priceMultiplier: 1.05,
        timezone: 'America/Cancun',
        airports: ['CUN'],
        hospitals: ['Hospital Galenia', 'Hospiten Cancún'],
        hotels: {
          fourStar: { 
            name: 'Fiesta Americana Condesa Cancun', 
            pricePerNight: 160,
            amenities: ['Beach Access', 'Pool', 'Restaurant', 'Bar'],
            rating: 4.5
          },
          fiveStar: { 
            name: 'Live Aqua Beach Resort Cancun', 
            pricePerNight: 280,
            amenities: ['Beach Access', 'Infinity Pool', 'Spa', 'Gourmet Restaurant', 'Butler Service'],
            rating: 4.9
          }
        }
      },
      monterrey: {
        id: 'monterrey',
        name: { es: 'Monterrey', en: 'Monterrey' },
        priceMultiplier: 1.12,
        timezone: 'America/Monterrey',
        airports: ['MTY'],
        hospitals: ['Hospital San José', 'Christus Muguerza'],
        hotels: {
          fourStar: { 
            name: 'Hotel Safi Royal Luxury', 
            pricePerNight: 135,
            amenities: ['Pool', 'Gym', 'Restaurant'],
            rating: 4.4
          },
          fiveStar: { 
            name: 'Camino Real Monterrey', 
            pricePerNight: 195,
            amenities: ['Pool', 'Gym', 'Spa', 'Restaurant', 'Business Center'],
            rating: 4.6
          }
        }
      },
      tijuana: {
        id: 'tijuana',
        name: { es: 'Tijuana', en: 'Tijuana' },
        priceMultiplier: 0.95,
        timezone: 'America/Tijuana',
        airports: ['TIJ', 'SAN'],
        hospitals: ['Hospital Angeles Tijuana', 'Hospital Excel'],
        hotels: {
          fourStar: { 
            name: 'City Express Tijuana Río', 
            pricePerNight: 110,
            amenities: ['Gym', 'Restaurant', 'Business Center'],
            rating: 4.2
          },
          fiveStar: { 
            name: 'Grand Hotel Tijuana', 
            pricePerNight: 170,
            amenities: ['Pool', 'Gym', 'Spa', 'Restaurant', 'Casino'],
            rating: 4.5
          }
        }
      }
    }
  },

  brasil: {
    id: 'brasil',
    name: { es: 'Brasil', en: 'Brazil' },
    flag: '🇧🇷',
    cities: {
      rio: {
        id: 'rio',
        name: { es: 'Río de Janeiro', en: 'Rio de Janeiro' },
        priceMultiplier: 1.08,
        timezone: 'America/Sao_Paulo',
        airports: ['GIG', 'SDU'],
        hospitals: ['Hospital Copa Star', 'Clínica São Vicente'],
        hotels: {
          fourStar: { 
            name: 'Windsor Excelsior Copacabana', 
            pricePerNight: 145,
            amenities: ['Beach Access', 'Pool', 'Gym', 'Restaurant'],
            rating: 4.4
          },
          fiveStar: { 
            name: 'Belmond Copacabana Palace', 
            pricePerNight: 320,
            amenities: ['Beach Access', 'Pool', 'Spa', 'Michelin Restaurant', 'Concierge'],
            rating: 4.9
          }
        }
      },
      saopaulo: {
        id: 'saopaulo',
        name: { es: 'São Paulo', en: 'Sao Paulo' },
        priceMultiplier: 1.18,
        timezone: 'America/Sao_Paulo',
        airports: ['GRU', 'CGH'],
        hospitals: ['Hospital Sírio-Libanês', 'Hospital Albert Einstein'],
        hotels: {
          fourStar: { 
            name: 'Tryp Higienópolis', 
            pricePerNight: 150,
            amenities: ['Pool', 'Gym', 'Restaurant', 'Business Center'],
            rating: 4.3
          },
          fiveStar: { 
            name: 'Hotel Unique', 
            pricePerNight: 290,
            amenities: ['Rooftop Pool', 'Spa', 'Gourmet Restaurant', 'Art Gallery'],
            rating: 4.8
          }
        }
      }
    }
  }
}

// Helper functions
export const getDestinationById = (countryId) => {
  return DESTINATIONS[countryId] || null
}

export const getCityById = (countryId, cityId) => {
  const country = DESTINATIONS[countryId]
  if (!country) return null
  return country.cities[cityId] || null
}

export const getHotelPrice = (countryId, cityId, category) => {
  const city = getCityById(countryId, cityId)
  if (!city) return 0
  return city.hotels[category]?.pricePerNight || 0
}

export const getAllCountries = () => {
  return Object.keys(DESTINATIONS)
}

export const getCitiesByCountry = (countryId) => {
  const country = DESTINATIONS[countryId]
  if (!country) return []
  return Object.keys(country.cities)
}

export default DESTINATIONS
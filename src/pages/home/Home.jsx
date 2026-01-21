// Home.jsx - ACTUALIZADO (Sin TrustSection separado)
import HeroSection from './sections/HeroSection'
import AboutPreview from './sections/AboutPreview'
import MedicalTourismProduct from './sections/MedicalTourismProduct'
import TestimonialsVideo from './sections/TestimonialsVideo'
import FAQSection from './sections/FAQSection'
import MedicalStepForm from './sections/MedicalStepForm'

const Home = () => {
  return (
    <>
      {/* Hero Section ahora incluye Trust Section integrado */}
      <HeroSection />
      
      <AboutPreview />
      <MedicalTourismProduct />
      <MedicalStepForm />
      <TestimonialsVideo />
      <FAQSection />
    </>
  )
}

export default Home
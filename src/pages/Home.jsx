import HeroSection from './home/HeroSection'
import StatsSection from './home/StatsSection'
import AboutPreview from './home/AboutPreview'
import { FeaturedProcedures } from './home/FeaturedProcedures'
import Lipo4KSection from './home/Lipo4KSection'
import { WhyChooseUs } from './home/WhyChooseUs'
import  TestimonialsCarousel  from './home/TestimonialsCarousel'
import { BeforeAfterGallery } from './home/BeforeAfterGallery'
import { MedicalTourismBanner } from './home/MedicalTourismBanner'
import { CTASection } from './home/CTASection'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <Lipo4KSection />
      <FeaturedProcedures />
      <WhyChooseUs />
      <BeforeAfterGallery />
      <TestimonialsCarousel />
      <MedicalTourismBanner />
      <CTASection />
    </div>
  )
}

export default Home
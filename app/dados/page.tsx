import { HeroSection } from '@/app/dados/hero-section-dados'
import { AboutSection } from '@/app/dados/about-sec-dados'
import { Navigation } from '@/components/navigation'
import { ContactSection } from '@/components/contact-section'
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation/>
      <HeroSection/>
      <AboutSection />
      <ContactSection />
    </main>
  )
}

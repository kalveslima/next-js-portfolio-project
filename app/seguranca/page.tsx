import { HeroSection } from '@/app/seguranca/hero-section-seg'
import { AboutSection } from '@/app/seguranca/about-section-seg'
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

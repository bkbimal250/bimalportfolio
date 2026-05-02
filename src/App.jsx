import { AboutSection } from './Components/sections/AboutSection'
import { ContactSection } from './Components/sections/ContactSection'
import { ExperienceSection } from './Components/sections/ExperienceSection'
import { HeroSection } from './Components/sections/HeroSection'
import { ProjectsSection } from './Components/sections/ProjectsSection'
import { ServicesSection } from './Components/sections/ServicesSection'
import { SkillsSection } from './Components/sections/SkillsSection'
import { SiteHeader } from './Components/sections/SiteHeader'
// import { StatsSection } from './Components/sections/StatsSection'

function App() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <HeroSection />
        {/* <StatsSection /> */}
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </>
  )
}

export default App

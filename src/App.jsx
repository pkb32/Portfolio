import { useState } from 'react'
import NavbarMain from './components/navbar/NavbarMain'
import HeroMain from './components/characterSection/HeroMain'
import HeroGradient from './components/characterSection/HeroGradient'
import SubheroSection from './components/characterSection/SubheroSection'
import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import SkillsMain from './components/skillSection/SkillsMain'
import SubSkills from './components/skillSection/SubSkills'
import ExperienceMain from './components/experienceSection/ExperienceMain'
import ProjectsMain from './components/projectSection/ProjectsMain'
import ContactMeMain from './components/contactMeSection/ContactMeMain'
import FooterMain from './components/footer/FooterMain'

function App() {
  return (
    <main className='font-body overflow-x-hidden w-full '>
     <NavbarMain/>
     <HeroMain/>
     <HeroGradient/>
     <SubheroSection/>
     <AboutMeMain/>
     <SkillsMain/> 
     <SubSkills/>
     <ExperienceMain />
     <ProjectsMain/>
     <ContactMeMain/>
     <FooterMain/>    
    </main>
  )
}

export default App

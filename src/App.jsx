import { useState } from 'react'
import NavbarMain from './components/navbar/NavbarMain'
import HeroMain from './components/characterSection/HeroMain'
import HeroGradient from './components/characterSection/HeroGradient'
import SubheroSection from './components/characterSection/SubheroSection'
import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import HelperSection from './components/HelperSection'

function App() {
  return (
    <main className='font-body'>
     <NavbarMain/>
     <HeroMain/>
     <HeroGradient/>
     <SubheroSection/>
     <AboutMeMain/>
     <HelperSection/>
    </main>
  )
}

export default App

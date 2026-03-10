import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import WhyDifferent from '@/components/sections/WhyDifferent'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <About />
      <WhyDifferent />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

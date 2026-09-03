import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechnologyMarquee from './components/TechnologyMarquee'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Credentials from './components/Credentials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TechnologyMarquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

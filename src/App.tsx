import './index.css'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Audience } from './components/Audience'
import { Founder } from './components/Founder'
import { Contact } from './components/Contact'

function App() {
  return (
    <main className="min-h-screen">
      {/* Minimal fixed nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 bg-navy/80 backdrop-blur-md border-b border-white/5">
        <span className="font-display text-gold text-2xl tracking-[0.3em] font-semibold">
          BKRM
        </span>
        <a
          href="https://form.typeform.com/to/VsSeEVzN"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white/70 hover:text-gold border border-white/20 hover:border-gold px-5 py-2 transition-all duration-300"
        >
          Request Access
        </a>
      </nav>

      <Hero />
      <About />
      <Experience />
      <Audience />
      <Founder />
      <Contact />
    </main>
  )
}

export default App

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

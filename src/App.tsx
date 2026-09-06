import Header from './components/Header'
import Hero from './components/Hero'
import Candidates from './components/Candidates'
import Program from './components/Program'
import Event from './components/Event'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Candidates />
        <Program />
        <Event />
      </main>
      <Footer />
    </>
  )
}

export default App

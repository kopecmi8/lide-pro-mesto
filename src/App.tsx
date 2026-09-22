import Header from './components/Header'
import Hero from './components/Hero'
import Candidates from './components/Candidates'
import Program from './components/Program'
import Articles from './components/Articles'
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
        <Articles />
        <Event />
      </main>
      <Footer />
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Solucoes from './pages/Solucoes'
import Unidades from './pages/Unidades'
import Contato from './pages/Contato'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/sobre"     element={<Sobre />} />
          <Route path="/solucoes"  element={<Solucoes />} />
          <Route path="/unidades"  element={<Unidades />} />
          <Route path="/contato"   element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Sobre from './Sobre'
import Solucoes from './Solucoes'
import Unidades from './Unidades'
import Contato from './Contato'

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

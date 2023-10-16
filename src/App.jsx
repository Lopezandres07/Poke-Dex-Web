import './App.css'
import Navigate from './components/Navigate'
import Pokemons from './views/Pokemons'
import NotFound from './views/NotFound'
import Home from './views/Home'
import { Route, Routes } from 'react-router-dom'
import Information from './views/Information'
import About from './views/About'

function App() {
  return (
    <main>
      <Navigate />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/Pokemons'
          element={<Pokemons />}
        />
        <Route
          path='/Pokemons/:name'
          element={<Information />}
        />
        <Route
          path='/About'
          element={<About />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </main>
  )
}

export default App

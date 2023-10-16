import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([])
  console.log(pokemons)

  const [pokemonSelected, setPokemonSelected] = useState('')
  console.log(pokemonSelected)

  const navigate = useNavigate()

  const url = 'https://pokeapi.co/api/v2/pokemon'

  const getPokemons = async () => {
    const rest = await fetch(url)
    const { results } = await rest.json()

    setPokemons(results)
  }

  const goToPokemonDetails = async () => {
    pokemonSelected
      ? navigate(`/pokemons/${pokemonSelected}`)
      : alert('Debes seleccionar un Pokemon')
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <main className='container text-center'>
      <h2>Select a Pokemon</h2>
      <div className='selector'>
        <select
          value={pokemonSelected}
          className='text-center rounded'
          onChange={({ target }) => setPokemonSelected(target.value)}
        >
          <option>Pokemons</option>
          {pokemons.map(({ name }, i) => (
            <option key={i}>{name}</option>
          ))}
        </select>
        <Button
          onClick={goToPokemonDetails}
          variant='outline-danger'
          className='mt-2 '
        >
          Details
        </Button>
      </div>
      <img
        src='src\assets\imgs\pokebackground.png'
        alt='backgroundPhoto'
      />
    </main>
  )
}

export default Pokemons

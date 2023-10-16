import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PokemonCard from '../components/PokemonCard'

const Information = () => {
  const { name } = useParams()
  const [pokemom, setPokemom] = useState([])
  console.log(pokemom)

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`

  const getPokemonDetails = async () => {
    try {
      const res = await fetch(url)
      if (!res.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await res.json()
      console.log(data)

      const image = data.sprites.other.dream_world.front_default
      const stats = data.stats.map((stat) => ({
        nameStat: stat.stat.name,
        statistics: stat.base_stat,
      }))
      const type = data.types.map(({ type }) => type.name).join(' ')

      setPokemom({ name, image, stats, type })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPokemonDetails()
  }, [url])

  return <PokemonCard pokemom={pokemom} />
}

export default Information

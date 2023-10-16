import React from 'react'
import { Card } from 'react-bootstrap'

const PokemonCard = ({ pokemom }) => {
  const { name, image, stats, type } = pokemom

  return (
    <Card className='border-0 d-flex text-center align-items-center'>
      <div className='pokeCard'>
        <Card.Img src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text style={{ width: '10rem' }}>
            {stats?.map((detail, e) => (
              <p key={e}>
                {detail.nameStat}: <strong>{detail.statistics}</strong>
              </p>
            ))}
            <p>
              type: <strong>{type}</strong>
            </p>
          </Card.Text>
        </Card.Body>
      </div>
    </Card>
  )
}

export default PokemonCard

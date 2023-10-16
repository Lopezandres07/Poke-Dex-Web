import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className='container text-center'>
      <h1>Sorry</h1>
      <img
        src='src\assets\imgs\psyduck.png'
        alt='Not Found'
      />
      <p>
        <strong>PAGE NOT FOUND</strong>
      </p>
      <Button
        variant='outline-danger'
        onClick={() => navigate('/Pokemons')}
      >
        Back To Pokemons
      </Button>
    </div>
  )
}

export default NotFound

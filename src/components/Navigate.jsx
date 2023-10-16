import { Container, Nav, Navbar, NavbarText } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'

const Navigate = () => {
  const navigate = useNavigate()

  const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'noActive')
  return (
    <Navbar style={{ backgroundColor: 'lightgrey' }}>
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}>
          <img
            width='50'
            alt='Logo'
            src='src\assets\imgs\pokeball.png'
            style={{ width: '8rem' }}
          />
        </Navbar.Brand>
        <NavbarText style={{ color: 'black' }}>
          <h1>PokeDex Web</h1>
        </NavbarText>
        <Nav>
          <NavLink
            className={setActiveClass}
            to='/'
          >
            <h5>Home</h5>
          </NavLink>
          <NavLink
            className={setActiveClass}
            to='/Pokemons'
          >
            <h5>Pokemons</h5>
          </NavLink>
          <NavLink
            className={setActiveClass}
            to='/About'
          >
            <h5>About</h5>
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}
export default Navigate

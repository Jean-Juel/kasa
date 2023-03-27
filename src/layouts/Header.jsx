import 'styled-components'
import styled from "styled-components";
import logo from '../assets/logo.svg'
// import * as PropTypes from "prop-types";
import {Link,useLocation} from 'react-router-dom'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  margin: 0 auto;
  padding: 30px 10px;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const NavListe = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
`
const NavLink = styled.li`
  list-style: none;
`
const Naviguate = styled(Link)`
  text-underline: ${({path}) => path === "/" ? 'underline' : 'none'};
  text-decoration: none;
`

export default function NavBar() {
    // let path = useLocation().pathname
    return(
      <Header>
          <Link to="/"><img src={logo} alt="logo Kasa"/></Link>
          <Nav>
              <NavListe>
                  <NavLink><Naviguate to="/">Accueil</Naviguate></NavLink>
                  <NavLink><Naviguate to="/propos">A Propos</Naviguate></NavLink>
              </NavListe>
          </Nav>

      </Header>
    )
}


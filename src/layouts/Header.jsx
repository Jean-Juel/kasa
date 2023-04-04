import 'styled-components'
import styled from "styled-components";
import logo from '../assets/logo.svg'
// import * as PropTypes from "prop-types";
import {Link,useLocation} from 'react-router-dom'
import {useEffect, useState} from "react";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  margin: 0 auto;
  padding: 10px 0;
  @media (max-width: 1260px) {
    padding: 10px 20px;
  }
`
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.img`
  max-width: 150px;
  height: 70px;
  object-fit: contain;
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
  text-decoration: none;


  &:hover:before {
    text-decoration: underline solid var(--color-red) 2px;
  }
`

export default function NavBar() {
    const [active, setActive] = useState(false)
    let location = useLocation().pathname

    useEffect(()=> {
        setActive(!active)
    }, [location])
    return(
      <Header>
          <Link to="/"><Logo src={logo} alt="logo Kasa"/></Link>
          <Nav>
              <NavListe>
                  <NavLink style={{textDecoration: active ? 'underline solid var(--color-red) 2px' : 'none'}}><Naviguate to="/">Accueil</Naviguate></NavLink>
                  <NavLink style={{textDecoration: !active ? 'underline solid var(--color-red) 2px' : 'none'}}><Naviguate to="/propos">A Propos</Naviguate></NavLink>
              </NavListe>
          </Nav>

      </Header>
    )
}


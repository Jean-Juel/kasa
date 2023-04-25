import 'styled-components'
import styled from "styled-components";
import logo from '../assets/logo.svg'
// import * as PropTypes from "prop-types";
import {Link,useLocation, NavLink} from 'react-router-dom'
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
  gap: 32px
`
const Logo = styled.img`
  max-width: 150px;
  height: 70px;
  object-fit: contain;
`

export default function NavBar() {
    return(
      <Header>
          <Link to="/"><Logo src={logo} alt="logo Kasa"/></Link>
          <Nav>
              <NavLink to="/" className={({isActive}) => (isActive ? 'active' : 'inactive')}>Accueil</NavLink>
              <NavLink to="/propos" className={({isActive}) => (isActive ? 'active' : 'inactive')}>A Propos</NavLink>
          </Nav>
      </Header>
    )
}


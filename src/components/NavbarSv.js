import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Hamburger from 'hamburger-react'
import {
  HamburgerButton,
  Menu,
  Nav,
  Navtext
} from './Styling';

export const NavbarSv = () => {
  const [openNavbar, setOpenNavbar] = useState(false)
  const closeSideBar = () => { setOpenNavbar(false) }
  return (
    <Nav>
      <Link to="/"><Navtext>NAVIGERING</Navtext></Link>
      <HamburgerButton>
        <Hamburger
          label="Show menu"
          rounded
          toggled={openNavbar}
          toggle={setOpenNavbar} />
      </HamburgerButton>
      <Menu isOpen={openNavbar}>
        <ul><NavLink to="/" onClick={closeSideBar} style={({ isActive }) => ({ fontWeight: isActive ? '600' : '500' })}> HEM</NavLink></ul>
        <ul><NavLink to="/about" onClick={closeSideBar} style={({ isActive }) => ({ fontWeight: isActive ? '600' : '500' })}> OM</NavLink></ul>
        <ul><NavLink to="/portfolio" onClick={closeSideBar} style={({ isActive }) => ({ fontWeight: isActive ? '600' : '500' })}> PORTFÖLJ</NavLink></ul>
        <ul><NavLink to="/contact" onClick={closeSideBar} style={({ isActive }) => ({ fontWeight: isActive ? '600' : '500' })}> KONTAKT</NavLink></ul>
      </Menu>

    </Nav>
  )
}

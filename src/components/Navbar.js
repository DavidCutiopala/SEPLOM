import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import { ButtonContainer } from './Button'
import styled from 'styled-components'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm  navbar-dark px-sm-5 navSeplom">
        <Link to="/">
          <a><img src={"img/LOGO.png"} alt="store" className="navbar-brand logo " /></a>
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-2 letras-navbar">
            <Link to="/productos" className="nav-link ">
              PRODUCTOS
             </Link>
          </li>
          <li className="nav-item ml-5 letras-navbar">
            <Link to="/servicios" className="nav-link">
              SERVICIOS
             </Link>
          </li>
          <li className="nav-item ml-5 letras-navbar">
            <Link to="/services" className="nav-link">
              NOSOTROS
             </Link>
          </li>
          <li className="nav-item ml-5 letras-navbar">
            <Link to="/contactos" className="nav-link">
              CONTACTOS
             </Link>
          </li>

        </ul>
        <div className="containerRedesSociales">
          <a href="https://www.facebook.com/Plomer%C3%ADa-Inmediata-111753473617169/?modal=admin_todo_tour" ><img src={"img/fb.png"} alt="store" className="img-face" /></a>

          <a href=" https://www.instagram.com/plomeria1/" ><img src={"img/insta.png"} alt="store" className="img-face" /></a>

          <a href="https://www.youtube.com/watch?v=ihxRH6CDwJs"><img src={"img/yotube.png"} alt="store" className="img-face" /></a>
          <a   href="https://view.joomag.com/catalgo-seplom-catalogo-seplom-final/0113671001580049548"><img src={"img/catalog.png"} alt="store" className="img-face" /></a>

        </div>


        <Link className="ml-auto" to="/cart">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus"></i>
            </span>
            MI CARRITO
            </ButtonContainer>
        </Link>

      </nav>
    )
  }
}


const NavbarWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link {
      color: var(--mainWhite) !important;
      font-size: 1.3rem;
      text-transform: capitalize;
    }
`
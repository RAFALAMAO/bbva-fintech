import React from 'react';
import { useNavigate } from 'react-router-dom';

// Styles
import "./nav.css";

// Assets
import logo_bbva from "../../assets/logo_bbva_blanco.svg";
import { GH_PAGES_ROUTE } from '../../config/globals';


export default function Nav() {
  const navigate = useNavigate();

  return (
    <ul className="nav-horizontal">
      <li onClick={() => { navigate(`${GH_PAGES_ROUTE}`) }}><span><img src={logo_bbva} alt="asd" />TALENT</span></li>
      <li><a href="https://www.bbva.mx/" target={'_blank'} rel="noreferrer">BBVA</a></li>
      <li onClick={() => { navigate(`${GH_PAGES_ROUTE}/register`) }}>REGISTRARSE</li>
      <li onClick={() => { navigate(`${GH_PAGES_ROUTE}/login`) }}>INICIAR SESIÓN</li>
    </ul>
  )
}

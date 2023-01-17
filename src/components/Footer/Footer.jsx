import React from 'react'

// Styles
import "./footer.css";

// Assets
import logo_bbva from "../../assets/logo_bbva_blanco.svg";

export default function Footer() {
  return (
    <div className='footer'>
      <img src={logo_bbva} alt="" />
      <p>*2023 BBVA Página de prueba, Aarón Juárez Terrazas, Ciudad de México.</p>
    </div>
  )
}

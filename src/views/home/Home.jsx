import React from 'react';
import { useNavigate } from 'react-router-dom';
import InfoSlider from "../../components/InfoSlider/InfoSlider";

// Components
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

// Syles
import './home.css'

export default function Home() {
  // =========== Context

  // =========== States

  // =========== Constants
  const navigate = useNavigate();

  // =========== Session storage

  // =========== Functions
  const newUserRegistrer = () => {
    navigate('/register');
  }

  const login = () => {
    navigate('/login');
  }

  // =========== UseEffects

  return (
    <div>
      <Nav/>
      <div className='home'>
        <InfoSlider/>
        <button
          onClick={newUserRegistrer}
        >Registrarse</button>
        <button
          onClick={login}
        >Iniciar sesión</button>
      </div>
      <Footer/>
    </div>
  )
}

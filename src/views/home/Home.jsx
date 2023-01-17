import React from 'react';
import { useNavigate } from 'react-router-dom';
import InfoSlider from "../../components/InfoSlider/InfoSlider";

// Components
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

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
      <InfoSlider/>
      <button
        onClick={newUserRegistrer}
      >Registrarse</button>
      <button
        onClick={login}
      >Iniciar sesión</button>
      <Footer/>
    </div>
  )
}

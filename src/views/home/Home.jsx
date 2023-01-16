import React from 'react';
import { useNavigate } from 'react-router-dom';
import InfoSlider from "../../components/InfoSlider/InfoSlider";
import Nav from "../../components/Nav/Nav";

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
    </div>
  )
}

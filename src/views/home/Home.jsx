import React from 'react';
import { useNavigate } from 'react-router-dom';
import InfoSlider from "../../components/InfoSlider/InfoSlider";

// Components
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

// Syles
import './home.css'

// Assests
import AzureVmImg from "../../assets/imgs/azure_vm.png";
import AzureBsImg from "../../assets/imgs/azure_blob.png";
import MySqlImg from "../../assets/imgs/mysql.png";
import GithubImg from "../../assets/imgs/github.png";

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
        <h1>Tecnologías</h1>
        <div className='home-img-container'>
          <img className='home-imgs' src={AzureVmImg} alt="" />
          <img className='home-imgs' src={AzureBsImg} alt="" />
          <img className='home-imgs' src={MySqlImg} alt="" />
          <img className='home-imgs' src={GithubImg} alt="" />
        </div>
        <div className='login-buttons'>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              navigate('/register')
            }}
            className='login-reg-btn'
          >Registrarse</button>
          <button
            className='login-log-btn'
            onClick={(e) => {
              e.preventDefault();
              navigate('/register')
            }}
          >Iniciar sesión</button>
					</div>
      </div>
      <Footer/>
    </div>
  )
}

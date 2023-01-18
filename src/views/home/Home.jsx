import React, { useEffect } from 'react';
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

  // =========== UseEffects
  useEffect(() => {
		window.scrollTo(0,0)
	},[])

  return (
    <div>
      <Nav/>
      <div style={{
        background: '#004481',
        padding: '10px'
      }}>
        <InfoSlider/>
      </div>
      <div className='home'>
        <h1>Tecnologías utilizadas en la propuesta</h1>
        <div className='home-img-container'>
          <a href="https://azure.microsoft.com/en-us/products/virtual-machines/" target={'_blank'} rel='noreferrer' >
            <img style={{marginTop:'50px'}} className='home-imgs' src={AzureVmImg} alt="" />
          </a>
          <a href="https://github.com/" target={'_blank'} rel='noreferrer' >
            <img className='home-imgs' src={GithubImg} alt="" />
          </a>
          <a href="https://www.mysql.com" target={'_blank'} rel='noreferrer' >
            <img className='home-imgs' src={MySqlImg} alt="" />
          </a>
          <a href="https://azure.microsoft.com/en-us/products/storage/blobs/" target={'_blank'} rel='noreferrer' >
            <img style={{marginTop:'50px'}} className='home-imgs' src={AzureBsImg} alt="" />
          </a>
        </div>
        <div className='repo-btns'>
          <a href="https://github.com/RAFALAMAO/bbva-fintech-back" target={'_blank'} rel='noreferrer'>
            <button id='rep-back'>Repositorio Back-End</button>
          </a>
          <a href="https://github.com/RAFALAMAO/bbva-fintech" target={'_blank'} rel='noreferrer'>
            <button id='rep-front'>Repositorio Front-End</button>
          </a>
        </div>
        {/* <div className='login-buttons'>
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
              navigate('/login')
            }}
          >Iniciar sesión</button>
				</div> */}
      </div>
      <Footer/>
    </div>
  )
}

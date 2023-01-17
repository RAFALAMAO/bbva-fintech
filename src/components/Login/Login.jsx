import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

// Axios
import { axiosLogin } from "../../config/axiosGeneral";

// Styles
import './login.css'


export default function Login() {
  // =========== Context

  // =========== States
  const [loginData, setLoginData] = useState({});
	const [response, setResponse] = useState('_______');
	const [showPwd, setShowPwd] = useState(false);
	const [disableBtn, setDisableBtn] = useState(false);

  // =========== Constants
  const navigate = useNavigate();

  // =========== Session storage

  // =========== Functions
  const handleChange = ({ target }) => {
		setLoginData({
			...loginData,
			[target.name]: target.value
		})
  }

  const sendLogin = async (e) => {
		e.preventDefault();
		setResponse('_______');
		setDisableBtn(true);

		const loginBody = {
			email: loginData.email,
			password: loginData.pwd,
		}
		try {
			const login = await axiosLogin().post('/',loginBody);
			const userRole = login.data.role;
			const loginMessage = login.data.message;

			setResponse(loginMessage);
			if( login.data.message.includes('succes') ){
				sessionStorage.setItem('user_email', loginData.email)
				navigate(`/${userRole}-dash`)
			}

			// console.log(login);
		} catch (error) {
			console.log(error);
		}
		setDisableBtn(false);
  }

  // =========== UseEffects


  return (
    <>
			<Nav/>
			<div className='login'>
				<h1>¡Bienvenido a BBVA Talent!</h1>
				<p>Por favor ingresa los datos que se te piden a continuación para ingresar a tu cuenta de BBVA Talent.</p>
				<form
					onSubmit={sendLogin}
					className={'login-form'}
				>
					<div className='login-input'>
						<p>Correo electrónico</p>
						<input
							type="text"
							name="email"
							onChange={handleChange}
						/>
					</div>
					<div className='login-input'>
						<p>Contraseña</p>
						<input
							type={showPwd ? 'text' : "password"}
							name="pwd"
							onChange={handleChange}
						/>
					</div>
					<p
						className='login-show-pwd'
						onClick={(e) => {
							setShowPwd(!showPwd);
						}}
					>{ !showPwd ? 'Ver' : 'Ocultar' }</p>
					<p
						className='login-message'
						style={{opacity: response === '_______' ? 0 : 1}}
					>{response}</p>
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
							disabled={disableBtn}
						>Iniciar sesión</button>
					</div>
				</form>
			</div>
			<Footer/>
    </>
  )
}

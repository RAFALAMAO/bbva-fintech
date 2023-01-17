import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

// Axios
import { axiosLogin } from "../../config/axiosGeneral";


export default function Login() {
  // =========== Context

  // =========== States
  const [loginData, setLoginData] = useState({});
	const [response, setResponse] = useState({});

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
  }

  // =========== UseEffects


  return (
    <>
			<Nav/>
			<h1>Login feo :V</h1>
			<form
				onSubmit={sendLogin}
			>
				<div>
					<p>Ingresa correo</p>
					<input
						type="text"
						name="email"
						onChange={handleChange}
					/>
				</div>
				<div>
					<p>Ingresa contraseña</p>
					<input
						type="password"
						name="pwd"
						onChange={handleChange}
					/>
				</div>
				<div>
					<button
						type="button"
						onClick={(e) => {
							e.preventDefault();
							navigate('/register')
						}}
					>Registrarse</button>
					<button>Iniciar sesión</button>
				</div>
			</form>
			<p>La respuesta: {JSON.stringify(response)}</p>
			<Footer/>
    </>
  )
}

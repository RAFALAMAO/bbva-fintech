import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
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

  const sendLogin = async () => {
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
				navigate(`/${userRole}-dash`)
			}

			console.log(login);
		} catch (error) {
			console.log(error);
		}
  }

  // =========== UseEffects
  return (
    <>
			<Nav/>
			Login feo :V
			<div>
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
						type="text"
						name="pwd"
						onChange={handleChange}
					/>
				</div>
				<button
					onClick={sendLogin}
				>Enviar
				</button>
			</div>
			<p>La respuesta: {JSON.stringify(response)}</p>
    </>
  )
}

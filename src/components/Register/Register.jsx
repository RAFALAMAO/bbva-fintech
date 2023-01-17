import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

// Axios
import { axiosCreateUpdateUser } from '../../config/axiosGeneral';

// Components
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { registerOps } from './registerOps';


export default function Register() {
  // =========== Context

  // =========== States
  const [registerData, setRegisterData] = useState({});
  const [showPwd, setShowPwd] = useState(false);

  // =========== Constants
  const navigate = useNavigate();

  // =========== Session storage

  // =========== Functions
  const handleChange = ({ target }) => {
		setRegisterData({
			...registerData,
			[target.name]: target.value
		})
  }

  const sendRegister = async (e) => {
		e.preventDefault();

		const registerBody = {
      user: {
        correo_electronico: registerData.correo_electronico,
        contrasenia: registerData.contrasenia,
        primer_nombre: registerData.primer_nombre,
        apellido_paterno: registerData.apellido_paterno,
        apellido_materno: registerData.apellido_materno,
      },
      application: {
        nivel_estudios: registerData.nivel_estudios,
        intitucion: registerData.intitucion,
        nobre_articulo: registerData.nobre_articulo,
        no_participantes: registerData.no_participantes,
        has_publicado: registerData.has_publicado,
        enlaces: registerData.enlaces,
        gustarias_laborar: registerData.gustarias_laborar,
        revista: registerData.revista,
      }
		}

		try {
			const createdUser = await axiosCreateUpdateUser().post('/',registerBody);
      const resMessage = createdUser.data.message;

      if( resMessage.includes('success') ){
        sessionStorage.setItem('user_email', registerData.correo_electronico)
        navigate('/customer-dash')
      }

			console.log(createdUser);
		} catch (error) {
			console.log(error);
		}
  }

  // =========== UseEffects
  return (
    <>
			<Nav/>
			<h1>Registro de nuevo artículo</h1>
      <p>Para poder participar debes de llenar el siguiente formulario.</p>
			<form
				onSubmit={sendRegister}
			>
        {registerOps.map((row, idxRow) =>{
          return <div key={idxRow}>
            {row.map((col, idxCol) => {
              return <div key={idxCol}>
                <p>{col.label}</p>
                <input
                  type="text"
                  name={col.name}
                  onChange={handleChange}
                />
              </div>
            })}
          </div>
        })}
        <div>
          <div>
            <p>Correo electronico</p>
            <input
              type="text"
              name="correo_electronico"
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Contraseña</p>
            <input
              type={ showPwd ? "text" : "password" }
              name="contrasenia"
              onChange={handleChange}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowPwd(!showPwd);
              }}
            >
              {!showPwd ? 'mostar' : 'ocultar'}
            </button>
          </div>
        </div>
				<div>
					<button>Registrar</button>
				</div>
			</form>
			<Footer/>
    </>
  )
}

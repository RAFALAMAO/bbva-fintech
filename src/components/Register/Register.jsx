import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

// Axios
import { axiosCreateUpdateUser } from '../../config/axiosGeneral';

// Components
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { registerOps } from './registerOps';

// Styles
import './register.css'

// Helpers
import { isValidateEmail } from '../../helpers/validators';
import { GH_PAGES_ROUTE } from '../../config/globals';


export default function Register() {
  // =========== Session storage
  const regSesion = JSON.parse(sessionStorage.getItem('registerJson'));

  // =========== States
  const [registerData, setRegisterData] = useState(regSesion ? regSesion : {});
  const [showPwd, setShowPwd] = useState(false);
	const [disableBtn, setDisableBtn] = useState(false);
  const [resMessage, setResMessage] = useState('_______');

  // =========== Constants
  const navigate = useNavigate();

  // =========== Functions
  const handleChange = ({ target }) => {
		setRegisterData({
			...registerData,
			[target.name]: target.value
		})
  }

  const sendRegister = async (e) => {
		e.preventDefault();
    setResMessage('_______');

    if( !registerData.primer_nombre ) return alert('"Nombre" es obligatorio.');
    if( !registerData.apellido_paterno ) return alert('"Apellido paterno" es obligatorio.');
    if( !registerData.nombre_articulo ) return alert('"Nombre del artículo" es obligatorio.');
    if( !registerData.correo_electronico ) return alert('"Correo electronico" es obligatorio.');
    if( !registerData.contrasenia ) return alert('"Contraseña" es obligatorio.');

    if( !isValidateEmail(registerData.correo_electronico) ) return alert('Ingrese un correo electronico válido.');

    setDisableBtn(true);

		const  registerBody = {
      user: {
        primer_nombre: registerData.primer_nombre,
        apellido_paterno: registerData.apellido_paterno,
        apellido_materno: registerData.apellido_materno,
        correo_electronico: registerData.correo_electronico,
        contrasenia: registerData.contrasenia,
        application: {
          nivel_estudios: registerData.nivel_estudios,
          nombre_institucion: registerData.nombre_institucion,
          nombre_articulo: registerData.nombre_articulo,
          has_publicado: registerData.has_publicado,
          enlaces: registerData.enlaces,
          gustarias_laborar: registerData.gustarias_laborar,
          revista: registerData.revista,
        }
      }
		}

		try {
			const createdUser = await axiosCreateUpdateUser().post('/',registerBody);
      const resMessage = createdUser.data.message;

      if( regSesion ){
        navigate(`${GH_PAGES_ROUTE}/customer-dash`);
      }

      if( resMessage.includes('success') ){
        sessionStorage.setItem('user_email', registerData.correo_electronico);
        sessionStorage.setItem('registerJson', JSON.stringify(registerData));
        navigate(`${GH_PAGES_ROUTE}/customer-dash`);
      }
      setResMessage(resMessage);

			console.log(createdUser);
		} catch (error) {
			console.log(error);
		}
    setDisableBtn(false);
  }

  // =========== UseEffects
  useEffect(() => {
		window.scrollTo(0,0)
	},[])


  return (
    <>
			<Nav/>
			<form
				onSubmit={sendRegister}
        className={"reg"}
			>
        <h1>Tan sencillo como llenar el siguiente formulario y cargar tú artículo para poder participar</h1>
        {registerOps.map((row, idxRow) =>{
          return <div
            key={idxRow}
            className={'reg-row-inputs'}
          >
            {row.map((col, idxCol) => {
              return <div
                key={idxCol}
                className={'reg-col-inputs'}
              >
                <p>{col.label}<span style={{color: 'red'}}>{col.need ? '*' : ''}</span></p>
                <input
                  type="text"
                  name={col.name}
                  onChange={handleChange}
                  value={registerData[col.name]}
                />
              </div>
            })}
          </div>
        })}
        <div className={'reg-row-inputs'}>
          <div className={'reg-col-inputs'}>
            <p>Correo electronico<span style={{color: 'red'}}>*</span></p>
            <input
              type="text"
              name="correo_electronico"
              onChange={handleChange}
              value={registerData.correo_electronico}
              style={{
                border: '1px solid #a81797'
              }}
            />
            <p
              className={'reg-show-pwd-ghost'}
            >
              {!showPwd ? 'Ver' : 'Ocultar'}
            </p>
          </div>
          <div className={'reg-col-inputs'}>
            <p>Contraseña<span style={{color: 'red'}}>*</span></p>
            <input
              type={ showPwd ? "text" : "password" }
              name="contrasenia"
              onChange={handleChange}
              value={registerData.contrasenia}
              style={{
                border: '1px solid #a81797'
              }}
            />
            <p
              onClick={(e) => {
                e.preventDefault();
                setShowPwd(!showPwd);
              }}
              className={'reg-show-pwd'}
              style={{ opacity: registerData.contrasenia ? 1 : 0 }}
            >
              {!showPwd ? 'Ver' : 'Ocultar'}
            </p>
          </div>
        </div>
        <p
						className='reg-message'
						style={{opacity: resMessage === '_______' ? 0 : 1}}
					>{resMessage}</p>
				<div className='reg-button'>
					<button
            disabled={disableBtn}
          >Registrarse</button>
				</div>
			</form>
			<Footer/>
    </>
  )
}

'use stric'
import React, { useEffect, useState } from 'react';

// Components
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

// Axios
import { axiosGetUsersDoctos } from "../../config/axiosGeneral";

// Styles
import './adminDash.css'

export default function AdminDash() {
  // =========== Context

  // =========== States
  const [usersDoctosAndInfo, setUsersDoctosAndInfo] = useState([]);

  // =========== Constants

  // =========== Session storage

  // =========== Functions
  const fetchData =  async () => {
    try {
      const res = await axiosGetUsersDoctos().get('/');
      const resUsersDocs = res.data.documents;
      console.log(resUsersDocs);
      setUsersDoctosAndInfo(resUsersDocs);
    } catch (error) {
      console.log(error);
    }
  }

  const urlControll = (user) => {
    if( user.user_doctos && user.user_doctos.length > 0 )
      return <a
        href={`${user.user_doctos[0].url}`}
        target={'_blank'}
        rel="noreferrer"
      >Artículo</a>
    else {
      return `---`;
    }
  }

  const existOrVoidStr = (user) => {
    if( user.application && user.application.gustarias_laborar )
      return `${user.application.gustarias_laborar}`;
    else
      return `---`;
  }

  // =========== UseEffects
  useEffect(() => {
    fetchData();
  }, [])


  return (
    <>
      <Nav/>
      <div className='admin-dash'>
        <h1>Bienvenido administrador de BBVA Talent</h1>
        <p>En la siguiente tabla podras ver los enlaces de cada uno de los articulos registrados, así como información relacionada a cada uno de ellos.</p>
        <div className='admin-dash-table-container'>
          {/* Header de tabla*/}
          <div className='admin-table-titles'>
            <p>Nombre</p>
            <p>Correo</p>
            <p>Título artículo</p>
            <p>Gustaria laborar</p>
            <p>Enlace</p>
          </div>
          {usersDoctosAndInfo.map((user, idx) => {
            return <div className='admin-table-data' key={idx}>
              <p>{`${user.primer_nombre} ${user.apellido_paterno}`}</p>
              <p>{`${user.correo_electronico}`}</p>
              <p>{`${user.application.nombre_articulo}`}</p>
              <p>{existOrVoidStr(user)}</p>
              {urlControll(user)}
            </div>
          })}
        </div>
      </div>
      <Footer/>
    </>
  )
}

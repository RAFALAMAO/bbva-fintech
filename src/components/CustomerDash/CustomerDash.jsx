import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Helpers
import { uploadFile } from '../../helpers/uploadFile';

// Components
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

// Styles
import './customerDash.css'

export default function CustomerDash() {
  // =========== Context

  // =========== States
  const [docLink, setDocLink] = useState('');
  const [linkMessage, setLinkMessage] = useState('');

  // =========== Constants
  const navigate = useNavigate();

  // =========== Session storage
  const userEmail = sessionStorage.getItem('user_email');

  // =========== Functions
  // Enable re-upload same file in chromium
  const resetInput = (e) => {
    e.target.value = '';
  }

  const finishReg = () => {
    sessionStorage.removeItem('user_email');
    sessionStorage.removeItem('registerJson');
    navigate('/');
  }

  // Esta funcion observa los cambios en el input type file y condiciona el guardado de los mismos si el tipo de archivo corresponde al aceptado.
  const changesObserver = async(e) => {
    e.preventDefault();
    setLinkMessage('Cargando documento...');

    // Si el usuario despues de seleccionar un documento NO selecciona nada, manda alerta
    if (!e.target.files[0]) return alert("Debes seleccionar un documento.");

    if (e.target.files[0].type !== "application/pdf"){
      return alert('El archivo debe de ser en formato PDF.');
    }

    // Upload file and get link
    const documentFile = e.target.files[0];
    const uploadedFile = await uploadFile(documentFile, userEmail);
    const newDocLink = uploadedFile.data.documentsUrl;
    setDocLink(newDocLink);

    setLinkMessage('¡Documento cargado con exito!');
  };

  // =========== UseEffects


  return (
    <>
      <Nav/>
      <div className='customer-dash'>
        <h1>¡Excelente! finalmente compartenos tu artículo en formato PDF</h1>
        <p>El archivo debe de pesar máximo 2mb.</p>
        <div className='customer-input-container'>
          <input
            type="file"
            name="articulo"
            accept=".pdf"
            onClick={resetInput}
            onChange={changesObserver}
          />
          <p className='customer-input-container-message'>{linkMessage}</p>
        </div>
        <label style={{cursor: 'text'}}>
          Tu artículo puedes verificarlo en el siguiente enlace: <a
            href={docLink}
            target='_blank'
            rel='noreferrer'
          >{docLink ? 'Artículo' : ''}</a>
        </label>
        <div className='reg-button-container'>
          <button
            disabled={!docLink ? true : false}
            onClick={finishReg}
          >Finalizar registro</button>
        </div>
      </div>
      <Footer/>
    </>
  )
}

import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Helpers
import { uploadFile } from '../../helpers/uploadFile';

export default function CustomerDash() {
  // =========== Context

  // =========== States
  const [docLink, setDocLink] = useState('https://www.google.com');

  // =========== Constants
  const navigate = useNavigate();

  // =========== Session storage

  // =========== Functions
  // Enable re-upload same file in chromium
  const resetInput = (e) => {
    console.log(e.target)
    e.target.value = '';
  }

  // Esta funcion observa los cambios en el input type file y condiciona el guardado de los mismos si el tipo de archivo corresponde al aceptado.
  const changesObserver = async(e) => {
    e.preventDefault();

    // Si el usuario despues de seleccionar un documento NO selecciona nada, manda alerta
    if (!e.target.files[0]) return alert("Debes seleccionar un documento.");

    if (e.target.files[0].type !== "application/pdf"){
      return alert('El archivo debe de ser en formato PDF.');
    }

    // Upload file and get link
    const documentFile = e.target.files[0];
    const uploadedFile = await uploadFile(documentFile, 'aaronjt@outlook.com');

    // const res = await getDocument(e);
    // console.log(res.data.documentsUrl);
    // const getVal = Object.values(res.data.documentsUrl);

    // dispatch({
    //   type: 'ALTA-DOC',
    //   payload: {
    //     name: e.target.id,
    //     value: getVal[0],
    //   },
    // });
  };

  // =========== UseEffects


  return (
    <div>
      <h1>Dash del usuario</h1>
      <input
        type="file"
        name="articulo"
        accept=".pdf"
        onClick={resetInput}
        onChange={changesObserver}
      />
      <label style={{cursor: 'text'}}>
        <a href={docLink} target='_blank' rel='noreferrer'>{docLink}</a>
      </label>
    </div>
  )
}

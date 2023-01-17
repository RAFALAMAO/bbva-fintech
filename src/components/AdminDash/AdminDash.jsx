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

  // =========== UseEffects
  useEffect(() => {
    fetchData();
  }, [])


  return (
    <>
      <Nav/>
      <div className='admin-dash'>
        <h1>AdminDash</h1>
        {usersDoctosAndInfo.map((user, idx) => {
          return <div key={idx}>
            <p>{`${user.primer_nombre} ${user.apellido_paterno}`}</p>
          </div>
        })}
      </div>
      <Footer/>
    </>
  )
}

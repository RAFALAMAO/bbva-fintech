'stric'
import React, { useEffect, useState } from 'react';

// Components
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

// Axios
import { axiosGetUsersDoctos } from "../../config/axiosGeneral";

export default function AdminDash() {
  // =========== Context

  // =========== States
  const [usersDoctosAndInfo, setUsersDoctosAndInfo] = useState([]);

  // =========== Constants

  // =========== Session storage

  // =========== Functions

  // =========== UseEffects
  useEffect(() => {
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
    fetchData();
  }, [])


  return (
    <>
      <Nav/>
      <h1>AdminDash</h1>
      {usersDoctosAndInfo.map((user, idx) => {
        return <div key={idx}>
          <p>{`${user.primer_nombre} ${user.apellido_paterno}`}</p>
          <p>{`Link: ${user.user_doctos[0].url}`}</p>
        </div>
      })}
      <Footer/>
    </>
  )
}

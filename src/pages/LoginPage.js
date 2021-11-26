import React from 'react'
import landing from '../assets/landing.png'
import Form from '../components/login/Form'
import style from '../styles/LoginPage.module.css'
const LoginPage = () => {
    return (
        <div className={style.container}>
           <aside className={style.sideImage}>
               <img src={landing} alt="" />
           </aside>
           <Form />
        </div>
    )
}

export default LoginPage

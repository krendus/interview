import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import dots from '../../assets/dots.svg'
import logo from '../../assets/logo.svg'
import googleIcon from '../../assets/google.svg'
import fbIcon from '../../assets/fb.svg'
import style from '../../styles/LoginPage.module.css'
import line from '../../assets/line.svg'
const Form = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [showError, setShowError] = useState(false)
    const goToDashboard = (e, type) => {
        e.preventDefault()
        if(name && password && type === 'manual'){
            navigate('/dashboard')
        } else if(type === 'social auth') {
            navigate('/dashboard')
        } else {
            setShowError(true)
        }
        
    }
    return (
        <main className={style.mainContainer}>
            <img src={dots} alt='' className={style.dot1} />
                <form className={style.formContainer}>
                    <div style={{display: 'flex', justifyContent: 'center', paddingBottom: '25px'}}>
                        <img src={logo} alt='' className={style.logo}/>
                    </div>
                    
                    <button className={style.googleBtn} onClick={(e) => goToDashboard(e, 'social auth')}><img src={googleIcon} alt="" /> Login with google</button>
                    <button className={style.fbBtn} onClick={(e) => goToDashboard(e, 'social auth')}><img src={fbIcon} alt="" /> Login with facebook</button>
                    <div className={style.orBox}><img src={line} alt="" /> OR <img src={line} alt="" /> </div>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Full name" required/>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required/>
                    <div className={style.forgotPass}><span>Forgot password? </span><button onClick={e => e.preventDefault()}>Click here!</button></div>
                    <button className={style.loginBtn} onClick={(e) => goToDashboard(e, 'manual')}>Login</button>
                    {showError && <p style={{color: 'red', fontSize: '12px', textAlign: 'center'}}>Please fill out the required field</p>}
                </form>
                <div className={style.noAcct}><span>Don't have an account?</span> <button>Create an account here</button> </div>
            <img src={dots} alt='' className={style.dot2}/>            
        </main>
    )
}

export default Form

import React, { useState } from 'react'
import style from './Auth.module.css'

const AuthUser = (props) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const loginChange = (event) => {
        setLogin(event.target.value)
    }

    const passwordChange = (event) => {
        setPassword(event.target.value)
    }

    const loginIn = () => {
        const data = {
            login: login,
            password: password
        }
        props.loginIn(data)
    }

    return <div className={style.auth}>
        <fieldset className={style.authFieldset}>
            <legend>Войти в контакты</legend>
            <div  className={style.authInput}>
                <input type='text' value={login} onChange={loginChange} placeholder='Логин'/>
                <input type='text' value={password} onChange={passwordChange} placeholder='Пароль'/>
                <button onClick={loginIn}>Войти</button>
                { (props.isAuth >= 0) || <span className={style.authInputError}>Не верный логин или пароль</span> }
            </div>
        </fieldset>
    </div>
}

export default AuthUser
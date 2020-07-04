import React from 'react'
import style from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    const exitIsAuth = () => {
        props.exitIsAuth()
    } 

    return <>
        <header>
            <div>
               {props.isAuth ? <NavLink to='/auth' onClick={exitIsAuth}>Выйти</NavLink> : <NavLink to='/contact'>Контакты</NavLink> }
            </div>
        </header>
    </>
}

export default Header 
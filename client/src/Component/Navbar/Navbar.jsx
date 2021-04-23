import React from 'react'
import style from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
import iconBrang from '../../icon.png'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.left}>
                <img src={iconBrang} />
            </div>
            <div className={style.right}>
                <div className = {style.items}>
                    <NavLink to="/tutorial">
                        TUTORIAL
                    </NavLink>
                </div>
                <div className = {style.items}>
                    <NavLink to="/models">
                        MODELS
                    </NavLink>
                </div>
                <div className = {style.items}>
                    <NavLink to="/contacts">
                        CONTACTS
                    </NavLink>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;
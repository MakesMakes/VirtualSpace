import React from 'react'
import style from './Model.module.css'
import { NavLink } from 'react-router-dom';

const Model = (props) => {
    return (
        <div>

            <div className={style.model}>
                <iframe src={props.model.model} />
            </div>


            <div className={style.navl}>
                <NavLink to={'/models/' + props.model._id + '/details'} className={style.item}>
                    DISASSEMBLE
                </NavLink>
            </div>
        </div>
    )
}

export default Model;
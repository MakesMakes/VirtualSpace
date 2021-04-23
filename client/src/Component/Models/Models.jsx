import React from 'react'
import style from './Models.module.css'
import { NavLink } from 'react-router-dom';

const Models = (props) => {
    return (
        <div className={style.componentListModels}>
            {
                props.models.map(m => <div key={m._id} className={style.listModels}>
                    <div>
                        <img src={m.img} className={style.img}/>
                    </div>
                    <NavLink to={'/models/' + m._id} className={style.item}>
                        {m.name}
                    </NavLink>
                </div>)
            }
        </div>
    )
}

export default Models;
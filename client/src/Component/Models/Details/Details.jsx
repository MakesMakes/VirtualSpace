import React from 'react'
import style from './Details.module.css'
import { NavLink } from 'react-router-dom';


const Details = (props) => {
    return (

        <div className={style.componentListDetails}>
            {   props.details.map(d => <div key={d.detailId} className={style.listDetails}>
                <div>
                    <img src={d.img} className={style.img} />
                </div>
                    <NavLink to={'/models/' + props.modelId + '/details/' + d._id} className={style.item}>
                        {d.name}
                    </NavLink>
            </div>)
            }
        </div>
    )
}

export default Details;
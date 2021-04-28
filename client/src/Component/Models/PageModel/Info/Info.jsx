import React from 'react'
import style from './Info.module.css'

const Info = (props) => {
    return (
        <div>
            <div className={style.modal_wrapper}>
                <button className={style.close} onClick={() => { props.closeInfo() }}>x</button>
                <div className={style.modal}>
                    <pre className={style.text}>{props.modal.info}</pre>
                </div>
            </div>
        </div>
    )
}

export default Info;
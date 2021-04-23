import React from 'react'
import style from './Info.module.css'

const Info = (props) => {
    return (
        <div>
            <div className={style.modal_wrapper}>
            <button className={style.close} onClick={() => {props.closeInfo()}}>x</button>
                <div className={style.modal}>
                    
                    {/* <img src={props.modal.info} /> */}
                    <div className={style.text}>{props.modal.info_1}</div>
                    <div className={style.text}>{props.modal.info_2}</div>
                    <div className={style.text}>{props.modal.info_3}</div>
                    <div className={style.text}>{props.modal.info_4}</div>
                    <div className={style.text}>{props.modal.info_5}</div>
                    <div className={style.text}>{props.modal.info_6}</div>
                    <div className={style.text}>{props.modal.info_7}</div>
                    <div className={style.text}>{props.modal.info_8}</div>
                    <div className={style.text}>{props.modal.info_9}</div>
                    <div className={style.text}>{props.modal.info_10}</div>
                    <div className={style.text}>{props.modal.main_info}</div>
                </div>
            </div>
        </div>
    )
}

export default Info;
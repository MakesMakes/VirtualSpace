import React from 'react'
import style from './Detail.module.css'

const Detail = (props) => {
  return(
            <div className={style.detail}>
            <iframe src={props.detail.model} />
            </div>
  )
}            
        

export default Detail;
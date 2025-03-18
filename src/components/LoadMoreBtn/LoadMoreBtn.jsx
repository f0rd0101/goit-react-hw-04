import React from 'react'
import s from '../LoadMoreBtn/LoadMoreBtn.module.css'

const LoadMoreBtn = ({handlePage}) => {
  return (
    <div className={s.loadbutton}>
        
    <button type='button' className={s.loadme} onClick={handlePage} >Load more images</button>

  
    </div>
  )
}

export default LoadMoreBtn
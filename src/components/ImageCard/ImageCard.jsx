import React from 'react'
import s from '../ImageCard/ImageCard.module.css'

const ImageCard = ({modalContent, item}) => {
  return (
    <div onClick={()=> modalContent(item.urls.regular)}>
                  <img className={s.item_image} src={item.urls.regular} alt="" />
                </div>
  )
}

export default ImageCard
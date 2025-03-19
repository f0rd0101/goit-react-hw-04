import React from 'react'
import s from '../ImageGallery/ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard'

const ImageGallery = ({items, openModal, modalContent}) => {
  return (
    <>
    <ul className={s.item_ul}>
      {items.map((item) => {
        return (
          <li className={s.item_li} key={item.id} onClick={openModal}>
            <div>
            <ImageCard item ={item} modalContent={modalContent}/>
            </div>
          </li>
        );
      })}
    </ul>
</>
  )
}

export default ImageGallery
import React from 'react'
import s from '../ImageGallery/ImageGallery.module.css'

const ImageGallery = ({items}) => {
  return (
    <>
    <ul className={s.item_ul}>
      {items.map((item) => {
        return (
          <li className={s.item_li} key={item.id}>
            <div>
              <img className={s.item_image} src={item.urls.regular} alt="" />
            </div>
          </li>
        );
      })}
    </ul>
</>
  )
}

export default ImageGallery
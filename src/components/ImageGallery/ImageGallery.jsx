import React from 'react'

const ImageGallery = ({items}) => {
  return (
    <>
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <div>
              <img src={item.urls.regular} alt="" />
            </div>
          </li>
        );
      })}
    </ul>
</>
  )
}

export default ImageGallery
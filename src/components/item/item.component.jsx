import React from "react";

import "./item.styles.scss"

const Item = ({ title, imgUrl, size }) => (
  <div className={`${size} item`}>
    <div className="background-Image" style={{
      backgroundImage: `url(${imgUrl})`
    }} />
    <div className="content">
      <h1 className='title'> {title.toUpperCase()} </h1>
      <span className='subtitle' > Shop Now </span>
    </div>
  </div >
)

export default Item

import React from "react";

import { Link } from "react-router-dom";

import "./item.styles.scss"


const Item = ({ title, imgUrl, size, urlPage }) => {
  return (
    < Link to={`/${urlPage}`} className={`${size} item`} >
      <div className="background-Image" style={{
        backgroundImage: `url(${imgUrl})`
      }} />
      <div className="content">
        <h1 className='title'> {title.toUpperCase()} </h1>
        <span className='subtitle' > Shop Now </span>
      </div>
    </Link>
  )
}

export default Item

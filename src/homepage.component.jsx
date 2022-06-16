import React from 'react';

import "./homepage.styles.scss"

const HomePage = () => (
  <div className='homepage'>
    <div className='items-container'>
      <div className="item">
        <div className="content">
          <h1 className='title' > Hats</h1>
          <span className='subtitle' >Shop Now </span>
        </div>
      </div>

      <div className="item">
        <div className="content">
          <h1 className='title' > T-shirts</h1>
          <span className='subtitle' >Shop Now </span>
        </div>
      </div>

      <div className="item">
        <div className="content">
          <h1 className='title' > Shoes</h1>
          <span className='subtitle' >Shop Now </span>
        </div>
      </div>

      <div className="item">
        <div className="content">
          <h1 className='title' > Women</h1>
          <span className='subtitle' >Shop Now </span>
        </div>
      </div>

      <div className="item">
        <div className="content">
          <h1 className='title' > Men</h1>
          <span className='subtitle' >Shop Now </span>
        </div>
      </div>
    </div>
  </div>

)

export default HomePage;
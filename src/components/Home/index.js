import React from 'react'
import Header from '../Header'

import './index.css'

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <div className='home-contents-container'>
        <div className='home-route-details-container'>
          <h1 className='home-route-heading'>Clothes That Get YOU Noticed</h1>
          <p className='home-route-description'>
            Fashion is part of the daily air and it does not quite help that it changes
            all the time. Clothes have always been a marker of the era and we are in
            a revolution. Your fashion makes you been seen and heard that way you
            are. So, celebrate the seasons new and exciting fashion in your own
            way.
          </p>
          <button className='home-route-button' type='button'>Shop Now</button>
        </div>
        <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png' alt='clothes that get you noticed' className='home-route-image' />
      </div>
    </div>
  )
}

export default Home
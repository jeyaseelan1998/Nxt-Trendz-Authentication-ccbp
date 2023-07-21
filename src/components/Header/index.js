import React from 'react'
import {Link} from 'react-router-dom'
// import { Link } from 'react-router-dom/cjs/react-router-dom'

import './index.css'

const Header = () => {
  return (
    <header className='header'>
      <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="website logo" className="website-logo-image" />
      <nav className='nav-links-lg'>
        <Link className='nav-link' to='/'>Home</Link>
        <Link className='nav-link' to='/products'>Products</Link>
        <Link className='nav-link' to='/cart'>Cart</Link>
        <button className='logout-button' type='button'>Logout</button>
      </nav>
      <button className='button-sm'>
        <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png' alt='nav logout' className='nav-logout-img' />
      </button>
      <div className='nav-icons'>
        <button className='nav-icon-button'>
          <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png' alt='nav home' className='nav-logout-img' />
        </button>
        <button className='nav-icon-button'>
          <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png' alt='nav products' className='nav-logout-img' />
        </button>
        <button className='nav-icon-button'>
          <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png' alt='nav cart' className='nav-logout-img' />
        </button>
      </div>
    </header>
  )
}

export default Header
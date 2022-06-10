import React from 'react'
import './Home.css'
import Product from './Product'

const DefaultLayout = () => {
  return (
    <div className='home'>
        <div className='home__container'>
          <img className='home__image' src="https://m.media-amazon.com/images/I/71joIi9cbML._SX3000_.jpg" alt=""/>
        <div className='home__row'>
          <Product />
        </div>
        </div>
    </div>
  )
}

export default DefaultLayout
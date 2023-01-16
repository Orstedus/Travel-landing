import React from 'react'
import search from '../icons/search.png'

export const Header = () => {
  return (
    <div className='Header'>
        <div className='logoplate'>
            <div className='logo'/>
            <p>Travel.</p>
        </div>
        <div className='navbar'>
            <p>Home</p>
            <p>Explore</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <img src={search} alt='search'/>
        </div>
    </div>
  )
}

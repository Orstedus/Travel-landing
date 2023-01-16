import React from 'react'

import instagram from '../icons/instagram.png'
import facebook from '../icons/facebook.png'
import twitter from '../icons/twitter.png'

import dots1 from '../icons/dots1.png'
import dots2 from '../icons/dots2.png'

export const Content = () => {
  return (
    <div className='Content'>
        <div className='mainblock'>
            <h1 className='discover'>Discover.</h1>
            <div className='textblock'><p>The world with <p className='traveltext'>Travel.</p> Join us and get the oportunity to win below a free trip with all covered!</p></div>
            <button>Read More</button>
            <button className='risebtn'>Join Us</button>
        </div>
        <div className='soc'>
            <img className='socimg' src={instagram} alt='instagram'/>
            <img className='socimg' src={facebook} alt='facebook'/>
            <img className='socimg' src={twitter} alt='twitter'/>
        </div>
        <img className='dots1' src={dots1} alt='dots1'/>
        <img className='dots2' src={dots2} alt='dots2'/>
    </div>
  )
}

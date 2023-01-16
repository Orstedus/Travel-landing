import React, { useState } from 'react'

import {motion} from "framer-motion";

import plane from '../icons/plane.png'
import marker from '../icons/marker.png'

const Slider = () => {

    let tickets = [
        {class:"First", price:990, from:"Manchester, UK", to:"Madrid, Spain", time:"2h 10m", id:0},
        {class:"Economy", price:150, from:"Kyiv, Ukraine", to:"Warsaw, Poland", time:"1h 30m", id:1},
        {class:"Business", price:750, from:"Warsaw, Poland", to:"Tokyo, Japan", time:"9h 20m", id:2},
        {class:"Premium", price:400, from:"Berlin, Germany", to:"Lviv, Ukraine", time:"3h 30m", id:3},
        {class:"Business", price:700, from:"Krakow, Poland", to:"Astana, KZ", time:"6h 10m", id:4},
        {class:"Economy", price:125, from:"Lviv, Ukraine", to:"Paris, France", time:"4h 20m", id:5},
        {class:"First", price:1200, from:"London, UK", to:"LA, USA", time:"7h 30m", id:6},
        {class:"Premium", price:450, from:"Paris, France", to:"London, UK", time:"2h 40m", id:7},
        {class:"Economy", price:75, from:"Tokyo, Japan", to:"Kyiv, Ukraine", time:"8h 30m", id:8},
        {class:"Business", price:685, from:"Astana, KZ", to:"Madrid, Spain", time:"7h 40m", id:9},
        {class:"Premium", price:390, from:"LA, USA", to:"Tokyo, Japan", time:"8h 30m", id:10},
        {class:"First", price:1125, from:"Kyiv, Ukraine", to:"London, UK", time:"4h 00m", id:11}
    ]

    const [slider, setSlider] = useState(0)

  return (
    <div className='Slider'>
        <i className='right' onClick={()=>slider<=222?setSlider(0):()=>setSlider(slider+74)}
        ></i>
        <div className='viewport'>
            <motion.div
                animate={{
                    x:slider+'vw'
                }}
                className='blocks'
                transition={{
                    type:'just'
                }}
            >
            {tickets.map(p=>
                <div className='travel_plate' key={p.id}>
                    <div className='class_row'>
                        <img src={plane} alt='planeimage'/>
                        <p>{p.class} Class</p>
                        <p className='price'>{p.price}€</p>
                    </div>
                    <div className='loc_row'>
                        <p>{p.from} <p className='to'>to</p> {p.to}</p>
                    </div>
                    <div className='time_row'>
                        <img src={marker} alt='marker'/>
                        <p>{p.time}</p>
                    </div>
                    <div className='btn_row'>
                        <button>Read More</button>
                        <button className='join'>Join</button>
                    </div>
                </div>
            )

            }
            </motion.div> 
        </div>
        <i className='left' onClick={()=>slider<=-222?setSlider(0):setSlider(slider-74)}></i>
    </div>
  )
}

export default Slider
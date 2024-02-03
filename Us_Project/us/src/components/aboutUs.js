import React from 'react'
import image6 from '../assets/image6.png'
import image7 from '../assets/image7.png'
import image8 from '../assets/image8.png'
import image9 from '../assets/image9.png'

export default function AboutUs() {
  return (
    <div className='main-container' id='aboutus-container'>
        <div className='container-title'>A little bit about us ... </div>
        <div className='favourites-container'>
            <div className='favourite-element'>
                <div className='centered'><img src={image9} /></div>
                <h3>Our favourite food is Osmow's shawarma</h3>
            </div>
            <div className='favourite-element'>
                <div className='centered'><img src={image8} /></div>
                <h3>Our favourite place is in each other's arms, that's it</h3>
            </div>
            <div className='favourite-element'>
                <div className='centered'><img src={image7} /></div>
                <h3>Our song, (in my opinion) is "Summer" by Calvin Harris</h3>
            </div>
            <div className='favourite-element'>
                <div className='centered'><img src={image6} /></div>
                <h3>Our favourite activity, talking and spending time together</h3>
            </div>
        </div>
    </div>
  )
}

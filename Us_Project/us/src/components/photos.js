import React from 'react'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image5 from '../assets/image5.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'


export default function Photos() {
  return (
    <div className='main-container' id='photos-container'>
        <div className='container-title'>Our Best Photos</div>
        <div className='photo-row'>
            <div className='photo-element'>
                <img src={image1} />
                <p>Distillery District, Toronto</p>
            </div>
            <div className='photo-element'>
                <img src={image2} />
                <p>Distillery District, Toronto</p>
                <p className='subtitle'>(My favourite photo 💖)</p>
            </div>
            <div className='photo-element'>
                <img src={image5} />
                <p>Matthew's Car, Kitchener</p>
            </div>
            <div className='photo-element'>
                <img src={image4} />
                <p>New Year's Eve, Waterloo</p>
            </div>
            <div className='photo-element'>
                <img src={image3} />
                <p>Lion's Arena, Kitchener</p>
            </div>
        </div>
    </div>
  )
}

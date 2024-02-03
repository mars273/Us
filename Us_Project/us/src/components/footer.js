import React from 'react'

export default function Footer() {

    const loveMessage = () => {
        document.getElementById('message-container').classList.toggle('hide');
    }

  return (
    <div className='main-container' id='footer-container'>
        <div className='container-title'>It's going to be okay and everything will work out 💓</div>
        <div className='centered extra-space'>
            <button id='love-btn' onClick={loveMessage}>I love you</button>
        </div>

        <div className='hide' id='message-container'>
            <h4>I love you too.</h4>
            <h4>Always.</h4>
            <button id='close' onClick={loveMessage}>Close</button>
        </div>
    </div>
  )
}

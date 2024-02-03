import React, {useEffect, useState} from 'react'

export default function Counter() {
    const data = {
        1: ['07/01/2023', 'Days since we first met - Canada Day, July 1, 2023'],
        2: ['07/08/2023', 'Days since our first date - Symposium Cafe, July 8, 2023'],
        3: ['08/03/2023', 'Days since we first held hands - Oppenheimer, August 3, 2023'],
        4: ['09/24/2023', 'Days since we first kissed - The weekend after my birthday, September 24, 2023'],
        5: ['10/20/2023', 'Days since you first came over - The evening after my last midterm, October 20, 2023'],
        6: ['11/21/2023', 'Days since we started dating - You were holding me in your arms, November 21, 2023'],
        7: ['12/16/2023', 'Days since we built our first house (ginger bread house) - December 16, 2023'],
        8: ['12/02/2023', 'Days since we went ice skating for the first time - December 2, 2023'],
        9: ['12/27/2023', 'Days since our first little adventure (Toronto) - December 27, 2023'],
        10: ['2/2/2024', 'Days since our first real argument (now we are a real couple) - February 2, 2024'],
        11: ['07/08/2023', 'Days since I knew I wanted to be with you - July 8, 2023']
    }

    const [counter, setCounter] = useState({});
  
      useEffect(() => {
        let today = new Date();
        const updatedCounter = {};

        Object.keys(data).forEach(key => {
            let date = new Date(data[key][0]);
            updatedCounter[key] = Math.round((today.getTime() - date.getTime()) / (1000 * 3600 * 24) - 1);

            setCounter(updatedCounter);
        });

    }, []);

    const countTime = () => {
        let today = new Date().getTime();
        let date = new Date('07/01/2023').getTime();
        let timePassed = today - date;

        var days = Math.floor(timePassed / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timePassed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timePassed % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timePassed % (1000 * 60)) / 1000);

        return `${days} days ${String(hours).padStart(2, '0')} hours ${String(minutes).padStart(2, '0')} minutes ${String(seconds).padStart(2, '0')} seconds`;
    }

    const [timer, setTimer] = useState(countTime);

        useEffect(() => {
            const intervalId = setInterval(() => {
                setTimer(countTime);
              }, 1000);
          
              return () => {
                clearInterval(intervalId);
              };
        }, []);
    
  return (
    <div className='main-container' id='counters-container'>
        <div className='container-title'>Our Ongoing Counter</div>
        <div className='contain'>
            <div className='counter-container'>
                {Object.keys(counter).map((key, index) => (
                <p key={index}>
                    <span id={`counter-${index + 1}`} className='counter-styles'>{counter[key]}</span> {data[key][1]}
                </p>
                ))}
            </div>
            <div className='timer-container'>
                <h2 id='timer'>{timer} <br></br> and counting...</h2>
            </div>
        </div>
    </div>
  )
}

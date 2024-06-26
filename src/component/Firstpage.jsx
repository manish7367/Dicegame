import React from 'react'
import { Link } from 'react-router-dom'
const Firstpage = () => {
  return (
    <div className='main'>
        <div className='heading'>
            <img src='/public/dices.png'/>
            <h1>DICE GAME</h1>
        </div>
        <div className='btn1'>
                <Link to='/secondpage'><button>PLAY NOW</button></Link>
        </div>
    </div>
  )
}

export default Firstpage
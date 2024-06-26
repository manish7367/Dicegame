import React, { useState } from 'react'
import styled from 'styled-components'
const Rolldice = ({currentDice, rOllDice}) => {
    

   
  return (
    <Dicecontainer>
        <div className='dice'
        onClick={rOllDice}>
            <img src={`/public/dice_${currentDice}.png`}/>
        </div>
        <p>Click on dice to roll</p>
    </Dicecontainer>
    
  )
}

export default Rolldice;

const Dicecontainer=styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .dice{
        cursor: pointer;
    }
    p{
      font-size: 32px;
      font-weight: 600;
    }
`
import React from 'react'
import styled from 'styled-components'
const Rulecontainer = () => {
  return (
  <RulesContainer>
        <h1>How to play dice game</h1>
    <div className='rules'>
      <p>Select any number</p>
      <p>Click on dice game</p>
      <p>after click on dice if selected number is equal to dice number you will get some point as dice</p>
      <p>if you get wrong guess then 2 point will be detected</p>
    </div>
  </RulesContainer>
  )
}

export default Rulecontainer

const RulesContainer=styled.div`
      max-width: 800px;
      margin: 0 auto;
      margin-top: 135px;
      padding:20px;
      background-color: beige;
      border: 1px solid black;
      h2{
        font-size: 24px;
      }
      .rules{
       margin-top: 24px;
      }
      p{
        word-spacing: 2px;
        letter-spacing: 0.5px;
        font-size: 22px;
      }
`
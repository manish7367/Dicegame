import React from 'react'
import styled from 'styled-components'
const Totalscore = ({score}) => {
  return (
        <Scorecontainer>
            <h1>{score}</h1>
            <p>Total score</p>
        </Scorecontainer>
  )
}

export default Totalscore


const Scorecontainer=styled.div`
    max-width: 200px;
    text-align: center;
    *{
        margin: 0;
        padding: 0;
    }
    h1{
        font-size: 100px;
    }
    p{
        font-size: 24px;
        font-weight: 600;
    }
`
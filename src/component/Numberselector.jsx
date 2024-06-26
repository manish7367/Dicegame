import React, { useState } from 'react'
import styled from 'styled-components'
const Numberselector = ({selectedNumber,setselectedNumber}) => {
    const arr=[1,2,3,4,5,6];
    
  return (
    <NumberselectorContainer>
        <div className='flex'>
            {
                arr.map((value,i)=>(
                    <Box 
                    isSelected={value===selectedNumber}
                    key={i}
                    onClick={()=> setselectedNumber(value)}>
                        {value}</Box>
                ))
            }
       </div>
       <p>Selected Number</p>
    </NumberselectorContainer>
  )
}

export default Numberselector


const NumberselectorContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700;

    }
`


const Box=styled.div`
    cursor: pointer;
    height: 72px;
    width: 72px;
    border: 2px solid black;
    display: grid;
    place-items:center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props)=>(props.isSelected ? "black" :"white")};
    color: ${(props)=>(!props.isSelected ? "black" :"white")};
`
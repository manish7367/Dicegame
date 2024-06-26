import React, { useState } from 'react'
import Totalscore from './Totalscore'
import Numberselector from './Numberselector'
import styled from 'styled-components'
import Rolldice from './Rolldice'
import { toast } from 'react-toastify'
import Rulecontainer from './Rulecontainer'


const Secondpage = () => {
  const [score, setscore] = useState(0)
  const [selectedNumber, setselectedNumber] = useState();
  const [currentDice, setcurrentDice] = useState(1)
  const [showRules, setshowRules] = useState(false)

   const generateRandomnum=(min,max)=>{
        return Math.floor( Math.random()*(max-min)+min);
    };

    const rOllDice=()=>{
        const randomNumber = generateRandomnum(1,7)
        setcurrentDice((prev)=>randomNumber);


        if(!selectedNumber){
          return toast.warn("Please select the number", {
                              theme: "dark"
                            });
        }
        if(selectedNumber===randomNumber){
          setscore(prev=>prev+randomNumber)
        }else{
          setscore((prev)=>prev-2)
        }
        

        setselectedNumber(undefined)
    }


  return (
    <MainContainer>
    <div className='Main'>
        <Totalscore score={score}/>
        <Numberselector selectedNumber={selectedNumber}
        setselectedNumber={setselectedNumber}/>
    </div>
    <Rolldice currentDice={currentDice} rOllDice={rOllDice}/>
    <div className='btn-roll'>
      <div className='btn' onClick={()=>{
        setscore(0)
      }}>
      <p>Reset Score</p>
      </div>
      <div className='btn_one' onClick={()=>{
       setshowRules((prev)=>!(prev))
      }}>
      <p>{showRules ? "Hide ":"Show "}Rules</p>
    </div>
    </div>
    {showRules &&  <Rulecontainer/>}
    </MainContainer>


  )
}

export default Secondpage

const MainContainer=styled.div`
padding:20px;
    .Main{
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
    .btn-roll{
      height:2vw;
      align-items: center;
      display: flex;
      flex-direction: column;
    }
    .btn{
      margin-bottom: 25px;
      cursor: pointer;
      border: 1px solid black;
      width: 12vw;
      align-items: center;
      display: flex;
      justify-content: center;
    }
    .btn p{
      font-size: 18px;
      font-weight: 700;
    }
    .btn_one{
      background-color: black;
      cursor: pointer;
      border: 1px solid black;
      width: 12vw;
      align-items: center;
      display: flex;
      justify-content: center;
    }
    .btn_one p{
      color: white;
      font-size: 18px;
      font-weight: 700;
    }
`
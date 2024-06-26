import React from 'react'
import Firstpage from './component/Firstpage'
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Secondpage from './component/Secondpage'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Firstpage/>}/>
    <Route path='/secondpage' element={<Secondpage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

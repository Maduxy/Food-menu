import React from 'react'
import Home from './Home'
import {Routes,Route} from "react-router-dom"
import Cuisines from '../components/Cuisines'
import Cuisiness from '../components/Cuisiness'
import Searched from '../components/Searched'
import Recipes from '../components/Recipes'

function Pages() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/cuisine/:type" element={<Cuisiness/>} />
        <Route path='searched/:search' element={<Searched/>}/>
        <Route path='recipe/:name' element={<Recipes/>}/>
      </Routes>
    </div>
  )
}



export default Pages
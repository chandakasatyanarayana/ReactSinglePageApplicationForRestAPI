import React from 'react'

import {Routes,Route} from 'react-router-dom'

import Insert from './Insert'
import Update from './Update'
import Delete from './Delete'
import GetAll from './GetAll'
import GetOne from './GetOne'



const Body = () => {
  return (
    <div>
      <Routes>

    <Route path='/' index element={<Insert />}></Route>
    <Route path='/getall' element={<GetAll />}></Route>
    <Route path='/update' element={<Update />}></Route>
    <Route path='/delete' element={<Delete />}></Route>
    <Route path='/get-one' element={<GetOne />}></Route>



      </Routes>
    </div>
  )
}

export default Body;
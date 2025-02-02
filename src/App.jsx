import { useState } from 'react'
import {BrowserRouter, Route, Router, Routes} from "react-router-dom"
import './App.css'
import { Home } from './Home'
import Quiz from './components/Quiz'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/ques' element={<Quiz/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

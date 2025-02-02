import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./App.css"

export const Home = () => {
    const navigate  = useNavigate();
    const handleStart = () => {
        navigate("/ques");
    }
  return (
    <div className='homepage'>
        <button className='start-btn' onClick={handleStart}>START</button>
    </div>
  )
}

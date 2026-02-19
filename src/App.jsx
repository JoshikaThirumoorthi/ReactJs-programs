import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'
import Card from './components/Card'
import Counter from './components/counter'
import Registration from './components/registration_form/Registration'
import ColorPicker from './components/ColorPicker'
import Calculator from './components/Calculator'
import UserList from './components/fetching_API/UserList'
import Tabs from './components/Tabs'
import ThemeToggle from './components/ThemeToggle'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'

function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tabs />} />
        <Route path="/" element={<ThemeToggle />} />
        <Route path ="/" element={<ColorPicker />} />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App

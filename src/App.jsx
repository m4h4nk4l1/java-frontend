import './App.css'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import Leave from './components/Leave/Leave'
import Home from './components/Home/Home'
import Employees from './components/Employees/Employees'
import Events from './components/Events/Events'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/leave" element={<Leave />} />
      <Route path="/events" element={<Events />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

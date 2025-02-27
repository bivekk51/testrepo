import React from 'react'
import Navbar from "./components/NavBar"
import Home from './components/Home'
import TechnicalDetails from './components/TechnicalDetails'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
const App = () => {
  return (
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technicaldetails" element={<TechnicalDetails />} />

      </Routes>
      </BrowserRouter>
  )
}

export default App
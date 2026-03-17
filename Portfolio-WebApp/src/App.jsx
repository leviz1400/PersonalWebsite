import { useState } from 'react'

//import NavBar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Layout from './components/Layout'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/Contact" element={<Contact />}/>
        </Route>
        
      </Routes>

    </HashRouter>
  )
}

export default App


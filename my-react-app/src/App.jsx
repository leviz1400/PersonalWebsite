import { useState } from 'react'

import AppHeaderNavBar from './components/Navbar'
import HomeContentContainer from './components/Home'
import './App.css'

function App() {
  return (
    <div>
      <AppHeaderNavBar />
      <HomeContentContainer />
    </div>
  )
}

export default App

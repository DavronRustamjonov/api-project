import React from 'react'
import { Outlet } from 'react-router';
import Header from './Components/Header/Header';
function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App
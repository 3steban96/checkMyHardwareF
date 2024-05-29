import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';

function App() {

  return (
    <>
      <header className='col-12 fixed-top p-3 backgroundH'>
        <h1 style={{color:'white',fontWeight:'bold',fontSize:'30px',textAlign:'center'}}>Check My Hardware</h1>
      </header>
      <Home />
    </>

  )
}

export default App

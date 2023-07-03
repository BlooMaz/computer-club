import React, { Component } from 'react'
import './App.css'
import Register from './register'
import Home from './home'
import RegisterConfirmation from './RegisterConfirmation'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
        <div className='circle1'></div>
        <div className='circle2'></div>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />}/>
            <Route path='/Home' element={<Home />}/>
            <Route path='/Register' element={<Register />}/>
            <Route path="/confirmation" element={<RegisterConfirmation/>} />
        </Routes>
      </BrowserRouter>    
      </div>
    )
  }
}

export default App

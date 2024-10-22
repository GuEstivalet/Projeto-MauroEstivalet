import React from 'react'
import "./App.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from "./components/Footer"
import Header from "./components/Header"
import NotFound from './components/NotFound'
import MainSection from "./components/MainSection"
import Contato from "./components/Contato"

const App = () => {
  return (
    <BrowserRouter>
    <div className='App'>
      <div className='content'>
        <Header />
      <Routes>
        <Route path='/' element={<MainSection/>}></Route>
        <Route path='contato' element={<Contato/>}></Route>
        <Route path='projeto' element={<Projeto/>}></Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      </div>
      <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
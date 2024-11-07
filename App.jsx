import React from 'react'
import "./App.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from "./src/components/Footer"
import Header from "./src/components/Header"
import NotFound from "./src/components/NotFound"
import MainSection from "./src/components/MainSection"
import Contato from "./src/components/Contato"
import Curso from './src/components/Curso'

const App = () => {
  return (
    <BrowserRouter>
    <div className='App'>
      <div className='content'>
        <Header />
      <Routes>
        <Route exact path='/' element={<MainSection/>}></Route>
        <Route path='contato' element={<Contato/>}></Route>
        <Route path='curso' element={<Curso/>}></Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </div>
      <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
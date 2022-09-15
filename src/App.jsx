import React from 'react'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Error404 from './Error404'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.scss"
import GoToTop from './components/GoToTop'
const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
        <GoToTop />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App


  // colors:{
  //   heading: "rgb(24,24,29)",
  //   text:"rgb(24,24,29)",
  //   white:"#fff",
  //   black:"#212529",
  //   helper:"#8490ff",
  //   bg:"rgb(249,249,255)",
  //   footer_bg   : "#0a1435",
  //   btn:"rgb(98,84,243)",
  //   border:"rgba(98,84,243,0.5)",
  //   hr:"#fff",
  //   gradient: "linear-gradient(0deg, rgb(132,144,255) 0%, rgb(98,189,252) 100%)",
  //   shadow:"rgba(0,0,0,0.2) 0px 1px 3px 0px , rgba(27,31,35,0.15) 0px 0px 0px 1px",
  //   shadowSupport: "rgba(0 , 0 , 0 ,0.14) 0px 1px 4px" 
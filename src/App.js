
import React from 'react'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import TestEffect from './component/TestEffect'
import Footer from "./component/Footer"
function App() {

  const [allVideo, setallVideo] = useState([])

  return (
    <>
      <Routes>
        <Route path='/' element={<TestEffect />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App


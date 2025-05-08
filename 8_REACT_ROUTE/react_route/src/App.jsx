import "./App.css"

// 1- config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Import pages
import Home from "./pages/home"
import About from "./pages/About"

//import components
import Navbar from "./components/Navbar"


function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
       {/* 2- Links com react router */}
      <Navbar />
         <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
         </Routes>
      </BrowserRouter>
    </div>
        
  )
}

export default App

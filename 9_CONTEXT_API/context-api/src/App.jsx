import './App.css'

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

//Import Pages
import About from './pages/About'
import Home from './pages/Home'
import Product from './pages/Product'
import Navbar from './components/Navbar'




function App() {


  return (
    <div className="App">
      <h1>Context API</h1>
        <BrowserRouter>

        <Navbar />

          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Product />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App

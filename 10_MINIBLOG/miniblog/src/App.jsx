import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'


// Hooks
import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'

// Context
import { AuthProvider } from './context/AuthContext'

// Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import CreatePost from './pages/CreatePost/CreatePost'

// Components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'



function App() {
  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  }, [auth])

  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <div className='App'>
      <AuthProvider value={{user} }>
        <BrowserRouter>
        <Navbar />
      
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Login' element={!user ? <Login /> : <Navigate to='/' />} />
            <Route path='/Register' element={!user ? <Register /> : <Navigate to='/' />} />
            <Route path='/Dashboard' element={user ? <Dashboard /> : <Navigate to='/Login' />} />
            <Route path='/posts/create' element={user ? <CreatePost /> : <Navigate to='/Login' />} />
          </Routes>
        </div>
        
        <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App

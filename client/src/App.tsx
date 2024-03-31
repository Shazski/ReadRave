import './App.css'
import NavBar from './components/Navbar/NavBar'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import { BookList } from './pages/Book/BookList'
import BookDetails from './pages/Book/BookDetails'
import { useEffect } from 'react'
import { useTypeDispatch, useTypeSelector } from './hooks'
import Register from './pages/Register/Register'
import { makeErrorDisable } from './redux/reducers/user/userslice'
import Login from './pages/Login/Login'
import NotFound from './pages/NotFound'
import { getUser } from './redux/actions/user/userActions'
import { Toaster } from 'react-hot-toast'
function App() {

  const { user, error } = useTypeSelector((state) => state.user)

  const dispatch = useTypeDispatch()

  useEffect(() => {
    if (!user) {
      dispatch(getUser())
    }
  }, [])

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(makeErrorDisable())
      }, 5000)
    }
  }, [error])

  return (
    <>
      <Toaster />
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={user ? <Navigate to={'/'} /> : <Register />} />
          <Route path='/login' element={user ? <Navigate to={'/'} /> : <Login />} />
          <Route path='/book-list' element={user ? <BookList /> : <Navigate to={'/login'} />} />
          <Route path='/book-details/:id' element={user ? <BookDetails /> : <Navigate to={'/login'} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App

import './App.css'
import BooksCard from './components/Cards/BooksCard'
import NavBar from './components/Navbar/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import { BookList } from './pages/Book/BookList'
function App() {

  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book-list' element={<BookList />} />
          <Route path='/book-details/:id' element={<BookList />} />
        </Routes>
      </div>
    </>
  )
}

export default App

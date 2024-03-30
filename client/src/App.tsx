import './App.css'
import NavBar from './components/Navbar/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import { BookList } from './pages/Book/BookList'
import BookDetails from './pages/Book/BookDetails'
function App() {

  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book-list' element={<BookList />} />
          <Route path='/book-details/:id' element={<BookDetails />} />
        </Routes>
      </div>
    </>
  )
}

export default App

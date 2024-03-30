import BooksCard from "../../components/Cards/BooksCard"
import HeroSection from "../../components/Home/HeroSection"
import Book1 from "../../assets/images/book1.jpg"
import Book2 from "../../assets/images/book2.jpg"
import Book3 from "../../assets/images/book3.jpg"
import Book4 from "../../assets/images/book4.jpg"
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <>
      <div>
        <HeroSection />
      </div>
      <div className="flex justify-between px-16 mt-7">
        <h1 className="font-serif text-white text-2xl font-semibold">Popular Now</h1>
        <Link to='/book-list' >View All</Link>
      </div>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center mt-4">
        <BooksCard img={Book1} />
        <BooksCard img={Book2} />
        <BooksCard img={Book3} />
        <BooksCard img={Book4} />
      </div>
      <div className="flex justify-between px-16 mt-7">
        <h1 className="font-serif text-white text-2xl font-semibold">Latest Books</h1>
        <Link to='/book-list' >View All</Link>
      </div>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center mt-4">
        <BooksCard img={Book1} />
        <BooksCard img={Book2} />
        <BooksCard img={Book3} />
        <BooksCard img={Book4} />
      </div>
    </>
  )
}

export default Home
import BooksCard from "../../components/Cards/BooksCard"
import HeroSection from "../../components/Home/HeroSection"
import { Link, useSearchParams } from "react-router-dom"
import { useTypeDispatch, useTypeSelector } from "../../hooks"
import { useEffect, useState } from "react"
import { getAllBooks } from "../../redux/actions/book/bookActions"
const Home = () => {

  const [search, setSearch] = useState<string>("");
  const [searchParams, _] = useSearchParams();

  const dispatch = useTypeDispatch()
  const { book } = useTypeSelector((state) => state.book)
  useEffect(() => {
    const search = searchParams.get("search")
    setSearch(search!)
  }, [searchParams])


  useEffect(() => {
    dispatch(getAllBooks({ page: 1, search }))
  }, [searchParams])
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
        {
          book?.slice(0, 4)?.map((book) => (
            <BooksCard data={book} />
          ))
        }
      </div>
    </>
  )
}

export default Home
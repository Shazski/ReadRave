import BooksCard from "../../components/Cards/BooksCard"
import Pagination from "../../components/Pagination/Pagination"
import { useEffect, useState } from "react";
import { useTypeDispatch, useTypeSelector } from "../../hooks";
import { getAllBooks } from "../../redux/actions/book/bookActions";
export const BookList = () => {
  const [page, setPage] = useState<number>(1);

  const dispatch = useTypeDispatch()
  const { book, bookCount } = useTypeSelector((state) => state.book)

  const handleChildData = (currentPage: number) => {
    setPage(currentPage)
  }

  useEffect(() => {
    dispatch(getAllBooks())
  }, [])

  useEffect(() => {
    console.log(book, "book data")
  })

  return (
    <>
      <h1 className="font-serif font-semibold text-center text-3xl mt-7">List Of Books</h1>
      <div className="flex flex-wrap justify-center gap-x-2 gap-y-3 mt-8">
        {
          book?.map((book, idx) => (
            <div key={idx}>
              <BooksCard data={book} />
            </div>
          ))
        }
      </div>
      <div className="my-8 ms-20">
        <Pagination length={Number(bookCount)} sentToParent={handleChildData} page={page} />
      </div>
    </>
  )
}

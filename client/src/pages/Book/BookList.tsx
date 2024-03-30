import BooksCard from "../../components/Cards/BooksCard"
import Book5 from "../../assets/images/book5.jpg"
import Pagination from "../../components/Pagination/Pagination"
import { useState } from "react";
export const BookList = () => {
  const [page, setPage] = useState<number>(1);
  const handleChildData = (currentPage: number) => {
    setPage(currentPage)
    console.log("data here is")
    console.log("🚀 ~ file: BookList.tsx:11 ~ handleChildData ~ currentPage:", currentPage)
  }
  return (
    <>
      <h1 className="font-serif font-semibold text-center text-3xl mt-7">List Of Books</h1>
      <div className="flex flex-wrap justify-center gap-x-2 gap-y-3 mt-8">
        <BooksCard img={Book5} />
        <BooksCard img={Book5} />
        <BooksCard img={Book5} />
        <BooksCard img={Book5} />
        <BooksCard img={Book5} />
        <BooksCard img={Book5} />
        <BooksCard img={Book5} />
        <BooksCard img={Book5} />
        <BooksCard img={Book5} />
        <BooksCard img={Book5} />
      </div>
      <div className="my-8">
        <Pagination sentToParent={handleChildData} page={page} />
      </div>
    </>
  )
}

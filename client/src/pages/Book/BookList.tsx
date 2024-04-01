import BooksCard from "../../components/Cards/BooksCard"
import Pagination from "../../components/Pagination/Pagination"
import { useEffect, useState } from "react";
import { useTypeDispatch, useTypeSelector } from "../../hooks";
import { getAllBooks } from "../../redux/actions/book/bookActions";
import { useSearchParams } from "react-router-dom";
export const BookList = () => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const dispatch = useTypeDispatch()
  const { book, bookCount } = useTypeSelector((state) => state.book)
  const [searchParams, _] = useSearchParams()
  const handleChildData = (currentPage: number) => {
    setPage(currentPage)
  }

  useEffect(() => {
    dispatch(getAllBooks({ page, search }))
  }, [search, page])



  useEffect(() => {
    const search = searchParams.get("search")
    if (search)
      setSearch(search)
  }, [searchParams])

  return (
    <>
      <h1 className="font-serif font-semibold text-center text-3xl mt-7">List Of Books</h1>
      <div className="flex flex-wrap justify-center gap-x-2 gap-y-3 mt-8">
        {
          book && book?.length > 0 ?
            book?.map((book, idx) => (
              <div key={idx}>
                <BooksCard data={book} />
              </div>
            )) : <>
              <h1 className="text-red-600 font-bold text-3xl">No Data Found</h1>
            </>
        }
      </div>
      <div className="my-8 ms-20">
        <Pagination length={Number(bookCount)} sentToParent={handleChildData} page={page} />
      </div>
    </>
  )
}

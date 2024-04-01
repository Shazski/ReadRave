import { useNavigate } from "react-router-dom"
import { IBook } from "../../Interfaces/Ibook"

const BooksCard = ({ data }: { data: IBook }) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/book-details/${data._id}`)} className="card hover:scale-105 duration-300 cursor-pointer shadow-lg shadow-gray-900 card-compact w-64 h-96 bg-base-100 ">
      <figure><img src={data?.coverimage} alt="Books" className="h-64 w-60 rounded-md mt-2" /></figure>
      <div className="card-body">
        <h2 className="card-title">{data?.title}</h2>
        <p>{data?.author}</p>
      </div>
    </div>
  )
}

export default BooksCard
import ShowRating from "../Ratings/ShowRating"

const BooksCard = ({ img }: { img: string }) => {
  return (
    <div className="card hover:scale-105 duration-300 cursor-pointer shadow-lg shadow-gray-900 card-compact w-64 h-96 bg-base-100 ">
      <figure><img src={img} alt="Books" className="h-64 w-60 rounded-md mt-2" /></figure>
      <div className="card-body">
        <h2 className="card-title">Book Title</h2>
        <ShowRating />
        <p>Author Name</p>
      </div>
    </div>
  )
}

export default BooksCard
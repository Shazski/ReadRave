import ShowRating from "../Ratings/ShowRating"

const ReviewCard = () => {
  return (
    <div className="card w-56 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          UserName
        </h2>
        <ShowRating />
        <p>Description</p>
      </div>
    </div>
  )
}

export default ReviewCard
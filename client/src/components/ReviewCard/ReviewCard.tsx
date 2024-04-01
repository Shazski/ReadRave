import ShowRating from "../Ratings/ShowRating";
import { IReview } from './../../Interfaces/IReview';

const ReviewCard = ({ reviewData }: { reviewData: IReview }) => {
  return (
    <div className="card w-56 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          {reviewData?.userId?.name}
        </h2>
        <ShowRating rating={reviewData?.rating} />
        <p>{reviewData?.comment}</p>
      </div>
    </div>
  )
}

export default ReviewCard;
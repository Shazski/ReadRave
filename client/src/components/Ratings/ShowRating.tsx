
const ShowRating = ({ rating }: { rating: number }) => {
  return (
    <div className="rating rating-sm">
      <input className="mask mask-star" />
      <input className="mask mask-star" />
      <input className="mask mask-star" />
      <input className="mask mask-star" />
      <input className="mask mask-star" />
    </div>
  )
}

export default ShowRating
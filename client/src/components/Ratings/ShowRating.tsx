
const ShowRating = () => {
  return (
    <div className="rating rating-sm">
      <input type="radio" className="mask mask-star" />
      <input type="radio" className="mask mask-star" />
      <input type="radio" className="mask mask-star" />
      <input type="radio" className="mask mask-star" checked />
      <input type="radio" className="mask mask-star" />
    </div>
  )
}

export default ShowRating
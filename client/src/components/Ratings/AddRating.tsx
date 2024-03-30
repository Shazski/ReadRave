import { ErrorMessage, Field } from "formik"
import { ChangeEvent } from "react"

const AddRating = ({ sentRatingToParent }: { sentRatingToParent: (rating: number) => void }) => {

  //To send Rating Data to the Parent component using callback
  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    sentRatingToParent(Number(value))
  }

  return (
    <div className="rating">
      <input type="radio" onChange={handleRatingChange} value={1} name="rating" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" onChange={handleRatingChange} value={2} name="rating" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" onChange={handleRatingChange} value={3} name="rating" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" onChange={handleRatingChange} value={4} name="rating" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" onChange={handleRatingChange} value={5} name="rating" className="mask mask-star-2 bg-orange-400" />
      <ErrorMessage name="rating" component="div" className="text-red-600" />
    </div>
  )
}

export default AddRating
import { useState, lazy, Suspense, useEffect } from "react";
import ShowRating from "../../components/Ratings/ShowRating"
import ReviewCard from "../../components/ReviewCard/ReviewCard"
import AddRating from "../../components/Ratings/AddRating";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { reviewValidationSchema } from "../../validations/reviewValidation";
import { getBookById, postReview } from "../../redux/actions/book/bookActions";
import { useTypeDispatch, useTypeSelector } from "../../hooks";
import { useParams } from "react-router-dom";
const Modal = lazy(() => import("../../components/Modal/Modal")); //lazy loading Modal (dynamic import)

const BookDetails = () => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(5)

  const { id } = useParams()
  const dispatch = useTypeDispatch()

  const { bookDetails, error } = useTypeSelector((state) => state.book)
  const { user } = useTypeSelector((state) => state.user)

  useEffect(() => {
    dispatch(getBookById(id!))
  }, [])


  //get rating data from the child component
  const getRatingFromChild = (rating: number) => {
    setRating(rating)
  }


  return (
    <>
      <div className="mt-12 flex gap-x-16">
        <img src={bookDetails?.coverimage} alt="" className="w-80 h-96" />
        <div>
          <h1 className="text-white text-2xl ">{bookDetails?.title}</h1>
          <div className="mt-2 flex gap-x-3">
            <ShowRating rating={2} />
            <h1>4.0</h1>
          </div>
          <div>
            <h1 className="text-lg">{bookDetails?.author} </h1>
          </div>
          <div className="mt-7">
            <h1 className="break-all">{bookDetails?.description}</h1>
          </div>
        </div>
        {
          !bookDetails?.reviews?.find((review) => review.userId._id === user?._id) &&
          <div className="w-full">
            <h1 onClick={() => setIsModalOpen(true)} className="btn btn-accent">Add Review</h1>
          </div>
        }
      </div>
      <div className="mt-12 flex flex-wrap gap-x-3">
        {
          bookDetails?.reviews?.length! > 0 ? <>
            {
              bookDetails?.reviews?.map((review) => (
                <ReviewCard reviewData={review} />
              ))
            }
          </> : <>
            <h1 className="text-4xl">No Reviews Found</h1>
          </>
        }
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Modal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {error && <h1 className="text-red-600 font-semibold">{error}</h1>}
          <Formik initialValues={{ comment: "", rating: rating, userId: "" }} validationSchema={reviewValidationSchema} onSubmit={async (values) => {
            values.rating = rating
            values.userId = user?._id!
            dispatch(postReview({ reviewData: values, id }))
            setIsModalOpen(false)
          }}>
            <Form>
              <h1 className="font-bold text-xl">Add Review</h1>
              <div className="mt-2">
                <AddRating sentRatingToParent={getRatingFromChild} />
              </div>
              <div className="mt-8">
                <Field placeholder='Enter your Review' name="comment" className='textarea textarea-bordered w-64' required />
                <ErrorMessage name="comment" component="div" className="text-red-600" />
              </div>
              <button className="btn btn-primary right-24 me-2 absolute">Submit</button>
            </Form>
          </Formik>
        </Modal>
      </Suspense>
    </>
  )
}

export default BookDetails
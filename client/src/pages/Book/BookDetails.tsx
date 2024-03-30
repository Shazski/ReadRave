import { useState, lazy, Suspense } from "react";
import book3 from "../../assets/images/book3.jpg"
import ShowRating from "../../components/Ratings/ShowRating"
import ReviewCard from "../../components/ReviewCard/ReviewCard"
import AddRating from "../../components/Ratings/AddRating";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { reviewValidationSchema } from "../../validations/reviewValidation";
const Modal = lazy(() => import("../../components/Modal/Modal")); //lazy loading Modal (dynamic import)

const BookDetails = () => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(5)

  //get rating data from the child component
  const getRatingFromChild = (rating: number) => {
    setRating(rating)
  }

  return (
    <>
      <div className="mt-12 flex gap-x-16">
        <img src={book3} alt="" className="w-80 h-96" />
        <div>
          <h1 className="text-white text-2xl ">Book Title</h1>
          <div className="mt-2 flex gap-x-3">
            <ShowRating />
            <h1>4.0</h1>
          </div>
          <div>
            <h1 className="text-lg">Thomas alva edison </h1>
          </div>
          <div className="mt-7">
            <h1 className="break-all">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ut velit nihil odit voluptatem, dolorem est iure, veritatis amet fugiat cumque eligendi debitis ipsum laboriosam voluptate unde adipisci repudiandae!</h1>
          </div>
        </div>
        <div className="w-full">
          <h1 onClick={() => setIsModalOpen(true)} className="btn btn-accent">Add Review</h1>
        </div>
      </div>
      <div className="mt-12 flex flex-wrap gap-x-3">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Modal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Formik initialValues={{ comment: "", rating: rating }} validationSchema={reviewValidationSchema} onSubmit={async (values) => {
            values.rating = rating
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
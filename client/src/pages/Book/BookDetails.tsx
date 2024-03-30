import book3 from "../../assets/images/book3.jpg"
import ShowRating from "../../components/Ratings/ShowRating"
import ReviewCard from "../../components/ReviewCard/ReviewCard"
const BookDetails = () => {
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
      </div>
      <div className="mt-12 flex flex-wrap gap-x-3">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </>
  )
}

export default BookDetails
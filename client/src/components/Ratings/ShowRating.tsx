
const ShowRating = ({ rating }: { rating: number }) => {

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(
        <input
          key={`star-${i}`}
          type="radio"
          name="rating"
          className="mask mask-star bg-orange-400"
          checked
          readOnly
        />
      );
    }
    return stars;
  };

  return <div className="rating rating-sm">{renderStars()}</div>;
};

export default ShowRating;
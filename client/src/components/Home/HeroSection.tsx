import HeroImage from "../../assets/images/heroimage.jpg"
const HeroSection = () => {
  return (
    <div className="flex justify-center mt-20">
      <img src={HeroImage} alt="" className="w-10/12 rounded-lg" />
    </div>
  )
}

export default HeroSection
import { IMG_CDN_URL } from "../utils/Constant"
const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwo,
  deliveryTime,

}) => {
  return (
    <div className="w-64 m-3 p-8  hover:scale-110 shadow-lime-950 flex-wrap justify-start">
      <img className="w-64 align-middle" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl inline-flex overflow-hidden">{name}</h2>
      <h3 className="cuisines font-light text-ellipsis whitespace-pre-wrap	@apply text-overflow-ellipsis; ">{cuisines.join(",")}</h3>
      <h4 className="heading pt-0 pr-5">{avgRating}</h4>
      <h4 className="heading">₹ {costForTwo / 100} FOR TWO</h4>
      <h4 className="heading">{deliveryTime}min</h4>
      {/* // <h4>{lastMileTravelString} minutes</h4> */}
    </div>
  )
}
export default RestrauntCard;


//w-60  m-6 p-20 border-r-6 inline-grid hover:scale-110 transition duration-500 align-baseline shadow
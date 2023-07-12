import { IMG_CDN_URL } from "../utils/Constant"
const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString
}) => {
  return (
    <div className="w-56 m-2 p-2  shadow-lg bg-green-300">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3 className="cuisines">{cuisines.join(",")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  )
}
export default RestrauntCard;
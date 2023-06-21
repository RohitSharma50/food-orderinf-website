import { IMG_CDN_URL } from "../utils/Constant"
const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3 className="cuisines">{cuisines.join(",")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  )
}
export default RestrauntCard;
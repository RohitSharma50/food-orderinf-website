
import RestrauntCard from "./RestaurantCard";
const Shimmer = () => {
    return (
        <>
            <div className="resturant-list">
                {Array(10)
                    .fill("").map((e, index) => (
                        <div index="index" key={index}
                            className="Shimmer-card"></div>

                    ))}


            </div>
        </>
    );
}
export default Shimmer;
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurant(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, } = resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;



    const handleAddItem = () => {
        dispatch(addItem("Grapes"));
    }
    return (
        <div className="menu shadow-slate-900 flex-clip truncate justify-start flex-row">
            <h1 className=" ">{name}</h1>
            <p>

            </p>
            <h2 >Menu</h2>
            <ul>
                {cuisines.join(",")} - {costForTwoMessage}
                <div>
                    <button className="p-2 m-5 bg-green-100">addItem</button>
                </div>

                {itemCards?.map((item) => (

                    <li key={item.card.info.id} className="overflow-x-hidden">
                        {item.card.info.name} -{" Rs."}
                        {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                        {item.card.info.description}

                        {<div>
                            <button className="p-2 m-5 bg-green-100 grid-cols-1" onClick={handleAddItem}>addItem</button>
                        </div>}
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default RestaurantMenu;
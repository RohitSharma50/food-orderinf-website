import RestrauntCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";





const Body = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [searchText, setSearchText] = useState();
  const [filterdRestaurant, setFilterdRestaurant] = useState([]);

  useEffect(() => {

    getRestaurant();
  }, []);

  const getRestaurant = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.3440997&lng=85.309562&page_type=DESKTOP_WEB_LISTING");


    const json = await data.json();


    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilterdRestaurant(json?.data?.cards[2]?.data?.data?.cards);

  }
  // const isOnline = useOnline();

  // if (!isOnline) {
  //   return (
  //     <h1>
  //       You are offline check your internet
  //     </h1>)
  // }




  return (allRestaurant === 0) ? (
    <Shimmer />
  ) : (
    <>
      <div className="Search-Container">
        <input
          type="text"
          className="Search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />


        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurant);
            setFilterdRestaurant(data);

          }}
        >Search</button>
        {/* <h1>{setRestaurants}</h1> */}
      </div>


      <div className="resturant-list">
        {(filterdRestaurant === 0) ? (<h1>No data match your filter</h1>) : (

          filterdRestaurant?.map((restaurant) => {
            return (
              <Link

                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestrauntCard  {...restaurant.data} />
              </Link>
            );
          })
        )}



      </div>
    </>

  )
};
export default Body; 

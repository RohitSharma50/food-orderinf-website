import RestrauntCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";





const Body = () => {
  const [allRestaurant, setAllRestaurant] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filterdRestaurant, setFilterdRestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const data = await fetch(
        "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");

      const json = await data.json();


      // was showing an error of data fatching because sometime data coming from cards[1] sometime cards[2] and different on other times so me make a function and check which value of i gives data in cards[i]
      async function checkJsonData(jsonData) {

        for (let i = 0; i < jsonData?.data?.cards.length; i++) {

          // initialize checkData for Swiggy Restaurant data
          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }
      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      setAllRestaurant(resData);
      setFilterdRestaurant(resData);
    } catch (error) {
      console.log(error);
    }

  }





  return (allRestaurant?.length === 0) ? (
    <Shimmer />

  ) : (
    <>
      <div className="p-5 bg-pink-50 my-1 ">
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
          className="p-3 m-2  bg-purple-600 text-white rounded-lg hover:bg-green-800"
          onClick={() => {
            const data = filterData(searchText, allRestaurant);
            setFilterdRestaurant(data);

          }}
        >Search</button>
      </div>

      <div className="resturant-list flex flex-wrap">
        {(filterdRestaurant?.length === 0 ? <h1>No data match your filter</h1> :
          filterdRestaurant?.map((restaurant) => {
            return (
              <Link
                key={restaurant?.info.id}
                to={"/restaurant/" + restaurant?.info.id}

              >
                <RestrauntCard  {...restaurant?.info} />
              </Link>
            );
          })
        )}



      </div>

    </>

  )
};

export default Body; 

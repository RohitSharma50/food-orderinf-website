
export function filterData(searchText, allRestaurant) {
    const filterData = allRestaurant.filter((restaurant) =>
        restaurant.data.name.toUpperCase().includes(searchText.toUpperCase()));

    return filterData;
}
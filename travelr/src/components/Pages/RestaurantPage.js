import RestaurantList from "../RestaurantList/RestaurantList";
import SearchBar from "../SearchBar/SearchBar";
import React from 'react';

const restaurant = {
  imageSrc: "",
  name: "Schweinhaus Biergarten",
  address: "1330 N State St",
  city: "Bellingham",
  state: "WA",
  zipCode: "98225",
  category: "Bavarian",
  rating: 4.5,
  reviewCount: 906,
  };

const restaurants = [restaurant, restaurant, restaurant, restaurant, restaurant, restaurant];

const RestaurantPage = () => {
  return (
    <>
      <SearchBar />
      <div>
        Highest
      </div>
      <RestaurantList restaurants={restaurants} />
    </>
  );
};

export default RestaurantPage;
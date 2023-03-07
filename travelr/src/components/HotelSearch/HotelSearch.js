import React, { useState, useEffect } from "react";
import './HotelSearch.css'
function HotelSearch() {
  const [location, setLocation] = useState("");
  const [hotels, setHotels] = useState([]);
  const [sortBy, setSortBy] = useState("rating");

  useEffect(() => {
    searchHotels();
  }, []);

  const searchHotels = async () => {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotels+in+${location}&fields=price_level&key=AIzaSyDSkmH8ODvpcscHjTv1VVIw9LKqaFgfB1A`
      );
    const data = await response.json();
    const sortedHotels = data.results
      .sort((a, b) => b.user_ratings_total - a.user_ratings_total)
      .slice(0, 6)
      .map((hotel) => ({
        ...hotel,
        price_level_display: hotel.price_level ? `$${hotel.price_level}` : "N/A",
      }));
    setHotels(sortedHotels);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleHotelClick = (hotel) => {
    console.log(hotel);
  };

  const sortedHotels = [...hotels].sort((a, b) => b.rating - a.rating);

  return (
    <div>
      <h1>Hotel Search</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a city"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={searchHotels}>Search</button>
      </div>
      <div>
        <label className="sort-select">Sort By:</label>
        <select className="sort-select" value={sortBy} onChange={handleSortChange}>
          <option className="rating">Rating</option>
        </select>
      </div>
      <div>
      <div className="containerz">
        {sortedHotels.map((hotel) => (
          <div key={hotel.place_id} onClick={() => handleHotelClick(hotel)}>
            <h2>{hotel.name}</h2>
            <p>Rating: {hotel.rating}</p>
            <p>Reviews: {hotel.user_ratings_total}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default HotelSearch;
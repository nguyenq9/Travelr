import React from "react";
import "./HotelSearch.css";
const sortByOptions = {
  "Most Popular": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
  "Lowest Price": "change_me",
};

class HotelSearch extends React.Component {
  renderSortByOptions() {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  }
  render() {
    return (
      <div className="Hotels">
        <div className="search-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="search-container">
          <input className="search-input" placeholder="Search Hotels." />
          <input className="search-input" placeholder="Where?" />
        </div>
        <div className="search-btn-ex">
          <button className="search-btn">Let's Go</button>
        </div>
      </div>
    );
  }
}

export default HotelSearch;

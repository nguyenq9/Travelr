import RestaurantList from "../RestaurantList/RestaurantList";
import SearchBar from "../SearchBar/SearchBar";
import React from 'react';
import Yelp from "../../util/Yelp";


class RestaurantPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy)
    .then((businesses) => {
      this.setState({
        businesses: businesses
      })
    })
  }

  render() {
    return (
      <>
        <SearchBar searchYelp={this.searchYelp} />
        <RestaurantList businesses={this.state.businesses} />
      </>
    )
  }
}

export default RestaurantPage;
import React from 'react';
import './RestaurantList.css';
import Restaurant from '../Restaurants/Restaurants';

class RestaurantList extends React.Component {
    render() {
        return(
            <div className="RestaurantList">
                {this.props.businesses.map((business, i) => {  // renders the list of restaurant objects
                   return <Restaurant business={business} key={business.id} />;  // gives the restaurant object the business object and the key, fetched from the Yelp API
                })}
            </div>
        )
    }
}

export default RestaurantList;  // exports the 
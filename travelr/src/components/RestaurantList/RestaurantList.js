import React from 'react';
import './RestaurantList.css';
import Restaurant from '../Restaurants/Restaurants';

// renders the list of restaurant objects
// gives the restaurant object the business object and the key, fetched from the Yelp API
class RestaurantList extends React.Component {
    render() {
        return(
            <div className="RestaurantList">
                {this.props.businesses.map((business, i) => {  
                   return <Restaurant business={business} key={business.id} />;  
                })}
            </div>
        )
    }
}

export default RestaurantList;  // exports the 
import React from 'react';
import './Restaurants.css';


class Restaurant extends React.Component {
    render() {
        const { business } = this.props
        return(
            <div className="Restaurant">
                <div className="image-container">
                    <img src={business.imageSrc} alt=''/>
                </div>
                <h2>{business.name}</h2>
                <div className="Restaurant-information">
                    <div className="Restaurant-address">
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state} {business.zipCode}</p>
                    </div>
                    <div className="Restaurant-reviews">
                    <h3>{business.category}</h3>
                    <h3 className="rating">{business.rating} stars</h3>
                    <p>{business.reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Restaurant;
  
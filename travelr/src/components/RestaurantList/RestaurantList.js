import React from 'react';
import './RestaurantList.css';
import Restaurant from '../Restaurants/Restaurants'

class RestaurantList extends React.Component {
    restaurant={
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

    render() {
        return(
            <div className="RestaurantList">
                <Restaurant restaurant={this.restaurant} />
                <Restaurant restaurant={this.restaurant} />
                <Restaurant restaurant={this.restaurant} />
                <Restaurant restaurant={this.restaurant} />
                <Restaurant restaurant={this.restaurant} />
                <Restaurant restaurant={this.restaurant} />
            </div>
        )
    }
}

export default RestaurantList;
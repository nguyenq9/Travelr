import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };

        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        }
        // this.handleTermChange = this.handleTermChange.bind(this);
        // this.handleLocationChange = this.handleLocationChange.bind(this);
        // this.handleSearch = this.handleSearch.bind(this);
    }

    render() {
        return(
            <div className="SearchBar">
            <div className="SearchBar-sort-options">

            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Restaurants" onChange={this.handleTermChange}/>
                <input placeholder="Cuisine" onChange={this.handleLocationChange}/>
            </div>
            <div className="SearchBar-submit">
                <a>Search</a>
            </div>
            </div>
        );
    }
}

export default SearchBar;
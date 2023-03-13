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

        this.sortByOptions = {  // gives the sort by options, and allows the user to select from a variety of filters
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        }
        // binds the functions in the constructor
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    // sorting handlers
    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        } 
        return '';
    }

    handleSortByChange(sortByOption) {
        this.setState({
            sortBy: sortByOption
        });
    }

    // updates when the term (restaurant name) is changed
    handleTermChange(event) {
        this.setState({
            term: event.target.value
        });
    }

    // updates when the location (zip code) is changed
    handleLocationChange(event) {
        this.setState({
            location: event.target.value
        });
    }

    // uses the Yelp API when the search button is clicked
    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    }

    // sorts the restaurant list
    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                        {sortByOption} 
                    </li>
        });
    }

    // the HTML/JSX code for the UI of the search bar
    render() {
        return(
            <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Restaurants" onChange={this.handleTermChange}/>
                <input placeholder="Where?" onChange={this.handleLocationChange}/>
            </div>
            <div className="SearchBar-submit">
                <a onClick={this.handleSearch}>Let's Go</a>
            </div>
            </div>
        );
    }
}

export default SearchBar;
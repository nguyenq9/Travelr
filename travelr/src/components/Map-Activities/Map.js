import React, { Component } from 'react';

class HotelMap extends Component {
    constructor(props) {
      super(props);
      this.state = {
        map: null,
        markers: [],
        autoComplete: null,
        infoWindow: null,
        placesService: null,
      };
    }
  
    componentDidMount() {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCsufdamQaxOQ5M1hsT4x_P5OLe4x7gCN4&libraries=places`;
      script.async = true;
      script.onload = () => {
        this.initMap();
      };
      document.body.appendChild(script);
    }
  
    initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 13,
      });
  
      const autoComplete = new window.google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        {
          types: ['(cities)'],
          componentRestrictions: { country: 'us' },
        }
      );
  
      const infoWindow = new window.google.maps.InfoWindow({
        maxWidth: 200,
      });
  
      const placesService = new window.google.maps.places.PlacesService(map);
  
      this.setState({ map, autoComplete, infoWindow, placesService });
    };
  
    handleSearchClick = () => {
        const { map, autoComplete, infoWindow, placesService } = this.state;
      
        // Get the selected city from the AutoComplete input
        const place = autoComplete.getPlace();
      
        // Clear any existing markers on the map
        this.clearMarkers();
      
        // Search for hotels near the selected city
        placesService.nearbySearch(
          {
            location: place.geometry.location,
            radius: 5000, // 5km radius
            type: 'tourist_attraction',
          },
          (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              // Create markers for each hotel found
              const markers = results.map((place) => {
                const marker = new window.google.maps.Marker({
                  map,
                  position: place.geometry.location,
                });
      
                // Add an event listener to show the hotel infoWindow when the marker is clicked
                marker.addListener('click', () => {
                  infoWindow.setContent(`<div><strong>${place.name}</strong><br>${place.vicinity}</div>`);
                  infoWindow.open(map, marker);
                });
      
                return marker;
              });
      
              // Zoom the map to fit all the markers
              const bounds = new window.google.maps.LatLngBounds();
              markers.forEach((marker) => bounds.extend(marker.getPosition()));
              map.fitBounds(bounds);
      
              this.setState({ markers });
            }
          }
        );
      };
      
      clearMarkers = () => {
        const { markers } = this.state;
        markers.forEach((marker) => marker.setMap(null));
        this.setState({ markers: [] });
      };
  
    render() {
      return (
        <div style={{marginLeft: '30%', height: '970px', width: '100%' }}>
            <h1 style={{ marginTop:'5%'}}>Attraction Things To Do</h1>
            <h2>Find Attraction Places:</h2>
          <input type="text" id="autocomplete" placeholder="Enter a city you want to visit" />
          <button style={{marginLeft:'2%'}} onClick={this.handleSearchClick}>Search</button>
          <div id="map" style={{ marginBottom:'2%', height: '700px', width: '770px' }}></div>
        </div>
      );
    }
  }
  
  export default HotelMap;
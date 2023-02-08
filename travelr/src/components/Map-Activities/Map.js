import React from 'react';
//import GoogleMapReact from 'google-map-react';
//import {useMediaQuery}  from '@material-ui/core';
//import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
//import Rating from '@material-ui/lab/Rating';
//import useStyles from './map-style.js';
import MapPicture from './images/GoogleMapTA.jpg';

// import useStyles from './map-style';

const Map = ()  => {
    //const matches = useMediaQuery('(min-width:600px)');
    // const classes = useStyles();
    // const coordinates = {lat : 59.95, lng: 30.33};
    // return (

    //     <div className={classes.mapContainer}>
    //         <GoogleMapReact
    //             bootstrapURLKeys={{key:'AIzaSyDD86g12D8Q-V7HW9_n7-edcp1FNkJ07go'}}
    //             defaultCenter={coordinates}
    //             center={coordinates}
    //             defaultZoom={14}
    //             margin={[50, 50, 50, 50]}
    //             options={''}
    //             onChange={''}
    //             onChildClick={''}
    //         >
    //         </GoogleMapReact>
    //     </div>  
    // );

    return (
        <>
        <div>
            <h1>Google Map</h1> 
            <img src={MapPicture} alt="map" style={{width: '80%', heigh: '100%', marginRight:'-50px'}}/>
        </div>

        </>

    );

    }   

export default Map;
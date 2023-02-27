import {useState} from "react";
import React from "react";
import {Typography, InputLabel, MenuItem, FormControl, Select} from '@mui/material';
//import { createTheme} from '@mui/material/styles';
import { useRef, useEffect } from "react";

//  const theme = createTheme();
  const formControl = {
    minWidth: 100, minHeight:50, marginTop: '20px',marginBottom: '30px', 
  }
  const fillBox =  {
    marginTop: '20px', minWidth: '10vh', marginBottom: '30px',
  }

  // const searchfields = {
  //   display: 'flex', justifyContent: 'center', marginBottom: '2.88rem', marginTop: '5px'
  // }
  // const searchfieldsInput = {
  //   width: '21rem', padding: '.66rem 1rem', marginLeft: '1rem', border: '1px solid #fff',borderRadius: '4px',
  //   borderColor: 'inherit', marginTop:'10px', fontSize: '.77rem', fontWeight: '500',
  // }


  let autoComplete;

  const loadScript = (url, callback) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
  
    if (script.readyState) {
      script.onreadystatechange = function() {
        if (script.readyState === "loaded" || script.readyState === "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = () => callback();
    }
  
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };
  
  function handleScriptLoad(updateQuery, autoCompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current,
      { types: ["(cities)"], componentRestrictions: { country: "us" } }
    );
    autoComplete.setFields(["address_components", "formatted_address"]);
    autoComplete.addListener("place_changed", () =>
      handlePlaceSelect(updateQuery)
    );
  }
  
  async function handlePlaceSelect(updateQuery) {
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    updateQuery(query);
    console.log(addressObject);
  }  

  const List = ()  => {
    const [rating, setRating] = useState('');
    const [query, setQuery] = useState("");
    const autoCompleteRef = useRef(null);

    useEffect(() => {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=AIzaSyCsufdamQaxOQ5M1hsT4x_P5OLe4x7gCN4&libraries=places`,
        () => handleScriptLoad(setQuery, autoCompleteRef)
      );
    }, []);
    
    return (
        <div>
            <br></br>
            <Typography variant="h5">Attraction Things To Do</Typography>
            <br></br>
            <Typography variant="h7">Find a Attraction Place Here:</Typography>
            <div sx={fillBox}>
              <input
                ref={autoCompleteRef}
                onChange={event => setQuery(event.target.value)}
                placeholder="Enter a City Name"
                value={query}
                style={{padding: '10px', marginTop:'5px', borderColor:'black', paddingRight:'20px',}}
              />
            </div>

            <FormControl sx={formControl}>
                <InputLabel id="rating">Rating</InputLabel>
                <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="3">Above 3.0</MenuItem>
                    <MenuItem value="4">Above 4.0</MenuItem>
                    <MenuItem value="4.5">Above 4.5</MenuItem>
                </Select>
            </FormControl>

      </div>

    );
}

export default List;



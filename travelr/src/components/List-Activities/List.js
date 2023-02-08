import React, {useState} from "react";
import {Typography, InputLabel, MenuItem, FormControl, Select} from '@mui/material';
import PikePlace from './images/pike-place.jpg';
import SpaceNoodle from './images/SpaceNoodle.jpg';
import { createTheme} from '@mui/material/styles';


 const theme = createTheme();
  const formControl = {
    marginTop: '20px',minWidth: 100,marginBottom: '30px'
  }

  const container =  {
    padding: '20px',
  }
  const searchfields = {
    display: 'flex', justifyContent: 'center', marginBottom: '2.88rem', marginTop: '5px'
  }

  const searchfieldsInput = {
    width: '21rem', padding: '.66rem 1rem', marginLeft: '1rem', border: '1px solid #fff',borderRadius: '4px',
    borderColor: 'inherit', marginTop:'10px', fontSize: '.77rem', fontWeight: '500',
  }


const List = ()  => {
    const [rating, setRating] = useState('');

    return (
        <div sx = {container}>

            <Typography variant="h4">Attraction Things To Do</Typography>
            <div sx={searchfields}>
                <input sx={searchfieldsInput} placeholder="Search City...." />
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

            <img src={PikePlace} alt="map" style={{width: '90%', heigh: '40%', marginRight:'-50px', marginBottom:'10px', borderColor:'blue', borderWidth:'2px'}}/>
            <img src={SpaceNoodle} alt="map" style={{width: '90%', heigh: '40%', marginRight:'-50px', marginBottom:'10px', borderColor:'blue', borderWidth:'2px'}}/>
      </div>

    );
}

export default List;

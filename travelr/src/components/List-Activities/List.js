import React, {useState} from "react";
import {Typography, InputLabel, MenuItem, FormControl, Select} from '@material-ui/core';

import PikePlace from './images/pike-place.jpg';
import SpaceNoodle from './images/SpaceNoodle.jpg';

import useStyles from './styles';

const List = ()  => {
    const classes = useStyles();
    const [rating, setRating] = useState('');

    return (
        <div className={classes.container}>

            <Typography variant="h4">Attractions Things To Do</Typography>
            <div className={classes.searchfields}>
                <input className={classes.searchfieldsInput} placeholder="Search City...." />
            </div>
            <FormControl className={classes.formControl}>
                <InputLabel id="rating">Rating</InputLabel>
                <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="3">Above 3.0</MenuItem>
                    <MenuItem value="4">Above 4.0</MenuItem>
                    <MenuItem value="4.5">Above 4.5</MenuItem>
                </Select>
            </FormControl>

            <img src={PikePlace} alt="map" style={{width: '90%', heigh: '40%', marginRight:'-50px'}}/>
            <img src={SpaceNoodle} alt="map" style={{width: '90%', heigh: '40%', marginRight:'-50px'}}/>
      </div>

    );
}

export default List;
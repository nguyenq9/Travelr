import React from "react";
import { CssBaseline, Grid } from '@mui/material';
import HotelMap from '../Map-Activities/Map';

const Activities = () => {
        return (
            <>
            <CssBaseline /> 
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid>
                    {<HotelMap />}
                </Grid>
                
                
            </Grid>
            </>
            
        );
}

export default Activities;
import React from "react";
import { CssBaseline, Grid } from '@material-ui/core';
import List from '../List-Activities/List'
import Map from '../Map-Activities/Map';

const Activities = () => {
        return (
            <>
            <CssBaseline /> 
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>
                <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Map />
                </Grid>
                
                
            </Grid>
            </>
            
        );
}

export default Activities;
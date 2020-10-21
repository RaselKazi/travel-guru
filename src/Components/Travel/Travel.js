import React from 'react';
import { Container, Grid } from '@material-ui/core';
import {hotelData} from '../../fakeData/HotelData'
import './Travel.css'
import HotelCard from './HotelCard/HotelCard';
import Map from './Map/Map';
import Navber from '../Navber/Navber';

const Travel = () => {
    return (
    <Container className="bg-white">
<Navber color={"black"} ></Navber>
    <Grid container item xs={12} justify="space-between">
            <Grid item xs={12} md={6}>
             {
             hotelData.map(hotel=>{ return (<HotelCard hotel={hotel}></HotelCard>)})
             }
            </Grid>
            <Grid item xs={12} md={6}>
             <Map></Map>
            </Grid>
        </Grid>
     </Container>
    );
};

export default Travel;
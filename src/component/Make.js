import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import '../App.css';

import Typography from '@material-ui/core/Typography';
import logo_circle from '../media/art/logo-circle.png';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';




const Make = () => {

    return (
        <div style={{marginTop:'5em'}}>
        <Grid container alignItems={'center'}>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1} ></Grid>
            <Grid item container direction={'column'} alignItems={'center'} xs={10} sm={10} md={10} lg={10} xl={10} >

                <Grid container item alignItems={'center'} direction={'column'}>
                    <Grid item container>
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}/>
                        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                            <img src={logo_circle} style={{maxHeight: '100%', maxWidth: '52%'}}></img>
                        </Grid>                    
                    </Grid>
                    <Grid item container direction={'column'} alignItems={'center'} xs={12} sm={12} md={6} lg={6} xl={6}>
                    {/* #32a852 */}
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Typography variant={'h2'} style={{fontFamily: 'Overlock ', fontStyle: 'italic', color: ' #1e6e33'}}>permagreens </Typography> 
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Typography variant={'subtitle1'} style={{fontFamily: 'Overlock ', fontStyle: 'italic', color: '#13d446'}}>MAJOR FOOD, MICROGREEN </Typography>
                        </Grid>                        
                    </Grid>

                </Grid>
                <Grid container spacing={1} alignItems={'center'} direction={'column'}>
                    <Grid item>
                        <Typography variant={'h4'}style={{fontFamily: 'Overlock ', fontStyle: 'italic', color: ' #1e6e33'}}>How To Use Your Microgreens </Typography> 
                    </Grid>
                    <Grid item>
                        <Typography>Salads</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>Sandwiches</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>Smoothies</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1} ></Grid>
        </Grid>
            
        </div>
    );

}

export default Make;
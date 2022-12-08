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
import rack2slo from '../media/rackTrim2_Trim3.mp4'
import rad_bgd from '../media/rad_bgd.jpg'
import racks1 from '../media/rack_stack.jpg'
import racks2 from '../media/rack_stack_2.jpg'

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';




const About = () => {

    return (        
    <div style={{marginTop:'5em',}}>
           
            
        
        <video  id='background-video' loop muted autoPlay playsInline poster={rad_bgd}                
                style={{
                    position: 'absolute',
                    zIndex: -1,
                    backgroundSize: '100%',
                    minWidth: '100%',
                    minHeight: '100%',
                    width: 'inherit',
                    left: '50%',
                    top:'50%',
                    height: 'inherit',
                    objectFit: 'cover',
                    transform: 'translate(-50%, -50%)'
                    }}>
            <source src={rack2slo} type={'video/mp4'}/>
                </video> 

        {/* <image 
        style={{
                position: 'fixed',                
                minWidth: '100%',
                minHeight: '100%',
                width: '100%',
                height: 'auto',                
                top: 0,        
                backgroundSize: 'cover',            
                
        }}
            >
            <img src={rad_bgd}/>

        </image> */}        
                
        <Grid container alignItems={'center'} spacing={2} >            
            
            <Grid item container direction={'column'} alignItems={'center'} xs={12} sm={12} md={12} lg={12} xl={12} spacing={2}>
                <Grid container item alignItems={'center'} direction={'column'} >
                    
                    <Grid item container>
                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}/> 
                        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>                            
                             <img src={logo_circle} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', maxHeight: '100%', maxWidth: '55%'}}></img> 
                        </Grid>      
                        <Grid item container direction={'column'} alignItems={'center'} style={{margin: 'auto', }} xs={12} sm={12} md={3} lg={3} xl={3}>
                            {/* #32a852 */}
                            {/* xs={12} sm={12} md={4} lg={4} xl={4} */}
                            <Grid item > 
                                <Typography variant={'h2'} style={{fontFamily: 'Overlock ', fontStyle: 'italic', color: ' #1e6e33',}}>permagreens </Typography> 
                            </Grid>
                            <Grid item >
                                <Typography variant={'subtitle1'} style={{fontFamily: 'Overlock ', fontStyle: 'italic', color: '#13d446', }}>MAJOR FOOD, MICROGREEN </Typography>
                            </Grid>
                        </Grid>     
                        <Grid item xs={false} sm={false} md={3} lg={3} xl={3}/>   
                    </Grid>                    
                    
                </Grid>

                <Grid container spacing={1} alignItems={'left'} direction={'column'} style={{ backgroundColor: '#ebf4eb'}}>   
                    <Grid item>
                        <Typography 
                                variant={'h6'} 
                                style={{fontFamily: 'Overlock ', fontStyle: 'italic', color: ' #1e6e33'}}
                            >
                                Permagreens: Permaculture Principles Growing Microgreens
                            </Typography>
                    </Grid>                 
                    <Grid container item spacing={1}>
                        <Grid item xs={10} sm={10} md={7} lg={7} xl={7}>                            
                            <Typography variant={'subtitle1'}>We started Permagreens because we wanted to grow our own produce naturally and sustainably, and reduce our reliance on existing supply chains.
                            After being introduced to the principles of permaculture, we began analyzing our needs and resources, and realized that we could incorporate
                            permaculture methods into our system's design.</Typography>
                            
                        </Grid>
                        <Grid item xs={10} sm={10} md={5} lg={5} xl={5}> 
                            <img src={racks1} style={{marginLeft: '2em',width: '40%', height:'auto'}}></img>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography>We produce no waste, we value the marginal, and we obtain a both tangible and intangible yields. Permagreens is the partnership
                            of permaculture and microgreens production. Planting, growing, harvesting and serving our crops gives more than delicious greens. We benefit physically, 
                            mentally, and spiritually from our farming. We hope that you will enjoy these microgreen, as well! 
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography 
                            variant={'h6'}
                            style={{fontFamily: 'Overlock ', fontStyle: 'italic', color: ' #1e6e33'}}
                        >
                            Our Crops
                        </Typography>
                            <Typography>Our crops include staple microgreens such as peas, broccoli, radish varieties, and sunflower and a variety of other greens.</Typography>
                            <Grid container item>
                                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                    <ul>
                                        <li>Arugula</li>
                                        <li>Basil</li>
                                        <li>Bok Choy</li>
                                        <li>Cabbage</li>
                                        <li>Cilantro</li>
                                        <li>Cress</li>
                                    </ul>
                                </Grid>
                                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                    <ul>
                                        <li>Fenugreek</li>
                                        <li>Kale</li>
                                        <li>Kohlrabi</li>
                                        <li>Mustard</li>
                                        <li>Shiso</li>
                                    </ul>
                                </Grid>                                
                                <Grid item xs={4} sm={4} md={6} lg={6} xl={6}>
                                    <img src={racks2} style={{marginLeft: '2em', marginRight: '3em', width: '50%', height: 'auto'}}/>
                                </Grid>
                            </Grid>
                    </Grid>                    
                </Grid>

            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1} ></Grid>
        </Grid>        
        
        </div>
        
    );

}

export default About;
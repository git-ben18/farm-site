import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import '../App.css';

import Typography from '@material-ui/core/Typography';
import logo_circle from '../media/art/logo-circle.png';
import arug_grow1 from '../media/arug_01-3.jpg';
import arug_dish1 from '../media/arug_02-1.jpg';
import sun_grow1 from '../media/sun_black_01-1.jpg';
import sun_dish1 from '../media/sun_black_02-1.jpg';
import pea_dish from '../media/pea_02-1.jpg';
import broc_grow from '../media/broc-caleb-01-1.PNG';
import broc_dish from '../media/broc-caleb-02-3.PNG';
import cab_grow from '../media/cab_red_acre01-1.PNG';
import cab_dish from '../media/cab_red_acre02-2.PNG';
import kale_grow from '../media/kale_red_russian.PNG';
import kale_dish from '../media/kale_red_russian02-2.PNG';
import rambo_grow from '../media/rambo_01-1.PNG';
import rambo_dish from '../media/rambo_02-1.png';
import bas_grow from '../media/bas_01-1.jpg';
import bas_dish from '../media/bas_02-1.jpg';
import cil_grow from '../media/cil_01-1.jpg';
import cil_dish from '../media/cil_02-1.jpg';
import daikon_grow from '../media/daikon_01-2.jpg'
import daikon_dish from '../media/daikon_02-2.jpg'
import brass_magic from '../media/brass_01-2.jpg'

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



import axios from "axios";

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 42 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const broc_images = [broc_grow, broc_dish];

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: '30%',
      backgroundColor: theme.palette.background.paper,
      //border: '2px solid  #006633',
      //borderRadius: 8,
      //boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),

    },
  }));

const Home = () => {
    const classes = useStyles();
  
    const [modalStyle] = React.useState(getModalStyle);

    const [open, setOpen] = React.useState(false);

    const [item, setItem] = React.useState('');

    const [img1, setImg1] = React.useState(null);

    const [images, setImages] = React.useState([
        {id: 1, img1: broc_grow, img2: broc_dish},
        {id: 2, img1: cab_grow, img2: cab_dish},
        {id: 3, img1: kale_grow, img2: kale_dish}
    ]);
    
    const promoCodes = ["protein", "neighbor", "trinity", ""];

    const [order, setOrder] =useState(
        {firstName: '',
         lastName: '',
         phone: '',
         email: '',
         verifiedEmail: '',         
         product: '',
         promo: '',
         quantity: '',
        });

    const handleOpen = () => {
        setOpen(true);
        
    };

    const handleOrder = (item) => {
        console.log("handle order");
        setItem(item);
        console.log("item");
        console.log(item);
        handleOpen();
        setOrder({... order, product: item})
        console.log(order.product);
       
    };

    const openImages = (id) => {
        setImages(id);
    }

    const openImg1 = (img) => {
        setImg1(img);
    }

    const handleClose = () => {
        setOrder('');
        setOpen(false);
    };

    const handleQuantityChange = (event) => {
        setOrder({... order, quantity: event.target.value});
    }; 

    async function handleSubmit (event)  {
        const {email, verifiedEmail, promo } = order;
        if (email !== verifiedEmail){
            alert("Email does not match");
        }
        else if (!promoCodes.includes(promo)){
            alert("Promo Code does not exist")
        }
        else {
            event.preventDefault();
            const orderData = order;
            // https://u4e17cxhb2.execute-api.us-east-2.amazonaws.com/default
            await axios.post('https://u4e17cxhb2.execute-api.us-east-2.amazonaws.com/default/appOrderFunction', 
            {key1: orderData.firstName + " " + orderData.lastName + " " + orderData.email + " " + orderData.phone + " " + orderData.product + " " + orderData.quantity} );
            setOrder('');
            alert("Thanks for ordering! We will contact you ASAP.")
            handleClose();
        }
    };

    function currencyFormat(product, amount){        
        var halfPoundAmount;
        var quaterPoundAmount;
        var ounceAmount;
        var halfOunceAmount;
        
        switch (product){
            case ('Sunflower (Black Oil)'):
            case ('Pea Shoots (Speckled)'): {
                ounceAmount = 2.50;
                quaterPoundAmount = 7.50;
                halfPoundAmount = 12;                
                if(amount == 1){
                    return '$' + ounceAmount.toFixed(2);
                }
                else if (amount == 4){
                    return '$' + quaterPoundAmount.toFixed(2);
                }
                else {
                    return '$' + halfPoundAmount.toFixed(2);
                }
                break;
            }
            case ('Radish (Rambo)'):
            case ('Radish (Daikon)'):
            case ('Broccoli (Calabrese)'):
            case ('Broccoli (Waltham)'):
            case ('Cabbage (Red Acre)'):
            case ('Kale (Red Russian)'):
            case ('Arugula'): {
                ounceAmount = 3.50;
                quaterPoundAmount = 10;
                halfPoundAmount = 16;
                if(amount == 1){
                    return '$' + ounceAmount.toFixed(2);
                }
                else if (amount == 4){
                    return '$' + quaterPoundAmount.toFixed(2);
                }
                else {
                    return '$' + halfPoundAmount.toFixed(2);
                }
                break;
            }            
            case ('Basil (Genovese)'):
            case ('Cilantro'): {
                quaterPoundAmount = 18;
                ounceAmount = 5;
                halfOunceAmount = 3;
                if(amount == 1){
                    return '$' + halfOunceAmount.toFixed(2);
                }
                else if (amount == 4){
                    return '$' + ounceAmount.toFixed(2);
                }
                else {
                    return '$' + quaterPoundAmount.toFixed(2);
                }
                break;
            }
            case ('That Old Brass Magic'):
            case ('Sunnies Side of the Street'):
            case ('Chatarugula Choo-choo'): {
                quaterPoundAmount = 12;
                ounceAmount = 4;
                halfPoundAmount = 20;
                if(amount == 1){
                    return '$' + ounceAmount.toFixed(2);
                }
                else if (amount == 4){
                    return '$' + quaterPoundAmount.toFixed(2);
                }
                else {
                    return '$' + halfPoundAmount.toFixed(2);
                }
                break;
            }
            
        }
        
    } 
    
    //Modal body
    let body = (
        <div style={modalStyle} className={classes.paper}>
            <Grid container direction={'column'} alignItems={'center'} style={{marginLeft: '.25em'}} xs={12} sm={12} md={6} lg={6} xl={6}>                                
                <Grid item>
                    <Typography variant={'h5'} style={{fontFamily: 'Overlock ', fontStyle: 'italic', color: ' #1e6e33'}} id="simple-modal-title">{item}</Typography>
                </Grid>                
                <Grid item >
                    <img style={{maxWidth: '100%', maxHeight: '100%'}} src={img1}/>
                </Grid>
                <Grid item>
                <p id="simple-modal-description">
                    Please enter your order information:
                </p>      
                </Grid>
                <Grid container item spacing={4}>
                    <form onSubmit={handleSubmit}>
                        <Grid item>
                            {/* first name */}
                            <TextField 
                                type='text' 
                                id='firstName'
                                label='First Name'
                                value={order.firstName}
                                onChange={e => setOrder({... order, firstName: e.target.value})}
                            >
                            </TextField> 
                        </Grid>
                        <Grid item>
                            {/* last name */}
                            <TextField 
                                type='text'
                                id='lastName'
                                label='Last Name'
                                value={order.lastName}
                                onChange={e => setOrder({... order, lastName: e.target.value})}
                            
                            >
                            </TextField> 
                        </Grid>
                         <Grid item>
                            {/* phone number */}            
                            <TextField 
                                type='text'
                                id='phone'
                                label='Phone'
                                value={order.phone}
                                onChange={e => setOrder({... order, phone: e.target.value})}
                            >
                            </TextField> 
                        </Grid>
                        <Grid item>
                            {/* email */}
                            <TextField 
                                name='email'
                                type='text'
                                id='email'
                                label='E-mail'
                                value={order.email}
                                onChange={e => setOrder({... order, email: e.target.value})}
                            > 
                            </TextField> 
                        </Grid>
                        <Grid item>
                            {/* email verification */}
                            <TextField
                                type='text'
                                label='Verify E-mail'
                                name='verifyEmail'
                                value={order.verifiedEmail}
                                onChange={e => setOrder({... order, verifiedEmail: e.target.value})}
                            >
                            </TextField>
                        </Grid>
                        <Grid item>
                            <div style={{display: 'flex'}}></div>
                                <Typography variant={'body2'}>Product:</Typography>            
                                <Typography style={{fontFamily: 'Overlock ', fontStyle: 'italic', color: ' #1e6e33'}}>{item}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>                               
                            <FormControl style={{width: '100%'}}>
                                <InputLabel >Quantity </InputLabel>
                                <Select 
                                    label='quantity-selector-label'
                                    id='quantity-selector'    
                                    value={order.quantity}                                                           
                                    onChange={handleQuantityChange}                                                                    
                                >   
                                    <MenuItem value={" "}></MenuItem>                             
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={16}>8</MenuItem>                                    
                                </Select>{order.quantity && currencyFormat(item, order.quantity)}
                            </FormControl>                            
                        </Grid>
                        <Grid item>
                            {/* promo code */}            
                            <TextField 
                                type='text'
                                id='promo'
                                label='Promo Code'
                                value={order.promo}
                                onChange={e => setOrder({... order, promo: e.target.value})}
                            >
                            </TextField> 
                        </Grid>
                       <Grid item style={{marginTop: '.25em'}}>
                            <Button 
                                type='submit' 
                                style={{backgroundColor: '#34eb9e', color: 'primary'}} 
                                variant={'contained'}
                                disabled={!order.firstName || 
                                          !order.lastName ||
                                          !order.phone ||
                                          !order.email ||
                                          !order.quantity
                                        }
                                >Submit Order</Button>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </div>
      );



    return(
    <div style={{marginTop: '5em'}}>
        <Grid container alignItems={'center'}  spacing={2}>
            
            
            <Grid item container direction={'column'} alignItems={'center'} xs={12} sm={12} md={12} lg={12} xl={12} >
                
                <Grid container item alignItems={'center'} direction={'column'} style={{marginBottom: '3em'}}>                  
                    
                    <Grid item container>
                        <Grid item xs={1} sm={1} md={3} lg={3} xl={3}/> 
                        
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>                            
                             <img src={logo_circle} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', maxHeight: '100%', maxWidth: '55%'}}></img> 
                        </Grid>      
                        
                        <Grid item container direction={'column'} alignItems={'center'} style={{margin: 'auto'}} xs={12} sm={12} md={3} lg={3} xl={3}>
                            {/* #32a852 */}
                            {/* xs={12} sm={12} md={4} lg={4} xl={4} */}
                            <Grid item > 
                                <Typography variant={'h2'} style={{fontFamily: 'Overlock ', fontStyle: 'italic', color: ' #1e6e33'}}>permagreens </Typography> 
                            </Grid>
                            <Grid item >
                                <Typography variant={'subtitle1'} style={{fontFamily: 'Overlock ', fontStyle: 'italic', color: '#13d446'}}>MAJOR FOOD, MICROGREEN </Typography>
                            </Grid>
                        </Grid>     

                        <Grid item xs={1} sm={1} md={3} lg={3} xl={3}/>   
                    </Grid>      
                    
                    {/*<Grid item container direction={'column'} alignItems={'center'} xs={12} sm={12} md={12} lg={12} xl={12}> */}
                    {/* #32a852 */}
                        {/* <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Typography variant={'h2'} style={{fontFamily: 'Overlock ', fontStyle: 'italic', color: ' #1e6e33'}}>permagreens </Typography> 
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Typography variant={'subtitle1'} style={{fontFamily: 'Overlock ', fontStyle: 'italic', color: '#13d446'}}>MAJOR FOOD, MICROGREEN </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Typography variant={'subtitle1'}>Fresh Sheet: 05/03/21 - 05/09/21</Typography>
                        </Grid>
                    </Grid>  */}
                    
                </Grid>

                <Grid item container direction={'column'} style={{borderBottomStyle: 'solid', marginBottom: '2%' }}>
                    <Grid item>
                            <Typography variant={'h6'} style={{fontFamily: 'Overlock ', fontStyle: 'italic', color: '#4A4444'}}>
                                Our Farm
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'subtitle1'} style={{fontFamily: 'Overlock ', fontStyle: 'italic', color: '#4A4444'}}>
                                Harvested weekly, our microgreen crops are grown naturally, year-round. We use organic methods, and do not use any pesticides or sprays on our farm.  
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'subtitle1'} style={{fontFamily: 'Overlock ', fontStyle: 'italic', color: '#4A4444'}}>
                                We use non-GMO seeds and organic soil in our vertical, indoor farming space. Our microgreens are hand-watered and inspected daily 
                                to guarantee crop integrity.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'h6'} style={{fontFamily: 'Overlock ', fontStyle: 'italic', color: '#4A4444'}}>
                                Subscription Service 
                            </Typography>                                
                        </Grid>
                        <Grid item>
                            <Typography variant={'subtitle2'} style={{fontFamily: 'Overlock ', fontStyle: 'italic', color: '#4A4444'}}>
                                Weekly deliveries of 2 or 3 ounces your choice microgreens. Mix and match your selections for more variety in each delivery. 
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'subtitle2'} style={{fontFamily: 'Overlock ', fontStyle: 'italic', color: '#4A4444'}}>
                                Contact us at 
                                <a href={'mailto:orders@permagreensdayton.com'}> orders@permagreensdayton.com</a>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'subtitle1'} style={{fontFamily: 'Overlock ', fontStyle: 'italic', color: '#4A4444'}}>
                                $20/month: 2oz per week
                            </Typography>                                
                        </Grid>
                        <Grid item>
                            <Typography variant={'subtitle1'} style={{fontFamily: 'Overlock ', fontStyle: 'italic', color: '#4A4444'}}>
                                $25/month: 3oz  per week
                            </Typography>                                
                        </Grid>
                        <Grid item>
                            <Typography variant={'h6'} style={{fontFamily: 'Overlock ', fontStyle: 'italic', color: '#4A4444'}}>
                                Order Information
                            </Typography>                                
                        </Grid>
                        <Grid item>
                            <Typography variant={'subtitle2'} style={{fontFamily: 'Overlock ', fontStyle: 'italic', color: '#4A4444'}}>
                                Online orders fulfilled with deliveries on Mondays and Thursdays. A $1.50 delivery can be waived for orders over $15.00. 
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography 
                                variant={'subtitle2'} 
                                style={{fontFamily: 'Overlock ', fontStyle: 'italic', color: '#4A4444'}}                            
                                >
                                    To order, click or tap on the fresh produce of your choice and enter the information in the form. 
                                    We will process your order and contact you to schedule your delivery.
                            </Typography>
                        </Grid>

                    </Grid>
                    
                    <Grid item>
                        <Typography 
                            variant={'h4'} 
                            style={{fontFamily: 'Overlock ', fontStyle: 'italic', color: ' #1e6e33'}}
                        >
                            veggies and herbs
                        </Typography> 
                    </Grid>
                    <Grid container spacing={1} alignItems={'center'} style={{borderBottomStyle: 'solid', marginBottom: '2%', marginTop: '.25em'}}>
                        
                        <Grid item xs={12} sm={10} md={6} lg={6} xl={6}>
                            <Card>
                                <CardActionArea>
                                    <div onClick={() => {handleOrder('Pea Shoots (Speckled)'); openImg1(pea_dish)}}>
                                        <CardMedia image={pea_dish} style={{height: 250}}/>
                                        <Typography>Pea Shoots (Speckled)</Typography>   
                                    </div>                             
                                    <Modal
                                        open={open}
                                        hideBackdrop={true}
                                        onClose={handleClose}
                                        aria-labelledby="simple-modal-title"
                                        aria-describedby="simple-modal-description"
                                    >{body}</Modal>
                                </CardActionArea>
                                <CardContent>
                                    <Grid item container>
                                        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                                            <Typography variant={'body1'}>High in: Vitamin A, Vitamin C, beta-carotene, fiber, folate</Typography>
                                        </Grid>
                                        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                            <Typography variant={'body1'}>$2.50/oz</Typography>
                                            <Typography variant={'body1'}>$7.50/4oz</Typography>
                                            <Typography variant={'body1'}>$12.00/8oz</Typography>
                                        </Grid>     
                                        {/* <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                            <Typography variant={'subtitle2'}>SOLD OUT</Typography>                                            
                                        </Grid> */}        
                                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>                       
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid> 
                        <Grid item xs={12} sm={10} md={6} lg={6} xl={6}>
                            <Card id='raddish'>
                                <CardActionArea>
                                <div onClick={() => {handleOrder('Radish (Rambo)'); setImages(1, rambo_grow, rambo_dish); openImg1(rambo_grow) }}
                                //style={{pointerEvents: 'none',
                                //opacity: 0.7}}   
                                >
                                    <CardMedia image={rambo_dish} style={{height: 250}}/>                                
                                    <Typography>Radish (Rambo)</Typography>
                                    </div>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="simple-modal-title"
                                        aria-describedby="simple-modal-description"
                                    >{body}</Modal>
                                </CardActionArea>
                                <CardContent>
                                    <Grid item container>
                                        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                                            <Typography variant={'body1'}>High in: Vitamin A, B, C, E, K, essential amino acids, calcium, iron, potassium.</Typography>
                                        </Grid>
                                        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                            <Typography variant={'body1'}>$3.50/oz</Typography>
                                            <Typography variant={'body1'}>$10.00/4oz</Typography>
                                            <Typography variant={'body1'}>$16.00/8oz</Typography>
                                        </Grid>
                                        {/* <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                            <Typography variant={'subtitle2'}>SOLD OUT</Typography>                                            
                                        </Grid> */}
                                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                                    </Grid>
                                </CardContent>
                            </Card>

                        </Grid>
                        <Grid item xs={12} sm={10} md={6} lg={6} xl={6}>
                            <Card>
                                <CardActionArea>
                                <div onClick={() => {handleOrder('Arugula'); setImages(1, arug_grow1, arug_dish1); openImg1(arug_grow1)}}>
                                    <CardMedia image={arug_dish1} style={{height: 250}}/>                                
                                    <Typography>Arugula</Typography>
                                    </div>
                                    <Modal
                                        open={open}
                                        
                                        onClose={handleClose}
                                        aria-labelledby="simple-modal-title"
                                        aria-describedby="simple-modal-description"
                                    >{body}</Modal>                                
                                </CardActionArea>
                                <CardContent>
                                <Grid item container>
                                        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                                            <Typography variant={'body1'}>High in: Vitamin A, B, C, E, essential amino acids, calcium, iron, niacin, phosphorus, potassium.</Typography>
                                        </Grid>
                                        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                            <Typography variant={'body1'}>$3.50/oz</Typography>
                                            <Typography variant={'body1'}>$10.00/4oz</Typography>
                                            <Typography variant={'body1'}>$16.00/8oz</Typography>
                                        </Grid>
                                        {/* <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                            <Typography variant={'subtitle2'}>SOLD OUT</Typography>                                            
                                        </Grid> */}
                                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={10} md={6} lg={6} xl={6}>
                        <Card>
                                <CardActionArea>
                                <div onClick={() => {handleOrder('Sunflower (Black Oil)'); setImages(1, sun_grow1, sun_dish1); openImg1(sun_grow1)}}
                                    // style={{pointerEvents: 'none',
                                    // opacity: 0.7}}   
                                >
                                    <CardMedia image={sun_dish1} style={{height: 250}}/>                                
                                    <Typography>Sunflower (Black Oil)</Typography>
                                    </div>
                                    <Modal
                                        open={open}
                                        
                                        onClose={handleClose}
                                        aria-labelledby="simple-modal-title"
                                        aria-describedby="simple-modal-description"
                                    >{body}</Modal>                                
                                </CardActionArea>
                                <CardContent>
                                <Grid item container>
                                        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                                            <Typography variant={'body1'}>High in: Vitamin A, B, complex D, E, Calcium, Folate, Iron, Potassium, Zinc. Protein-rich.</Typography>
                                        </Grid>
                                        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                            <Typography variant={'body1'}>$2.50/oz</Typography>
                                            <Typography variant={'body1'}>$7.50/4oz</Typography>
                                            <Typography variant={'body1'}>$12.00/8oz</Typography>
                                        </Grid>     
                                        {/* <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                            <Typography variant={'subtitle2'}>SOLD OUT</Typography>                                            
                                        </Grid> */}                               
                                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={10} md={6} lg={6} xl={6}>
                            <Card>
                                <CardActionArea>
                                <div onClick={() => {handleOrder('Broccoli (Calabrese)'); setImages(1, broc_grow, broc_dish); openImg1(broc_grow)}}>
                                    <CardMedia image={broc_dish} style={{height: 250}}/>                                
                                    <Typography>Broccoli (Calebrese)</Typography>
                                    </div>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="simple-modal-title"
                                        aria-describedby="simple-modal-description"
                                    >{body}</Modal>
                                </CardActionArea>
                                <CardContent>
                                    <Grid item container>
                                        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                                            <Typography variant={'body1'}>High in: Vitamin A, B, C, E, K, essential amino acids, calcium, iron, magnesium, phosphorus, sulforaphane, zinc.</Typography>
                                        </Grid>
                                        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                            <Typography variant={'body1'}>$3.50/oz</Typography>
                                            <Typography variant={'body1'}>$10.00/4oz</Typography>
                                            <Typography variant={'body1'}>$16.00/8oz</Typography>
                                        </Grid>
                                        {/* <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                            <Typography variant={'subtitle2'}>SOLD OUT</Typography>                                            
                                        </Grid> */}
                                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={10} md={6} lg={6} xl={6}>
                            <Card>
                                <CardActionArea>
                                <div onClick={() => {handleOrder('Kale (Red Russian)'); setImages(1, broc_grow, kale_dish); openImg1(kale_grow)}}
                                // style={{pointerEvents: 'none',
                                // opacity: 0.7}}   
                                >
                                    <CardMedia image={kale_dish} style={{height: 250}}/>                                
                                    <Typography>Kale (Red Russian)</Typography>
                                </div>
                                </CardActionArea>
                                <CardContent>
                                <Grid item container>
                                <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                                            <Typography variant={'body1'}>High in: Vitamin A, B, C, E, K, beta-carotene, calcium, fiber, magnesium, potassium.</Typography>
                                        </Grid>
                                        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                            <Typography variant={'body1'}>$3.50/oz</Typography>
                                            <Typography variant={'body1'}>$10.00/4oz</Typography>
                                            <Typography variant={'body1'}>$16.00/8oz</Typography>
                                        </Grid>
                                        {/* <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                            <Typography variant={'subtitle2'}>SOLD OUT</Typography>                                            
                                        </Grid> */}
                                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={10} md={6} lg={6} xl={6}>
                            <Card>
                                <CardActionArea>
                                <div onClick={() => {handleOrder('Cabbage (Red Acre)'); setImages(1, cab_grow, cab_dish); openImg1(cab_grow)}}
                                // style={{pointerEvents: 'none',
                                // opacity: 0.7}}   
                                >
                                    <CardMedia image={cab_dish} style={{height: 250}}/>                                
                                    <Typography>Cabbage (Red Acre)</Typography>
                                </div>
                                </CardActionArea>
                                <CardContent>
                                    <Grid item container>
                                        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                                            <Typography variant={'body1'}>High in: Vitamin A, C, E, K, beta-carotene, fiber, iron, potassium.</Typography>
                                        </Grid>
                                        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                            <Typography variant={'body1'}>$3.50/oz</Typography>
                                            <Typography variant={'body1'}>$10.00/4oz</Typography>
                                            <Typography variant={'body1'}>$16.00/8oz</Typography>
                                        </Grid>
                                        {/* <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                            <Typography variant={'subtitle2'}>SOLD OUT</Typography>                                            
                                        </Grid> */}
                                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={10} md={6} lg={6} xl={6}>
                            <Card>
                                <CardActionArea>
                                <div onClick={() => {handleOrder('Radish (Daikon)'); setImages(1, daikon_grow, daikon_dish); openImg1(daikon_grow)}}
                                    //  style={{pointerEvents: 'none',
                                    //          opacity: 0.7}}   
                                >
                                    <CardMedia image={daikon_dish} style={{height: 250}}/>                                
                                    <Typography>Radish (Daikon)</Typography>
                                </div>
                                </CardActionArea>
                                <CardContent>
                                <Grid item container>
                                    <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                                        <Typography variant={'body1'}>High in: Vitamin A, B, C, E, K, essential amino acids, calcium, iron, potassium.</Typography>
                                    </Grid>                                    
                                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                        <Typography variant={'body1'}>$3.50/oz</Typography>
                                        <Typography variant={'body1'}>$10.00/4oz</Typography>
                                        <Typography variant={'body1'}>$16.00/8oz</Typography>
                                    </Grid>
                                    {/* <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                        <Typography variant={'subtitle2'}>SOLD OUT</Typography>                                            
                                    </Grid> */}
                                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                                </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={10} md={6} lg={6} xl={6}>
                            <Card>
                                <CardActionArea>
                                <div onClick={() => {handleOrder('Basil (Genovese)'); setImages(1, bas_grow, bas_dish); openImg1(bas_grow)}}>
                                    <CardMedia image={bas_dish} style={{height: 250}}/>                                
                                    <Typography>Basil (Genovese)</Typography>
                                </div>
                                </CardActionArea>
                                <CardContent>
                                    <Grid item container>
                                        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                                            <Typography variant={'body1'}>High in: Vitamin A, B6, C, E, K, calcium, iron, magnesium, phosphorus, potassium, zinc.</Typography>
                                        </Grid>                                        
                                        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                            <Typography variant={'body1'}>$4.00/oz</Typography>
                                            <Typography variant={'body1'}>$7.00/2oz</Typography>
                                            <Typography variant={'body1'}>$12.00/4oz</Typography>
                                        </Grid>
                                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={10} md={6} lg={6} xl={6}>
                            <Card>
                                <CardActionArea>
                                <div onClick={() => {handleOrder('Cilantro'); setImages(1, cil_grow, cil_dish); openImg1(cil_grow)}}
                                    // style={{pointerEvents: 'none',
                                    // opacity: 0.7}}
                                    >
                                    <CardMedia image={cil_dish} style={{height: 250}}/>                                
                                    <Typography>Cilantro</Typography>
                                </div>
                                </CardActionArea>
                                <Grid item container>
                                    <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                                        <Typography variant={'body1'}>High in: Vitamin C, E, K, beta-carotene, calcium, iron, lutein, potassium.</Typography>
                                    </Grid>
                                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                        <Typography variant={'body1'}>$4.00/oz</Typography>
                                        <Typography variant={'body1'}>$7.00/2oz</Typography>
                                        <Typography variant={'body1'}>$12.00/4oz</Typography>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography 
                            variant={'h4'} 
                            style={{fontFamily: 'Overlock ', fontStyle: 'italic', color: ' #1e6e33'}}
                        >
                            vintage mixes
                        </Typography> 
                    </Grid>
                    <Grid container spacing={1} alignItems={'center'} style={{marginTop: '.25em'}}>
                        <Grid item xs={12} sm={10} md={6} lg={6} xl={6}>
                            <Card id='brass'>
                                <CardActionArea>
                                <div onClick={() => {handleOrder('That Old Brass Magic'); setImages(1, brass_magic, brass_magic); openImg1(brass_magic) }}
                                    // style={{pointerEvents: 'none',
                                    // opacity: 0.7}}  
                                    >
                                    <CardMedia image={brass_magic} style={{height: 250}}/>                                
                                    <Typography variant={'body1'}>That Old Brass Magic</Typography>
                                    <Typography variant={'body2'}>Our Brassica mix of broccoli, cabbage, and kale.</Typography>
                                </div>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="simple-modal-title"
                                        aria-describedby="simple-modal-description"
                                    >{body}</Modal>
                                </CardActionArea>
                                <CardContent>
                                <Grid item container>
                                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <Typography variant={'body1'}>$4.00/oz</Typography>
                                            <Typography variant={'body1'}>$12.00/4oz</Typography>
                                            <Typography variant={'body1'}>$20.00/8oz</Typography>
                                        </Grid>
                                        {/* <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <Typography variant={'subtitle2'}>SOLD OUT</Typography>                                            
                                        </Grid> */}
                                    </Grid>
                                </CardContent>
                            </Card>

                        </Grid>
                        <Grid item xs={12} sm={10} md={6} lg={6} xl={6}>
                            <Card>
                                <CardActionArea>
                                <div onClick={() => {handleOrder('Chatarugula Choo-choo'); setImages(1, arug_grow1, arug_dish1); openImg1(arug_grow1)}}
                                style={{pointerEvents: 'none',
                                opacity: 0.7}}   
                                >
                                    <CardMedia image={arug_dish1} style={{height: 250}}/>                                
                                    <Typography variant={'body1'}>Chatarugula Choo-choo</Typography>
                                    <Typography variant={'body2'}>An engine-starting arugula-based mix with broccoli and kale.</Typography>
                                    </div>
                                    <Modal
                                        open={open}
                                        
                                        onClose={handleClose}
                                        aria-labelledby="simple-modal-title"
                                        aria-describedby="simple-modal-description"
                                    >{body}</Modal>                                
                                </CardActionArea>
                                <CardContent>
                                    <Grid item container>
                                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <Typography variant={'body1'}>$4.00/oz</Typography>
                                            <Typography variant={'body1'}>$12.00/4oz</Typography>
                                            <Typography variant={'body1'}>$20.00/8oz</Typography>
                                        </Grid>
                                        {/* <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <Typography variant={'subtitle2'}>SOLD OUT</Typography>                                            
                                        </Grid> */}
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={10} md={6} lg={6} xl={6}>
                            <Card>
                                <CardActionArea>
                                <div onClick={() => {handleOrder('Sunnies Side of the Street'); setImages(1, sun_grow1, sun_dish1); openImg1(sun_grow1)}}
                                style={{pointerEvents: 'none',
                                opacity: 0.7}}   >
                                    <CardMedia image={sun_dish1} style={{height: 250}}/>                                
                                    <Typography variant={'body1'}>Sunnies Side of the Street</Typography>
                                    <Typography variant={'body2'}>Life's sweet with our sunflower, broccoli, cabbage micro mix.</Typography>
                                    </div>
                                    <Modal
                                        open={open}
                                        
                                        onClose={handleClose}
                                        aria-labelledby="simple-modal-title"
                                        aria-describedby="simple-modal-description"
                                    >{body}</Modal>                                
                                </CardActionArea>
                                <CardContent>
                                <Grid item container>
                                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <Typography variant={'body1'}>$4.00/oz</Typography>
                                            <Typography variant={'body1'}>$12.00/4oz</Typography>
                                            <Typography variant={'body1'}>$20.00/8oz</Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <Typography variant={'subtitle2'}>SOLD OUT</Typography>                                            
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
            </Grid>

            
        </Grid>
    </div>
);
                }
export default Home;


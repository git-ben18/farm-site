import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import TypoGraphy from '@material-ui/core/Typography';
import { Route, Link, NavLink, BrowserRouter } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';



function NavBar(){

function handlePageChange() {
    window.location.href='https://facebook.com';
};

    return (
        <div style={{backgroundColor: '#34eb9e'}}>
        <List component="nav">    
            <Grid container justify='flex-start' spacing={0}>
                <Grid item xs={3} sm={2} md={2} lg={2} xl={2}>
                    <ListItem component="div">
                        <ListItemText inset>
                            <TypoGraphy variant="title">
                                <NavLink to='/' 
                                         activeStyle={{
                                             fontWeight: 'bold', 
                                             textDecoration: 'none', 
                                             color: '  #9b737b '}
                                            }
                                >
                                    Home
                                </NavLink>
                            </TypoGraphy>
                        </ListItemText>
                    </ListItem>
                </Grid>
                {/*<Grid item xs={3} sm={2} md={2} lg={2} xl={2}>
                    <ListItem component="div">
                        <ListItemText inset>
                            <TypoGraphy color="inherit" variant="title">
                                <NavLink to='/make'>Make</NavLink>
                            </TypoGraphy>
                        </ListItemText>
                    </ListItem>
                </Grid>*/}
                 <Grid item xs={3} sm={2} md={2} lg={2} xl={2}>
                    <ListItem>
                        <ListItemText inset>
                            <TypoGraphy variant="title">
                                <NavLink to='/About' 
                                         activeStyle={{
                                             fontWeight: 'bold', 
                                             textDecoration: 'none', 
                                             color: '  #9b737b '}
                                            }
                            >
                                About
                            </NavLink>
                            </TypoGraphy>
                        </ListItemText>
                    </ListItem>
                </Grid>
                {/*<Grid item xs={3} sm={2} md={2} lg={2} xl={2}>
                <ListItem>
                    <ListItemText inset>
                        <TypoGraphy color="inherit" variant="title">
                            <NavLink to='/Contact'>Microgreens</NavLink>
                        </TypoGraphy>
                    </ListItemText>
                </ListItem>
                </Grid>
                <Grid item xs={3} sm={2} md={2} lg={2} xl={2}>
                <ListItem>
                    <ListItemText inset>
                        <TypoGraphy color="inherit" variant="title">
                            <NavLink to='About' >About Us</NavLink>
                        </TypoGraphy>
                    </ListItemText>
                </ListItem>
                </Grid> */}
                <Grid item xs={3} sm={2} md={2} lg={2} xl={2}></Grid>
                <Grid item xs={3} sm={2} md={2} lg={2} xl={2} >
                <ListItem>
                    <IconButton size='small' style={{backgroundColor: '#34eb9e', color: '#ffffff', }}  >
                        <FacebookIcon target='_blank' onClick={handlePageChange} />
                    </IconButton>
                </ListItem>
                </Grid>
            </Grid>
        </List>
        </div>
    )
}

export default NavBar;
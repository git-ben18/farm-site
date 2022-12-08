import React, { Component } from 'react';
import ReactDom from 'react-dom';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/ToolBar';
import Navbar from './component/Navbar';
import TypoGraphy from '@material-ui/core/Typography';
import { Route, Link, NavLink, HashRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Home from './component/Home';
import About from './component/About';
import Make from './component/Make';

function App() {
  return (
    <HashRouter>
    
      <div>
        <AppBar position='static'>          
              <Navbar/>          
        </AppBar>
      </div>
      <Container>   
        <div className='AppContent'>
          <Route exact path='/' component={Home}/>
          <Route exact path='/make' component={Make}/>    
          <Route path='/about' component={About}/>          
        </div>        
      </Container>
    
  </HashRouter>
  );
}

export default App;

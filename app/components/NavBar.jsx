import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

export default class NavBar extends Component{
     render(){
         return(
            <div className = "top-bar">
                 <div className = "top-bar-left">
                     <ul className ="menu">
                         <li className = "menu-text">React Timer App</li>
                         <li><NavLink to='/' activeClassName = "active-link">Timer</NavLink></li>
                         <li><NavLink to="/CountDown" activeClassName ="active-link">Count Down</NavLink></li>
                     </ul>
                 </div>
                 <div className = "top-bar-right">
                     <ul className = "menu">
                         <li className = "menu-text">Created by <a href = "https://github.com/arausly" target ="_blank">arausly</a></li>
                     </ul>     
                 </div> 
            </div>     
         );
     }
}


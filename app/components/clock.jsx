import React,{Component} from 'react';
import ReactDOM from 'react-router';
import PropTypes from 'prop-types';

export default class Clock extends Component{
   formatSeconds = (totalSeconds) =>{
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60);
    seconds = (seconds < 10) ? `0${seconds}` :seconds;
    minutes = (minutes < 10) ? `0${minutes}` :minutes;
       return (`${minutes}:${seconds}`); 
   }
    render(){
        return(
           <div>
                <p>Clock Component</p> 
           </div>    
        );
    }
} 
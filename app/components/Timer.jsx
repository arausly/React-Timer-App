import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Clock from 'Clock';

export default class Timer extends Component{
    render(){
        return(
             <div>
                <h1 className = "page-title">Timer Component</h1>
                <Clock/>
            </div>    
        );
    }
}
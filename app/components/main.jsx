import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import NavBar from 'NavBar';

export default class Main extends Component{
    render(){
        return(
               <div>
                  <NavBar/>
                <div className ="row">
                    <div className = "columns medium-6 large-6 small-centered">    
                       {this.props.children}
                    </div>
                </div>      
              </div>
        );
    }
}


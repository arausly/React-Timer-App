import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import NavBar from 'NavBar';

export default class Main extends Component{
    render(){
        return(
               <div>
                  <NavBar/>
                <div>
                  {this.props.children}
                </div>    
              </div>
        );
    }
}


import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class CountDownForm extends Component{
    handleInput =(e) =>{
        e.preventDefault();
        var time = this.refs.seconds.value;
          if(time.match(/^[0-9]*$/)){
             this.refs.seconds.value ="";
             this.props.onSetCount(parseInt(time,10));

          }
    }
    render(){
        return(   
          <div>    
             <form onSubmit ={this.handleInput}>
             <input type ="text" ref ="seconds" placeholder = "Enter time in seconds" />
             <button className ="button expanded">Start</button>  
             </form>  
          </div>        
        );
    }
}
CountDownForm.propTypes ={
    onSetCount:PropTypes.func.isRequired
}


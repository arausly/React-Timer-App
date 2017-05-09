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
             <form onSubmit ={this.handleInput}>
                <div className ="row">
                 <div className = "medium-6 small-centered">
                     <label>
                          <input type ="text" ref ="seconds" placeholder = "Enter time in seconds" />
                     </label>     
                 </div>     
                 <div className ="medium-6 small-centered">
                    <button className ="button expanded">Start</button>
                 </div>    
                </div>    
             </form>                
        );
    }
}
CountDownForm.propTypes ={
    onSetCount:PropTypes.func.isRequired
}


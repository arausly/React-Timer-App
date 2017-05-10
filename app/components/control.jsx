import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Control extends Component{
    render(){
        renderStartStopButton =()=> {
            if(countDownStatus === 'started'){
                return(
                   <button className = "buttton secondary hollow">Pause</button>
                );
                
            }else if(countDownStatus === "stopped"){
                return(
                    <button className = "buttton primary">Start</button>
                );
            }
        }
        let {countDownStatus} = this.props;
        return(
            <div>
                {this.renderStartStopButton}
                <button className = "button alert hollow">
                Clear
                </button>  
            </div>    
        );
    }
}

Control.propTypes = {
    countDownStatus:PropTypes.string.isRequired,
}
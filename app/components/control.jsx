import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Control extends Component{
    statusChanged = (newStatus) =>{
        return ()=>(
          this.props.onStatusChanged(newStatus)
        );
    }
    
  componentWillReceiveProps(newProps){
       console.log('count down status has been changed',newProps.countDownStatus);
  }
    render(){
     let {countDownStatus} = this.props;
       const renderStartStopButton =()=> {
            if(countDownStatus === 'Started'){
                return(
                   <button className="button secondary " onClick={this.statusChanged('Paused')}>Pause</button>
                );
                   
            }else if(countDownStatus ==="Paused"){
                return(
                 <button className="button primary" onClick={this.statusChanged('Started')}>Start</button>
                );
            }
        }
        return( 
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert" onClick={this.statusChanged('Stopped')}>
                  Clear
                </button>  
            </div>    
        );
    }
}

Control.propTypes = {
    countDownStatus:PropTypes.string.isRequired,
    onStatusChanged:PropTypes.func.isRequired,
}

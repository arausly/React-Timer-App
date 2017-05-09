import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Clock from 'Clock';
import CountDownForm from 'CountDownForm';



export default class CountDown extends Component{
    constructor(props){
        super(props);
         this.state = {
            count : 89   
         };
    }
    handleUpdate = (time) =>{
      this.setState({count:time});
    }
    render(){
        let {count} = this.state;
        return(
             <div>
                <h1 className = "text-center">CountDown Component</h1>
                <Clock totalSeconds ={count}/>
                <div>
                    <CountDownForm onSetCount={this.handleUpdate}/>
                </div>    
            </div>    
        );
    }
}


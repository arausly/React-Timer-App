import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Clock from 'Clock';
import CountDownForm from 'CountDownForm';



export default class CountDown extends Component{
    constructor(props){
        super(props);
         this.state = {
            count : 89,
            countDownStatus:'stopped'
         };
    }
    componentDidUpdate(prevProps,prevState){
        if(this.state.countDownStatus !== prevState.countDownStatus){
        
            switch(this.state.countDownStatus){
                    case 'started':
                     this.startTime();
                    break;
            }
            
        }
    }
    handleUpdate = (time) =>{
      this.setState
        ({
          count:time,
          countDownStatus:'started'
        });
        
    }
    
    startTime = () =>{
        let timer = setInterval(()=>{
          let newCount = this.state.count - 1;
          this.setState({
             count:newCount >=0 ? newCount : 0
          });
        },1000)
        return timer;    
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


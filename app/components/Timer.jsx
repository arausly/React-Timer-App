import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Clock from 'Clock';
import Controls from 'Controls';

export default class Timer extends Component{
    constructor(props){
        super(props);
        this.state ={   
            count : 0,
           timeStatus:'Stopped',
        }
    }

	    componentDidUpdate(prevProps,PrevState){
        if(this.state.timeStatus !== PrevState.timeStatus){
            switch(this.state.timeStatus){
                    case'Started':
                       this.startTime();
					   this.setState({tracker:1})
        
                     break;
                     case 'Stopped':
                        this.setState({count:0});
                     case 'Paused':
                       clearInterval(this.counter);
                        this.counter = undefined;
                       break;
                    
            }
        }
    }
    startTime = () =>{
        this.counter = setInterval(()=>{
           let newCount = this.state.count  + 1;
            this.setState({count:newCount});
        },1000);
    }
    handleClick =(newStatus) =>{
      this.setState({timeStatus:newStatus});
    }
    componentWillUnmount(){
        clearInterval(this.counter);
        this.counter = undefined;
        console.log('component did unmount');
    }
    render(){
        let {count,timeStatus} = this.state;
            const buttonOptions = () =>{
                if(timeStatus === 'Stopped'){
                    return (
                        <button className = "button primary" onClick={()=>this.handleClick('Started')} >Start</button>
                    );
                }else if( timeStatus === "Started"){
                     return(
                        <button className = "button primary" onClick={()=>this.handleClick('Paused')} > Stop</button>
                     );
                }else{
                    
                     return (
                        <button className = "button primary" onClick={()=>this.handleClick('Started')} >Start</button>
                    );
                }
            }
        return(
             <div>
                <h1 className = "page-title">Timer App</h1>
                <Clock totalSeconds = {count} />
             <div className ="controls">    
                 {buttonOptions()}
                <button className="button alert" onClick ={()=>this.handleClick('Stopped')}>Clear</button>
            </div>     
            </div>     
        );
    }
}
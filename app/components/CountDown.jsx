import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Clock from 'Clock';
import CountDownForm from 'CountDownForm';
import Controls from 'Controls';



export default class CountDown extends Component{
    constructor(props){
        super(props);
		 this.Notification = this.Notification.bind(this);
         this.state = {
            count :0,
            countDownStatus:'Stopped',
         };
    }
	   Notification(){
	    if(this.state.countDownStatus === "Stopped"){
			window.Notification.requestPermission();
			if(!window.Notification){
				alert('your browser does not support notifications');
			}else{
				if(Notification.requestPermission() === "granted"){
					notify();
				}else if(Notification.requestPermission !=="denied"){
					 Notification.requestPermission(function(permission){
						 if(permission === "granted"){
							 notify();
						 }
					 })
				}
			}
		}
		
		const notify = ()=>{
			const notification = new Notification("News",{
				body:"Time's up"
			})
			
			notification.onclick= ()=>{
				  notification.close();
			}
			setTimeout(notification.close(),6000);
		}
	}
	   
    componentDidUpdate(prevProps,prevState){
        if(this.state.countDownStatus !== prevState.countDownStatus){
        
            switch(this.state.countDownStatus){
                    case 'Started':
                      this.startTime();
                    break;
                    case 'Stopped':
                     this.setState({count:0});
					 this.Notification();
                    case 'Paused':
                     clearInterval(this.timer);
                      this.timer = undefined;
                    break;
             }
            
        }
    }
    handleUpdate = (time) =>{
      this.setState
        ({
          count:time,
          countDownStatus:'Started'
        });
        
    }
    
    startTime = () =>{
        this.timer = setInterval(()=>{
          let newCount = this.state.count - 1;
          this.setState({
             count:newCount >=0 ? newCount : 0
          });
         if(newCount == 0){
            this.setState({countDownStatus:'Stopped'});
         }
        },1000)    
    }
    handleStatusChanged =(newStatus) =>{
            this.setState({countDownStatus:newStatus});
    }
    componentWillUnmount(){
        clearInterval(this.timer);
        this.timer = undefined;
    }
    render(){
        let {count,countDownStatus} = this.state;
        const renderToArea = () =>{
            if(countDownStatus !== 'Stopped'){
                return (
                          <Controls countDownStatus={countDownStatus} onStatusChanged={this.handleStatusChanged}/>
                );
            }else {
                return (
                         <CountDownForm onSetCount={this.handleUpdate} />
                );
            }
        }
        return(
             <div>
                <h1 className = "page-title" >Count Down App</h1>
                <Clock totalSeconds ={count}/>   
                {renderToArea()}
            </div>    
        );
    }
}


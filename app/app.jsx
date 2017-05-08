var React = require('react');
var ReactDOM = require('react-dom');
var {HashRouter ,Route} = require('react-router-dom');
import Main from 'Main';
import NavBar from 'NavBar';
import CountDown from 'CountDown';
import Timer from 'Timer';

require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

require('style-loader!css-loader!sass-loader!App');

ReactDOM.render(
<HashRouter>
  <Main>
   <Route exact={true} path ="/" component = {Timer} />
   <Route exact={true} path="/CountDown" component ={CountDown} />      
  </Main>    
</HashRouter>, 
document.getElementById('main'));
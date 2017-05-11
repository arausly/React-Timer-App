import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import Timer from 'Timer';

describe('Timer',()=>{
   it('should exist',()=>{
      expect(Timer).toExist(); 
   });
describe('controls',()=>{
    it('should exist',()=>{
        let timerComp = TestUtils.renderIntoDocument(<Timer/>);
        let $el = $(ReactDOM.findDOMNode(timerComp));
        timerComp.handleClick('Stopped');
        let startButton = $el.find('button:contains(Start)');
        let clearButton = $el.find('button:contains(Clear)');  
        expect(startButton.length).toBe(1);
        expect(clearButton.length).toBe(1);
    });
  });
 it('should change value consistently',(done)=>{
     let timerComponent = TestUtils.renderIntoDocument(<Timer/>);
     timerComponent.handleClick('Started');
     setTimeout(()=>{
         done();
     expect(timerComponent.state.count).toBe(1)},1001);
 });   
 it('should remain the same when stopped',(done)=>{
    let time = TestUtils.renderIntoDocument(<Timer/>);
      time.handleClick('Paused');
      time.state.count = 8;
     setTimeout(()=>{
         done();
        expect(time.state.count).toBe(8) 
     },2000);        
 });  
 it('should reset to 0, when stopped/Cleared',(done)=>{
     let time = TestUtils.renderIntoDocument(<Timer/>);
     time.handleClick('Stopped');
     time.state.count = 8;
     setTimeout(()=>{
         done();
         expect(time.state.count).toBe(0);
     },2000);
 });
});

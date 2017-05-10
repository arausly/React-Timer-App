import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';
import CountDown from 'CountDown';

describe('CountDown',()=>{
  it('Should exist',()=>{
     expect(CountDown).toExist();  
  }); 
    
    
 describe('handleUpdate',()=>{
    it('should change the states of count, then countdown',(done)=>{
        let countDown = TestUtils.renderIntoDocument(<CountDown/>);
        countDown.handleUpdate(10);
        expect(countDown.state.count).toBe(10);
        expect(countDown.state.countDownStatus).toBe('Started');
        
        setTimeout(()=>{
        expect(countDown.state.count).toBe(9);  
        done();    
        },1001);
    });     
   it('should not be less than 0',(done)=>{
       let countD = TestUtils.renderIntoDocument(<CountDown/>);
       countD.handleUpdate(0);
       setTimeout(()=>{
          expect(countD.state.count).toBe(0); 
           done();   
       },3000);
   });
 });
    
   it('should remain the same, when paused',(done)=>{
       let countComp = TestUtils.renderIntoDocument(<CountDown/>);
       countComp.handleUpdate(5);
       countComp.handleStatusChanged('Paused');
       setTimeout(()=>{
           expect(countComp.state.count).toBe(5);
           expect(countComp.state.countDownStatus).toBe('Paused');
           done();
       },1001);  
   });
   it('should reset to zero,when cancelled',()=>{
       let countComponent = TestUtils.renderIntoDocument(<CountDown/>);
        countComponent.handleUpdate(5);
        countComponent.handleStatusChanged('Stopped');
        expect(countComponent.state.count).toBe(0);
   });
  
   it("should toggle between start button and the pause button",()=>{
        let countCompo = TestUtils.renderIntoDocument(<CountDown/>);
        countCompo.handleUpdate(5);
        countCompo.handleStatusChanged('Paused');
        let $el = $(ReactDOM.findDOMNode(countCompo));
        let actual = $el.find('.primary');
        expect(actual).toExist();
   });
}); 
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
        expect(countDown.state.countDownStatus).toBe('started');
        
        setTimeout(()=>{
        expect(countDown.state.count).toBe(9);  
        done();    
        },1001);
    }); 
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
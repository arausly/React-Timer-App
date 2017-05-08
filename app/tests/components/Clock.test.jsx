import React  from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import Clock from 'Clock';


describe('Clock',()=>{
    it('Should exist',()=>{
        expect(Clock).toExist();
    });
    
describe('format seconds',()=>{
     it('format properly',()=>{
         var clock = TestUtils.renderIntoDocument(<Clock/>);
         var seconds = 615;
         var expected = "10:15";
         var actual = clock.formatSeconds(seconds);
         expect(actual).toBe(expected);
     });  
      
    it('format properly when min and sec is less than 10',()=>{
         var clock = TestUtils.renderIntoDocument(<Clock/>);
         var seconds = 61;
         var expected = "01:01";
         var actual = clock.formatSeconds(seconds);
         expect(actual).toBe(expected);
     });   
 });
    
});
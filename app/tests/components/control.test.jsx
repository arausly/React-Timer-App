import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'Jquery';

import Controls from 'Controls';

describe('Controls',()=>{
   it('Should exist',()=>{
      expect(Controls).toExist(); 
   });
    
   it('when countdown status is started',()=>{
       let control = TestUtils.renderIntoDocument(<Controls countDownStatus ="started"/>);
       let $el = $(ReactDOM.findDOMNode(control));
       let pause = $el.find('.secondary');
       expect(pause).toExist();
   });
    
   it('when countdown status is stopped',()=>{
       let control = TestUtils.renderIntoDocument(<Controls countDownStatus ="stopped"/>);
       let $el = $(ReactDOM.findDOMNode(control));
       let start =  $el.find('.primary');
       expect(start).toExist();
   });    
});




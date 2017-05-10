import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import CountDownForm from 'CountDownForm';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

describe('Count Down Form',()=>{
  it('Should exist',()=>{
      expect(CountDownForm).toExist();
  });
    
  it('should be called with',()=>{
     let spy = expect.createSpy();
     let countDownForm =TestUtils.renderIntoDocument(<CountDownForm onSetCount={spy}/>);
     let $countDownFormNode = $(ReactDOM.findDOMNode(countDownForm));
      countDownForm.refs.seconds.value ='62';
       TestUtils.Simulate.submit($countDownFormNode.find('form')[0]);
      expect(spy).toHaveBeenCalledWith(62);
  });
    it('should not be called with',()=>{
         let countForm = TestUtils.renderIntoDocument(<CountDownForm onSetCount={spy} />);
         let spy = expect.createSpy();
         let $el =$(ReactDOM.findDOMNode(countForm));
         countForm.refs.seconds.value = "hello";
         TestUtils.Simulate.submit($el.find('form')[0]);
         expect(spy).toNotHaveBeenCalled();
    });
});
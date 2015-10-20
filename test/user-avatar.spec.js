import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import UserAvatar from '../src/js/components/user-avatar';

describe('UserAvatar', () => {
  let component = null;
  
  beforeEach(() => {
    /* jshint ignore:start */
    component = TestUtils.renderIntoDocument(<UserAvatar picture="user01" />);
    /* jshint ignore:end */
  });

  it('should work', () => {
    expect(component).toBeTruthy();
  });

  it('should be a figure', () => {
    expect(ReactDOM.findDOMNode(component).tagName).toEqual('FIGURE');
  });

  it('should have a default className', () => {
    expect(ReactDOM.findDOMNode(component).className).toEqual('user__avatar');
  });

  it('should have a given className', () => {
    /* jshint ignore:start */
    component = TestUtils.renderIntoDocument(<UserAvatar picture="user01" className="givenClass"/>);
    /* jshint ignore:end */
    expect(ReactDOM.findDOMNode(component).className).toEqual('givenClass');
  });

  it('should have an img of user', () => {
    let domNode = TestUtils.findRenderedDOMComponentWithTag(component, 'img');
    expect(ReactDOM.findDOMNode(domNode).src).toEqual('http://fakeimg.pl/64x64/?text=user01');
  });

});

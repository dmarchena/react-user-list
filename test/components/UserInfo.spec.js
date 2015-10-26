import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import UserInfo from '../../src/js/components/UserInfo';

describe('UserInfo', () => {
  const user = {
    id: 1,
    fullname: 'Alex Gamarra',
    location: 'Vitoria-Gasteiz',
    picture: 'http://valid.url/to/a/img.jpg'
  };
  let component = null;

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<UserInfo user={user} />);
  });

  it('should work', () => {
    expect(component).toBeTruthy();
  });

  it('should be a section', () => {
    expect(ReactDOM.findDOMNode(component).tagName).toEqual('SECTION');
  });

  it('should have user\'s name', () => {
    const domNode = TestUtils.findRenderedDOMComponentWithClass(component, 'user_info__fullname');
    expect(ReactDOM.findDOMNode(domNode).textContent).toEqual(user.fullname);
  });

  it('should have user\'s city', () => {
    const domNode = TestUtils.findRenderedDOMComponentWithClass(component, 'user_info__location');
    expect(ReactDOM.findDOMNode(domNode).textContent).toEqual(user.location);
  });

  it('should have an img of user render by UserAvatar', () => {
    const domNode = TestUtils.findRenderedDOMComponentWithTag(component, 'img');
    expect(ReactDOM.findDOMNode(domNode).src).toEqual('http://valid.url/to/a/img.jpg');
  });
});

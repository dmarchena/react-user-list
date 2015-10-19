import React from 'react';
import ReactDOM from 'react/lib/ReactDOM';
import TestUtils from 'react/lib/ReactTestUtils';
import UserInfo from '../src/js/components/user-info';

describe('UserInfo', () => {
  const user = {
    id: 1,
    name: 'Alex Gamarra',
    city: 'Vitoria-Gasteiz'
  };
  let component = null,
      domNode = null;
  
  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<UserInfo user={user} />);
    domNode = null;
  })

  it('should be a section', () => {
    expect(ReactDOM.findDOMNode(component).tagName).toEqual('SECTION');
  });

  it('should have user\'s name', () => {
    domNode = TestUtils.findRenderedDOMComponentWithClass(component, 'user_info__name');
    expect(ReactDOM.findDOMNode(domNode).textContent).toEqual(user.name);
  });

  it('should have user\'s city', () => {
    domNode = TestUtils.findRenderedDOMComponentWithClass(component, 'user_info__city');
    expect(ReactDOM.findDOMNode(domNode).textContent).toEqual(user.city);
  });

  it('should have an img of user', () => {
    domNode = TestUtils.findRenderedDOMComponentWithTag(component, 'img');
    expect(ReactDOM.findDOMNode(domNode).src).toEqual('http://fakeimg.pl/64x64/?text=1');
  });

});

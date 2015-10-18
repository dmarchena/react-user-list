import React from 'react';
import ReactDOM from 'react/lib/ReactDOM';
import TestUtils from 'react/lib/ReactTestUtils';
import UserAvatar from '../src/components/user-avatar';
import UserInfo from '../src/components/user-info';

describe('UserAvatar', () => {
  var component = null;
  
  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<UserAvatar picture="user01" />);
  })

  it('should work', () => {
    //var component = <UserAvatar />;
    expect(component).toBeTruthy();
  });

  it('should be a figure', () => {
    expect(ReactDOM.findDOMNode(component).tagName).toEqual('FIGURE');
  });

  it('should have an img of user', () => {
    var img = TestUtils.findRenderedDOMComponentWithTag(component, 'img');
    expect(ReactDOM.findDOMNode(img).src).toEqual('http://fakeimg.pl/64x64/?text=user01');
  });

});

describe('UserAvatar', () => {
  var component = null,
      user = {
        id: 1,
        name: 'Alex Gamarra',
        city: 'Vitoria-Gasteiz'
      };
  
  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<UserInfo user={user} />);
  })

  it('should be a section', () => {
    expect(ReactDOM.findDOMNode(component).tagName).toEqual('SECTION');
  });

  it('should have user\'s name', () => {
    var domNode = TestUtils.findRenderedDOMComponentWithClass(component, 'user_info__name');
    expect(ReactDOM.findDOMNode(domNode).textContent).toEqual(user.name);
  });

  it('should have user\'s city', () => {
    var domNode = TestUtils.findRenderedDOMComponentWithClass(component, 'user_info__city');
    expect(ReactDOM.findDOMNode(domNode).textContent).toEqual(user.city);
  });

  it('should have an img of user', () => {
    var domNode = TestUtils.findRenderedDOMComponentWithTag(component, 'img');
    expect(ReactDOM.findDOMNode(domNode).src).toEqual('http://fakeimg.pl/64x64/?text=1');
  });

});

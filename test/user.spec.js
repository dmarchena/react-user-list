import React from 'react';
import ReactDOM from 'react/lib/ReactDOM';
import TestUtils from 'react/lib/ReactTestUtils';
import UserAvatar from '../src/components/user-avatar';

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

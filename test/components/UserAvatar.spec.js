import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import UserAvatar from '../../src/js/components/UserAvatar';

describe('UserAvatar', () => {
  const user = {
    id: 1,
    fullname: 'Alex Gamarra',
    location: 'Vitoria-Gasteiz',
    picture: 'http://valid.url/to/a/img.jpg'
  };

  /* jshint ignore:start */
  let component = TestUtils.renderIntoDocument(<UserAvatar user={user} />);
  /* jshint ignore:end */

  it('should work', () => {
    expect(component).toBeTruthy();
  });

  it('should have an img of user', () => {
    let domNode = TestUtils.findRenderedDOMComponentWithTag(component, 'img');
    expect(ReactDOM.findDOMNode(domNode).src).toEqual('http://valid.url/to/a/img.jpg');
  });

  it('should have a default className', () => {
    expect(ReactDOM.findDOMNode(component).className).toEqual('user__avatar');
  });

  it('should have a given className', () => {
    /* jshint ignore:start */
    component = TestUtils.renderIntoDocument(<UserAvatar user={user} className="givenClass"/>);
    /* jshint ignore:end */
    expect(ReactDOM.findDOMNode(component).className).toMatch(/givenClass/);
  });

  it('should show a placeholder if user has no avatar', () => {
    let userNoAvatar = {
      id: 1,
      fullname: 'Alex Gamarra',
      location: 'Vitoria-Gasteiz'
    };
    /* jshint ignore:start */
    component = TestUtils.renderIntoDocument(<UserAvatar user={userNoAvatar}/>);
    /* jshint ignore:end */
    let domNode = TestUtils.findRenderedDOMComponentWithTag(component, 'img');
    expect(ReactDOM.findDOMNode(domNode).src).toEqual('http://fakeimg.pl/64x64/?text=no%20photo');
  });

});

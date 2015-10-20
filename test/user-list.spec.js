import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import UserInfo from '../src/js/components/user-info';
import UserList from '../src/js/components/user-list';

describe('UserList', () => {
  const users = [
    {
      id: 1,
      name: 'Alex Gamarra',
      city: 'Vitoria-Gasteiz'
    },
    {
      id: 2,
      name: 'Cristina Martínez',
      city: 'Paris'
    },
    {
      id: 3,
      name: 'Aroa Bilbao',
      city: 'Mondragón'
    },
    {
      id: 4,
      name: 'Fidel Campos',
      city: 'Madrid'
    }
  ];

  let component = null,
      domNode = null;
  
  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<UserList users={users} />);
    domNode = null;
  })

  it('should be a list', () => {
    expect(ReactDOM.findDOMNode(component).tagName).toEqual('UL');
  });

  it('should print all given users', () => {
    domNode = TestUtils.scryRenderedComponentsWithType(component, UserInfo);
    expect(domNode.length).toEqual(4);
    domNode = TestUtils.scryRenderedDOMComponentsWithClass(component, 'user_info__name');
    users.forEach((user, index) => {
      expect(domNode[index].textContent).toEqual(user.name);
    });
  });

});

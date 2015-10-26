import React from 'react';
import TestUtils from 'react-addons-test-utils';
import UserInfo from '../../src/js/components/UserInfo';
import UserList from '../../src/js/components/UserList';

describe('UserList', () => {
  const users = [
    {
      id: 1,
      fullname: 'Alex Gamarra',
      location: 'Vitoria-Gasteiz'
    },
    {
      id: 2,
      fullname: 'Cristina Martínez',
      location: 'Paris'
    },
    {
      id: 3,
      fullname: 'Aroa Bilbao',
      location: 'Mondragón'
    },
    {
      id: 4,
      fullname: 'Fidel Campos',
      location: 'Madrid'
    }
  ];

  let component = null;

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<UserList users={users} />);
  });

  it('should work', () => {
    expect(component).toBeTruthy();
  });

  it('should print all given users', () => {
    let domNode = TestUtils.scryRenderedComponentsWithType(component, UserInfo);
    expect(domNode.length).toEqual(4);
    domNode = TestUtils.scryRenderedDOMComponentsWithClass(component, 'user_info__fullname');
    users.forEach((user, index) => {
      expect(domNode[index].textContent).toEqual(user.fullname);
    });
  });
});

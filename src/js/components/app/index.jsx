import config from '../../config.js';
import {parseResponseJson} from '../../helpers/random-user-api.js';
import React from 'react';
import UserList from '../user-list';

class UserApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = { users: [] }
  }

  componentWillMount() {
    fetch(config.rest.get.users.url)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ 
          users: parseResponseJson(responseData)
        });
      });
  }

  setUserData(fn) {
    return this.setState(({data}) => ({
      data: fn(data)
    }));
  }

  render() {
    if (this.state.users.length > 0) {
      let users = this.state.users;
      return <UserList users={users} />
    } else {
      return <p>Loading users</p>
    }
  }

}

export default UserApp;
import config from '../../config.js';
import React from 'react';
import UserList from '../user-list';

class UserApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = { users: [] }
  }

  componentWillMount() {
    fetch(`${config.server.url}:${config.server.port}/${config.get.users}`)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users: users });
      });
  }

  render() {
    if (this.state.users.length > 0) {
      return <UserList users={this.state.users} />
    } else {
      return <p>Loading users</p>
    }
  }

}

export default UserApp;
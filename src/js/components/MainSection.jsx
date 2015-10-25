import config from '../app.conf.js';
import {parseResponseJson} from '../helpers/random-user-api.js';
import React from 'react';
import UserList from './UserList';

class MainSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false, 
      users: [] 
    };
  }

  componentWillMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.setState({ 
      loading: true
    });
    fetch(config.rest.get.users.url)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ 
          loading: false,
          users: parseResponseJson(responseData)
        });
      });
  }

  render() {
    return (
      <section className="main">
        <h2 className="main__title">User list</h2>
        { 
          (this.state.loading) 
            ? <p>Loading users...</p>
            : <UserList users={this.state.users} />
        }
      </section>
    );
  }

}

export default MainSection;
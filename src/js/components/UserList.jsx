import React from 'react';
import UserInfo from './UserInfo';

class UserList extends React.Component {

  render() {
    let users = this.props.users || [];
    return(
      <ul className="user_list">
        {
          this.props.users.map((user) => {
            return (
              <li className="user_list__item" key={user.id}>
                <UserInfo user={user} className="user_list__user_info" />
              </li>
            )
          })
        }
      </ul>
    )
  }

}

export default UserList;
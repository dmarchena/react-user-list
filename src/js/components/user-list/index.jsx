import React from 'react';
import UserInfo from '../user-info';

class UserList extends React.Component {

  render() {
    let users = this.props.users || [];
    return(
      <ul className="user_list">
        {
          this.props.users.map((user) => {
            return <UserInfo key={user.id} user={user} className="user_list__user_info" />
          })
        }
      </ul>
    )
  }

}

export default UserList;
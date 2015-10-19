import React from 'react'; 
import UserAvatar from '../user-avatar';

class UserInfo extends React.Component {

  render() {
    let picture = this.props.user.id || 'unknown';
    return(
      <section className="user_info">
        <UserAvatar picture={picture} className="user_info__avatar" />
        <div className="user_info__body">
          <h4 className="user_info__name">{this.props.user.name}</h4>
          <p className="user_info__city">{this.props.user.city}</p>
        </div>
        <hr/>
      </section>
    )
  }

}

export default UserInfo;
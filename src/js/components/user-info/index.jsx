import React from 'react'; 
import UserAvatar from '../user-avatar';

class UserInfo extends React.Component {

  render() {
    let className = (this.props.className) ?
      `user_info ${this.props.className}` :
      'user_info';

    return (
      <section className={className}>
        <UserAvatar user={this.props.user} className="user_info__avatar" />
        <div className="user_info__body">
          <h1 className="user_info__fullname">{this.props.user.fullname}</h1>
          <p className="user_info__city">{this.props.user.city}</p>
        </div>
      </section>
    );
  }

}

export default UserInfo;
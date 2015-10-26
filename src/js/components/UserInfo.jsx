import React from 'react';
import UserAvatar from './UserAvatar';

class UserInfo extends React.Component {
  render() {
    const className = (this.props.className) ?
      `user_info ${this.props.className}` :
      'user_info';

    return (
      <section className={className}>
        <header>
          <h3 className="user_info__fullname">{this.props.user.fullname}</h3>
          <p className="user_info__location">{this.props.user.location}</p>
        </header>
        <UserAvatar user={this.props.user} className="user_info__avatar" />
      </section>
    );
  }
}

UserInfo.propTypes = {
  className: React.PropTypes.string,
  user: React.PropTypes.object.isRequired
};

export default UserInfo;

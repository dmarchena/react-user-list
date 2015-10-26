import React from 'react';

class UserAvatar extends React.Component {
  render() {
    const className = (this.props.className) ?
      `user__avatar ${this.props.className}` :
      'user__avatar';
    const picture = this.props.user.picture || 'http://fakeimg.pl/64x64/?text=no%20photo';
    return (
      <figure className={className}>
        <img src={picture} alt={this.props.user.fullname} />
      </figure>
    );
  }
}

UserAvatar.propTypes = {
  className: React.PropTypes.string,
  user: React.PropTypes.object.isRequired
};

export default UserAvatar;

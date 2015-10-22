import React from 'react';

class UserAvatar extends React.Component {  
  render() {
      let className = (this.props.className) ?
        `user__avatar ${this.props.className}` :
        'user__avatar';
      let picture = this.props.user.picture || 'http://fakeimg.pl/64x64/?text=no%20photo'
      return (
        <figure className={className}>
          <img src={picture}  alt={this.props.user.fullname} />
        </figure>
      )
  }
}

export default UserAvatar;
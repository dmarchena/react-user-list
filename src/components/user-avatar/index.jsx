import React from 'react';

class UserAvatar extends React.Component {  
  render() {
      let className = this.props.className || 'user__avatar';
      return (
        <figure className={className}>
          <img 
            width="64px" 
            src={`http://fakeimg.pl/64x64/?text=${this.props.picture}`} 
          />
        </figure>
      )
  }
}

export default UserAvatar;
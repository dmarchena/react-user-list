import React from 'react';

class UserAvatar extends React.Component {  
  render() {
      return (
        <figure className={`user__avatar ${this.props.className}`}>
          <img 
            height="64px"
            width="64px" 
            src={`http://fakeimg.pl/64x64/?text=${this.props.picture}`} 
          />
        </figure>
      )
  }
}

export default UserAvatar;
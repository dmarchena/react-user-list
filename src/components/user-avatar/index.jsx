import React from 'react'

class UserAvatar extends React.Component {  
  render() {
      return (
        <figure className="media-left">
          <img 
            width="64px" 
            src={`http://fakeimg.pl/64x64/?text=${this.props.picture}`} 
          />
        </figure>
      )
  }
}

export default UserAvatar
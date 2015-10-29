import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header id="header" className="header">
        <h1 className="header__title">React + ES6 example</h1>
        <a className="header__link" href="https://github.com/dmarchena/react-user-list" title="View source code on GitHub">View source code on GitHub</a>
      </header>
    );
  }
}

export default Header;

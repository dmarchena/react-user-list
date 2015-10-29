import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <p className="footer__developer">Developed by: <a href="http://twitter.com/dmarchena">@dmarchena</a></p>
        <p className="footer__thanks">Powered by: <a href="https://randomuser.me">Random User Generator API</a></p>
      </footer>
    );
  }
}

export default Footer;

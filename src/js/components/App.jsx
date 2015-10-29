import React from 'react';
import Footer from './Footer';
import Header from './Header';
import MainSection from './MainSection';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MainSection />
        <Footer />
      </div>
    );
  }
}

export default App;

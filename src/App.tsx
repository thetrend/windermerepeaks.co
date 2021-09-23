import React from 'react';
import { ReactComponent as Logo } from './img/logo.svg';

class App extends React.Component {
  render() {
    return <>
      <Logo className="coming-soon-svg" />
      <h1 className="coming-soon-text text-center">Opening<br />September 27</h1>
    </>;
  }
}

export default App;
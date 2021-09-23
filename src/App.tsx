import React from 'react';
import { ReactComponent as Logo } from './img/logo.svg';

class App extends React.Component {
  render() {
    return <>
      <Logo style={{height: '90vh'}} />
    </>;
  }
}

export default App;
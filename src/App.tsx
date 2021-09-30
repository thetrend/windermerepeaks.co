import React from 'react';
import { ReactComponent as Logo } from './img/logo.svg';

const App: React.FC = () => {
  return (
    <>
      <Logo className="coming-soon-svg" />
      <h1 className="coming-soon-text text-center">
        Opening
        <br />
        October 4
      </h1>
    </>
  );
};
export default App;

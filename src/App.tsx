import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import StoreFront from './components/StoreFront';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StoreFront} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

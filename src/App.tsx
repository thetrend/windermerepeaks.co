import { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import StoreHome from 'features/Store/StoreHome';

import AdminHome from 'features/Admin/AdminHome';

const App: FC = () => {
  return (
  <BrowserRouter>
    <Switch>
      {/* STORE ROUTES */}
      <Route exact path='/' component={StoreHome} />
      {/* ADMIN ROUTES */}
      <Route exact path='/admin' component={AdminHome} />
    </Switch>
  </BrowserRouter>
  );
};

export default App;
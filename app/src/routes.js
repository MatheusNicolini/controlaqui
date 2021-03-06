import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Providers from './pages/Providers';
import Products from './pages/Products';
import Salesmans from './pages/Salesmans';
import Sales from './pages/Sales';
import Cashs from './pages/Cashs';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Route path="/providers" exact component={Providers} />
      <Route path="/products" exact component={Products} />
      <Route path="/salesmans" exact component={Salesmans} />
      <Route path="/sales" exact component={Sales} />
      <Route path="/cashs" exact component={Cashs} />
    </Switch>
  );
}
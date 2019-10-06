import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RegisterConnector from '../modules/Register/RegisterConnector';
import App from '../App';

const routes: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/register" component={RegisterConnector} />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;

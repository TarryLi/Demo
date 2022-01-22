import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';

export default ({ routes = [] }) => {
  const switchRender = () => <Switch>
    {routes.map(({
      id, exact, path, component: Comp
    }) =>
      <Route
        key={id}
        exact={exact}
        path={path}
        render={(props) => {
          if (Comp) {
            return <Comp {...props} />;
          }
        }}
      />)}
  </Switch>;

  return <Layout route={switchRender()} />;
};

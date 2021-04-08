import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Spin } from 'antd';
import { RouteProps } from 'react-router';

const ProtectedRoute = ({ component, ...args }: RouteProps): JSX.Element => (
  <Route
    component={withAuthenticationRequired(component as React.ComponentType, {
      onRedirecting: () => <Spin />
    })}
    {...args}
  />
);

export default ProtectedRoute;

import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { Auth0ContextInterface } from '@auth0/auth0-react/src/auth0-context';

const AuthButton = ({
  logout,
  user
}: {
  logout: Auth0ContextInterface['logout'];
  user: Auth0ContextInterface['user'];
}): JSX.Element => {
  const menu = (
    <Menu>
      <Menu.Item
        onClick={() =>
          logout({
            returnTo: window.location.origin
          })
        }
        key="1">
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <Button>{user?.name ?? 'Noname'}</Button>
    </Dropdown>
  );
};

export default AuthButton;

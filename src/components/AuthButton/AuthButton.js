import React from 'react';
import { Menu, Dropdown, Button } from 'antd';

const AuthButton = ({ logout, user }) => {
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
    <Dropdown overlay={menu} trigger="click">
      <Button>{user?.name ?? 'Noname'}</Button>
    </Dropdown>
  );
};

export default AuthButton;

import React from 'react';
import { Row, Col, Typography, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const DropdownFilter = () => (
  <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()} role="button" tabIndex="0">
      Click me <DownOutlined />
    </a>
  </Dropdown>
);

export default DropdownFilter;

import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const DropdownFilter = ({ setKeyword }) => {
  const changeHandler = (event) => {
    console.log(event.key);
    setKeyword(event.key);
  };

  const menu = (
    <Menu onClick={changeHandler}>
      <Menu.Item key="Device">Devices</Menu.Item>
      <Menu.Item key="Date">Clicks</Menu.Item>
      <Menu.Item key="Country">Countries</Menu.Item>
      <Menu.Item key="Page">Pages</Menu.Item>
      <Menu.Item key="Query">Queries</Menu.Item>
      <Menu.Item key="Search Appearance">Appearance</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a
        className="ant-dropdown-link"
        onClick={(e) => e.preventDefault()}
        role="button"
        tabIndex="0">
        Filter By <DownOutlined />
      </a>
    </Dropdown>
  );
};

export default DropdownFilter;

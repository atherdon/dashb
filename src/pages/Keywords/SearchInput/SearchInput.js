import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchInput = ({ onSearch }) => (
  <>
    <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
  </>
);

export default SearchInput;

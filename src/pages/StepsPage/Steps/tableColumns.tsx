import React from 'react';
import { Tag, Checkbox } from 'antd';

export const columns = [
  {
    title: 'Draft url',
    dataIndex: 'Draft url',
    key: 'Draft url',
    render: (text: any) => <a href={text}>{text}</a>
  },
  {
    title: 'Column B',
    dataIndex: '',
    key: 'b'
  },
  {
    title: 'V',
    dataIndex: 'v',
    key: 'v'
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (email: any) => <a>{email}</a>
  },
  {
    title: 'Published',
    dataIndex: 'Published',
    key: 'published',
    render: (item: any) =>
      item && <Checkbox checked={item.toLowerCase() === 'true' ? true : false} />
  },
  {
    title: 'Added',
    dataIndex: 'Added',
    key: 'added'
  },
  {
    title: 'Editted',
    dataIndex: 'Editted',
    key: 'editted'
  },
  {
    title: 'Published',
    dataIndex: 'Published__1',
    key: 'Published__1',
    render: (item: any) => {
      item = item.toString().toUpperCase();
      const isRejected = item.includes('REJECTED');
      const value = isRejected ? item.replace('REJECTED', '').trim() : item;
      return (
        <>
          {isRejected && <Tag color="red">REJECTED</Tag>}
          {value}
        </>
      );
    }
  },
  {
    title: 'Avg time story',
    dataIndex: 'Avg time story',
    key: 'Avg time story'
  },
  {
    title: 'Avg time ALL story',
    dataIndex: 'Avg time ALL story',
    key: 'Avg time ALL story'
  }
];

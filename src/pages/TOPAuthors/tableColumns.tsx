import React from 'react';
import { Tag, Checkbox } from 'antd';

export const columns = [
  {
    title: 'Draft url',
    dataIndex: 'url',
    key: 'url',
    render: (text: any) => <a href={text}>{text}</a>
  },
  {
    title: 'Is Published',
    dataIndex: 'isPublished',
    key: 'isPublished',
    render: () => <Checkbox />
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (email: any) => <a>{email}</a>
  },
  {
    title: 'Updated',
    dataIndex: 'updated',
    key: 'updated'
  },
  // {
  //   title: 'Published',
  //   dataIndex: 'Published',
  //   key: 'published',
  //   render: (item: any) =>
  //     item && <Checkbox checked={item.toLowerCase() === 'true' ? true : false} />
  // },
  {
    title: 'Created',
    dataIndex: 'created',
    key: 'created'
  },
  {
    title: 'Edited',
    dataIndex: 'edited',
    key: 'edited'
  },
  {
    title: 'Published',
    dataIndex: 'published',
    key: 'published',
    render: (item: any) => {
      item = item ? item.toString().toUpperCase() : '';
      const isRejected = item.includes('REJECTED');
      const value = isRejected ? item.replace('REJECTED', '').trim() : item;

      return (
        value && (
          <>
            {isRejected && <Tag color="red">REJECTED</Tag>}
            {value}
          </>
        )
      );
    }
  },
  {
    title: 'Avg time story',
    dataIndex: 'avgTimeStory',
    key: 'avgTimeStory'
  },
  {
    title: 'Avg time ALL story',
    dataIndex: 'avgAllTimeStory',
    key: 'avgAllTimeStory'
  }
];

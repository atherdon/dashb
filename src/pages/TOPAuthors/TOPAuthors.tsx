import React from 'react';
import { Button, Checkbox, Dropdown, Menu, Spin } from 'antd';
import { ColumnsType } from 'antd/es/table';
import moment from 'moment';

import { topAuthorLinks } from "data/links/topAuthorLinks";
import { Table } from 'components';
import { TopAuthor } from 'models/gql';
import { useGetManyTopAuthorQuery } from 'models/gql';

const TOPAutors = () => {
  const { data, loading } = useGetManyTopAuthorQuery();

  const DATE_FORMAT = 'MM.DD.YYYY';
  const columns: ColumnsType<TopAuthor> = [
    {
      title: 'Draft url',
      dataIndex: 'url',
      key: 'url',
      render: (text) => <a href={text}>{text}</a>
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
      render: (email) => <a>{email}</a>
    },
    {
      title: 'Updated',
      dataIndex: 'updated',
      key: 'updated',
      render: (date) => moment(date).format(DATE_FORMAT)
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
      key: 'created',
      render: (date) => moment(date).format(DATE_FORMAT)
    },
    {
      title: 'Edited',
      dataIndex: 'edited',
      key: 'edited',
      render: (date) => moment(date).format(DATE_FORMAT)
    },
    {
      title: 'Published',
      dataIndex: 'published',
      key: 'published',
      render: (date) => {
        // item = item ? item.toString().toUpperCase() : '';
        // const isRejected = item.includes('REJECTED');
        // const value = isRejected ? item.replace('REJECTED', '').trim() : item;

        // return (
        //   value && (
        //     <>
        //       {isRejected && <Tag color="red">REJECTED</Tag>}
        //       {value}
        //     </>
        //   )
        // );
        return moment(date).format(DATE_FORMAT);
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
    },
    {
      title: '',
      dataIndex: 'rejected',
      key: 'rejected',
      render: () => (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="1">Rejected</Menu.Item>
            </Menu>
          }
          trigger={['click']}>
          <Button>Rejected</Button>
        </Dropdown>
      )
    }
  ];

  const dataSource = data?.getManyTopAuthor.map((item, index) => {
    return {
      key: item?.id,
      ...item,
      'Draft url': topAuthorLinks[index]
    };
  });

  return loading ? <Spin /> : <Table dataSource={dataSource} columns={columns} />;
};

export default TOPAutors;

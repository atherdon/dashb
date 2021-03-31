import React from 'react';

import { Table } from 'components';
import { ColumnsType } from 'antd/es/table';
import moment from 'moment';
import { Button, Dropdown, Menu, Spin } from 'antd';
import { Article } from 'models/gql';
import { useGetManyArticleQuery } from 'models/gql';

const Evergreen = () => {
  const { data, loading } = useGetManyArticleQuery({
    variables: {
      where: {
        type: 'topAuthors'
      }
    }
  });

  const DATE_FORMAT = 'MM.DD.YYYY';
  const columns: ColumnsType<Article> = [
    {
      title: 'Draft url',
      dataIndex: 'url',
      key: 'url',
      render: (text) => <a href={text}>{text}</a>
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (email) => <a>{email}</a>
    },
    // {
    //   title: 'Published',
    //   dataIndex: 'Published',
    //   key: 'published',
    //   render: (item: any) =>
    //     item && (
    //       <Tag color={item.toLowerCase() === 'true' ? 'green' : 'red'} key={item}>
    //         {item.toUpperCase()}
    //       </Tag>
    //     )
    // },
    {
      title: 'Created',
      dataIndex: 'created',
      key: 'created',
      render: (date) => moment(date).format(DATE_FORMAT)
    },
    {
      title: 'Updated',
      dataIndex: 'updated',
      key: 'updated',
      render: (date) => moment(date).format(DATE_FORMAT)
    },
    // {
    //   title: 'Published',
    //   dataIndex: 'Published__1',
    //   key: 'Published__1',
    //   render: (item: any) => {
    //     item = item.toString().toUpperCase();
    //     const isRejected = item.includes('REJECTED');
    //     const value = isRejected ? item.replace('REJECTED', '').trim() : item;
    //     return (
    //       <>
    //         {isRejected && <Tag color="red">REJECTED</Tag>}
    //         {value}
    //       </>
    //     );
    //   }
    // },
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

  const dataSource = data?.getManyArticle.items?.map((item) => {
    return {
      key: item?.id,
      ...item
    };
  });

  return loading ? <Spin /> : <Table dataSource={dataSource} columns={columns} />;
};

export default Evergreen;

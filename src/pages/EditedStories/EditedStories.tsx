import React from 'react';
import { Button, Checkbox, Dropdown, Menu, Spin } from 'antd';
import { ColumnsType } from 'antd/es/table';

import { Table } from 'components';
import { Article } from 'models/gql';
import { useGetManyArticleQuery } from 'models/gql';

const EditedStories = () => {
  const { data, loading } = useGetManyArticleQuery({
    variables: {
      where: {
        type: 'edited'
      }
    }
  });

  const columns: ColumnsType<Article> = [
    {
      title: 'Draft url',
      dataIndex: 'url',
      key: 'url',
      render: (_, row) => <a href={row.url}>{row.url}</a>
    },
    {
      title: 'V',
      dataIndex: 'v',
      key: 'v',
      render: () => <Checkbox />
    },
    {
      title: 'Is Published',
      dataIndex: 'isPublished',
      key: 'isPublished',
      render: () => <Checkbox />
    },
    // {
    //   title: 'Email',
    //   dataIndex: 'email',
    //   key: 'email',
    //   render: (_, row) => <a>{row.email}</a>
    // },
    {
      title: 'Edited',
      dataIndex: 'Edited',
      key: 'Edited',
      render: (_, row) => row.edited
    },
    // {
    //   title: 'Published',
    //   dataIndex: 'Published',
    //   key: 'published',
    //   render: (item: any) =>
    //     item && <Checkbox checked={item.toLowerCase() === 'true' ? true : false} />
    // },
    {
      title: 'Added',
      dataIndex: 'added',
      key: 'added',
      render: (_, row) => row.added
    },
    {
      title: 'Edited',
      dataIndex: 'edited',
      key: 'edited',
      render: (_, row) => row.edited
    },
    {
      title: 'Published',
      dataIndex: 'published',
      key: 'published',
      render: (_, row) => {
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
        return row.published;
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

  const dataSource = data?.getManyArticle.items?.map((item) => {
    return {
      key: item?.id,
      ...item
    };
  });

  return loading ? <Spin /> : <Table dataSource={dataSource} columns={columns} />;
};

export default EditedStories;

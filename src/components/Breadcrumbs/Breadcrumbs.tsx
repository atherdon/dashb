import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const StyledBreadcrumb = styled(Breadcrumb)`
  margin-bottom: 15px;
  font-size: 18px;
`;

export const Breadcrumbs = (): JSX.Element => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{url}</Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">
        <HomeOutlined style={{ fontSize: 18 }} />
      </Link>
    </Breadcrumb.Item>
  ].concat(extraBreadcrumbItems);

  return <StyledBreadcrumb>{breadcrumbItems}</StyledBreadcrumb>;
};

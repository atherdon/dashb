import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const DashboardLink = () => (
    <Link to="/">Dashboard</Link>
);

const ProgressBarLink = () => (
    <Link to="/progress-bar">Progress Bar</Link>
);

const ExpandedLink = () => (
    <Link to="/expanded">Expanded</Link>
);

export { DashboardLink, ProgressBarLink, ExpandedLink };
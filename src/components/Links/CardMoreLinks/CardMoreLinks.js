import React from 'react';
import { Link } from 'react-router-dom';

const TopAuthors = () => (
    <Link to="/top-authors">More</Link>
);

const Baa = () => (
    <Link to="/baa">More</Link>
);

const StepsPage = () => (
    <Link to="steps-page">More</Link>
);

const Keywords = () => (
    <Link to="keywords">More</Link>
);

export { TopAuthors, Baa, StepsPage, Keywords };
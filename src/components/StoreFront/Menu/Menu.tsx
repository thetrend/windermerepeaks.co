import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Header/header.module.less';

const Menu: React.FC = () => {
  const { SiteMenu } = styles;
  return (
    <ul className={SiteMenu}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Menu;

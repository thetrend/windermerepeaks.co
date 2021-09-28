import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from '../Header/header.module.less';

interface MenuProps {
  isToggled: boolean;
}

const Menu: React.FC<MenuProps> = ({ isToggled }: MenuProps) => {
  const { SiteMenu, ShowSiteMenu } = styles;
  return (
    <ul className={isToggled ? cn(SiteMenu, ShowSiteMenu) : SiteMenu}>
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

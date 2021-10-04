import { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './Menu.module.less';

interface MenuProps {
  isToggled: boolean;
};

interface SiteLink {
  title: string;
  url: string;
  display: boolean;
};

const Menu: FC<MenuProps> = ({ isToggled }: MenuProps) => {
  const { SiteMenu, ShowSiteMenu } = styles;
  
  const SiteLinks: SiteLink[] = [
    {
      title: 'Home',
      url: '/',
      display: true
    },
    {
      title: 'About',
      url: '/pages/about',
      display: true
    },
    {
      title: 'Contact',
      url: '/pages/contact',
      display: true
    }
  ];

  return (
    <ul className={isToggled ? cn(SiteMenu, ShowSiteMenu) : SiteMenu }>
      {SiteLinks.map((link: SiteLink, index: number) => {
        const key: number = index;
        return (
          <li key={key}>
            <Link to={link.url}>
              {link.title}
            </Link>
          </li>
        )
      })}
    </ul>
  );
}

export default Menu;
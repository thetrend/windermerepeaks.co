import { FC, useState } from 'react';

import Menu from './Menu';

import styles from './Header.module.less';

const Header: FC = () => {
  const { Header } = styles;

  const [navToggle, setNavToggle] = useState(false);

  const toggleMenu = () => setNavToggle(!navToggle);
  return (
    <div className={Header}>
      <div>TODO: Logo</div>
      <Menu isToggled={navToggle} />
    </div>
    );
};

export default Header;
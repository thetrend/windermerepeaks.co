import React from 'react';

import styles from './storefront.module.less';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Products from '../Products';

const StoreFront: React.FC = () => {
  const { StoreFrontTheme, BodyWrapper } = styles;
  return (
    <div className={StoreFrontTheme}>
      <div className={BodyWrapper}>
        <Header />
        <Main>
          <Products />
        </Main>
        <Footer />
      </div>
    </div>
  );
};

export default StoreFront;

import React from 'react';

import Header from './Header';
import Footer from './Footer';

import Products from '../Products';

import styles from './storefront.module.less';

const StoreFront: React.FC = () => {
  const { StoreFrontTheme, BodyWrapper, MainWrapper } = styles;
  return (
    <div className={StoreFrontTheme}>
      <div className={BodyWrapper}>
        <Header />
        <main className={MainWrapper}>
          <h1>Windermere Peaks Co.</h1>
          <p>Welcome to the world of sticker and cup sales!</p>
          <Products />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default StoreFront;

import { FC } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import styles from './StoreFront.module.less';

type Props = {
  children: React.ReactNode;
}

const StoreFront: FC<Props> = ({ children }: Props) => {
  const { ShopTheme, BodyWrapper } = styles;
  return (
    <div className={ShopTheme}>
      <div className={BodyWrapper}>
        <Header />
        <Main>
          {children}
        </Main>
        <Footer />
      </div>
    </div>
  );
};

export default StoreFront;
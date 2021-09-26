import React from 'react';
import styles from './main.module.less';

const Main: React.FC = ({ children }) => {
  const { MainWrapper } = styles;
  return <div className={MainWrapper}>{children}</div>;
};

export default Main;

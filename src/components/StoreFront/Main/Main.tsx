import { FC } from 'react';

import styles from './Main.module.less';

type Props = {
  children: React.ReactNode;
};

const Main: FC<Props> = ({ children }: Props) => {
  const { MainWrapper } = styles;
  return (
    <div className={MainWrapper}>
      {children}
    </div>
  );
};

export default Main;
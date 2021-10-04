import { FC } from 'react';

import styles from './Admin.module.less';

type Props = {
  children: React.ReactNode;
};

const Admin: FC<Props> = ({ children }: Props) => {
  const { AdminTheme, BodyWrapper } = styles;
  return (
    <div className={AdminTheme}>
      <div className={BodyWrapper}>
        {children}
      </div>
    </div>
  );
};

export default Admin;
import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.less';

const Footer: FC = () => {
  const { FooterWrapper, FooterMenu } = styles;
  interface FooterLinks {
    title: string;
    url: string;
    display: boolean;
  }

  const footerLinks: FooterLinks[] = [
    {
      title: 'Terms of Service',
      url: '/policies/terms-of-service',
      display: true,
    },
    {
      title: 'Privacy Policy',
      url: '/policies/privacy',
      display: true,
    },
    {
      title: 'Accessibility',
      url: '/policies/accessibility',
      display: true,
    },
  ];

  return (
    <footer className={FooterWrapper}>
      <p>
        &copy; {new Date().getFullYear()}, Windermere Peaks Co. Some rights reserved.
      </p>
      <ul className={FooterMenu}>
        {footerLinks.map((link: FooterLinks, index: number) => {
          const key: number = index;
          return (
            <li key={key}>
              <Link to={link.url}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
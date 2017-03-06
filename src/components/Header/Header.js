// @flow

import React from 'react';

import styles from './Header.css';

export type Props = {
  title: string,
};


const Header = ({ title, ...extraProps }: Props) => (
  <header
    role="banner"
    className={styles.root}
    {...extraProps}
  >
    <h1 className={styles.title}>
      {title}
    </h1>
  </header>
);


export default Header;

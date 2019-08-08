// @flow

import * as React from 'react';

import styles from './Header.css';

export type Props = {
  title: string,
  ...
};

function Header({ title, ...extraProps }: Props) {
  return (
    <header role="banner" className={styles.root} {...extraProps}>
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
}

export default Header;

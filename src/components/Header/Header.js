// @flow

import * as React from 'react';
import clsx from 'clsx';

import styles from './Header.css';

export type Props = {
  title: string,
  className?: string,
  ...
};

function Header({ title, className, ...extraProps }: Props) {
  return (
    <header
      role="banner"
      className={clsx(styles.root, className)}
      {...extraProps}
    >
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
}

export default Header;

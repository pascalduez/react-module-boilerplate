// @flow

import React, { PropTypes } from 'react';

import type { HeaderProps } from './Header.types';
import styles from './Header.css';


const Header = ({ title, ...extraProps }: HeaderProps) => (
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

Header.propTypes = {
  title: PropTypes.string.isRequired,
};


export default Header;

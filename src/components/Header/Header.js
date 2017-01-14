// @flow

import React, { PropTypes } from 'react';

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

Header.propTypes = {
  title: PropTypes.string.isRequired,
};


export default Header;

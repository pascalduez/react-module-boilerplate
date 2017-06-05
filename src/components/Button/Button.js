/* @flow */
/* eslint css-modules/no-unused-class: [2, { markAsUsed: ['primary', 'secondary', 'danger'] }] */

import React from 'react';
import type { Children } from 'react';
import classNames from 'classnames';

import styles from './Button.css';

export type Props = {
  children: Children,
  theme?: 'primary' | 'secondary' | 'danger',
  handleClick?: () => void,
};

function Button({
  children,
  theme = 'primary',
  handleClick,
  ...extraProps
}: Props) {
  return (
    <button
      className={classNames(styles.root, styles[theme])}
      onClick={handleClick}
      {...extraProps}
    >
      {children}
    </button>
  );
}

export default Button;

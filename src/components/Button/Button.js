/* @flow */
/* eslint css-modules/no-unused-class: [2, { markAsUsed: ['primary', 'secondary', 'danger'] }] */

import React, { type Node } from 'react';
import classNames from 'classnames';

import styles from './Button.css';

export type Props = {
  children: Node,
  theme?: 'primary' | 'secondary' | 'danger',
  handleClick?: (evt?: SyntheticEvent<HTMLButtonElement>) => void,
};

function Button({
  children,
  theme = 'primary',
  handleClick,
  ...extraProps
  // eslint-disable-next-line
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

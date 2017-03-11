// @flow
/* eslint css-modules/no-unused-class: [2, { markAsUsed: ['primary', 'secondary', 'danger'] }] */

import React from 'react';
import classNames from 'classnames';

import styles from './Button.css';

export type Props = {
  label: string,
  theme: 'primary' | 'secondary' | 'danger',
  handleClick?: () => void,
};


const Button = ({ label, theme, handleClick, ...extraProps }: Props) => (
  <button
    className={classNames(styles.root, styles[theme])}
    onClick={handleClick}
    {...extraProps}
  >
    {label}
  </button>
);

Button.defaultProps = {
  theme: 'primary',
};


export default Button;

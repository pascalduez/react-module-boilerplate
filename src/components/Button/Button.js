/* @flow */
/* eslint css-modules/no-unused-class: [2, { markAsUsed: ['primary', 'secondary', 'danger'] }] */
/* eslint react/default-props-match-prop-types: ['error', { 'allowRequiredDefaults': true }] */
/* eslint-disable react/button-has-type */

import * as React from 'react';
import clsx from 'clsx';

import styles from './Button.css';

export type Props = {
  children: React.Node,
  theme: 'primary' | 'secondary' | 'danger',
  type: 'submit' | 'button' | 'reset',
  handleClick?: (evt?: SyntheticEvent<HTMLButtonElement>) => void,
};

function Button({ children, theme, type, handleClick, ...extraProps }: Props) {
  return (
    <button
      className={clsx(styles.root, styles[theme])}
      onClick={handleClick}
      type={type}
      {...extraProps}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  theme: 'primary',
  type: 'submit',
};

export default Button;

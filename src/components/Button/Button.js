/* @flow */
/* eslint css-modules/no-unused-class: [2, { markAsUsed: ['primary', 'secondary', 'danger'] }] */
/* eslint react/default-props-match-prop-types: ['error', { 'allowRequiredDefaults': true }] */
/* eslint-disable react/button-has-type */

import * as React from 'react';
import clsx from 'clsx';

import styles from './Button.css';

export type Props = {
  children: React.Node,
  theme?: 'primary' | 'secondary' | 'danger',
  type?: 'submit' | 'button' | 'reset',
  onClick?: (evt?: SyntheticEvent<HTMLButtonElement>) => void,
};

function Button({
  children,
  theme = 'primary',
  type = 'submit',
  onClick,
  ...extraProps
}: Props) {
  return (
    <button
      className={clsx(styles.root, styles[theme])}
      onClick={onClick}
      type={type}
      {...extraProps}
    >
      {children}
    </button>
  );
}

export default Button;

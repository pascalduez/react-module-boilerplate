/* @flow */
/* eslint css-modules/no-unused-class: [2, { markAsUsed: ['primary', 'secondary', 'danger'] }] */
/* eslint react/default-props-match-prop-types: ['error', { 'allowRequiredDefaults': true }] */
/* eslint-disable react/button-has-type */

import * as React from 'react';
import clsx from 'clsx';

import styles from './Button.css';

export type Props = {|
  children: React.Node,
  theme?: 'primary' | 'secondary' | 'danger',
  type?: 'submit' | 'button' | 'reset',
  className?: string,
  onClick?: (evt: SyntheticEvent<HTMLButtonElement>) => mixed,
|};

function Button({
  theme = 'primary',
  type = 'submit',
  className,
  ...extraProps
}: Props) {
  return (
    <button
      type={type}
      className={clsx(styles.root, styles[theme], className)}
      {...extraProps}
    />
  );
}

export default Button;

// @flow
/* eslint css-modules/no-unused-class: [2, { markAsUsed: ['primary', 'secondary', 'danger'] }] */

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import type { ButtonProps } from './Button.type';
import styles from './Button.css';


const Button = ({ label, theme, handleClick, ...extraProps }: ButtonProps) => (
  <button
    className={classNames(styles.root, styles[theme])}
    onClick={handleClick}
    {...extraProps}
  >
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  theme: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  theme: 'primary',
};


export default Button;

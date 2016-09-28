// @flow

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import type { ButtonProps } from './Button.type';
import styles from './Button.css';


const Button = ({ label, theme, ...extraProps }: ButtonProps) => (
  <button
    className={classNames(styles.root, styles[theme])}
    {...extraProps}
  >
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  theme: PropTypes.string,
};

Button.defaultProps = {
  theme: 'primary',
};


export default Button;

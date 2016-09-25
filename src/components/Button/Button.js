// @flow

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import type { ButtonProps } from './Button.type';
import styles from './Button.css';


const Button = ({ label, type, ...extraProps }: ButtonProps) => (
  <button
    className={classNames(styles.root, styles[type])}
    {...extraProps}
  >
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'primary',
};


export default Button;

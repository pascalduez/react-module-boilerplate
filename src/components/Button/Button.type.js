/* eslint-disable import/prefer-default-export */

// @flow

export type ButtonProps = {
  label: string,
  theme?: 'primary' | 'secondary' | 'danger',
  handleClick?: () => void,
};

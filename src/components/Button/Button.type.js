// @flow

export type ButtonProps = {
  label: string,
  theme?: 'primary' | 'secondary' | 'danger',
  handleClick?: () => void,
};

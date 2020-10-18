// @flow

import * as React from 'react';

import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

export const primary = (): React.Node => <Button>Test</Button>;

export const secondary = (): React.Node => <Button theme="secondary">Test</Button>;

export const danger = (): React.Node => <Button theme="danger">Test</Button>;

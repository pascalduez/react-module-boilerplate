// @flow

import * as React from 'react';

import Button from './Button';

export default { title: 'Button' };

export const primary = () => <Button>Test</Button>;

export const secondary = () => <Button theme="secondary">Test</Button>;

export const danger = () => <Button theme="danger">Test</Button>;

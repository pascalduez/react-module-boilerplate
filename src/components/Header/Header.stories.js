// @flow

import * as React from 'react';

import Header from './Header';

export default {
  component: Header,
  title: 'Header',
};

export const text = (): React.Node => <Header title="Hello" />;

export const emoji = (): React.Node => <Header title="😀 😎" />;

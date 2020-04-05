// @flow

import * as React from 'react';

import Header from './Header';

export default {
  component: Header,
  title: 'Header',
};

export const text = () => <Header title="Hello" />;

export const emoji = () => <Header title="😀 😎" />;

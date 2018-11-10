// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';

import Header from './Header';

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .add('with text', () => <Header title={text('Title', 'Hello')} />)
  .add('with some emoji', () => <Header title="😀 😎" />);

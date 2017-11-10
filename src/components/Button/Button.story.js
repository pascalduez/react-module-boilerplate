// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { checkA11y } from 'storybook-addon-a11y';

import Button from './Button';

const themeOptions = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'danger',
};

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .add('label', () => <Button>{text('Label property', 'Hello')}</Button>)
  .add('theme property', () => (
    <Button theme={select('Theme property', themeOptions, 'primary')}>
      Hello
    </Button>
  ))
  .add('handleClick property', () => (
    <Button handleClick={action('Hello from click handler')}>Click me!</Button>
  ))
  .add(
    'Default usage',
    withInfo({
      text:
        'This is the default Button usage, just providing a label as children.',
      inline: true,
      propTables: [Button],
    })(() => <Button>Hello</Button>)
  );

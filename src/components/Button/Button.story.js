// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import Button from './Button';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

const themeOptions = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'danger',
};

stories
  .add('label', () => <Button>{text('Label property', 'Hello')}</Button>)
  .add('theme property', () =>
    <Button theme={select('Theme property', themeOptions, 'primary')}>
      Hello
    </Button>
  )
  .add('handleClick property', () =>
    <Button handleClick={action('Hello from click handler')}>
      Click me!
    </Button>
  )
  .addWithInfo(
    'Default usage',
    'This is the default `Button` usage, just providing a `label` as children.',
    () => <Button>Hello</Button>,
    { inline: true }
  );

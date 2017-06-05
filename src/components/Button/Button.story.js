// @flow

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs';

import Button from './Button';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

const themeOptions = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'danger',
};


stories
  .add('label property', () => (
    <Button label={text('Label property', 'Hello')} />
  ))
  .add('type property', () => (
    <Button
      theme={select('Theme property', themeOptions, 'primary')}
    >
      Hello
    </Button>
  ))
  .add('handleClick property', () => (
    <Button
      handleClick={action('Hello from click handler')}
    >
      Click me!
    </Button>
  ))
  .addWithInfo(
    'Default usage',
    'This is the default `Button` usage, just providing a `label` property.',
    () => (
      <Button>Hello</Button>
    ),
    { inline: true }
  );

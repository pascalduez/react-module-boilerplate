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
      label="Hello"
      theme={select('Theme property', themeOptions, 'primary')}
    />
  ))
  .add('handleClick property', () => (
    <Button
      label="Click me!"
      handleClick={action('Hello from click handler')}
    />
  ))
  .addWithInfo(
    'Default usage',
    'This is the default `Button` usage, just providing a `label` property.',
    () => (
      <Button label="Hello!" />
    ),
    { inline: true }
  );

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs';

import Button from './Button';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

const typeOptions = {
  primary: 'primary',
  secondary: 'secondary',
};


stories
  .add('label property', () => (
    <Button label={text('Label', 'Hello')} />
  ))
  .add('type property', () => (
    <Button
      label="Hello"
      type={select('Type', typeOptions, 'primary')}
    />
  ));

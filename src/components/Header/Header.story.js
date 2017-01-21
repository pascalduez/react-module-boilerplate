// @flow

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';

import Header from './Header';

const stories = storiesOf('Header', module);
stories.addDecorator(withKnobs);


stories
  .add('with text', () => (
    <Header title={text('Title', 'Hello')} />
  ))
  .add('with some emoji', () => (
    <Header title="😀 😎" />
  ));

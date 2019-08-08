import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withA11y } from '@storybook/addon-a11y';

import '../src/styles/variables.css';

addDecorator(
  withA11y,
  withOptions({
    name: 'React module boilerplate',
    addonPanelInRight: true,
    sidebarAnimations: true,
  })
);

configure(require.context('../src/components', true, /\.story\.js$/), module);

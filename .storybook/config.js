import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

import '../src/styles/variables.css';

addDecorator(
  withOptions({
    name: 'React module boilerplate',
    addonPanelInRight: true,
    sidebarAnimations: true,
  })
);

const req = require.context('../src/components', true, /.story.js$/);

configure(() => {
  req.keys().forEach(req);
}, module);

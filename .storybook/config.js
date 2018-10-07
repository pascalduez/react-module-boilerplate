import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import '../src/styles/variables.css';

setOptions({
  name: 'React module boilerplate',
  downPanelInRight: true,
  sidebarAnimations: true,
});

const req = require.context('../src/components', true, /.story.js$/);

configure(() => {
  req.keys().forEach(req);
}, module);

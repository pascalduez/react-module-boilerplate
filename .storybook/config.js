import { configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import infoAddon from '@storybook/addon-info';

setOptions({
  name: 'React module boilerplate',
  downPanelInRight: true,
  sidebarAnimations: true,
});

setAddon(infoAddon);

const req = require.context('../src/components', true, /.story.js$/);

configure(() => {
  req.keys().forEach(req);
}, module);

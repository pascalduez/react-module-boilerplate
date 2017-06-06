import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';

setAddon(infoAddon);

const req = require.context('../src/components', true, /.story.js$/);

configure(() => {
  req.keys().forEach(req);
}, module);

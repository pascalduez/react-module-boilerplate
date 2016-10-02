import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

// https://github.com/kadirahq/storyshots/issues/19
//
// const req = require.context('../src/components', true, /.story.js$/);
//
// configure(() => {
//   req.keys().forEach(req);
// }, module);

// https://github.com/kadirahq/react-storybook-addon-info/issues/105
setAddon(infoAddon);

configure(() => {
  require('../src/components/Button/Button.story.js');
  require('../src/components/Header/Header.story.js');
}, module);

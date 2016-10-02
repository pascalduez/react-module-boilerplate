import { configure } from '@kadira/storybook';

// https://github.com/kadirahq/storyshots/issues/19
//
// const req = require.context('../src/components', true, /.story.js$/);
//
// configure(() => {
//   req.keys().forEach(req);
// }, module);

configure(() => {
  require('../src/components/Button/Button.story.js');
  require('../src/components/Header/Header.story.js');
}, module);

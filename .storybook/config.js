import { configure } from '@kadira/storybook';

// Breaks with storyshots
//
// const req = require.context('../src/components', true, /.story.js$/);
//
// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }

function loadStories() {
  require('../src/components/Header/Header.story.js');
  require('../src/components/Button/Button.story.js');
}

configure(loadStories, module);

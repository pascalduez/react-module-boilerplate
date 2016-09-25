import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/components/Header/Header.story.js');
}

configure(loadStories, module);

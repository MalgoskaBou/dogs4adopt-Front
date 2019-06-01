import { configure } from '@storybook/react';

function loadStories() {
  const req = require.context('../src/Components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

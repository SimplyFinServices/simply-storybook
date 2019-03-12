import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';

function loadStories() {
  require('../src/stories');
}

// addParameters({ viewport: options });

configure(loadStories, module);

import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';

function loadStories() {
  require('../src/stories');
}

// Decorators
addDecorator((story, context) => withInfo('common info')(story)(context));
addDecorator(withKnobs);

configure(loadStories, module);

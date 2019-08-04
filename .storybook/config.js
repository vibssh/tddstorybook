import { addParameters, configure, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { themes } from '@storybook/theming';

const req = require.context('../src/stories/', true, /\.story\.js$/);

addParameters({
  options: {
    theme: themes.normal,
    showPanel: true,
  }  
})

setAddon(JSXAddon);


function loadStories() {
  const array = req.keys();
  const items = array.sort();
  items.forEach(filename => req(filename));
}

configure(loadStories, module);
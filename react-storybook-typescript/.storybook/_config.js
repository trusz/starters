import { configure, addDecorator } from '@storybook/react';
// import { themeDecorator } from './theme-decorator';

const reqComponents = require.context('../src/components', true, /.stories.tsx$/);
const reqViews = require.context('../src/views', true, /.stories.tsx$/);
const reqApps = require.context('../src/apps', true, /.stories.tsx$/);


// addDecorator(themeDecorator);

function loadStories() {
    reqComponents.keys().forEach(reqComponents);
    reqViews.keys().forEach(reqViews);
    reqApps.keys().forEach(reqApps);
}
configure(loadStories, module);


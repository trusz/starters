import { configure, addDecorator } from '@storybook/react';
// import { themeDecorator } from './theme-decorator';

// const reqStyleGuide = require.context('../src/style-guide', true, /.stories.tsx$/);
// const reqComponents = require.context('../src/components', true, /.stories.tsx$/);
// const reqViews = require.context('../src/views', true, /.stories.tsx$/);
const allStories = require.context('../src', true, /.stories.tsx$/)

// addDecorator(themeDecorator);

function loadStories() {

    allStories.keys().forEach(allStories);
    //   reqStyleGuide.keys().forEach(reqStyleGuide);
    //   reqComponents.keys().forEach(reqComponents);
    //   reqViews.keys().forEach(reqViews);
}
configure(loadStories, module);

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from "./button"

export const componentName = 'Button';

storiesOf("components" + '|' + componentName, module)
    .add("story 1", () => (
        <Button onClick={() => alert("check out story 2")} />
    ))
    .add("story 2", () => (
        <Button onClick={() => alert("thank you")} />
    ));
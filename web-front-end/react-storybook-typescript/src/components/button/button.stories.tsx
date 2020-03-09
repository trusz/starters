
import * as React from 'react';
import { Button } from "./button"

export default {
    component: Button,
    title: 'Components | Button',
};

export const text = () => <Button>Hello, Button!</Button>;

export const nameExample = () => <Button>Story name example</Button>
nameExample.story = {
    name: "This is how you can rename a story"
}

export const emoji = () => (
    <Button>
        <span role="img" aria-label="so cool">
            😀 😎 👍 💯
      </span>
    </Button>
);

export const TestOnClick = () => {

    const [text, setText] = React.useState("not clicked")

    return (
        <div>
            <Button
                onClick={() => setText("clicked")}
                a11y-id="button">
                Click to set text
                </Button>
            <div id="text-target">{text}</div>
        </div>
    )
}

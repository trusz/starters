import * as React from 'react'

export function Button(props: Props) {
    return <button onClick={props.onClick} >Hi I am a button</button>
}

interface Props {
    onClick(): void
}
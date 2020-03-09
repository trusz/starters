import * as React from 'react'

export function Button(props: React.PropsWithChildren<Props>) {

    const {
        onClick = noopOnClick,
        children,
    } = props;

    return <button onClick={onClick} >
        {children}
    </button>
}

interface Props {
    onClick?: () => void
}

function noopOnClick() { }

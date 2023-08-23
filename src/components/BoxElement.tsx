import React from 'react'

type BoxElementProps = {
    styles: React.CSSProperties
}

export default function BoxElement(props: BoxElementProps) {
    return (
        <>
            <div style={props.styles}>
                This is Box Element
            </div>
        </>
    )
}

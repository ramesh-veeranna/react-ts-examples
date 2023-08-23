import React from 'react'
type HeadingProps = {
    children: React.ReactNode
}

export default function Heading(props: HeadingProps) {
    return (
        <>
            {props.children}
        </>
    )
}

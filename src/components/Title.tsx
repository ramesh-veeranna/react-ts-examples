import React from 'react'

type TitleProps = {
    name: string
}

export default function Title(props: TitleProps) {
    return (
        <>
            <h2>{props.name}</h2>
            <hr />
        </>
    )
}

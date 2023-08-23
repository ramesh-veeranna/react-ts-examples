import React from 'react'

type InputTextTwoProps = {
    value: string
}

export default function InputTextTwo(props: InputTextTwoProps) {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }

    return (
        <>
            <input type='text' className='form-control my-4' placeholder='Type Something' value={props.value} onChange={handleInputChange} />
        </>
    )
}

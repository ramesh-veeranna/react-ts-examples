import React from 'react'

type InputTextProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

// export default function InputText() {
// this is same as above 
export const InputText = (props: InputTextProps) => {
    return (
        <>
            <input type='text' className='form-control my-4' placeholder='Type Something' value={props.value} onChange={props.handleChange} />
        </>
    )
}

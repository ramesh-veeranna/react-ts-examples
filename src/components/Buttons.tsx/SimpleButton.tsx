type ButtonProps = {
    handleClick: () => void
}

export default function SimpleButton(props: ButtonProps) {
    return (
        <>
            <button onClick={props.handleClick} className="btn btn-primary px-4">Click me!</button>
        </>
    )
}

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export default function EventButton(props: ButtonProps) {
    return (
        <>
            <button onClick={(event) => props.handleClick(event, 117)} className="btn btn-success mx-2 px-4">Click me!</button>
        </>
    )
}

import { PersonProps } from "./Types/Person"

export default function Person(props: PersonProps) {
    return (
        <div>
            <h4>{props.name.first} {props.name.last}</h4>
        </div>
    )
}

import { Name } from "./Types/Person"

type PersonListProps = {
    names: Name[]
}

export default function PersonList(props: PersonListProps) {
  return (
    <div>
        {props.names.map(name => {
            return (
                <h4 key={name.first}>{name.first} {name.last}</h4>
            )
        })}      
    </div>
  )
}

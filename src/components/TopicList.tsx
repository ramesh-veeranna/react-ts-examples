import React from 'react'

type TopicListProps = {
    data: {
        _id:number,
        name: string,
        coveredPercentage: number,
        topicId: number,
        isCompleted: boolean
    }[]
}

export default function TopicList(props: TopicListProps) {
    return (
        <>
            <ul className="list-group">
                {
                    props.data.map((item) => {
                        return (
                            <li className="list-group-item list-group-item-action" key={item._id}>{item.topicId}. {item.name} - {item.coveredPercentage}% -- Completed: { item.isCompleted ? 'Yes' : 'No' } </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

import React from 'react'

type NotificationsProps = {
    title: string,
    count?: number,
    isRead: boolean,
    status: 'Completed' | 'Inprogress' | 'Yet to Start' | 'Not yet started',
    type: 'success' | 'primary' | 'danger' | 'warning'
}

export default function Notifications(props: NotificationsProps) {

    const { count = 0 } = props 
    // setting default value as 0, if count value was not passed
    
    return (
        <>
            <p className={'alert alert-' + props.type} >
                Welcome team,
                You have started the  <strong>{props.title}</strong> course and covered with <strong>{count}</strong> topics yet.
                -- <strong>{props.status} : {props.isRead ? `Yup` : `Nope`}</strong>
            </p>
        </>
    )
}

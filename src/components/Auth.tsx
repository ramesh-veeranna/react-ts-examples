import { useState } from 'react'

type UserProps = {
    name: string,
    email: string
}

export default function Auth() {

    const [user, setUser] = useState<UserProps | null>(null) 
    // by default we're initially assigning null and we set the type as UserProps or null (<UserProps | null>)

    // const [user, setUser] = useState<UserProps>({} as UserProps) 
    // we can set empty object of UserProps 

    const handleLogin = () => {
        setUser({
            name: 'Ramesh Veeranna',
            email: 'ramesh.veeranna@qburst.com'
        })
    }

    const handleLogout = () => {
        setUser(null)
    }

    return (
        <>
            <button onClick={handleLogin} className='btn btn-primary px-4'>Login</button>
            <button onClick={handleLogout} className='btn btn-danger px-4 mx-2'>Logout</button>

            <hr />

            <p>
                Logged In User Details <br /> 
                User: {user?.name} <br />
                Email: {user?.email}
            </p>
        </>
    )
}

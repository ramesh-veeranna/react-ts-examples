import { useState } from 'react'

export default function LoggedIn() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    return (
        <>
            <button onClick={handleLogin} className='btn btn-primary px-4'>Login</button>
            <button onClick={handleLogout} className='btn btn-danger px-4 mx-2'>Logout</button>

            <hr />
            <p>User is <strong>{isLoggedIn ? 'logged in' : 'logged out'}</strong></p>
        </>
    )
}

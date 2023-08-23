import React from 'react'
import { Link } from 'react-router-dom'

type NavbarProps = {
    logo: string
}

export default function Navbar(props: NavbarProps) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
                <a className="navbar-brand" href="#">
                    <img src={props.logo} style={{height: '50px'}} />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="/">
                            Home <span className="sr-only">(current)</span>
                        </Link>
                        <Link className="nav-item nav-link" to="/features">
                            Features
                        </Link>
                        <Link className="nav-item nav-link" to="/pricings">
                            Pricing
                        </Link>
                        <Link className="nav-item nav-link disabled" to="/">
                            Disabled
                        </Link>
                    </div>
                </div>
            </nav>

        </>
    )
}

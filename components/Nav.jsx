import React from 'react'
import {Route, Link} from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <h2>
                Navigation principale
            </h2>
            <Link to='/'>
                Home
            </Link>
            <Link to='./user'>
                My profile
            </Link>
        </nav>
    )
}

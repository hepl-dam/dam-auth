import React, {Fragment, useContext}  from 'react'
import firebase from '../firebaseConfig'

// On importe le contexte
import {AuthContext} from '../AuthContext'

export default function Home() {

    const [currentUser] = useContext(AuthContext);

    return (
        <Fragment>
            <h1 aria-level="1" role="heading">
                Homepage
            </h1>
            <p>
                Welcome to the Home of many !
            </p>
            <button onClick={() => firebase.auth().signOut()}> 
                Sign Out
            </button>
            
        </Fragment>
    )
}
